# Descope Angular App

This project demonstrates how to integrate the Descope authentication service into an Angular application. This application includes a login screen using Descope Web Component, a user dashboard to display user information, and a navigation bar that dynamically adjusts based on the user's authentication state.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Issue Reporting](#issue-reporting)

## Features

* **Descope Login**: Users can login with their Descope credentials.
* **User Dashboard**: After logging in, users are redirected to a dashboard which displays their information fetched using the Descope SDK.
* **Navbar**: A navigation bar that includes a login/logout button, which adjusts its display based on whether a user is logged in or not.
## Installation

1. Clone the repository:
```bash
git clone https://github.com/YourUsername/descope-angular-app.git
```

2. Install dependencies:
```bash
cd descope-angular-app
npm install
```

3. Setup environment variables:

    * Create a `environment.ts` file at the root of the project.
    * Fill in the variable `descopeProjectId` with your Project ID from [Project Settings](https://app.descope.com/settings/project) in the Console.
    
    ```javascript
    export const environment = {
        production: false,
        descopeProjectId: "<Descope Project ID>",
    };
    ```

## Running the Application

To start the application, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

## Issue Reporting

This project is a simple demonstration of integrating Descope into an Angular application. For any issues or suggestions, feel free to open an issue in the GitHub repository. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.