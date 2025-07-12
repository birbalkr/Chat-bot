# Gemini ChatBot (Frontend)

This is the **React frontend** for the multi-model AI chatbot powered by **Gemini**, **ChatGPT**, and **DeepSeek**.

It connects to a **Spring Boot backend** and offers a simple UI to interact with multiple AI models via APIs.

---

## 🚀 Features

- Clean **React** interface
- Connects to **Gemini** / **ChatGPT** / **DeepSeek** APIs
- Fast local dev setup with **Vite**
- Easy environment variable support
- **Dockerized** setup for both frontend and backend

---

## 🚀 Recent Commits

Here are the last 5 commits made to this project:

1. **[Commit ID 1]** - Updated frontend UI and fixed CSS issues.
2. **[Commit ID 2]** - Refactored backend API code and improved performance.
3. **[Commit ID 3]** - Added Docker support for local development and CI/CD pipelines.
4. **[Commit ID 4]** - Fixed bug in user authentication and token handling.
5. **[Commit ID 5]** - Initial commit with base React app and project setup.

To see the full history of commits, run `git log` or visit the [GitHub repository](https://github.com/yourusername/gemini-chatbot-frontend).

---

## 📦 Requirements

- **Node.js** `v18+`
- **npm** `v9+` or **yarn**
- **Docker** (for containerization)
- **Backend API (Spring Boot)** running at `http://localhost:8088` (default)

---

## 🐳 Docker Setup (Use Docker to Run Frontend & Backend Locally)

If you want to run both the **React frontend** and **Spring Boot backend** using **Docker** without manually setting up the environment, follow these steps:

### 1. **Install Docker**

Make sure Docker is installed on your system. If you haven't installed Docker yet, follow the instructions for your operating system:

- **Windows**: [Install Docker Desktop](https://docs.docker.com/docker-for-windows/install/)
- **macOS**: [Install Docker Desktop](https://docs.docker.com/docker-for-mac/install/)
- **Linux**: [Install Docker Engine](https://docs.docker.com/engine/install/)

After installing Docker, open a terminal and check the installation by running:

```bash
docker --version
```

### Login to Docker Hub

Before pulling Docker images from Docker Hub, you need to log in to your Docker Hub account. Run the following command:

```bash
docker login
```

### Pull Docker Images

To get the pre-built images for both frontend and backend, you can pull them from Docker Hub (assuming you've already pushed your images there). Run the following commands:

```bash
docker pull codeadmin870/chat-bot:02
```

### Run Docker Containers

To run the containers locally, use the following commands. We'll expose the frontend on port 5173 and the backend on port 8088.

```bash
docker run -p 8080:8080 codeadmin870/chat-bot:02
```

---

### Key Sections:

1. **Install Docker**: Provides clear instructions on how to install Docker on different operating systems.
2. **Login to Docker Hub**: Describes the login process to Docker Hub before pulling images.
3. **Pull Docker Images**: Explains how to pull pre-built Docker images from Docker Hub.
4. **Run Docker Containers**: Shows how to run both the frontend and backend in Docker containers, mapping the required ports.
5. **Stop Containers**: Provides commands for stopping running containers once done.
6. **Project Setup**: Alternative method for running the project locally without Docker.
7. **Troubleshooting**: Includes common errors and fixes like CORS issues and API not found.
