
---

# Database Folder

This database folder contains the necessary files to restore the `used_cars_db` MySQL database.

## Files

- **`used_cars_db_dump.sql`**: SQL dump file containing the schema and data for the `used_cars_db` database.
- **`README.md`**: This file, providing instructions on how to restore the database.

## Prerequisites

1. **MySQL Installation:**
   - Ensure MySQL is installed on your machine. You can download and install it from [MySQL’s official website](https://dev.mysql.com/downloads/installer/).

2. **Database Dump File:**
   - Make sure the `used_cars_db_dump.sql` file is located in a directory you can easily access.First download it from here.

## Restoring the Database

To restore the `used_cars_db` database from the SQL dump file, follow these steps:

1. **Open Command Line Interface (CLI):**
   - Use Command Prompt on Windows or Terminal on macOS/Linux.

2. **Create the Database:**
   - To create the `used_cars_db` database, you can either use the MySQL CLI or execute the command directly from your command line.

   - **Using MySQL CLI:**
     - Start the MySQL command-line tool:

       ```bash
       mysql -u root -p
       ```

     - Enter the MySQL root password when prompted.

     - Run the following SQL command to create the database:

       ```sql
       CREATE DATABASE used_cars_db;
       ```

     - Exit the MySQL CLI:

       ```sql
       exit
       ```

   - **Directly from Command Line:**
     - You can also create the database directly from your command line without entering the MySQL CLI:

       ```bash
       mysql -u root -p -e "CREATE DATABASE used_cars_db;"
       ```

     - Enter the MySQL root password when prompted.

3. **Import the SQL Dump File:**
   - Navigate to the directory containing the `used_cars_db_dump.sql` file:

     ```bash
     cd path\to\database\
     ```

   - Import the SQL dump file into the `used_cars_db` database:

     ```bash
     mysql -u root -p used_cars_db < used_cars_db_dump.sql
     ```

   - Enter the MySQL root password when prompted.

## Notes

- Ensure the MySQL server is running before attempting to restore the database.
- If the `used_cars_db` database already exists, you might need to drop it first or import into a different database name.
- After succesfully setting up the database you can follow the MINDSDB_MODEL_SETUP guide for creating models.


## Acknowledgments
 This data is sourced from kaggle and preprocessed for training the model in mindsdb.
- [Data Original Source](https://www.kaggle.com/datasets/taeefnajib/used-car-price-prediction-dataset)


---

