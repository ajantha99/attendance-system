# Task Assessment

This project is part of the practical assessment for the Software Engineer Internship, built with React and Material-UI for the frontend, and Spring Boot with JWT authentication for the backend.

This backend system is built on Spring Boot with version 3.3.0, utilizing Java version 17. Authentication and authorization are handled using JSON Web Token (JWT) with version 0.11.2 of the jjwt-api library. On the frontend, React is employed with version 18.3.1. These technologies ensure robustness, security, and scalability for the system.

## Table of Content

- [Tech Stack](https://github.com/ajantha99/attendance-system/blob/main/README.md#tech-stack) 
- [Setup and Installation](https://github.com/ajantha99/attendance-system/blob/main/README.md#setup-and-installation)
- [Usage](https://github.com/ajantha99/attendance-system/blob/main/README.md#usage)
- [Screenshots](https://github.com/ajantha99/attendance-system/blob/main/README.md#screenshots)

## Tech Stack

**Client:** React, MaterialUI

**Server:** Springboot

## Setup and Installation

### Prerequisites

- React
- MaterialUI
- Springboot
- Java (JDK 17 or higher)
- Maven

### Backend (Spring Boot)

1.Navigate to the server directory:

```bash
cd attendance-system/server
```

2.Build and run the Spring Boot application:

```bash
mvn clean install
mvn spring-boot:run
```

### Frontend (React)

1.Navigate to the client directory:

```bash
cd attendance-system/client
```

2.Install the dependencies:

```bash
npm install
```

3.Run the React application:

```bash
npm start
```

## Usage

### Login

1.  Open your web browser and go to http://localhost:3000.
2.  Enter the username and password provided in the Login Credentials section.

| Username  | Password  |
| --------- | --------- |
| Ajanthini | password  |
| user2     | password2 |

3.  Click the "Login" button to access the home page

### Home Page

1.  After a successful login, you will be redirected to the home page.
2.  The home page will display a welcome message and a logout button.

## Features

<h3>Backend</h3>
Built with Spring Boot.
<ul>
 <li> REST API for handling login requests. </li>
 <li> JWT tokens for authentication. </li>
 <li> User data is stored in a HashMap for simplicity. </li>
</ul>

<h3>Frontend</h3>
Built with React.
<ul>
 <li> Login page with username and password fields. </li>
 <li> The home page displays a welcome message and a logout button. </li>
 <li> Navigation and authentication handling. </li>
</ul>


## Screenshots

- Login Screen
  ![App Screenshot](https://github.com/ajantha99/attendance-system/blob/d7e1bff393e998c38a67d6038ce69a2871160af0/docs/%234%20Login-Page.jpg)

- Dashboard
  ![App Screenshort](https://github.com/ajantha99/attendance-system/blob/a678c82db0d05fc68e496530d31ad273a7bba31c/docs/%236%20Dashboard.jpg)



