# Next.js Component-First Template

A streamlined template for building React applications with Next.js, focusing on component-driven development.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📚 Storybook for component development
- 🧪 Jest and React Testing Library for testing
- 📝 TypeScript for type safety
- 🎯 ESLint and Prettier for code quality

## Project Structure

```
src/
├── app/                   # Next.js app router pages
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   └── Button/      # Example component
│   │       ├── Button.tsx
│   │       ├── Button.test.tsx
│   │       ├── Button.stories.tsx
│   │       └── index.ts
│   └── features/        # Feature-specific components
├── hooks/               # Custom React hooks
├── utils/              # Utility functions
└── types/             # TypeScript type definitions

## Getting Started

1. Clone this template:
\`\`\`bash
git clone [repository-url] my-project
cd my-project
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Start Storybook:
\`\`\`bash
npm run storybook
\`\`\`

## Available Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run start\`: Start production server
- \`npm run lint\`: Run ESLint
- \`npm run storybook\`: Start Storybook
- \`npm run test\`: Run tests
- \`npm run test:watch\`: Run tests in watch mode
- \`npm run format\`: Format code with Prettier

## Component Development

1. Create new components in \`src/components\`
2. Follow the component structure:
   - Component file (TSX)
   - Story file
   - Test file
   - Index file for exports

## Best Practices

- Keep components small and focused
- Write stories for component variations
- Include unit tests for components
- Use TypeScript for type safety
- Follow the established folder structure
- Use Tailwind CSS for styling
