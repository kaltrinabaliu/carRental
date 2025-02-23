# API Documentation

### 1. Clone repository

git clone https://github.com/kaltrinabaliu/carRental.git

### 2. install the MongoDB for VS Code extension on VS Code

### 3. create the .env file with this content

- MONGO_URI=mongodb://localhost:27017/carRental
- JWT_SECRET=supersecretkey

### 4. Install dependencies:

npm install

### 5. Start the server:

npm start

## User APIs

### 1. Signup

- **Route:** POST /api/register
- **Description:** Creates a new user account.

### 2. Sign in

- **Route:** POST /api/login
- **Description:** Logs in an existing user.

### 3. My profile

- **Route:** GET /api/my-profile
- **Description:** Retrieves details of the logged-in user.

## Car APIs

### 4. Rental cars

- **Route:** GET /api/rental-cars?
  - **Description:**
    - Retrieves a list of available rental cars.
    - Sorted from **lowest to highest price** by default.
    - Supports filtering by:
      - **Year:** `?year=YYYY`
      - **Color:** `?color=red`
      - **Steering Type:** `?steering_type=automatic`
      - **Number of Seats:** `?number_of_seats=4`
