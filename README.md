# Project Setup Guide
# Follow these steps to efficiently set up the project on your development environment.


# Installation

- Begin by navigating to the root directory of the project using your terminal.
- Run the following command to install the necessary dependencies:
- npm install

# Configuration

- Create a `.env` file in the root directory of the project. This file will hold your environment-specific configurations.
- Open the `.env-sample` file and replicate its contents into the newly created `.env` file. Adjust the values as needed for your environment.

# Running the Project

- To start the project, execute the following command:
- npm run start

# Additional Information

- During the development of this project, the following libraries were incorporated to enhance productivity:

- axios: A versatile library for making HTTP requests, streamlining communication with servers.
- lodash: A utility library that optimizes array, string, and object manipulation, saving development time.
- react-router-dom: A fundamental library for implementing navigation and routing in React applications.
- prop-types: A type-checking library for ensuring the correctness of props passed to React components.
- react-feather: An icon library that provides a collection of customizable icons for seamless integration into React projects.


# Testing the application

- I have written test cases for testing the Card component and the SearchBox component.
- Both the test cases are present under `src\components\__tests__` location.
- To run the test case, run this command - `npm run test`
- Then select option `a` which will run all the test cases.
