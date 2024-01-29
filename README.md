<img width="1400" alt="Monosnap Github Profile Header Generator 2023-07-20 23-09-34" src="https://github.com/descope-sample-apps/angular-webjs-sample-app/assets/32936811/e4452fcf-e566-4795-bb56-2e677aa8bcf0">

---

This sample app demonstrates how to integrate the Descope authentication service into an Angular application. This application includes a login screen using Descope Web Component, a user dashboard to display user information and a navigation bar that dynamically adjusts based on the user's authentication state.

## Table of Contents 📝

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Issue Reporting](#issue-reporting)

## Features ✨

* **Descope Login**: Users can login with their Descope credentials.
* **User Dashboard**: After logging in, users are redirected to a dashboard which displays their information fetched using the Descope SDK.
* **Navbar**: A navigation bar that includes a login/logout button, which adjusts its display based on whether a user is logged in or not.

## Installation 💿

> **Note:** If you don't already have the Angular CLI, install it before you follow the rest of the guide. You can do so with the following command: `npm install -g @angular/cli`

1. Clone the repository:
```bash
git clone git@github.com:descope-sample-apps/angular-webjs-sample-app.git
```

2. Install dependencies:
```bash
cd descope-angular-app
npm install
```

3. Setup environment variables:

* Use the `environment.ts.example` file, located in `/src/environments/environment.ts.example`, and change the name to `environment.ts`.

* Fill in the variable `descopeProjectId` with your Project ID from [Project Settings](https://app.descope.com/settings/project) in the Console.
    
```javascript
export const environment = {
    production: false,
    descopeProjectId: "<Descope Project ID>",
};
```

## Running the Application 🚀

To start the application, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

## Issue Reporting ⚠️

This project is a simple demonstration of integrating Descope into an Angular application. For any issues or suggestions, feel free to open an issue in the GitHub repository. 

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
