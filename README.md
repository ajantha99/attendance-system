# Attendance System

This project is an imaginary school system for managing student attendance. It is built using React for the frontend and Spring Boot for the backend.

## Table of Content

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- Project Structure
- Technologies Used
- Setup and Installation
- Usage
- API Endpoints
- Login Credentials
- Screenshots

## Project Structure

[Documentation](https://linktodocumentation)

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

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## API Endpoints

#### Login

- URL: /api/login

- Method: POST

Payload:

Response:

## Screenshots

- Login Screen
  ![App Screenshot](https://github.com/ajantha99/attendance-system/blob/d7e1bff393e998c38a67d6038ce69a2871160af0/docs/%234%20Login-Page.jpg)



# Task Assessment

This project is part of the practical assessment for the Software Engineer Internship, built with React and Material-UI for the frontend, and Spring Boot with JWT authentication for the backend.

This backend system is built on Spring Boot with version 3.3.0, utilizing Java version 17. Authentication and authorization are handled using JSON Web Token (JWT) with version 0.11.2 of the jjwt-api library. On the frontend, React is employed with version 18.3.1. These technologies ensure robustness, security, and scalability for the system.

<h2> Getting Started </h2>
Ensure you have the following installed on your system:
<ul>
<li> Java 17 or later </li>
<li> Node.js </li>
<li> npm (Node Package Manager)</li>
</ul>

<h3>Setting Up the Server</h3>

<h3>Setting Up the Client </h3>
<ol>
 <li>Navigate to the client directory: </li>
 <li> Install dependencies and start the client application:</ol> <ol> <li>npm install</li> <li>npm start</li> </li>
</ol>

<h2>Login Credentials</h2>
For testing purposes, use the following login credentials:
<ul> <li>Username: Ajanthini Password: password</li>
<li> Username: user2 Password: password2 </li></ul>

<h2>Project Features</h2>

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

<h3>Screenshots</h3>
Screenshots of the application are available in the docs directory:
<ul>
 <li>login.png: Screenshot of the login page.</li>
<li>dashboard.png: Screenshot of the dashboard page.</li>
</ul>

<h3>Usage</h3>
<ol>
 <li> Open the login page at http://localhost:3000. </li>
 <li> Enter the provided credentials and log in. </li>
 <li> On successful login, you will be redirected to the dashboard. </li>
 <li> Use the logout button to log out. </li>
</ol>
