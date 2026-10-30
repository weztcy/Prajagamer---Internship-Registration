# Prajagamer - Internship Registration

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.17.1-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=flat&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2.7-764ABC?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![SheetJS](https://img.shields.io/badge/SheetJS-0.18.5-47B475?style=flat&logo=microsoftexcel&logoColor=white)](https://sheetjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

<p align="center">
  <img src="./screenshots/banner.png" alt="Prajagamer - Internship Registration Platform Banner" width="100%" />
</p>

Prajagamer is a full-stack web application engineered for the Department of Population and Civil Registration of Semarang City (*Dinas Kependudukan dan Pencatatan Sipil Kota Semarang* — Disdukcapil Kota Semarang) to digitize and manage the university student internship recruitment lifecycle (*Praktik Kerja dan Magang Merdeka*). Designed to modernize regional public-sector internship programs, the platform replaces decentralized email submissions and manual paper registries with an integrated, paperless admissions workflow.

The system delivers a decoupled architecture serving two operational user groups: **Student Applicants (*Pelamar / Mahasiswa*)** and **Civil Service Administrators (*Admin Disdukcapil*)**. Students register using their 16-digit National Identity Number (NIK) and academic credentials, submit supporting documentation (photographs, resumes, university recommendation letters, and transcripts), and maintain an online academic dossier. Concurrently, recruitment administrators access an administrative dashboard featuring real-time application telemetry, one-click candidate acceptance and rejection controls, full-text applicant search and sorting, client-side Excel report generation, announcement banner management, and sub-administrator account governance.

---

## Features

- **Dual-Portal Role-Based Authentication**: Segregated authentication pathways for Student Applicants (authenticated via NIK and password) and Civil Service Administrators (authenticated via NIP and password) with persistent state synchronization managed through Redux Toolkit and LocalStorage.
- **Student Onboarding & Document Uploads**: Comprehensive registration workflow capturing personal data, national identity numbers (NIK), university credentials (NIM, institution, academic department), and file uploads for profile photographs, resumes (CV), and academic transcripts handled via Multer disk storage.
- **Two-Stage Internship Application Workflow**: Structured submission pipeline prompting candidates to confirm regional placement availability (*ketersediaan penempatan*) in Stage 1 and submit required university recommendation letters, portfolios, and proposed internship durations in Stage 2.
- **Student Academic Dossier & Profile Management**: Self-service student profile management allowing applicants to review and update contact details, residential and KTP addresses across Semarang sub-districts, cumulative GPA (*IPK*), current semester, and academic advisor contacts.
- **Administrative Telemetry Dashboard**: Real-time KPI telemetry cards displaying total applicant volume, applications under verification, approved candidate tallies, and rejected counts with instant visual metrics.
- **One-Click Candidate Triaging**: Direct recruitment decision engine allowing administrators to toggle applicant status between `Verifying`, `Accepted`, and `Rejected` directly from the dashboard and data table interfaces with instant database synchronization.
- **Comprehensive Candidate Registry & Search**: High-density data table supporting real-time multi-field search (by Candidate Name, Email, NIK, or University), configurable pagination limits (5, 10, 15, or 20 records per page), and multi-criteria sorting (Newest, Oldest, or Alphabetical).
- **Client-Side Spreadsheet Export**: Integrated SheetJS (`xlsx`) workbook generation enabling administrators to export the complete candidate directory, academic metrics, and verification statuses into standardized `.xlsx` spreadsheets with a single click.
- **Direct Document Inspection**: Administrative links providing immediate access to submitted applicant attachments, including identity photographs, PDF resumes, and academic grade transcripts served securely via static backend endpoints.
- **Recruitment Banner Content Management**: Dynamic announcement system enabling administrators to upload and publish updated recruitment banners and open-call graphics displayed across public applicant landing pages without redeployment.
- **Administrator Account Governance**: Dedicated personnel control center providing full CRUD operations for civil service administrator accounts, including NIP uniqueness validation, staff credential registration, and account revocation.
- **Automated Full-Stack Process Orchestration**: Custom `runner.js` bootstrapper that validates SQLite database existence, pushes Prisma schema definitions, executes automated seed data ingestion, and launches both backend and frontend servers with unified colorized logging and clean process termination.

---

## Preview & Demo

The application's administrative control center and student self-service portals are showcased below:

### Administrative Control Center & Candidate Triaging Ecosystem

![Prajagamer Administrative Control Center and Candidate Triaging Ecosystem](./screenshots/Prajagamer%20-%20Internship%20Registration%201.png)

*Administrative Command Suite: Central telemetry dashboard featuring applicant metrics (Total Applications: 26, In Verification: 10, Accepted: 12, Rejected: 4) alongside immediate candidate approval and rejection controls (top-left); Master User Registry with multi-column student records, direct document inspection links ("Lihat Foto", "Lihat CV", "Lihat Transkrip Nilai"), and one-click Excel data export (top-right); Recruitment Announcement Banner management allowing dynamic upload and preview of public open-call visuals (bottom-left); and Administrator Account Directory managing staff profiles, NIP identifiers, and account credentials (bottom-right).*

### Student Self-Service Registration & Profile Dossier Management

![Prajagamer Student Self-Service Registration and Profile Dossier Management](./screenshots/Prajagamer%20-%20Internship%20Registration%202.png)

*Applicant Experience Suite: Student Account Registration interface capturing NIK, full legal name, university affiliation, academic department, contact details, and multi-file document uploads (left); and Authenticated Student Profile & Academic Dossier displaying student headshot, institutional metadata, residence records, academic advisor information, and profile modification controls (right).*

---

## Tech Stack

### Core Architecture
- **Frontend Framework**: React 18.2.0 (Single-Page Application Architecture)
- **Frontend Build Tool**: Vite 5.1.6 (Fast Hot Module Replacement & Rollup Bundler)
- **State Management**: Redux Toolkit 2.2.7 with Redux Persist 6.0.0 and Redux Thunk 3.1.0
- **Client-Side Routing**: React Router DOM 6.26.1 (Data Router API via `createBrowserRouter`)
- **HTTP Client**: Axios 1.7.7 & Native Fetch API
- **Styling & UI Components**: Tailwind CSS 3.4.10, PostCSS, Autoprefixer, Heroicons v2
- **UI Notifications & Carousels**: React-Toastify 10.0.5, Swiper 11.1.10, React Slick 0.30.2, Slick Carousel 1.8.1
- **Client Utilities & Image Processing**: SheetJS (`xlsx` 0.18.5), CropperJS 1.6.2, React-Cropper 2.3.3
- **Server Runtime**: Node.js (v18+ LTS / v20+ LTS)
- **Backend Framework**: Express.js 5.1.0 (RESTful API Architecture)
- **Database Engine**: SQLite 3 (File-based storage via `dev.db`)
- **ORM & Data Modeling**: Prisma ORM 6.17.1 (Prisma Client & Prisma CLI)
- **File Upload Middleware**: Multer 2.5.0 (Multipart/form-data handler for disk storage)
- **Cross-Origin Resource Sharing**: CORS 2.8.6
- **Configuration Management**: Dotenv 17.2.3

### Tooling & Development
- **Process Orchestration**: Custom Node.js Process Manager (`runner.js`) with `child_process.spawn` and cross-platform PID cleanup
- **Concurrent Development**: Concurrently 9.1.0
- **Live Reloading**: Nodemon 3.1.10
- **Code Quality**: ESLint 8.57.0 with React and React Hooks plugins

---

## Prerequisites

Before setting up the project locally, verify that your development environment satisfies the following requirements:

- **Node.js**: `v18.0.0` or higher (v20 LTS recommended)
- **Package Manager**: `npm` v9.0.0 or higher (distributed with Node.js)
- **Operating System**: Windows, macOS, or Linux
- **Web Browser**: Modern Chromium, Firefox, WebKit, or Edge browser with JavaScript enabled

---

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/weztcy/Prajagamer---Internship-Registration.git
   cd Prajagamer---Internship-Registration
   ```

2. **Install Root & Sub-Project Dependencies**:
   Install all dependencies across the root orchestrator, Express backend, and Vite frontend using the bundled command:
   ```bash
   npm run install:all
   ```
   *(Alternatively, install each workspace module manually):*
   ```bash
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   cd ..
   ```

3. **Initialize Database Schema & Seed Data**:
   The custom runner automatically handles schema push and data seeding upon first execution. To initialize the SQLite database manually via Prisma CLI, run:
   ```bash
   npx prisma db push --schema=backend/prisma/schema.prisma
   npm run seed
   ```

---

## Environment Variables

The project separates configuration between the backend REST API and the frontend single-page application.

### Backend (`backend/.env`)
Create a `.env` file inside the `backend` directory:
```env
PORT=5000
DATABASE_URL="file:./dev.db"
```

| Variable | Description | Default Value | Required |
| :--- | :--- | :--- | :---: |
| `PORT` | Local network port for the Express REST API server | `5000` | Yes |
| `DATABASE_URL` | SQLite file path connection string for Prisma ORM | `file:./dev.db` | Yes |

### Frontend (`frontend/.env`)
Create a `.env` file inside the `frontend` directory:
```env
VITE_API_BASE_URL=http://localhost:5000
```

| Variable | Description | Default Value | Required |
| :--- | :--- | :--- | :---: |
| `VITE_API_BASE_URL` | Base HTTP endpoint connecting React frontend to Express backend | `http://localhost:5000` | Yes |

---

## Usage / Running the Project

Start the unified development ecosystem using the custom runner script:

```bash
npm run dev
# or
npm start
```

The runner initializes the local SQLite database if not present, runs the Prisma schema push, seeds 26 complete applicant records, and launches both services concurrently:

- **Frontend Portal**: [http://localhost:5173](http://localhost:5173)
- **Backend REST API**: [http://localhost:5000](http://localhost:5000)

### Verified Demo Accounts

The database comes pre-populated with test accounts across both administrative and student roles:

#### 1. Civil Service Administrator Portal (`/loginadmin`)
Access URL: [http://localhost:5173/loginadmin](http://localhost:5173/loginadmin)

| Role | Username / NIP | Password | Full Name |
| :--- | :--- | :--- | :--- |
| Super Administrator | `admin` | `admin` | Super Admin Disdukcapil |
| Department Admin | `198503152010011002` | `password123` | Budi Santoso, S.Kom., M.Cs. |
| Operational Admin | `197906202008012015` | `password123` | Dra. Sri Wahyuni, M.Si. |

#### 2. Student Applicant Portal (`/login`)
Access URL: [http://localhost:5173/login](http://localhost:5173/login)

| Role | NIK | Password | Full Name | Initial Status |
| :--- | :--- | :--- | :--- | :--- |
| Student Applicant | `3374011203010001` | `password123` | Yohanes Dimas Pratama | Accepted |
| Student Applicant | `3374025408020002` | `password123` | Siti Rahmawati | Verifying |
| Student Applicant | `3374031505010003` | `password123` | Ahmad Fauzi | Accepted |

---

## Available Scripts / Commands

The repository provides automated scripts configured in root and module package manifests:

| Command | Working Scope | Description |
| :--- | :--- | :--- |
| `npm run dev` | Root | Launches `runner.js` to initialize database, seed records, and start both servers |
| `npm start` | Root | Production alias executing `node runner.js` |
| `npm run seed` | Root | Executes `backend/src/seed.js` to populate SQLite database with test records |
| `npm run dev:concurrently` | Root | Boots backend and frontend concurrently via `concurrently` CLI |
| `npm run dev:backend` | Root | Boots only the Express backend development server (`localhost:5000`) |
| `npm run dev:frontend` | Root | Boots only the Vite frontend development server (`localhost:5173`) |
| `npm run build` | Root / Frontend | Compiles and optimizes React frontend assets into `frontend/dist` |
| `npm run install:all` | Root | Installs `npm` dependencies for both backend and frontend workspaces |
| `npm run lint` | Frontend | Runs ESLint validation across JavaScript and JSX sources |
| `npm run preview` | Frontend | Serves the production build bundle locally using Vite preview |

---

## API Reference / Documentation

The Express backend exposes RESTful endpoints under the `/api` namespace:

### Authentication & Administrator Directory
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/user/login` | Public | Authenticates student applicants using NIK and password |
| `POST` | `/api/user/register` | Public | Registers a new student applicant with multipart file attachments (`photo`, `cv`, `score_list`) |
| `POST` | `/api/admin/login` | Public | Authenticates administrators using NIP and password |
| `GET` | `/api/admins` | Admin | Retrieves all administrator records or queries a specific account via `?nip={nip}` |
| `POST` | `/api/admin/register` | Admin | Creates a new administrator account (Name, NIP, Phone, Email, Password) |
| `DELETE`| `/api/admin/:id` | Admin | Deletes an administrator account by database primary key ID |

### Candidate Management & Telemetry
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/dashboard` | Admin | Returns aggregate metrics (`totalApplicants`, `verifyingApplicants`, `acceptedApplicants`, `rejectedApplicants`) and applicant list |
| `GET` | `/api/users` | Admin | Retrieves all registered user accounts with nested `Profile`, `University`, and `Regist` models |
| `GET` | `/api/users2` | Admin | Retrieves all candidate application dossiers for verification review |
| `PUT` | `/api/users/status` | Admin | Updates applicant screening status (`status`: `Verifying`, `Accepted`, or `Rejected`) |

### Student Profile & Application Dossier
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/profile` | Authenticated | Fetches complete student profile, academic metrics, and supervisor details |
| `POST` | `/api/profile` | Authenticated | Updates student personal details, address information, and headshot image (`photo`) |
| `GET` | `/api/internship-form` | Authenticated | Retrieves existing internship application records for the active student |
| `POST` | `/api/apply-internship`| Authenticated | Submits internship application with documents (`recommend_letter`, `portofolio`, `cv`) and target dates |

### Recruitment Banner Management
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/banner` | Public | Serves active banner file by query parameter `?nameBanner={name}` (default: `Lowongan`) |
| `POST` | `/api/banner` | Admin | Uploads or replaces recruitment banner graphic (`multipart/form-data`) |
| `PUT` | `/api/banner` | Admin | Updates existing recruitment banner asset in disk storage |

---

## Build & Deployment

### Production Build
To create an optimized production build of the client application:

```bash
npm run build
```

This compiles JSX and assets into minified JavaScript, CSS, and HTML bundles within the `frontend/dist` directory.

### Production Execution
1. Verify the production database location in `backend/.env`.
2. Push Prisma migrations or schema definitions to the production SQLite/database instance:
   ```bash
   npx prisma db push --schema=backend/prisma/schema.prisma
   ```
3. Run the application via Node.js process manager (e.g., PM2) or container runtime:
   ```bash
   npm start
   ```

---

## License

Please see the [LICENSE](./LICENSE) file for the terms and conditions governing the use, modification, and distribution of this project.

## Author & Contact

**Yohanes Dimas Pratama**

- GitHub: [github.com/weztcy](https://github.com/weztcy)
- Portfolio: [dimaspratama.vercel.app](https://dimaspratama.vercel.app)
- LinkedIn: [linkedin.com/in/yohanes-dimas](https://www.linkedin.com/in/yohanes-dimas)

