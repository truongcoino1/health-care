# Arent Health Management App

A health management web application built as an entry test for Arent. The app allows users to track their daily food intake, view body metrics via charts, record exercises, write diary entries, and browse recommended health columns — all presented in a dark-themed Japanese UI following the provided design specifications.

## Requirements

- Node.js 18+ (LTS recommended)
- Yarn 1.x (the project uses Yarn as its package manager)

## Tech Stack & Rationale

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library — component-based architecture for reusable UI pieces |
| [TypeScript](https://www.typescriptlang.org/) | Type safety across the entire codebase |
| [Vite](https://vitejs.dev/) | Build tool — near-instant HMR and fast production builds |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS — rapid styling that aligns pixel-perfect with design specs |
| [Highcharts](https://www.highcharts.com/) | Line chart rendering with filtering capabilities on the Home and Records pages |
| [React Router v6](https://reactrouter.com/) | Client-side routing between the 4 screens |
| [Axios](https://axios-http.com/) | HTTP client with interceptors for API communication |

## Getting Started

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

Open the URL shown in the terminal (default: [http://localhost:5173](http://localhost:5173)) in your browser.

Build for production:

```bash
yarn build
```

Lint the codebase:

```bash
yarn lint
```

## Problem

The task requires building a frontend application that:

1. Faithfully implements the provided design specifications (specific color palette, Japanese typography, hexagonal UI elements).
2. Contains **3 screens** — Home, Records, and Column — each with unique layout and components.
3. Simulates real-world interactions such as data filtering, paginated loading ("load more"), and chart visualization.
4. Renders interactive **Line Charts** with time-based filtering (daily/weekly/monthly/yearly).
5. Handles basic authentication flow with protected routes.

## Solution

### Architecture

- **Pages & Routing**: React Router v6 with `BrowserRouter`. Routes are defined in `App.tsx`. Home (`/`) and Records (`/records`) are wrapped in `ProtectedRoute`, while Login (`/login`) and Column (`/column`) are public.
- **Authentication**: A lightweight `AuthContext` using React Context + `localStorage` persistence. Login is mocked — any click on the login button authenticates the user.
- **State Management**: No external state library. Each page manages its own state via **custom hooks** (`useHome`, `useFoodList`, `useRecordChart`, `useMyDiary`, etc.), keeping logic separated from presentation.
- **Mock Data**: All data lives in the `mock/` directory (`foods.ts`, `records.ts`, `thumbnail.json`). Custom hooks simulate data fetching with filtering and pagination logic.
- **Styling**: TailwindCSS with a custom theme extended in `tailwind.config.ts` for the design's specific colors (`dark-500`, `dark-600`, `primary-300`, `primary-400`, etc.).

### Project Structure

```
src/
├── contexts/        # React Context providers (AuthContext)
├── components/
│   ├── common/      # Shared components (Header, Footer, Chart, GoToTop, etc.)
│   ├── home/        # Home page components (Hexagon, FoodList, FoodSummary)
│   ├── column/      # Column page components (ColumnThumbnail, Recommend)
│   └── record/      # Records page components (RecordChart, ExerciseList, MyDiary)
├── hooks/           # Custom hooks for business logic per component
├── pages/           # Page-level components (Login, HomePage, Records, Column)
├── services/        # Axios-based API service layer
│   ├── index.ts     # Base Axios instance with interceptors
│   ├── auth.ts      # Authentication APIs (login, register, logout)
│   ├── foods.ts     # Food CRUD APIs with pagination
│   ├── records.ts   # Body records, exercises & diary APIs
│   └── columns.ts   # Column listing & recommendation APIs
└── utils/           # Utility functions (chart helpers, data transformers)
mock/                # Mock data files (foods, records, thumbnails)
```

### API Service Layer

An Axios-based API layer is pre-configured in `src/services/` for future backend integration. It includes:

- **Base instance** (`index.ts`): Axios instance with `Bearer` token injection via request interceptor and global 401 redirect via response interceptor. Base URL is configurable through the `VITE_API_URL` environment variable.
- **Auth** (`auth.ts`): Login, register, logout, and current user endpoints.
- **Foods** (`foods.ts`): Full CRUD for food entries with category filtering and pagination.
- **Records** (`records.ts`): Body metric records, exercises, and diary entries with chart filter support.
- **Columns** (`columns.ts`): Column listing with tag filtering, pagination, and recommendations.

> **Note**: The app currently runs entirely on mock data. These API services are scaffolded and ready but not wired into any hooks or components yet.

## Operation Verification

After starting the dev server (`yarn dev`), follow these steps to verify each feature:

### 1. Login Flow

- Open the app — you should be **redirected to `/login`** automatically.
- Click the **ログイン** (Login) button.
- You should be redirected to the Home page (`/`).
- Refresh the page — you should remain logged in (session persisted in `localStorage`).

### 2. Home Page (`/`)

- **Food summary** section displays at the top-left with calorie information.
- **Line chart** renders on the top-right with body metric data.
- **Hexagonal category buttons** (Morning, Lunch, Dinner, Snack) are displayed below the chart.
- Click a **hexagon** to filter the food list by that category.
- A **"記録をもっと見る" (Load more)** button appears at the bottom — click it to load additional food items.

### 3. Records Page (`/records`)

- Navigate via the **自分の記録** link in the header, or go to `/records`.
- **Record summary** section shows category cards at the top.
- **Body record chart** with a dropdown filter (day/week/month/year) — change the filter and verify the chart updates.
- **Exercise list** and **Diary list** sections are displayed below.
- Click **"自分の記録をもっと見る"** to load more diary entries.

### 4. Column Page (`/column`)

- Navigate to `/column`.
- **Recommended columns** section appears at the top.
- **Column thumbnails** are displayed in a grid below.
- Click **"コラムをもっと見る"** to load more column thumbnails.

### 5. Common UI

- **Header**: Logo links to Home, navigation icons for Records/Challenge/Notifications. Hamburger menu opens a dropdown overlay.
- **Notification badge**: A red number badge appears on the notification icon.
- **Footer**: Displayed at the bottom of every page.
- **Scroll to top**: A floating button appears when scrolling down — click it to scroll back to the top.
- **Responsive**: Resize the browser to verify mobile layout adjustments (hamburger menu, stacked layouts).
