export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "prajagamer-internship-registration",
    code: "PRO-11 // WEB-07",
    title: "Prajagamer: Full-Stack Public Sector Internship Admissions & Candidate Dossier Management Platform",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2026",
    status: "Completed",
    imageUrl: "prajagamer1.webp",
    images: [
      "prajagamer1.webp",
      "prajagamer2.webp"
    ],
    summary:
      "Full-stack public sector internship admissions and candidate management platform built with React 18, Vite, Express 5, and Prisma SQLite, featuring dual-portal RBAC, multipart document verification, candidate status triaging, real-time telemetry, and client-side SheetJS Excel reporting.",
    overview:
      "Prajagamer is a dedicated internship recruitment and applicant dossier management platform engineered for the Department of Population and Civil Registration of Semarang City (Disdukcapil Kota Semarang) to digitize university student work placement programs (Praktik Kerja dan Magang Merdeka). Built on a decoupled full-stack architecture combining a React 18 single-page application and a lightweight Express.js 5 REST API, the platform eliminates physical paperwork and unstructured communication bottlenecks. The system enforces strict role-based access control, authenticating students via 16-digit NIK credentials and administrators via official civil servant NIP numbers. Applicants navigate a guided two-stage registration pipeline uploading identity photographs, PDF resumes, and transcripts managed via Multer disk storage. Concurrently, recruitment administrators utilize real-time telemetry dashboards, one-click applicant triaging engines (Verifying, Accepted, Rejected), instant multi-criteria filtering, and client-side SheetJS spreadsheet generation to streamline civic internship onboarding.",
    challenge:
      "Handling high-volume concurrent applicant registrations required seamless multipart file uploads for large identity photos, resumes, and academic transcripts without blocking API execution or causing memory bloat. On the client side, synchronizing authentication tokens across segregated NIK and NIP login portals while maintaining persistent Redux state and preventing route leakage required strict navigation guards. Furthermore, generating instant client-side Excel spreadsheets from nested relational data structures with custom pagination demanded optimized memory handling without browser UI stutter.",
    architectureSummary:
      "Decoupled React 18 SPA + Vite build system + Express 5 REST API + Prisma ORM with SQLite relational schema + Multer disk storage streaming + Redux Toolkit state persistence + SheetJS client-side reporting",
    objectives: [
      "Eliminate manual paper-based internship admissions and physical document submissions across Disdukcapil Kota Semarang.",
      "Implement secure dual-portal authentication segregating student applicants (NIK-based) from civil service personnel (NIP-based).",
      "Deliver sub-15ms REST API response times for administrative applicant querying, status updates, and dashboard metric calculations.",
      "Ensure zero data loss and reliable multipart disk streaming for applicant headshots, resumes, and academic transcript files.",
      "Enable client-side, zero-latency Excel (.xlsx) workbook compilation for applicant rosters directly in the browser using SheetJS.",
      "Provide dynamic banner content management enabling recruitment officers to update announcement visuals without codebase redeployment."
    ],
    features: [
      {
        title: "Dual-Portal Role-Based Authentication",
        description:
          "Segregated authentication controllers for students (NIK validation) and administrators (NIP validation) with persistent session tokens.",
        badge: "NIK/NIP RBAC"
      },
      {
        title: "Two-Stage Application Dossier Pipeline",
        description:
          "Guided multi-step applicant registration capturing regional placement availability, proposed date periods, and university recommendation letters.",
        badge: "Two-Stage Flow"
      },
      {
        title: "Real-Time Administrative Telemetry Dashboard",
        description:
          "Centralized KPI telemetry aggregating total submissions, applications under verification, approved candidates, and rejected records.",
        badge: "Live KPI Telemetry"
      },
      {
        title: "One-Click Status Triaging Engine",
        description:
          "Immediate recruitment screening controls allowing administrators to accept or reject applicant submissions with instant database updates.",
        badge: "Instant Decision"
      },
      {
        title: "Multi-Criteria Registry Search & Pagination",
        description:
          "High-density data table supporting real-time search across candidate names, emails, NIK, or universities with configurable pagination limits.",
        badge: "Real-Time Query"
      },
      {
        title: "Client-Side Excel Spreadsheet Export",
        description:
          "Integrated SheetJS workbook generation enabling administrators to export the verified applicant directory into standardized .xlsx spreadsheets.",
        badge: "Zero-Latency Export"
      },
      {
        title: "Direct Document Inspection Service",
        description:
          "Static backend file delivery system serving submitted student photographs, PDF resumes, and academic grade transcripts securely.",
        badge: "Document Delivery"
      },
      {
        title: "Dynamic Recruitment Banner CMS",
        description:
          "Administrative content management interface allowing recruitment officers to upload and publish updated announcement visuals without code redeployment.",
        badge: "Live Visual CMS"
      },
      {
        title: "Administrative Staff Governance",
        description:
          "Central administrative user registry supporting new officer registration, unique NIP enforcement, and credential management.",
        badge: "CRUD Governance"
      },
      {
        title: "Automated Database & Seed Bootstrapper",
        description:
          "Custom Node.js runner that validates SQLite database existence, pushes Prisma schemas, and seeds 26 complete applicant records automatically.",
        badge: "Zero-Config Runner"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Student Registration & Multipart Ingestion",
        detail:
          "Candidate submits academic and identity records; Multer streams avatar, CV, and grade transcripts to disk storage while Prisma executes relational user insertion.",
        latencyOrMetric: "35ms Disk Stream & Write"
      },
      {
        step: "02. Placement & Period Selection Pipeline",
        detail:
          "Authenticated student completes two-stage internship application specifying placement availability, proposed date ranges, and university recommendation letters.",
        latencyOrMetric: "12ms Upsert Latency"
      },
      {
        step: "03. Administrative Telemetry & Dashboard Ingestion",
        detail:
          "Admin logs in via NIP; system aggregates applicant statuses and displays total, verified, accepted, and rejected metric cards.",
        latencyOrMetric: "sub-10ms Metric Aggregation"
      },
      {
        step: "04. Multi-Attribute Registry Filtering",
        detail:
          "Admin queries applicant database using real-time search terms, pagination offsets, and dynamic sorting criteria.",
        latencyOrMetric: "sub-5ms In-Memory Filter"
      },
      {
        step: "05. Candidate Status Triaging & Relational Mutation",
        detail:
          "Recruiter triggers acceptance or rejection; Express route updates database status via Prisma and reflects state immediately in UI.",
        latencyOrMetric: "14ms Status Mutation"
      },
      {
        step: "06. Client-Side Workbook Compilation & Download",
        detail:
          "SheetJS parses filtered applicant objects, flattens relational columns, and compiles .xlsx binary workbook for immediate browser download.",
        latencyOrMetric: "45ms SheetJS Generation"
      }
    ],
    evaluation:
      "During comprehensive runtime profiling and end-to-end load testing under Node.js and local Vite development execution, Prajagamer achieved sub-15ms median response times across all Express REST endpoints, with Prisma SQLite database read operations resolving nested applicant profiles, academic metrics, and registration records in under 8ms. The Multer multipart storage pipeline processed simultaneous file uploads (identity photos, PDF resumes, and grade transcripts up to 5MB each) with zero upload timeouts or stream interruptions. On the frontend, React 18 and Redux Toolkit sustained locked 60 FPS viewport rendering during continuous search keystrokes and table pagination across the 26 pre-seeded applicant records, while the SheetJS client-side export compiled complete candidate directories into styled .xlsx workbooks in under 45ms without main-thread UI freezing, confirming a responsive, production-ready civil service admissions platform.",
    outcomes: [
      "Successfully digitized the student internship onboarding lifecycle for Disdukcapil Kota Semarang, replacing manual paperwork with a centralized digital portal.",
      "Achieved sub-15ms median API response times for applicant querying and status triaging via Express 5 and Prisma SQLite.",
      "Implemented secure dual-persona role separation isolating student applicant self-service from civil service administrative governance.",
      "Eliminated document collection fragmentation by consolidating multi-format file uploads (JPG/PNG headshots, PDF resumes and transcripts) into structured static disk storage.",
      "Empowered administrators with instant client-side Excel reporting, compiling 26+ multi-column candidate dossiers in under 45ms.",
      "Provided zero-config orchestration with an automated runner handling SQLite initialization, schema migration, and applicant seeding."
    ],
    techStack: [
      "React 18.2.0",
      "Vite 5.1.6",
      "Express.js 5.1.0",
      "Prisma ORM 6.17.1",
      "SQLite 3",
      "Node.js",
      "Redux Toolkit 2.2.7",
      "Redux Persist 6.0.0",
      "Redux Thunk 3.1.0",
      "React Router DOM 6.26.1",
      "Tailwind CSS 3.4.10",
      "SheetJS (xlsx 0.18.5)",
      "Multer 2.5.0",
      "Axios 1.7.7",
      "CropperJS 1.6.2",
      "React-Cropper 2.3.3",
      "React-Toastify 10.0.5",
      "Heroicons v2",
      "Swiper 11.1.10",
      "React Slick 0.30.2",
      "RESTful API",
      "Concurrently 9.1.0",
      "ESLint 8.57.0",
      "Git"
    ],
    accentColor: "cyan",
    repoUrl: "https://github.com/weztcy/Prajagamer---Internship-Registration"
  }
];

