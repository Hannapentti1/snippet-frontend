# Snippet Frontend – Developer Knowledge Base

A React-based frontend application for managing and browsing code snippets.  
This project consumes the REST API built in **Project 2** and provides a user-friendly interface for developers to store and view reusable code snippets.

This project was created for the **Fullstack course – Project 3**.

---

## 🚀 Live Site

[https://snippet-frontend-1.onrender.com]
---

## 🔗 Backend API

This frontend connects to the Snippet API from Project 2:

https://project2-4-tih3.onrender.com/

---

## 📦 Features

- View all code snippets from the API
- Filter snippets by programming language
- Add new snippets using a form (POST)
- Delete snippets (DELETE)
- Live code preview when adding a snippet
- Responsive layout
- Loading and error states
- Syntax-ready structure (prepared for syntax highlighting)

---

## 🧪 API Usage

This app communicates only with the backend API created in Project 2.

Used endpoints:
- `GET /api/getall` – fetch all snippets
- `POST /api/add` – create a new snippet
- `DELETE /api/delete/:id` – delete a snippet

No direct database access is used.

---

## 🔧 How to Run the Project Locally

### Requirements
- Node.js (v18 or newer)
- npm

### Installation (Windows / macOS)

1. Clone the repository:
```bash
git clone https://github.com/Hannapentti1/snippet-frontend.git
