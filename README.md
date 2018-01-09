# Movie Application

The Movie Application provides the user with the details of Forthcoming & currently Trending movies. Each movie is displayed as a Card containing all the details of the movie
like the Movie Title, Movie Poster, Rating, Release date, Movie Description, etc. 

The user can also recommend a movie by clicking on the recommend button, upon which the movie will be added to the recommended list of the user and the card will be displayed 
in the Recommended Movies section on the MyRecommendation page. Also, the Recommendations section of the Dashboard page will be populated with the recommended movies on the line of 
the selected movie

The user can also search for a movie by its name under the Search section of the MyRecommendations page.

## Building, deploying and Running the complete application



### Prerequisites of deploying the application

The Movie application requires MySql Server running on the localhost at port 3306

The root folder of the project contains 2 script files for windows(`env-variables.ps1`) & unix(`env-variables.sh`). According to the host OS, respective file needs to be updated 
with the MySQL DataBase Name, The user ID and the Password.


### Building and running application

Ths instructions for building and deploying the application in dev and prod modes are given below :

#### Running on Development server

Following instructions are given for running the app in Developement mode : 

##### Running backend APIs

- Unix Host

Run `npm run spring-boot:run` on project root. This will call the `env-variables.sh` script to set the MySql related environment variables and build/start the 
backend Rest services at port 8080 on Tomcat server.

- Windows Host

  Run `npm run spring-boot:runwin` on project root. This will call the `env-variables.ps1` powershell script to set the MySql related environment variables and build/start the 
backend Rest services at port 8080 on Tomcat server.

##### Running Angular App

Run `npm start` for a dev server This builds and runs the UI(Angular part of the application) on node server with the proxy configuration, routing api calls to 8080 port 
in order to avoid cross domain ajax calls security restriction. Navigate to `http://localhost:4200/` to use the app. 

#### Running on Prod server using Tomcat at port 8080

1. Run `npm run spring-boot:package` on project root. This will build the Angular project with Prod flag and place the webpack bundles inside the static resources folder 
of the SpringBoot project 'Server'

2. Run `mvn clean package` on the project root. This will build the Server component and create a SpringBoot jar.

3. Run `java -jar .\Server\target\Server-1.0.jar --MYSQL_DATABASE="<dbname>" --MYSQL_USER="<username>" --MYSQL_PASSWORD="<password>"` on project root. 
This will execute the jar and run the SpringBoot app on tomcat server at port 8080

4. Navigate to http://localhost:8080/ on the browser to use the App.

## Running lint

Run `npm run lint` to check linting errors.(https://eslint.org/).

## Running unit tests

Run `npm run test` to executeangular test cases [Karma] 

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


