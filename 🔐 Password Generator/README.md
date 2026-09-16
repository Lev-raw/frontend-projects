# 🔐 Password Generator

A simple, responsive password generator built with **React and Vite**. Generate strong passwords instantly by adjusting the length and selecting the character types you want to include.

## 📸 Preview

<img width="1907" height="897" alt="image" src="https://github.com/user-attachments/assets/ca2566a6-919c-480b-ba23-a592a5dce612" />




## ✨ Features

* Generate random passwords instantly
* Adjust password length using a slider
* Include or exclude numbers
* Include or exclude special characters
* Copy the generated password to the clipboard
* Automatically generate a new password when settings change
* Clean and responsive user interface

## 🛠️ Tech Stack

* **React**
* **Vite**
* **JavaScript**
* **CSS**
* **React Hooks**

## ⚛️ React Hooks Used

This project was built to understand and practice different React Hooks:

| Hook          | Purpose                                                            |
| ------------- | ------------------------------------------------------------------ |
| `useState`    | Manages password length, generated password, and character options |
| `useCallback` | Memoizes the password generation function                          |
| `useEffect`   | Regenerates the password whenever the selected settings change     |
| `useRef`      | Accesses the password input field for copying                      |

## 📂 Project Structure

```text
Password Generator/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Lev-raw/frontend-projects.git
```

### 2. Navigate to the project

```bash
cd frontend-projects/Password%20Generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## 📦 Build for Production

```bash
npm run build
```

## 🎯 Learning Goals

Through this project, I practiced:

* Managing component state with React Hooks
* Creating reusable callback functions
* Handling side effects in React
* Using references to interact with DOM elements
* Building a functional and responsive UI
* Understanding how React updates the interface based on state changes

## 👨‍💻 Author

**Lev-raw**

GitHub: [@Lev-raw](https://github.com/Lev-raw)

## 📄 License

This project is open-source and available for learning and personal use.
