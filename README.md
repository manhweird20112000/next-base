# Next.js Base Template

A modern Next.js template with TypeScript, Tailwind CSS, internationalization support, and a clean architectural structure.

## Features

- **Next.js 15.3.0** - The latest version of Next.js with App Router
- **TypeScript** - Type-safe code development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Internationalization** - Multi-language support via next-intl
- **Zustand** - Simple state management
- **Axios** - HTTP client with interceptors and type safety
- **Clean Architecture** - Organized project structure with separation of concerns

## Project Structure

```
src/
├── app/             # Next.js App Router components and pages
├── components/      # Reusable UI components
│   ├── layout/      # Layout components
│   └── ui/          # UI components like buttons, inputs, etc.
├── core/            # Core functionality
│   └── api/         # API service and HTTP client
├── i18n/            # Internationalization configuration
├── lib/             # Utility functions and helpers
├── services/        # Service layer for API calls
├── stores/          # Zustand state stores
└── types/           # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- yarn or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/next-base.git
cd next-base
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
yarn dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development Guidelines

### Directory Structure Guidelines

- Place new page components in the appropriate locale directory in `src/app/[locale]/`
- Add reusable UI components to `src/components/ui/`
- Create new API services in `src/services/`
- Add new state stores in `src/stores/`

### Code Style

- Follow TypeScript best practices with appropriate typing
- Use functional components with React hooks
- Follow the naming conventions established in the codebase

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

MIT
