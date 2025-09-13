# Vue.js Starter Template

A modern Vue.js 3 starter template with TypeScript, PrimeVue, Tailwind CSS, Biome, Vite, and FontAwesome.

##  Features

- **Vue 3** - Vue.js with Composition API
- **TypeScript** - Full TypeScript support with strict configuration
- **PrimeVue 4** - Rich UI component library with auto-import
- **Tailwind CSS 4** - Utility-first CSS framework with Vite plugin
- **Biome** - Fast linter and formatter (replaces ESLint + Prettier)
- **Vite 6** - Lightning-fast build tool and dev server
- **FontAwesome** - Comprehensive icon library
- **Vue Router** - Official routing solution
- **Auto-imports** - Automatic component and icon imports

## 📦 Additional Libraries

- **Chart.js** - Data visualization
- **Luxon** - Modern date/time manipulation
- **OpenAPI Fetch** - Type-safe API client
- **ES Toolkit** - Modern utility functions
- **Sass** - CSS preprocessor support

## ️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vue-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Run Biome linter with auto-fix

## ️ Project Structure

```
src/
├── modules/          # Feature modules
├── styles/           # Global styles and SCSS files
├── App.vue           # Root component
├── main.ts           # Application entry point
└── router.ts         # Vue Router configuration
```

## 🎨 Styling

This project uses **Tailwind CSS 4** with the Vite plugin for optimal performance. The configuration includes:

- Tailwind CSS 4 with Vite plugin
- PrimeVue theme integration via `tailwindcss-primeui`
- SCSS support for custom styles
- Global styles in `src/styles/`

##  Code Quality

**Biome** is configured as the linter and formatter with:

- Vue.js support with custom rules
- TypeScript integration
- Import organization disabled (as per preference)
- Custom rules for Vue components

## 🎯 PrimeVue Integration

PrimeVue components are automatically imported and available throughout the application:

- Auto-import resolver configured
- PrimeIcons included
- Theme system integrated with Tailwind

##  FontAwesome Icons

FontAwesome is set up with:

- Free solid and regular icons
- Vue 3 integration
- Auto-import support

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

##  Configuration Files

- `vite.config.ts` - Vite configuration with Vue, Tailwind, and auto-imports
- `biome.jsonc` - Biome linter and formatter configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration (if needed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint:fix` to format code
5. Submit a pull request

##  License

This project is open source and available under the [MIT License](LICENSE).