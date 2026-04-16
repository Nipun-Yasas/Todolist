# Next.js Todo List

A clean and minimal Todo List application built with Next.js App Router and React.

The app focuses on quick task capture, simple edit/delete flows, and local persistence using browser localStorage.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- ESLint 9
- Custom CSS styling (no UI framework required)

## Features

- Add tasks quickly from the input area
- Prevents adding empty tasks
- Edit a task (moves selected task back to input for update)
- Delete tasks
- Empty-state message when no tasks are available
- Data persistence in localStorage so tasks survive page refresh
- Responsive layout optimized for desktop and mobile

## Getting Started

### Prerequisites

- Node.js 18.17+ (or Node.js 20+ recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

- npm run dev: starts the Next.js development server
- npm run build: creates an optimized production build
- npm run start: starts the production server
- npm run lint: runs ESLint checks

## Project Structure

```text
.
|-- public/
|-- src/
|   |-- app/
|   |   |-- layout.jsx      # Root HTML layout and global imports
|   |   |-- page.jsx        # Home route
|   |
|   |-- components/
|   |   |-- Todoinput.jsx   # Input + add button UI
|   |   |-- Todolist.jsx    # List and empty state renderer
|   |   |-- TodoCard.jsx    # Single task row with edit/delete actions
|   |
|   |-- App.jsx             # Client-side todo state and handlers
|   |-- index.css           # App styling and responsive rules
|
|-- eslint.config.js
|-- package.json
```

## How State Works

- The todo array and current input value are managed in src/App.jsx.
- On add/edit/delete, the app updates React state and writes the updated list to localStorage.
- On first load, the app reads localStorage and hydrates existing todos.

## Notes

- Task completion (checked/unchecked) is not implemented yet.
- Data is stored per-browser in localStorage; there is no backend database.

## Suggested Next Improvements

- Add Enter key support to submit tasks
- Add completed-task status and filtering
- Add due dates and priority labels
- Add unit/component tests
