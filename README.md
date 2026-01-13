# Airbnc Frontend

This is the frontend application for AirBnC, an Airbnb-style property listing platform.
It allows users to browse properties, filter listings, view individual property pages, and read reviews.

The frontend consumes a RESTful API built separately with Express and PostgreSQL.

## Tech Stack

- React - component-based UI
- JavaScript
- React-router - client side routing
- Axios - API requests
- CSS custom component styling
- Vite - development server and build tool

## Features

- View a list of available properties
- Filter properties
- View individual property pages
- Image galleries per property
- Responsive, component based UI

## Setup Instructions

Clone the repository and install dependencies.

```bash
npm install
```

## Running the App locally

To start the development server:

```bash
npm run dev
```

The app will run locally. (usually at http://localhost:5173)

## API Integration

All data is fetched from the backend using Axios.

Example request:

```bash
axios.get("/api/properties")
```

Endpoints used include:

```bash
- GET /api/properties
- GET /api/properties:id
- GET /api/properties:id/reviews
- POST /api/properties:id/reviews
```

## Live Site

Frontend Deployed Version:
https://keith-airbnc.netlify.app/

Backend API:

https://pt-be-airbnc-txl6.onrender.com
