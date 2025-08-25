# 📸 Photography Portfolio Website

A modern, responsive photography portfolio website built with React, Vite, and Tailwind CSS. Features a sleek design with smooth animations, image galleries, and a professional layout perfect for showcasing photography work.

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with dark theme
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🖼️ Dynamic Hero Section**: Auto-cycling background images every 4 seconds with smooth crossfade transitions
- **🖱️ Interactive Portfolio**: Grid gallery with hover effects and lightbox modal
- **⚡ Smooth Animations**: Powered by Framer Motion for engaging user experience
- **♿ Accessible**: Built with accessibility best practices and ARIA labels
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **📧 Contact Form**: Integrated contact form with validation
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML structure
- **🌐 GitHub Pages Hosting**: Automatic deployment via GitHub Actions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Validation**: Built-in React validation
- **Image Optimization**: Lorem Picsum API for placeholder images
- **Code Quality**: ESLint with modern JavaScript standards

## 🌐 Live Demo

The photography portfolio is automatically deployed to GitHub Pages:

**🔗 Live Site**: https://ethanpeters96.github.io/GB-TESTING/

The site is automatically updated whenever code is pushed to the main branch.

## 🚀 Deployment

### Automatic GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

- **Trigger**: Automatic deployment on push to `main` branch
- **Build Process**: Vite build generates optimized static files  
- **Dependencies**: Updated ESLint plugins for compatibility with ESLint 9
- **Deployment**: Files are automatically deployed to GitHub Pages
- **URL**: Available at `https://ethanpeters96.github.io/GB-TESTING/`

### Manual Deployment

If you want to deploy manually or to a different hosting service:

```bash
# Build the project
npm run build

# The built files will be in the 'dist' directory
# Upload the contents of 'dist' to your hosting service
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd photography-portfolio
   ```

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

1. **Open your browser**
   Navigate to `http://localhost:3001` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```text
src/
├── components/          # React components
│   ├── About.jsx       # About section with photographer info
│   ├── Contact.jsx     # Contact form and information
│   ├── ErrorBoundary.jsx # Error handling component
│   ├── Hero.jsx        # Hero section with cycling backgrounds
│   ├── Lightbox.jsx    # Image lightbox modal
│   ├── Navigation.jsx  # Navigation header
│   └── Portfolio.jsx   # Image gallery grid
├── utils/              # Utility functions and constants
│   ├── constants.js    # App configuration and constants
│   └── helpers.js      # Helper functions
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization

### Changing Content

1. **Update photographer information** in `src/utils/constants.js`:
   ```javascript
   export const APP_CONFIG = {
     PHOTOGRAPHER_NAME: 'Your Name',
     TAGLINE: 'Your Photography Style',
     DESCRIPTION: 'Your description...',
     // ... other configs
   }
   ```

1. **Replace portfolio images** in `src/components/Portfolio.jsx`:
   ```javascript
   const images = [
     {
       id: 1,
       src: 'path/to/your/image.jpg',
       alt: 'Description of your image',
       title: 'Image Title',
     },
     // ... more images
   ]
   ```

1. **Update hero background images** in `src/components/Hero.jsx`:
   ```javascript
   const heroImages = [
     'path/to/hero-image-1.jpg',
     'path/to/hero-image-2.jpg',
     // ... more images
   ]
   ```

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font imports in `index.css` and `tailwind.config.js`
- **Animations**: Customize animation timings in `src/utils/constants.js`

## 🎯 Key Components

### Hero Section

- Auto-cycling background images every 4 seconds with smooth crossfade transitions
- Smooth transitions between images
- Call-to-action button with smooth scroll to portfolio

### Portfolio Gallery
- Responsive grid layout (1-3 columns based on screen size)
- Hover effects with image scaling and overlay
- Click to open images in lightbox modal
- Error handling for broken image links

### Lightbox Modal
- Full-screen image viewing
- Navigate between images with arrow keys or buttons
- Download functionality for images
- Keyboard accessibility (ESC to close)

### Contact Form
- Form validation with error messages
- Responsive design
- Professional contact information display

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance

## 🚀 Performance Optimizations

- Lazy loading for images
- Optimized asset bundling with Vite
- Efficient re-renders with React best practices
- CSS purging in production builds
- Image compression and optimization

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📦 Dependencies

### Production Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `framer-motion` - Animation library
- `prop-types` - Runtime type checking

### Development Dependencies
- `vite` - Build tool and dev server
- `tailwindcss` - Utility-first CSS framework
- `eslint` - JavaScript linting
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

## 🤝 Contributing

1. Fork the repository
1. Create your feature branch (`git checkout -b feature/amazing-feature`)
1. Commit your changes (`git commit -m 'Add some amazing feature'`)
1. Push to the branch (`git push origin feature/amazing-feature`)
1. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images provided by [Lorem Picsum](https://picsum.photos/)
- Icons and design inspiration from modern portfolio websites
- Built with love using React and modern web technologies

---

**Made by Ethan Peters**

*Feel free to star ⭐ this repository if you found it helpful!*
