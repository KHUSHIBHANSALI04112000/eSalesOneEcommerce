# eCommerce Checkout

The **eCommerce Checkout** project is a full-stack application built with React on the frontend and Node.js/Express on the backend. It simulates a complete eCommerce checkout process—from Landing page where the product selection and quantity adjustment takes place  to secure checkout, payment simulation, and providing a detailed Thank You page. The app also sends transactional emails using Nodemailer & Mailtrap and is designed for deployment on Render.
---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Deployment on Render](#deployment-on-render)
- [Environment Variables](#environment-variables)
- [Testing & Troubleshooting](#testing--troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This project simulates an eCommerce checkout flow by allowing users to:
- Select product variants (e.g., different colors of a smart watch).
- Add to Cart option available and right next to itthe quantity seleted is  displayed.
- Fill out a checkout form with customer details, shipping information, and payment details.
- Simulate payment transactions (approved, declined, gateway error) with equal probability.
- Receive an order confirmation email (via Mailtrap) for both successful and failed transactions.
- View a Thank You page fetching live order data from the database.
---

## Features

- **Dynamic Product & Variant Selection:**  
  Update product images and details based on the selected color variant.
  
- **Quantity Selector with Persistence:**  
  Uses Local Storage so that the selected quantity does not reset on navigation.
  
- **Robust Checkout Form:**  
  Includes detailed validation for fields such as cvv, email, phone number, card details, and shipping address.
  
- **Transaction Simulation:**  
  Simulates three possible outcomes for a payment transaction (approved, declined, gateway error) with equal probability by generating a random number and conditionals for acheieving the above status.
  
- **Order Confirmation Emails:**  
  Utilizes Nodemailer with Mailtrap for sandbox email testing.
  
- **Detailed Thank You Page:**  
  Displays a unique order number, a comprehensive summary of the order, and customer input data by fetching data from the database.
  
- **Deployment Ready for Render:**  
  Configured to use environment variables hosted on Render for both frontend and backend.

---

## Project Architecture

The repository is organized into two main parts:

- **Backend (`/backend`):**  
  Contains the Node.js/Express server with API routes, MongoDB connection (using Mongoose), email service configuration, and environment-specific settings.

- **Frontend (`/frontend`):**  
  Contains the React application with components, routes (using react-router-dom), form validations, and state management for the checkout flow.

---

## Prerequisites

- **Git:** For version control and repository management.
- **Node.js & npm (or yarn):** To run the backend and frontend applications.
- **MongoDB:** Either a local instance or MongoDB Atlas for cloud storage.
- **Render Account:** For deployment of frontend and backend services.
- **Mailtrap Account:** For testing email delivery in a sandbox environment.

---

## Local Setup

### Backend Setup

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend and type node index.js
2. **Navigate to the Frontend Directory:**
  ```bash
   cd product-app-frontend and type npm start

