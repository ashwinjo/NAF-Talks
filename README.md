# NAF Conference Notes - Terminal Edition

A modern, terminal-themed single-page website showcasing comprehensive notes from the Network Automation Forum conference. Built with React + Vite and styled with Tailwind CSS, featuring a distinctive black, green, and white terminal aesthetic.

![Terminal Theme](https://img.shields.io/badge/theme-terminal-00ff41?style=for-the-badge)
![React](https://img.shields.io/badge/react-18.3-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/vite-5.2-646cff?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)

## 🎯 Features

- **Terminal-Inspired Design**: Authentic terminal aesthetics with green phosphor glow effects
- **Responsive Layout**: Fully responsive design optimized for mobile, tablet, and desktop
- **Smooth Navigation**: Smooth scrolling with active section tracking
- **Markdown Rendering**: Rich markdown content with syntax highlighting
- **Interactive Sidebar**: Collapsible table of contents with section navigation
- **Typing Animations**: Dynamic text effects and terminal-style animations
- **Network Graphics**: SVG-based network topology visualizations
- **About Me Section**: Professional bio with social links and tech stack

## 📚 Content Structure

The site organizes conference notes by day and track:

- **Introduction**: Overview of the Network Automation Forum
- **Day 1 - General Track**: 9 sessions covering AI, funding, automation frameworks
- **Day 2 - General Track**: 7 sessions on platforms, testing, and autonomy
- **Day 2 - Advanced Track**: 4 technical deep-dives on Ansible, infrastructure tools
- **Day 2 - Leadership Track**: 4 sessions on people-centric leadership
- **Day 3 - Closing Notes**: 5 final sessions including keynotes and vendor talks
- **About Me**: Personal background and professional overview

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/naf-talks.git
cd naf-talks

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The built files will be in the `dist` directory.

## 🚢 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow for automatic deployment.

#### Setup Steps:

1. **Update the base path in `vite.config.js`**:
   ```javascript
   base: '/naf-talks/', // Replace 'naf-talks' with your repo name
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/naf-talks.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Settings > Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   
4. **Trigger deployment**:
   - The workflow will automatically run on every push to `main`
   - Check the "Actions" tab to monitor deployment progress

Your site will be live at: `https://YOUR_USERNAME.github.io/naf-talks/`

### Method 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy using gh-pages package
npm run deploy
```

## 🛠️ Technology Stack

- **React 18.3**: UI library for building components
- **Vite 5.2**: Next-generation frontend build tool
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **React Markdown**: Markdown rendering with GitHub Flavored Markdown support
- **Remark & Rehype**: Markdown processing plugins

## 📁 Project Structure

```
naf-talks/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── terminal-icon.svg       # Favicon
├── src/
│   ├── components/
│   │   ├── AboutMe.jsx         # About section
│   │   ├── App.jsx             # Main app component
│   │   ├── Day1General.jsx     # Day 1 content
│   │   ├── Day2General.jsx     # Day 2 General Track
│   │   ├── Day2Advanced.jsx    # Day 2 Advanced Track
│   │   ├── Day2Leadership.jsx  # Day 2 Leadership Track
│   │   ├── Day3Closing.jsx     # Day 3 content
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Introduction.jsx    # NAF intro
│   │   ├── MarkdownRenderer.jsx # Markdown rendering
│   │   ├── Navigation.jsx      # Top navigation
│   │   ├── Sidebar.jsx         # Table of contents
│   │   └── TerminalEffects.jsx # Visual effects
│   ├── index.css               # Global styles + Tailwind
│   └── main.jsx                # React entry point
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to modify the terminal color scheme:

```javascript
colors: {
  terminal: {
    bg: '#0a0e14',          // Background
    green: '#00ff41',        // Primary green
    'green-dim': '#00cc33',  // Dimmed green
    white: '#e6e6e6',        // Text
    gray: '#8a8a8a',         // Secondary text
  },
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Update the navigation in `Navigation.jsx` and `Sidebar.jsx`

### Modifying Content

Edit the respective day components (`Day1General.jsx`, etc.) to update markdown content.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages (gh-pages method)

### Font Customization

The project uses JetBrains Mono font. To change:

1. Update the Google Fonts link in `index.html`
2. Modify `fontFamily.mono` in `tailwind.config.js`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ashwin Josh**
- LinkedIn: [ashjoresume](https://www.linkedin.com/in/ashjoresume/)
- Email: ashwinjosh@gmail.com

## 🙏 Acknowledgments

- Network Automation Forum for the amazing conference
- All the speakers and presenters
- The network automation community

## 📝 Notes

- The site uses smooth scrolling - all major browsers supported
- Terminal effects are optimized for performance
- Markdown rendering supports tables, code blocks, and GFM syntax
- All animations are CSS-based for optimal performance

## 🐛 Troubleshooting

### Build Issues

If you encounter build errors:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages 404

Make sure:
1. The `base` path in `vite.config.js` matches your repository name
2. GitHub Pages is enabled in repository settings
3. The deployment workflow completed successfully

### Styling Issues

Clear browser cache and hard reload:
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

---

Built with ❤️ and ☕ using React + Vite

