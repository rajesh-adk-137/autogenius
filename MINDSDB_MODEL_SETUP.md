
---
# Reference for replicating the models used in mindsdb

## Database Setup

1. follow the readme in the database folder in this repo for more comprehensive guide to database setup or just continue, this too shall work if you have mysql installed.

2. **Create the MySQL Database**

   If you haven't done so already, create the `used_cars_db` database using the following command:

   ```bash
   mysql -u root -p -e "CREATE DATABASE used_cars_db;"
   ```

3. **Import the Database Dump**

   Navigate to the directory containing the `used_cars_db_dump.sql` file and run (download this file from database folder first):

   ```bash
   mysql -u root -p used_cars_db < used_cars_db_dump.sql
   ```

   This will import the database dump into `used_cars_db`.

---

## MindsDB Configuration

### 1. **Create ML Engine**

   Create the ML engine with Google Gemini using the following command:

   ```sql
   CREATE ML_ENGINE google_gemini_engine
   FROM google_gemini
   USING google_gemini_api_key = 'your_gemini_api_key';
   ```

   **Note:** Replace `'your_gemini_api_key'` with your actual Google Gemini API key.

### 2. **Create Model**

   Define and create the model with the following command:

   ```sql
   CREATE MODEL google_gemini_model
   PREDICT answer
   USING engine = 'google_gemini_engine',
   column = 'question',
   model_name = 'gemini-1.5-pro';
   ```

   **To Drop the Model**

   If you need to drop the model, use:

   ```sql
   DROP MODEL google_gemini_model;
   ```

### 3. **Reference Query for Model**

   Use the following query to get tips from the model:

   ```sql
   SELECT question, answer
   FROM google_gemini_model
   WHERE question = 'Provide a useful tip to this person who is trying to sell or perhaps buy a car with the following details {{}}, make it about 4 to 5 sentences long';
   ```

---

## Car Price Prediction

### 1. **Create Project and Connect to MySQL Database**

   Create a new project and connect to the MySQL database(follow the database setup guide above if you haven't):

   ```sql
   CREATE PROJECT car_price_analysis;

   CREATE DATABASE mysql_conn
   WITH ENGINE = 'mysql',
   PARAMETERS = {
       "host": "host.docker.internal", -- Use this if you are running Docker locally
       "port": 3306,
       "database": "used_cars_db", --the repository you created earlier during database setup
       "user": "root",
       "password": "root"  -- By default, this is set as ""  (no password)
   };

   SELECT * FROM mysql_conn.used_cars LIMIT 10;
   ```

### 2. **Train the Model for Car Price Prediction**

   Train the predictor model with the following command:

   ```sql
   CREATE PREDICTOR car_price_prediction
   FROM mysql_conn
   (SELECT fuel_type, transmission, clean_title, mileage, accident, brand, years_used, price FROM used_cars LIMIT 4009)
   PREDICT price;
   ```

   **To Drop the Predictor**

   If you need to drop the predictor, use:

   ```sql
   DROP PREDICTOR car_price_prediction;
   ```

   **To Drop the Database Connection**

   If you need to drop the database connection, use:

   ```sql
   DROP DATABASE mysql_conn;
   ```

### 3. **Reference Query for Price Prediction**

   Use the following query to predict car prices:

   ```sql
   SELECT fuel_type, transmission, clean_title, mileage, accident, brand, price
   FROM car_price_prediction
   WHERE years_used = 11
   AND fuel_type = 'Hybrid'
   AND transmission = 'Automatic'
   AND clean_title = 0
   AND accident = 0
   AND brand = 'BMW'
   AND mileage = 2233;
   ```

---
```
