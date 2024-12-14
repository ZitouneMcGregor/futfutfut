#!/usr/bin/env bash
#   Use this script to test if a given TCP host/port are available
#
#   Source: https://github.com/vishnubob/wait-for-it

set -e

HOST="$1"
shift
PORT="$1"
shift

timeout=15
strict=false
child=0

usage()
{
    echo "Usage: wait-for-it.sh host port [options] -- command args"
    echo "Options:"
    echo "  -s | --strict               Only execute subcommand if the test succeeds"
    echo "  -t TIMEOUT | --timeout=TIMEOUT"
    echo "                              Timeout in seconds, zero for no timeout"
    echo "  -- COMMAND ARGS             Execute command with args after the test finishes"
    exit 1
}

wait_for()
{
    if [ "$timeout" -gt 0 ]; then
        echo "Waiting $timeout seconds for $HOST:$PORT"
    else
        echo "Waiting for $HOST:$PORT without a timeout"
    fi
    start_ts=$(date +%s)
    while :
    do
        if nc -z "$HOST" "$PORT" >/dev/null 2>&1; then
            end_ts=$(date +%s)
            echo "$HOST:$PORT is available after $(( end_ts - start_ts )) seconds"
            break
        fi
        sleep 1
        current_ts=$(date +%s)
        if [ "$timeout" -ne 0 ] && [ $(( current_ts - start_ts )) -ge "$timeout" ]; then
            echo "Timeout reached while waiting for $HOST:$PORT"
            if [ "$strict" = true ]; then
                exit 1
            else
                break
            fi
        fi
    done
}

wait_for_wrapper()
{
    # In order to support SIGINT during timeout: http://unix.stackexchange.com/a/57692
    if [ 0 -eq 1 ]; then
        cat <<
EOF
            Usage: $0 host port [-s] [-t timeout] [-- command args]
            -s | --strict Only execute subcommand if the test succeeds
            -t TIMEOUT | --timeout=TIMEOUT Timeout in seconds, zero for no timeout
            -- COMMAND ARGS Execute command with args after the test finishes
EOF
    fi

    if [ "$#" -lt 2 ]; then
        usage
    fi

    while [ $# -gt 0 ]
    do
        case "$1" in
            *:* )
            hostport=(${1//:/ })
            HOST=${hostport[0]}
            PORT=${hostport[1]}
            shift 1
            ;;
            -s | --strict)
            strict=true
            shift 1
            ;;
            -t)
            timeout="$2"
            if [ "$timeout" = "" ]; then
                break
            fi
            shift 2
            ;;
            --timeout=*)
            timeout="${1#*=}"
            shift 1
            ;;
            --)
            shift
            break
            ;;
            *)
            echo "Unknown argument: $1"
            usage
            ;;
        esac
    done

    if [ "$HOST" = "" ] || [ "$PORT" = "" ]; then
        echo "Error: you need to provide a host and port to test."
        usage
    fi

    wait_for
    if [ $# -gt 0 ]; then
        exec "$@"
    else
        exit 0
    fi
}

wait_for_wrapper "$@"

