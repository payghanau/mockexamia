
# MockExamia Server

Backend API for the MockExamia exam platform.

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas account)

### Setup Steps

1. **Clone the repository**

2. **Install dependencies**
   ```
   cd server
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the server directory
   - Copy the contents from `.env.example`
   - Update the values with your actual configuration:
     - Set `MONGODB_URI` to your MongoDB connection string
     - Set a strong `JWT_SECRET` for token generation
     - Set a strong `ADMIN_KEY` for admin user creation

4. **Start the server**
   
   Development mode:
   ```
   npm run dev
   ```
   
   Production mode:
   ```
   npm start
   ```

5. **Seed the database (optional)**
   ```
   npm run seed
   ```
   This will create an admin user and sample exams.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/create-admin` - Create admin user (protected)

### Exams
- `GET /api/exams` - Get all exams
- `GET /api/exams/:id` - Get exam by ID
- `POST /api/exams` - Create new exam (admin only)
- `PUT /api/exams/:id` - Update exam (admin only)
- `DELETE /api/exams/:id` - Delete exam (admin only)

### User Exams
- `GET /api/user-exams` - Get user's exams
- `GET /api/user-exams/:id` - Get specific user exam
- `POST /api/user-exams/start` - Start an exam
- `POST /api/user-exams/:id/submit` - Submit exam answers

### Payments
- `POST /api/payments/process` - Process payment
- `GET /api/payments/:examId/status` - Get payment status

## Troubleshooting

If you encounter a "Network Error" when connecting to the server:

1. Check if the MongoDB server is running
2. Verify your MongoDB connection string in the `.env` file
3. Ensure the server is running on the expected port
4. Check for any firewall or network restrictions
5. Verify CORS settings if accessing from a different domain
