CHANGE REPLICATION SOURCE TO
    SOURCE_HOST='mysql_master',
    SOURCE_USER='replicator',
    SOURCE_PASSWORD='replicator_password',
    SOURCE_LOG_FILE='mysql-bin.000001',
    SOURCE_LOG_POS=4;
START REPLICA;

