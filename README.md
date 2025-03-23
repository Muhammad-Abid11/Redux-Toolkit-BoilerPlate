# React Redux Toolkit & RTK Query Boilerplate

A minimal setup for React applications using Redux Toolkit for state management, built with Vite.

## Features

- React 18
- Redux Toolkit for efficient state management
- RTK Query for data fetching and caching
- Vite for fast development and building
- ESLint configuration
- Hot Module Replacement (HMR)
- JSON Server for mock API development

## Getting Started

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start development server:
    ```bash
    npm run dev
    ```
4. Start JSON Server (in a separate terminal):
    ```bash
    npm run server
    ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run server` - Start JSON Server for mock API

## Project Structure

```
src/
  ├── components/
  ├── features/
  ├── store/
  |   ├── api/        # RTK Query API definitions
  |   └── slices/     # Redux slices
  ├── App.jsx
  └── main.jsx
db.json              # JSON Server database file
```

## RTK Query Usage

The project includes RTK Query for efficient API calls and caching. API endpoints are defined in `src/store/api/`.

## JSON Server

The project uses JSON Server to mock REST API endpoints during development. The `db.json` file in the root directory serves as the mock database.

