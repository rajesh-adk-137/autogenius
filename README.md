
---

# Car Price Predictor

<p align="center">
  <a href="https://github.com/rajesh-adk-137/sellcar" target="blank">
    <img src="https://img.shields.io/github/watchers/rajesh-adk-137/sellcar?style=for-the-badge&logo=appveyor" alt="Watchers"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/sellcar/fork" target="blank">
    <img src="https://img.shields.io/github/forks/rajesh-adk-137/sellcar?style=for-the-badge&logo=appveyor" alt="Forks"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/sellcar/stargazers" target="blank">
    <img src="https://img.shields.io/github/stars/rajesh-adk-137/sellcar?style=for-the-badge&logo=appveyor" alt="Star"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/rajesh-adk-137/sellcar/issues" target="blank">
    <img src="https://img.shields.io/github/issues/rajesh-adk-137/sellcar?style=for-the-badge&logo=appveyor" alt="Issues"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/sellcar/pulls" target="blank">
    <img src="https://img.shields.io/github/issues-pr/rajesh-adk-137/sellcar?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/rajesh-adk-137/sellcar/blob/master/LICENSE" target="blank">
    <img src="https://img.shields.io/github/license/rajesh-adk-137/sellcar?style=for-the-badge&logo=appveyor" alt="License" />
  </a>
</p>

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

The Car Price Predictor project utilizes MindsDB to predict car prices based on various features. The frontend is built with React, and the backend is powered by FastAPI. Docker is used to manage the MindsDB instance.

## Key Features

- **Car Price Prediction**: Predicts car prices using a trained model.
- **MindsDB Integration**: Uses MindsDB to create and manage predictive models.
- **Docker Integration**: Utilizes Docker for MindsDB environment setup.

## Technologies Used

- **Frontend**: React
- **Backend**: FastAPI
- **Database**: MySQL
- **Machine Learning**: MindsDB
- **Containerization**: Docker

## Getting Started

To get started with the Car Price Predictor, follow the instructions below to set up both the frontend and backend.

## Installation

### Clone the Repository

```bash
git clone https://github.com/rajesh-adk-137/sellcar.git
```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd sellcar/frontend
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

### Backend Setup

1. **Create a Virtual Environment** (recommended):

   - Install virtualenv:

     ```bash
     pip install virtualenv
     ```

   - Create a virtual environment:

     ```bash
     virtualenv venv
     ```

   - Activate the virtual environment:
     - On Windows:

       ```bash
       venv\Scripts\activate
       ```

     - On macOS and Linux:

       ```bash
       source venv/bin/activate
       ```

2. **Install Dependencies**:

   - Navigate to the backend directory:

     ```bash
     cd sellcar/backend
     ```

   - Install dependencies from `requirements.txt`:

     ```bash
     pip install -r requirements.txt
     ```

3. **Run Docker for MindsDB**:

   - Start MindsDB Docker containers:

     ```bash
     docker-compose up -d
     ```

   - MindsDB will be accessible at [http://127.0.0.1:47334](http://127.0.0.1:47334).

4. **Run Setup Commands**:

   - Follow the instructions in `` to create and configure the MindsDB models and predictors. Ensure that the MySQL database is restored using the provided SQL dump file before running these commands.

## Usage

1. Access the frontend application by opening your browser and navigating to [http://localhost:5173](http://localhost:5173).
2. For the backend, make sure Docker containers are running and accessible.
3. Follow the steps in `MINDSDB_MODEL_SETUP.md` to create and manage predictive models in MindsDB.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [MindsDB](https://www.mindsdb.com/) for machine learning integration
- [React](https://reactjs.org/) for the frontend framework
- [FastAPI](https://fastapi.tiangolo.com/) for the backend framework
- [Docker](https://www.docker.com/) for containerization
- [MySQL](https://www.mysql.com/) for the database

---

