# Étape 1 : Construction du projet avec Maven
FROM maven:3.9.4-eclipse-temurin-17 AS builder
WORKDIR /app

# Copier le fichier pom.xml pour télécharger les dépendances
COPY pom.xml ./
RUN mvn dependency:go-offline

# Copier le code source et construire le projet
COPY src ./src
RUN mvn clean package -DskipTests

# Étape 2 : Image pour exécuter l'application
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# ----- (1) On copie le script 'wait-for-it.sh' dans l'image -----
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Copier le jar Spring Boot généré lors de la 1ère étape
COPY --from=builder /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Exposer le port utilisé par Spring Boot
EXPOSE 8080

# ----- (2) On modifie l'ENTRYPOINT pour attendre MySQL avant Java -----
ENTRYPOINT ["/wait-for-it.sh", "mysql_master:3306", "--timeout=60", "--strict", "--", "java", "-jar", "app.jar"]

