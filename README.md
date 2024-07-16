
---

# AutoGenius

<p align="center">
  <a href="https://github.com/rajesh-adk-137/autogenius" target="blank">
    <img src="https://img.shields.io/github/watchers/rajesh-adk-137/autogenius?style=for-the-badge&logo=appveyor" alt="Watchers"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/autogenius/fork" target="blank">
    <img src="https://img.shields.io/github/forks/rajesh-adk-137/autogenius?style=for-the-badge&logo=appveyor" alt="Forks"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/autogenius/stargazers" target="blank">
    <img src="https://img.shields.io/github/stars/rajesh-adk-137/autogenius?style=for-the-badge&logo=appveyor" alt="Star"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/rajesh-adk-137/autogenius/issues" target="blank">
    <img src="https://img.shields.io/github/issues/rajesh-adk-137/autogenius?style=for-the-badge&logo=appveyor" alt="Issues"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/autogenius/pulls" target="blank">
    <img src="https://img.shields.io/github/issues-pr/rajesh-adk-137/autogenius?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/rajesh-adk-137/autogenius/blob/master/LICENSE" target="blank">
    <img src="https://img.shields.io/github/license/rajesh-adk-137/autogenius?style=for-the-badge&logo=appveyor" alt="License" />
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
- [Additional Guidance](#additional-guidance)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)




## Overview

**AutoGenius** is an intelligent platform that leverages MindsDB to predict pre-owned car prices and provide personalized trading tips. The project integrates a React frontend with a FastAPI backend, utilizing Docker-containerized MindsDB for machine learning capabilities.

**Key components include:**
- A price prediction model trained on a preprocessed Kaggle dataset using MindsDB's Lightwood engine.
- A chatbot powered by Google's Gemini engine for providing personalized trading advice.
- A user-friendly web interface for inputting car details and receiving predictions and tips.
- A FastAPI backend that interfaces with the MindsDB Docker instance to process requests and deliver responses.

This project showcases the integration of modern web technologies with AI and machine learning to create a practical tool for the automotive trading market.

## Key Features

- **Car Price Prediction**: Utilizes a custom-trained MindsDB model to predict pre-owned car prices based on multiple parameters including fuel type, transmission, title status, mileage, accident history, brand, and years used.
- **AI-Powered Trading Tips**: Implements a chatbot using Google's Gemini engine to provide personalized buying and selling advice based on comprehensive car details.
- **User-Friendly Interface**: Offers an intuitive and visually appealing React-based frontend for seamless user interaction.
- **Real-time AI Integration**: Leverages FastAPI to make real-time queries to the MindsDB server, ensuring up-to-date predictions and advice.
- **Data Preprocessing Pipeline**: Includes a sophisticated data cleaning and preprocessing workflow to prepare the Kaggle dataset for model training.
- **Docker Integration**: Utilizes Docker for easy setup and management of the MindsDB environment, ensuring consistency across different systems.
- **Scalable Architecture**: Designed with a separation of concerns, allowing for easy scaling and maintenance of frontend, backend, and AI components independently.


## Technologies Used

- **Frontend**: React
- **Backend**: FastAPI
- **Database**: MySQL
- **Machine Learning**:  MindsDB (with Lightwood engine for prediction and Google Gemini engine for chatbot)
- **Containerization**: Docker

## Getting Started

To get started with AutoGenius, follow the instructions below to set up both the frontend and backend.

## Installation

### Clone the Repository

```bash
git clone https://github.com/rajesh-adk-137/autogenius.git
```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd autogenius/frontend
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
     cd autogenius/backend
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



5. **Run Setup Commands**:


   - Follow the instructions in `MINDSDB_MODEL_SETUP.md` to create and configure the MindsDB models and predictors.


4. After completing model setup in mindsdb docker run the FastAPI backend:

   ```bash
   uvicorn main:app --reload
   ```







## Additional Guidance

1. Access the frontend application by opening your browser and navigating to [http://localhost:5173](http://localhost:5173).
2. For the backend, make sure Docker containers are running and accessible.
3. Follow the readme inside the database folder to setup the mysql database using the used_cars_db_dump.sql file.
4. Follow the steps in `MINDSDB_MODEL_SETUP.md` to create and manage predictive models in MindsDB, ensure the database server is running at port 3306.
5. Run the fastapi backend.
6. To use the chatbot feature powered by Google's Gemini engine, you need to get gemini api key.


## Demo

[Click here to watch the demo video](https://github.com/user-attachments/assets/f7c97892-3716-4d7c-a327-151c3a3d26cf)


## Screenshots
 Landing page
![landing_page](https://github.com/user-attachments/assets/fa5d2334-1111-458c-b880-6cccf6c9ac19)
 FAQ section
![FAQ section](https://github.com/user-attachments/assets/16989621-05b1-47a9-a02c-ff284044b404)
 About Page
![about_page](https://github.com/user-attachments/assets/65162e72-607a-4e1a-8914-f2c7c4df9fd5)
 Form 
![form](https://github.com/user-attachments/assets/557c5382-021a-4ae8-9abf-972da3412e44)
 Response
![response](https://github.com/user-attachments/assets/7b7496b0-a18e-45c6-a348-9b857ae7b505)

Database
![Database](https://github.com/user-attachments/assets/25c6d31d-d5a5-457c-abd7-db0a470203e2)



Mindsdb Server -Prediction Model
![Prediction Model](https://github.com/user-attachments/assets/449db70d-1909-4a58-9802-b28c87487182)

Mindsdb Server -Chatbot Model- Using google_gemini_engine
![Chatbot](https://github.com/user-attachments/assets/f3995892-dced-4c0f-b6b9-41c64a5c1cc6)



## Contributing

Contributions are always welcomed! If you'd like to contribute, please follow these steps:

1. **Fork the repository**
2. **Create your feature branch**:

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your changes**:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [MindsDB](https://mindsdb.com/) for machine learning
- [React](https://reactjs.org/) for the frontend framework
- [FastAPI](https://fastapi.tiangolo.com/) for the backend framework
- [Docker](https://www.docker.com/) for containerization
- [MySQL](https://www.mysql.com/) for the database

---