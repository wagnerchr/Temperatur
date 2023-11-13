# Temperatur

This project is part of the requirements for the conclusion of the Web 2 discipline in the 6th semester of the Analysis and System Development course at IFSP - Caraguatatuba.

## Overview 
The main focus of this project is a meteorological station application. Users can input a city, and the application will display its current temperature.

## Dependencies to Run the Project
- Docker or Postgres installed
- NodeJS installed
- npm or yarn installed
- Have an API url from Weatherstack

## Installation
1. Clone this repository:
   `git clone https://github.com/wagnerchr/Temperatur`
2. Install npm dependencies:
   `npm install` or `yarn dev`
3. Build and Run Docker container:
   `docker-compose up --build -d`
4. Run Prisma migrations:
   `npx prisma migrate dev` 
