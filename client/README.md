# React Vite Clean Template

This template provides a minimal setup to get React working in Vite, completely clean, without any extra noise. It's configured to use `pnpm` as the package manager for managing dependencies.

## Getting Started

### Option 1: Clone the Repository and Remove Git History

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Pilag6/rvct.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd rvct
   ```

3. **Remove Existing Git History:**

   ```bash
   rm -rf .git
   ```

   This command will remove the existing Git history. That way, you can start fresh with your own Git repository.

4. **Initialize a New Git Repository:**

   ```bash
   git init
   ```

   This command initializes a new Git repository for your project.

5. **Install Dependencies using pnpm:**

   ```bash
   pnpm install
   ```

   This command installs project dependencies using pnpm. If you don't have pnpm installed, you can install it globally using `npm install -g pnpm`.

6. **Run the Development Server:**

   ```bash
   pnpm run dev
   ```

   This command will start the development server, and you can access your React application at `http://localhost:5173`.

### Option 2: Use degit

Alternatively, you can use `degit` to scaffold the template without cloning the entire repository.

1. **Use degit to Fetch the Template:**

   ```bash
   npx degit Pilag6/rvct my-react-app
   ```

   This command fetches the template without Git history and renames the project to `my-react-app`. You can replace `my-react-app` with your preferred project name.

   If you don't have `degit` installed, you can install it globally using `npm install -g degit`.

2. **Navigate to the Project Directory:**

   ```bash
   cd my-react-app
   ```

3. **Initialize a New Git Repository:**

   ```bash
   git init
   ```

   This command initializes a new Git repository for your project.

4. **Install Dependencies using pnpm:**

   ```bash
   pnpm install
   ```

   This command installs project dependencies using pnpm. If you don't have pnpm installed, you can install it globally using `npm install -g pnpm`.

5. **Run the Development Server:**

   ```bash
   pnpm run dev
   ```

   This command will start the development server, and you can access your React application at `http://localhost:5173`.

## Project Structure

The project structure is kept simple and clean to make it easy to understand and extend. Here's an overview:

```
rvct/
|-- public/
|
|-- src/
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- jsconfig.json
|-- package.json
|-- pnpm-lock.yaml
|-- README.md
|-- vite.config.js
```

- **public/:** The directory where static assets are stored.
- **src/:** The directory where the source code is stored.
    - **App.css:** Global styles for the application.
    - **App.jsx:** The root React component.
    - **index.css:** Global styles for the application.
    - **main.jsx:** The entry point for the application.
- **.eslintrc.cjs:** ESLint configuration.
- **.gitignore:** Specifies files and directories to be ignored by version control.
- **index.html:** The HTML template for the application.
- **jsconfig.json:** Configuration file for JavaScript.
- **package.json:** Project configuration and dependencies.
- **pnpm-lock.yaml:** Lockfile for pnpm.
- **README.md:** Documentation for the project.
- **vite.config.js:** Configuration file for Vite.

## Customization

Feel free to customize the template based on your project requirements. You can add additional components, styles, or configurations as needed. The goal is to keep the initial setup minimal, allowing you to build upon it according to your preferences.

## Commands

- **Development Server:**

  ```bash
  pnpm run dev
  ```

  Start the development server with hot module replacement.

- **Build for Production:**

  ```bash
  pnpm run build
  ```

  Build the project for production, generating optimized and minified assets in the `dist` directory.

- **Preview the Production Build:**

  ```bash
  pnpm run preview
  ```

  Preview the production build locally.

## Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [pnpm Documentation](https://pnpm.io/)
- [Degit Documentation](https://www.npmjs.com/package/degit)

Enjoy coding with this clean React Vite template! If you have any feedback or suggestions, feel free to contribute or open an issue on the [GitHub repository](https://github.com/Pilag6/rvct).