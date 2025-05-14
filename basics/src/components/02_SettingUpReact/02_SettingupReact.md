## 1. **Setting Up a React Project with Vite**

**Steps:**

1.  Open your terminal and run:

    ```bash
    npm create vite@latest my-react-app -- --template react
    ```

    Replace `my-react-app` with your desired project name.

2.  The `--template react` flag ensures a React-specific setup.

3.  Navigate to the project folder:

    ```bash
    cd my-react-app
    ```

4.  Install dependencies:

    ```bash
    npm install
    ```

5.  Start the development server:

    ```bash
    npm run dev
    ```

6.  Your React app will be running at `http://localhost:5173`.

---

## Steps:

**2. React Project Folder Structure (Vite Default)**

<pre>
my-react-app/ ├── node_modules/ # All project dependencies (auto-generated) ├── public/ # Static assets (e.g., favicon.ico) ├── src/ # Source code │ ├── assets/ # Images, fonts, etc. │ ├── App.jsx # Root React component │ ├── App.css # Styles for App.jsx │ ├── main.jsx # Entry point (mounts React to the DOM) │ └── index.css # Global styles ├── .gitignore # Files/folders ignored by Git ├── index.html # HTML template (where React mounts) ├── package.json # Project metadata and dependencies ├── package-lock.json # Exact dependency versions └── vite.config.js # Vite configuration (e.g., plugins, build settings) ``` </pre>

**Key Files:**

- **index.html:** The root HTML file where your React app is injected.
- **main.jsx:** Initializes React and renders the root component (`App.jsx`).
- **App.jsx:** The starting point for your React components.
- **vite.config.js:** Configures Vite (e.g., adding plugins like `@vitejs/plugin-react`).

**3. What is `package.json` and Why is it Important?**

**What it is:**

A metadata file for your project that includes:

- **Dependencies:** Lists all packages your project needs (e.g., `react`, `react-dom`).
- **Scripts:** Commands like `npm run dev` (starts the dev server) or `npm run build` (creates a production build).
- **Project Details:** Name, version, description, and author.

**Example:**

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

**Steps:**

**Why it’s important:**

1. **Dependency Management:** Ensures consistent installations across environments with `npm install`.
2. **Script Automation:** Simplifies common tasks (e.g., building, testing).
3. **Collaboration:** Allows developers to replicate the exact environment and versions.
4. **Project Configuration:** Centralizes settings for tools like ESLint or Babel.

Without `package.json`, managing dependencies and project workflows would be error-prone and manual.
