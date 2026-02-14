# POS-QE: Offline-First Desktop Point of Sale System

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Electron](https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron)](https://www.electronjs.org/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite)](https://www.sqlite.org/)

**POS-QE** is a premium, high-performance Desktop Point of Sale (POS) system built with an **offline-first philosophy**. Designed for speed, reliability, and ease of use, it empowers retailers to manage sales, inventory, and users entirely on a single machine without the need for a constant internet connection.

---

## 🌟 Key Features

### 🛒 Cashier Module (Counter Interface)
- **Intelligent Search**: Instant partial name and SKU matching for products.
- **Zero Mental Arithmetic**: Automated calculations for subtotals, taxes, and change due.
- **Variant Support**: Seamless selection of product sizes, colors, and units.
- **Keyboard Optimization**: Global shortcuts for lightning-fast checkout.

### 📦 Inventory Management
- **Real-time Tracking**: Automatic stock deductions upon sales.
- **Stock Movements**: Detailed logs for every addition, adjustment, or sale.
- **Low Stock Alerts**: Visual indicators for items needing replenishment.
- **Category Org**: Structured product categorization for better management.

### 📊 Reporting & Analytics
- **Sales History**: Audit every transaction with precise date/time and cashier data.
- **Performance Reports**: Insights into top-selling products and daily summaries.
- **Data Integrity**: Transactional updates powered by SQLite ACID compliance.

### 🔐 User & Security
- **Role-Based Access**: Specialized permissions for Cashiers, Admins, and Owners.
- **Secure Auth**: JWT-based authentication with bcrypt password hashing.

---

## 🛠️ Technology Stack

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Backend** | Python / FastAPI | High-performance API and business logic |
| **Database** | SQLite | Lightweight, reliable local storage |
| **Frontend** | React / Vite | Dynamic, responsive user interface |
| **Desktop Shell** | Electron | Native window management and hardware access |
| **Styling** | Material UI / Emotion | Premium, modern aesthetic |
| **Hardware** | ESC/POS (Python) | Receipt printing (USB Thermal) |

---

## 🚀 Local Installation & Setup

### Prerequisites
- **Python 3.10+**
- **Node.js 18+**
- **Git**

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# (Optional) Seed the database with initial data
python seed.py

# Start the FastAPI server
uvicorn app.main:app --reload
```

### 2. Frontend & Electron Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run in Development Mode (starts React and Electron concurrently)
npm run dev
```

### 3. Build & Distribution
To package the app for distribution:
```bash
# From within the frontend directory
npm run electron:build
```
The installer will be generated in `frontend/dist`.

---

## 🌍 Hosting & Deployment Resources

While POS-QE is designed to run offline, you may want to host the API or distribute the application.

### Backend Hosting (API)
If you decide to move to a cloud-synced model or need a central management server:
- **[Railway](https://railway.app/)**: Best for quick, automated FastAPI deployments. Very developer-friendly.
- **[Render](https://render.com/)**: Excellent free/low-cost tier for Python services.
- **[Fly.io](https://fly.io/)**: Exceptional for deploying apps close to your users (edge hosting).

### Desktop Distribution
- **[GitHub Releases](https://github.com/features/actions)**: The **industry standard** for hosting Electron installers. Combine with GitHub Actions to automate your build process.
- **[AWS S3 + CloudFront](https://aws.amazon.com/s3/)**: For high-performance, global distribution of your binaries.

### Database Backup
- **[Dropbox/Google Drive API](https://developers.google.com/drive)**: Easily script a local backup of the `pos.db` file to a cloud provider.
- **[Litestream](https://litestream.io/)**: Provides real-time replication of SQLite to S3 for disaster recovery.

---

## 📁 Project Structure

```text
POS-QE/
├── backend/            # FastAPI Application
│   ├── app/            # Core logic, routes, and models
│   ├── pos.db          # Local SQLite database
│   └── requirements.txt
├── frontend/           # React + Electron
│   ├── src/            # UI components and state management
│   ├── electron/       # Main/Preload scripts
│   └── package.json
├── SRS.md              # Detailed Software Specifications
└── TODO.md             # Project Roadmap
```

---

## 🗺️ Roadmap
- [ ] Multi-branch Cloud Sync
- [ ] Integrated Weighing Scale Support
- [ ] Mobile App Extension for Owners
- [ ] Advanced Customer Loyalty System

---

### 📄 License
This project is proprietary. All rights reserved.

Created with 💙 by **Antigravity**.
