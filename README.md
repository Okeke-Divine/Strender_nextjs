# Strender · [![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat&logo=next.js)](https://nextjs.org) [![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=flat&logo=prisma)](https://prisma.io) [![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat&logo=mysql)](https://mysql.com)

> **An Automated Content Engine for Real-Time News & Sports Blogging.**

## 🚀 Live Demo
👉 **[Experience Strender Live](https://strender.okekedivine.com.ng)**

## 📖 Overview
**Strender** is a full-stack, automated publishing platform that aggregates, curates, and delivers real-time news and sports content. It combines a performant **Next.js 14** frontend with a robust **Prisma/MySQL** backend to create a seamless, CMS-like experience with community engagement features, all without requiring manual content updates.

## 🛠️ Tech Stack & Architecture
- **Framework:** Next.js 14 (App Router, Server Components, API Routes)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MySQL with Prisma ORM
- **Deployment:** Vercel
- **Authentication:** N/A (Anonymous commenting system)

## 📈 Core Features
- **🤖 Automated Publishing:** The core engine for content aggregation and posting.
- **📂 Dynamic Categories:** Sports, News, Politics, War, easily extensible for new topics.
- **💬 Anonymous Commenting:** Frictionless user engagement without auth barriers.
- **🔍 SEO Engine:** Automatically generated meta tags, open graph data, and semantic HTML.
- **🎨 Responsive Design:** Flawless experience on all device sizes.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MySQL database

### Installation & Local Development
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Okeke-Divine/Strender_nextjs.git
    cd Strender_nextjs
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    ```bash
    cp .env.example .env.local
    ```
    Edit `.env.local` with your configuration

4.  **Initialize the database:**
    ```bash
    npx prisma generate
    npx prisma db push
    ```
    
5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧠 Knowledge Demonstrated
- **Next.js 14 App Router:** Advanced routing, data fetching (SSR, SSG), and Server Components.
- **Full-Stack Development:** Integrated frontend and backend logic within a single framework.
- **Database Design:** Modeling relational data with Prisma and MySQL.
- **TypeScript:** Implementing end-to-end type safety.
- **User Experience:** Designing intuitive, frictionless interactions (anonymous comments).
- **Deployment & DevOps:** Configuring and deploying a complex application on Vercel.

---

**Built by [Divine-Vessel](https://github.com/Okeke-Divine)**
