DROP DATABASE IF EXISTS college_db;
CREATE DATABASE college_db;

USE college_db;
  CREATE TABLE dept_ed_api(
  id INT AUTO_INCREMENT NOT NULL,
  name_of_data_element VARCHAR(255),
  dev_year VARCHAR(255) DEFAULT "latest",
  dev_cat VARCHAR(255),
  dev_name VARCHAR(255),
  api_data_type VARCHAR(255),
  primary key(id)
);
