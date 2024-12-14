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
# Copier le fichier JAR généré depuis l'étape précédente
COPY --from=builder /app/target/demo-0.0.1-SNAPSHOT.jar app.jar
# Exposer le port utilisé par Spring Boot
EXPOSE 8080
# Commande pour exécuter l'application
ENTRYPOINT ["java", "-jar", "app.jar"]

