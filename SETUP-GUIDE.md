# Quick Setup Guide for Your Portfolio

## ✅ What's Been Created

Your complete React.js portfolio website is ready! Here's what's included:

### 📁 Project Structure
```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Research.jsx & Research.css
│   │   └── Contact.jsx & Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## 🎯 All Your Content is Included

✅ **Hero Section** - Your introduction, bio, and social links
✅ **About Section** - Education (ANITS, CGPA 8.81), Skills, Certifications
✅ **Experience** - CareerVista AI (Founder), Edumoon (UI/UX Intern)
✅ **Projects** - All 7 projects with detailed descriptions
✅ **Research** - 2 research papers with achievements
✅ **Leadership** - ISTE Club, SAC Club, Placement Coordinator
✅ **Contact** - Email, LinkedIn, GitHub, Phone

## 🚀 To See Your Portfolio

### Option 1: Fix Node Version (Recommended)
The current Node.js version (20.14.0) is slightly outdated. Vite requires 20.19+ or 22.12+.

**Using nvm (Node Version Manager):**
```powershell
nvm install 22
nvm use 22
npm run dev
```

**Or download from:** https://nodejs.org/

### Option 2: Downgrade Vite (Quick Fix)
```powershell
npm install vite@5.4.11 @vitejs/plugin-react@4.3.4
npm run dev
```

Then visit: http://localhost:5173

## 📝 Next Steps - Customization

### 1. Add Your Profile Photo
- Place your photo in `public/profile.jpg`
- Or update the image path in `src/components/Hero.jsx` (line 58)

### 2. Add GitHub Links
Open `src/components/Projects.jsx` and update the `github` and `live` properties:

```javascript
{
  id: '01',
  title: 'CareerVista AI',
  // ...
  github: 'https://github.com/ajayrapeti/your-repo', // Replace with actual link
  live: 'https://your-live-demo.com' // Optional
}
```

### 3. Add Research Paper Links
Open `src/components/Research.jsx` and update:

```javascript
{
  title: 'Personalized Diet Recommendation System',
  // ...
  paperLink: 'https://your-paper-link.com', // Replace
  certificateLink: 'https://your-certificate-link.com', // Replace
}
```

### 4. Add Your Resume PDF
- Place your resume PDF in `public/` folder (e.g., `Resume-Ajay-Rapeti.pdf`)
- Update the link in `src/components/Contact.jsx` (line 72)

## 🎨 Design Features

✨ **Dark Theme** - Professional dark background (#1a1a1a)
✨ **Smooth Animations** - Framer Motion for scroll animations
✨ **Colorful Projects** - Each project has unique gradient colors
✨ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✨ **Floating Decorations** - Animated green accent elements
✨ **Modern UI/UX** - Based on the reference designs you provided

## 🌈 Color Scheme

- **Accent Green**: #7FFF00 (Primary accent)
- **Blue**: #6B8FE8 (CareerVista AI, Education)
- **Purple**: #9D7FE8 (Research, Experience)
- **Orange**: #FFB84D (Project accents)
- **Pink**: #FF6B9D
- **Teal**: #4ECDC4
- **Indigo**: #6C63FF

## 📱 Sections Included

1. **Navbar** - Sticky navigation (My Work, Resume, Contact)
2. **Hero** - Greeting, bio, profile image, social icons, CTA buttons
3. **About** - Education, Technical Skills (5 categories), Experience (2 positions), Certifications (3), Leadership (3 roles)
4. **Projects** - 7 major projects with tech stacks and descriptions
5. **Research** - 2 research papers with achievements and links
6. **Contact** - 3 contact cards + Get in Touch section + Footer

## 🐛 Troubleshooting

### "Cannot find module" errors?
```powershell
npm install
```

### Port 5173 already in use?
```powershell
# Kill the process or Vite will auto-assign another port
```

### Animations not working?
- Make sure Framer Motion is installed: `npm install framer-motion`

## 🚀 Deployment

Once you're happy with your portfolio:

### Deploy to Vercel (Easiest)
```powershell
npm install -g vercel
npm run build
vercel
```

### Deploy to Netlify
1. Build: `npm run build`
2. Drag the `dist` folder to Netlify

### Deploy to GitHub Pages
```powershell
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

## 💡 Tips

- Test on mobile devices using browser dev tools
- Update meta tags in `index.html` for SEO
- Add your own favicon in `public/`
- Consider adding a custom domain

## 📞 Need Help?

All components are well-structured and documented. Each section is independent and easy to modify.

**Your contact info in the portfolio:**
- Email: ajayrapeti117@email.com
- LinkedIn: linkedin.com/in/ajay-rapeti
- GitHub: github.com/ajayrapeti
- Phone: +91-8106054591

---

🎉 **Your portfolio is ready to shine!** Just add your images and links, and you're good to go!
