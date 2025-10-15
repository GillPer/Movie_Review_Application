# 🎬 Full Stack Movie Review Application

This project is a **comprehensive full-stack application** designed to manage and display movie reviews. It demonstrates the integration of a **Java Spring Boot** backend, a **React** single-page application (SPA) frontend, and a **MongoDB** NoSQL database.

The architecture follows a standard **client-server model**, where the React frontend communicates with the Spring Boot REST API, which in turn interacts with the MongoDB database.

---

## 🌟 Key Features

- 🎥 **Movie Display** – View a list of all available movies, featuring a dynamic Hero section for highlighted titles. 
- 🧾 **Detailed Movie View** – Clicking on a movie navigates to a details page that shows metadata such as title, release date, and poster.  
- ✍️ **Review Submission** – Registered or simulated users can submit new reviews for specific movies.  
- 💬 **Review Display** – Existing reviews are dynamically retrieved and displayed on the movie details page.  
- 🔗 **API Management** – The backend handles creation and retrieval of movies and reviews through dedicated REST endpoints.  

---

## 🛠️ Technology Stack

| Component | Technology | Description |
|------------|-------------|-------------|
| **Backend** | **Java Spring Boot** | Creates a robust and scalable RESTful API. Handles business logic, security, and database communication. |
| **Frontend** | **React** | Builds a dynamic and responsive single-page user interface. |
| **Database** | **MongoDB** | A NoSQL document-based database used to store movie details and reviews. |

> This combination is often referred to as the **JSM stack** (Java, Spring Boot, MongoDB) or conceptually similar to the MERN stack.

---

## 🧩 Backend (Java Spring Boot)

- **Framework:** Spring Boot with Spring Web for RESTful API development.  
- **Data Access:** Spring Data MongoDB for seamless CRUD operations.  
- **Architecture:** Includes service and repository layers to separate business logic from data access.  
- **Endpoints:**
  - `GET /api/v1/movies` → Fetch all movies  
  - `GET /api/v1/movies/{id}` → Fetch a single movie by IMDb ID or unique identifier  
  - `POST /api/v1/reviews` → Add a new review  

---

## 💻 Frontend (React)

- **Library:** React (SPA)  
- **Styling:** Custom CSS or UI library (e.g., Bootstrap, Material UI).  
- **Data Fetching:** Uses `fetch` or `axios` for asynchronous HTTP requests to the Spring Boot API.  
- **Routing:** React Router manages navigation between Home and Movie Detail pages.  
- **UI Features:**
  - Hero carousel for featured movies  
  - Responsive layouts for posters and movie cards  
  - Dynamic rendering of reviews  

---

## 🗄️ Database (MongoDB)

- **Type:** NoSQL Document Database  
- **Collections:**
  - **Movies:** Stores JSON documents containing movie details such as title, poster, and metadata.  
  - **Reviews:** Stores user reviews, linked to their respective movies via reference fields (e.g., IMDb ID).  
- **Benefits:**  
  - Flexible schema allows for diverse movie metadata  
  - Easy to scale and manage review associations  

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 🚀 Architecture Overview

```text
React (Frontend)  <----->  Spring Boot (REST API)  <----->  MongoDB (Database)
        │                          │                            │
        └─── Handles UI & Routes ──┼─── Manages Logic ──────────┘

movie-review-app/
│
├── backend/
│   ├── src/main/java/com/example/movies/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   └── model/
│   └── application.properties
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md


