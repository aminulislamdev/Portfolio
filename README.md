<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Md.%20Aminul%20Islam%20Mahi&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Full%20Stack%20Developer%20Portfolio&descSize=18&descAlignY=58" alt="Header banner" width="100%" />

<a href="https://aminul-seven.vercel.app/">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=3B82F6&center=true&vCenter=true&width=600&lines=Aspiring+Full+Stack+Developer;Next.js+%7C+TypeScript+%7C+Tailwind+CSS;Open+to+Junior+%26+Internship+Roles" alt="Typing SVG" />
</a>

<br/>

[![Live Demo](https://img.shields.io/badge/Live_Demo-aminul--seven.vercel.app-3B82F6?style=for-the-badge&logo=vercel&logoColor=white)](https://aminul-seven.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

</div>

---

## 📑 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started-locally)
- [How to Update Content](#-how-to-update-content)
- [Connect with Me](#-connect-with-me)
- [License](#-license)

---

## 📖 About The Project

This portfolio is designed to highlight my frontend expertise, ongoing backend learning journey, and real-world projects. Instead of focusing on freelance services, it is specifically tailored to attract **Tech Recruiters, Engineering Managers, and HRs** for **Junior Full Stack Developer** and **Internship** roles.

It features a clean, minimal, and premium UI with a fully functional dark mode, responsive layouts, and a dedicated A4 print-ready CV page.

> 💡 **Goal:** Show honest skills, real projects, and readiness to grow on a professional team.

---

## ✨ Key Features

| | Feature | Description |
| :-: | :--- | :--- |
| 🎨 | **Modern UI/UX** | Clean, minimal design with generous whitespace and premium typography |
| 🌗 | **Dark / Light Mode** | Seamless theme switching with `next-themes` and `localStorage` persistence |
| 📱 | **Fully Responsive** | Optimized for mobile, tablet, and desktop devices |
| 🗂️ | **Dynamic Projects** | Featured projects with live demo and GitHub links, plus a roadmap of planned work |
| 🏅 | **Interactive Certificates** | Gallery with a modal popup for viewing full certificates |
| 📄 | **A4 Print-Ready CV** | Dedicated `/cv` route that fits a single A4 page, with a "Download PDF" (Print) button |
| 🎯 | **Recruiter Focused** | Content tailored to reflect honesty and readiness for a junior developer role |

---

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind,react,vercel,git,github,vscode&theme=dark" alt="Tech stack icons" />

</div>

<br/>

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React & Custom SVGs |
| **Theme** | next-themes |
| **Deployment** | Vercel |

---

## 📂 Project Structure

<details>
<summary><b>Click to expand the folder tree</b></summary>

<br/>

```text
├── public/                 # Static assets (images, logo, certificates, cv.pdf)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── cv/             # Dedicated A4 CV page (/cv)
│   │   ├── globals.css     # Global styles & Tailwind directives
│   │   ├── layout.tsx      # Root layout with ThemeProvider
│   │   └── page.tsx        # Main portfolio page
│   ├── components/         # Reusable components
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, Certificates, Timeline, Contact
│   │   ├── certificates/   # CertificateCard, CertificateGrid, CertificateModal
│   │   └── ui/             # Button, Badge, SectionTitle, ProjectCard
│   ├── data/               # Static data files
│   │   ├── certificates.ts # Certificate data
│   │   ├── navLinks.ts     # Navigation links
│   │   ├── projects.ts     # Featured & Roadmap projects data
│   │   ├── skills.ts       # Skills & Tech Stack data
│   │   └── timeline.ts     # Developer journey data
│   └── ThemeProvider.tsx   # Theme context provider
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

</details>

---

## 🚀 Getting Started Locally

Follow these steps to run the project on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (**v18 or higher**).

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aminulislamdev/aminul-portfolio.git

# 2. Navigate to the project directory
cd aminul-portfolio

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Then open your browser:

| Page | URL |
| :--- | :--- |
| 🏠 Main Portfolio | [http://localhost:3000](http://localhost:3000) |
| 📄 A4 CV Page | [http://localhost:3000/cv](http://localhost:3000/cv) |

---

## 💡 How to Update Content

This portfolio is easy to maintain. You do not need to touch the UI components to update your data.

| I want to... | Edit this |
| :--- | :--- |
| Update projects | `src/data/projects.ts` (`featuredProjects` and `roadmapProjects` arrays) |
| Update skills | `src/data/skills.ts` |
| Add certificates | Add the image to `public/certificates/`, then update `src/data/certificates.ts` |
| Update the CV | `src/app/cv/page.tsx` (layout is built for A4 printing) |

---

## 📬 Connect with Me

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-aminul--seven.vercel.app-3B82F6?style=for-the-badge&logo=vercel&logoColor=white)](https://aminul-seven.vercel.app/)
[![Email](https://img.shields.io/badge/Email-aminulislam424842@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aminulislam424842@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-@aminulislamdev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aminulislamdev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aminulislamjs-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aminulislamjs)

📍 Rajshahi, Bangladesh

</div>

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">

<br/>

⭐ **If you like this project, consider giving it a star!** ⭐

<i>Built with ❤️ by Md. Aminul Islam Mahi</i>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" alt="Footer banner" width="100%" />

</div>