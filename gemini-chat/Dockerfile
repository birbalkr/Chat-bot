# Use Java 21 base image
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

# Set default environment variables (can be overridden at runtime)
ENV GEMINI_API_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="
ENV GEMINI_API_KEY="AIzaSyDEjH4ENgDx4KJGAnQq2I3lqbuSYF2KKQE"

ENTRYPOINT ["java", "-jar", "app.jar"]
