# Todo App

A clean and responsive Todo application built with **React** and **Vite**. Add tasks, mark them as completed, remove individual tasks, and clear the entire list.

**Live Demo:** [https://manojgiritodo.netlify.app/](https://manojgiritodo.netlify.app/)

## Features

- Add new tasks.
- Prevent empty tasks from being added.
- Prevent duplicate task content.
- Mark tasks as completed or active.
- Delete individual tasks.
- Clear all tasks at once.
- Display the current date and time.
- Persist task data in the browser using `localStorage`.
- Render task items with stable React keys.

## Tech Stack

- React
- JavaScript (ES Modules)
- Vite
- CSS
- Tailwind CSS
- React Icons
- Browser Local Storage

## Project Structure

```text
Todo/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── projects/
│   │   └── Todo/
│   │       ├── Todo.css
│   │       ├── Todo.jsx
│   │       ├── TodoDate.jsx
│   │       ├── TodoForm.jsx
│   │       ├── TodoList.jsx
│   │       └── TodoLocalStroage.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the Project Folder

```bash
cd Todo
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

To create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated inside the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is deployed using Netlify.

**Live Website:** [Manoj Todo App](https://manojgiritodo.netlify.app/)

To update the manually deployed website:

1. Make changes to your project.
2. Run `npm run build`.
3. Open your Netlify dashboard.
4. Navigate to your project's Deploys section.
5. Upload the newly generated `dist` folder.
6. Wait for deployment to finish.

## How It Works

- **Todo.jsx:** Manages the task list and application functionality.
- **TodoForm.jsx:** Handles user input and task submission.
- **TodoList.jsx:** Displays individual tasks with check and delete buttons.
- **TodoDate.jsx:** Displays the current date and time.
- **TodoLocalStroage.js:** Handles saving and retrieving tasks from local storage.
- **App.jsx:** Renders the Todo application.
- **main.jsx:** Entry point of the React application.

## Key Concepts Used

- React Functional Components
- React Hooks (`useState`, `useEffect`)
- Props and Component Communication
- JavaScript Array Methods (`map`, `filter`, `find`)
- Conditional Rendering
- React Keys
- Browser Local Storage
- Event Handling

## Author

**Manoj Kumar Giri**

---

**Designed & Developed by Manoj Kumar Giri.**