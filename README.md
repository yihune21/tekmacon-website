# Tekmacon PLC - Company Website

A modern, responsive React TypeScript website for Tekmacon PLC, an electrical engineering company specializing in installation, design, and consultancy services.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **TypeScript**: Type-safe development with TypeScript
- **Modular Components**: Well-organized component structure
- **Interactive Elements**: Smooth scrolling navigation and interactive forms

## Project Structure

```
tekmacon-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Projects/
│   │   ├── Testimonials/
│   │   ├── Clients/
│   │   ├── CTA/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Website Sections

1. **Header/Navigation**: Fixed navigation with smooth scroll to sections
2. **Hero Section**: Eye-catching introduction with company highlights
3. **About Section**: Company history, values, and certifications
4. **Services Section**: Six core services with detailed descriptions
5. **Projects Showcase**: Portfolio of completed projects with filtering
6. **Testimonials**: Client feedback and ratings
7. **Clients Section**: Logo grid of trusted clients
8. **CTA Banner**: Call-to-action for project inquiries
9. **Contact Section**: Contact form and company details
10. **Footer**: Quick links, social media, and company information

## Technologies Used

- React 18
- TypeScript
- CSS3 with CSS Variables
- Responsive Grid Layout
- CSS Animations

## Customization

- Update company information in respective component files
- Modify colors in `App.css` CSS variables
- Replace placeholder images with actual project images
- Update contact information in Contact and Footer components

## License

© 2024 Tekimacon Engineering PLC. All rights reserved
