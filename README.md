# User-form
<p align="center">
  <h3 align="center">A form for collecting user information, and display the information</h3>

  <p align="center">
    User Registration, User List and Detail page.
    <br />
    <a href="https://github.com/libinthomas33/User-form.git"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/libinthomas33/User-form/issues">Report Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Simple Node.JS project where a user can register and able to view the registered users.

Here's why:
* Project that demonstrates the implementation of user registration
* List all the users which are saved in database
* Detail page where we list all the saved details of the user.



### Built With

The project is built using Node.js, Express.js Framework, Mongodb.
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Jest - Javascript Testing Framework](https://jestjs.io/)



<!-- GETTING STARTED -->
## Getting Started

Follow the below instructions for setting up the project locally.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/libinthomas33/User-form.git
   ```
2. cd User-form
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create .env file and fill the DB credentials.
   ```JS
    MONGO_HOST='ENTER YOUR MONGO HOST URL'
    MONGO_PORT='ENTER YOUR MONGO PORT'
    MONGO_DBNAME='ENTER YOUR MONGO DATABASE NAME'
    DEBUG_MODE=true
   ```
NB: DEBUG_MODE value should be changed to false, while going production or Testing API's using Jest
5. Install NPM packages
   ```sh
   npm start
   ```
6. For Testing API's, follow the below steps:-
    ```sh
        npm install --save-dev jest
        npm install --save-dev supertest
    ```
    Add the below script to the package.json file
    ```JS 
        "scripts": {
            "test": "jest"
        }
    ```
    ```sh
        npm run test
    ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/libinthomas33/User-form/issues) for a list of proposed features (and known issues).
