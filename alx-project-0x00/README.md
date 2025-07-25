# ALX Project 0x00

## Project Setup

This project was bootstrapped using the `create-next-app` CLI tool with the following settings:

- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ ESLint
- ✅ Import alias: `@/*`
- ❌ No `/src` directory
- ❌ No App Router (used Pages Router)

## Getting Started

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/mia06-coder/alx-project-0x00-setup.git
   cd alx-project-0x00
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev -- -p 3000
```

4. Open your browser and navigate to:

```arduino
http://localhost:3000
```

## Features by Task

### Task 0 - Project Initialization

- Initialized with TypeScript and TailwindCSS
- Created folders for `components` and ``interfaces
- Updated `pages/index.tsx` to include a centered heading and a CTA button

### Task 1 - Project Structure Setup

- `alx-project-0x00/`: Main Next.js project
  - `components/`: Reusable UI components
  - `interfaces/`: TypeScript interfaces
  - `pages/index.tsx`: Main page with basic layout

### Task 2 - Basic Routing

- Added two new routes:
  - `/landing` — contains a simple `Landing` functional component
  - `/about` — contains a simple `About` functional component
- No additional routing configuration needed due to Next.js Pages Router
- To test:
  - Visit `http://localhost:3000/landing`
  - Visit `http://localhost:3000/about`

### Task 3 - Rendering Components

- Created reusable card (`components/Card.tsx`) layout for future rendering of listings or content
- Accepts props and renders dynamic UI elements
- Uses images stored in public/assets/images

### Task 4 - Using Components

- Created a Pill component to represent labels or tags.
- Created a Card component that imports and reuses the - Pill component multiple times with different text.
- Ensured that the layout is responsive and consistent with design standards.

### Task 5 - Typing Functional Components

- Added a title prop to the Pill component.
- Defined an interface `PillProps` to type the incoming prop.
- Used the prop in JSX to render dynamic content.

### Task 6 - Advanced Button Component

- This task involved creating a reusable Button component that accepts the following props:
  - title (string): The button's text
  - styles (string): The buttons styles e.g. size, shape, color

## Tech Stack

- **Next.js** (Pages Router)
- **React**
- **TypeScript**
- **TailwindCSS**
