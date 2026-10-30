CREATE DATABASE internship_registration;

USE internship_registration;

-- Tabel Users
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    nama_lengkap VARCHAR(255) NOT NULL,
    nim VARCHAR(20) NOT NULL,
    nik VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    no_telepon VARCHAR(15),
    password VARCHAR(255) NOT NULL,
    asal_universitas VARCHAR(255),
    jurusan VARCHAR(255),
    ipk DECIMAL(3,2),
    semester VARCHAR(10),
    alamat_domisili TEXT,
    alamat_ktp TEXT,
    photo_url VARCHAR(255),
    cv_url VARCHAR(255),
    transkrip_url VARCHAR(255),
    major_id INT,
    FOREIGN KEY (major_id) REFERENCES majors(major_id)
);

-- Tabel Universities
CREATE TABLE universities (
    university_id INT AUTO_INCREMENT PRIMARY KEY,
    nama_universitas VARCHAR(255) NOT NULL
);

-- Tabel Majors
CREATE TABLE majors (
    major_id INT AUTO_INCREMENT PRIMARY KEY,
    jurusan VARCHAR(255) NOT NULL,
    university_id INT,
    FOREIGN KEY (university_id) REFERENCES universities(university_id)
);

-- Tabel Internships
CREATE TABLE internships (
    internship_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    willing_to_relocate BOOLEAN NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Tabel Supporting Documents
CREATE TABLE supporting_documents (
    document_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    recommendation_letter_url VARCHAR(255),
    portfolio_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Tabel Mentors
CREATE TABLE mentors (
    mentor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    nama_mentor VARCHAR(255),
    no_telepon_mentor VARCHAR(15),
    email_mentor VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
