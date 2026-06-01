# 📊 FinFlow - Wealth Progression Dashboard

A modern, full-stack **MERN (MongoDB, Express, React, Node.js)** personal finance tracker and dashboard designed with premium aesthetics, fluid micro-animations, and secure multi-user architecture. 

It provides users with deep insights into their wealth progression, interactive charts, and secure transaction tracking with absolute privacy through robust database-level isolation.

[![FinFlow_Preview](https://ik.imagekit.io/VishalFulkar/FinFlow/image.png?updatedAt=1780313775487)](https://ik.imagekit.io/VishalFulkar/FinFlow/image.png?updatedAt=1780313775487)

---

## 🌟 Key Features

* **🔒 Multi-User Secure Auth**: Custom registration and login processes with persistent sessions powered by encrypted HTTP-Only cookies to protect sensitive financial records.
* **🖼️ Profile Avatars**: Multi-part registration allowing custom profile photo uploads, securely stored and served.
* **⚡ Live Financial Analytics**: Dynamic interactive charts powered by **Recharts**:
  * **Progression Line Graph**: Visualizing month-by-month net wealth growth.
  * **Breakdown Donut Chart**: Clear percentage analysis of expense categories.
  * **Balance Trend area Chart**: Dynamic closing balances and cumulative wealth.
* **💡 Insights Engine**: Dynamic calculation of Savings Rate, Top spending categories, and Month-over-Month (MoM) changes comparing current vs. previous periods.
* **📁 Smart Searching & Filtering**: Instantly search records by Date, Description, Category, or Amount, and filter by income/expense type and period.
* **🛠️ Complete CRUD Operations**: Add, update, and delete transactions instantly reflected in overall statistics.

---

## 🛠️ Tech Stack

### Frontend
* **Core**: React 18, React Router DOM (v6)
* **State Management**: Redux Toolkit (`createAsyncThunk` for async operations)
* **Visual Data**: Recharts, Lucide Icons
* **Styling**: Modern CSS variables, glassmorphic themes, responsive grids

### Backend
* **Core**: Node.js, Express.js
* **Database**: MongoDB & Mongoose
* **Security**: JSON Web Tokens (JWT), bcryptjs for passwords, HTTP-Only Cookie session management
* **File Uploads**: Multer & custom cloud storage handling

---

## 📂 Project Structure

```text
FinFlow/
├── Backend/
│   ├── src/
│   │   ├── controllers/      # Auth & Transaction route controllers
│   │   ├── db/               # Database connection setup
│   │   ├── middleware/       # JWT Cookie verification middleware
│   │   ├── models/           # Mongoose schemas (User & Transaction)
│   │   ├── routes/           # Router groups (Express)
│   │   └── services/         # Storage service integrations
│   ├── .env                  # Port, JWT Secrets & Mongo URI (Ignored by git)
│   ├── .gitignore
│   └── package.json
└── Frontend/
    ├── src/
    │   ├── components/       # Analytics, charts, tables, navigation
    │   │   └── modal/        # Create & Update Modals
    │   ├── pages/            # Homepage, Statistics, Auth, Transactions
    │   ├── redux/            # Store configurations and slices (auth, finance)
    │   ├── services/         # Credential-inclusive Fetch API wrappers
    │   ├── App.jsx           # Main router & Route guards (Protected & Auth)
    │   └── main.jsx
    ├── index.html
    └── package.json
```

---

## ⚙️ Setup & Installation

### Prerequisite
* [Node.js](https://nodejs.org/) installed
* Running [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster or a local MongoDB community instance

### Step 1: Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repository-url>
cd "FinFlow"

# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

### Step 2: Environment Configurations
Create a `.env` file in the **`Backend/`** folder:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.xxxx.mongodb.net/finance-dashboard
JWT_SECRET=your_jwt_secret_key_here
```

### Step 3: Run the Servers
Open two terminal windows to run both servers concurrently:

**Terminal 1 (Backend Dev Server)**:
```bash
cd Backend
npm run dev
# Starts on http://localhost:3000
```

**Terminal 2 (Frontend React App)**:
```bash
cd Frontend
npm run dev
# Starts on http://localhost:5173
```

---

## 🔒 Security Practices Done Right
* **HTTP-Only Cookies**: JWT auth tokens are assigned via `httpOnly` cookies with `sameSite: 'lax'` configurations, effectively mitigating standard **Cross-Site Scripting (XSS)** and **CSRF** threats.
* **Route Guards**:
  * `ProtectedRoute`: Redirects unauthenticated users to `/login`.
  * `AuthRoute`: Blocks authenticated users from returning to Login/Register pages.
* **Isolated User Scope**: Backend validation guarantees that a user can only perform read/write/delete tasks on transaction records bound strictly to their user ID.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

