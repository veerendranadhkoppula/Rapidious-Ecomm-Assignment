# Rapidious Ecomm Assigmnet
## youtube execution video link : 

Rapidious Ecomm is a full-stack e-commerce web application that allows users to browse products, manage their accounts, and complete purchases using Stripe for payment processing. This README provides setup instructions for both the **backend** and **frontend** as well as an overview of the core features.

## Table of Contents

1. [Technologies](#technologies)
2. [Installation](#installation)
   * [Backend Setup](#backend-setup)
   * [Frontend Setup](#frontend-setup)
3. [Running the Application](#running-the-application)
4. [Features](#features)
   * [User Account](#user-account)
   * [Login/Logout](#loginlogout)
   * [Stripe Payment](#stripe-payment)
   * [Product Ordering](#product-ordering)
5. [Project Structure](#project-structure)
6. [Contributing](#contributing)
7. [License](#license)

## Technologies

- **Backend**: Python, Django
- **Frontend**: React, npm
- **Database**: SQLite (default)
- **Payment Gateway**: Stripe

---

## Installation

### Backend Setup

1. **Navigate to the backend folder** via terminal:
   ``
   cd backend
Set up a Python virtual environment:

For Windows:
python -m venv env

For Linux:
python3 -m venv env
Activate the virtual environment:

For Windows:
env\Scripts\activate


For Linux:
source env/bin/activate
Install required dependencies:

bash
Copy code
pip install -r requirements.txt
Run the Django development server:


python manage.py runserver
The backend should now be running at http://127.0.0.1:8000/.

Frontend Setup
Navigate to the frontend folder via terminal:



cd frontend
Install dependencies using npm:


npm install
Run the React development server:

npm start
The frontend will be available at http://localhost:3000/.

Running the Application
Once both the backend and frontend are running, visit the frontend at http://localhost:3000/ to interact with the e-commerce platform. The backend should also be running on http://127.0.0.1:8000/ to handle API requests.

## Features
User Account
Create an Account: Users can sign up and create a new account with their email and password.
Update Profile: Users can update their personal information, including email, address, and password.
Account Management: Manage account settings such as password reset and email preferences.
## Login/Logout
Login: Users can log in with their registered email and password.
Logout: Once logged in, users can log out and be redirected to the home page.
Session Management: Authentication tokens are used to manage logged-in sessions.
## Stripe Payment
Stripe Integration: Users can securely make payments through Stripe.
Payment Flow: Users can enter payment details, which are processed through the Stripe API.
Payment Confirmation: Once payment is successful, users will receive a confirmation page with order details.
## Product Ordering
Browse Products: Users can view a list of available products with images, descriptions, and prices.
Add to Cart: Users can add products to their cart and proceed to checkout.
Order Summary: The cart provides a summary of all items selected, including quantity and total price.
Place an Order: Users can complete the order by entering their shipping and payment details.
Order Confirmation: After placing an order, the user receives an order confirmation and the items are marked as purchased.
