import { useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Terminal,
  Database,
  Globe,
  Cpu,
  Shield,
  Layers,
  Bot,
  Award,
} from "lucide-react";

import cvAsset from "@/assets/sofien-nefzi-cv.pdf.asset.json";
import aboutAsset from "@/assets/sofien-about.jpg.asset.json";
import certLinux from "@/assets/certs/image.png.asset.json";
import certEit from "@/assets/certs/image-2.png.asset.json";
import certGoogle from "@/assets/certs/image-3.png.asset.json";
import certAzure from "@/assets/certs/image-4.png.asset.json";
import certSpring from "@/assets/certs/image-5.png.asset.json";
import certPython from "@/assets/certs/image-6.png.asset.json";
import certGooglePyOs from "@/assets/certs/image-7.png.asset.json";
import certIbmPyDs from "@/assets/certs/image-8.png.asset.json";
import certJhuWeb from "@/assets/certs/image-9.png.asset.json";
import certIimaLeadership from "@/assets/certs/image-10.png.asset.json";
import certLinkedInPy from "@/assets/certs/image-11.png.asset.json";
import certBoardAngular from "@/assets/certs/image-12.png.asset.json";
import certSaylorEnglish from "@/assets/certs/image-13.png.asset.json";
import certMetaSocial from "@/assets/certs/image-14.png.asset.json";
import certMetaReact from "@/assets/certs/image-15.png.asset.json";
import certIbmPyDs2 from "@/assets/certs/image-16.png.asset.json";
import certMichiganPhp from "@/assets/certs/image-17.png.asset.json";
import certSpringMvc from "@/assets/certs/image-18.png.asset.json";
import certYanfaEnglish from "@/assets/certs/image-19.png.asset.json";
import certEfsetB2 from "@/assets/certs/image-20.png.asset.json";
import nationalEntrepreneur from "@/assets/certs/national-entrepreneur.jpg.asset.json";
import ai4digitalAsset from "@/assets/agencies/ai4digital.png.asset.json";
import brimaDigitalAsset from "@/assets/agencies/brimadigital.png.asset.json";
import projWhatsappAi from "@/assets/projects/whatsapp-ai.png.asset.json";
import projColdEmail from "@/assets/projects/cold-email.jpg.asset.json";
import projGmailAiAgent from "@/assets/projects/gmail-ai-agent.jpg.asset.json";
import projIndeed from "@/assets/projects/indeed-scraper.jpg.asset.json";
import projLinkedin from "@/assets/projects/linkedin-scraper.jpg.asset.json";
import projNoteApp from "@/assets/projects/note-app.png.asset.json";
import projCoverLetter from "@/assets/projects/cover-letter.jpg.asset.json";
import projGmapsLead from "@/assets/projects/gmaps-lead.jpg.asset.json";
import projAstar from "@/assets/projects/astar.png.asset.json";
import projTelegramAi from "@/assets/projects/telegram-ai.png.asset.json";
import projAuraStore from "@/assets/projects/aura-store.png.asset.json";
import projLifeManager from "@/assets/projects/life-manager.png.asset.json";
import projChatDb from "@/assets/projects/chat-db.png.asset.json";

import projMobileLogin from "@/assets/projects/mobile-login.png.asset.json";
import projEmailSupport from "@/assets/projects/email-support.png.asset.json";
import projEcomArabic from "@/assets/projects/ecom-arabic.png.asset.json";
import projFekraFlous from "@/assets/projects/fekra-flous.jpg.asset.json";
import projFlower from "@/assets/projects/flower.png.asset.json";
import projCommunityMgr from "@/assets/projects/community-mgr.png.asset.json";
import projMonoprix from "@/assets/projects/monoprix.png.asset.json";
import projNeutrogena from "@/assets/projects/neutrogena.png.asset.json";
import projEthno from "@/assets/projects/ethno-freelance.png.asset.json";
import projFirstAi from "@/assets/projects/first-ai-agent.png.asset.json";
import projAuthUi from "@/assets/projects/auth-ui.png.asset.json";
import projQrGen from "@/assets/projects/qr-gen.png.asset.json";
import projEsenSite from "@/assets/projects/esen-site.png.asset.json";
import projLibraryCrud from "@/assets/projects/library-crud.png.asset.json";
import projOdoo from "@/assets/projects/odoo.png.asset.json";
import projAirTravel from "@/assets/projects/air-travel.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sofyen Nefzi | Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sofyen Nefzi, a Full-Stack Developer specializing in Angular, Spring Boot, Python, and n8n automation. Based in Tunis, Tunisia.",
      },
      { property: "og:title", content: "Sofyen Nefzi | Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-Stack Developer | Angular, Spring Boot, Python & n8n Automation",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sofyen Nefzi | Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Full-Stack Developer | Angular, Spring Boot, Python & n8n Automation",
      },
    ],
  }),
  component: Index,
});

const profilePicture = "https://sofiennefzi.me/profile_picture.jpeg";
const aboutPicture = aboutAsset.url;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    category: "Backend Development",
    icon: Database,
    items: [
      "Spring Boot (Java)",
      "Oracle Database",
      "PostgreSQL",
      "REST APIs",
      "Spring Security & JWT",
      "JavaMail",
    ],
  },
  {
    category: "Frontend Development",
    icon: Globe,
    items: [
      "Angular (TypeScript)",
      "HTML5 / CSS3",
      "JavaScript",
      "Bootstrap",
      "React",
    ],
  },
  {
    category: "Automation & AI",
    icon: Bot,
    items: [
      "Python",
      "n8n Workflows",
      "OpenAI / GPT-4",
      "Apify",
      "LangChain",
      "Web Scraping",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Terminal,
    items: ["Git & GitHub", "Docker", "Linux", "FastAPI", "Flask", "MySQL"],
  },
];

const certifications = [
  { title: "Foundations of Cybersecurity", issuer: "Google", date: "Sep 2023", image: certGoogle.url },
  { title: "React Basics", issuer: "Meta", date: "Feb 2024", image: certMetaReact.url },
  { title: "Frontend Development using Angular", issuer: "Board Infinity", date: "Nov 2024", image: certBoardAngular.url },
  { title: "HTML, CSS & JavaScript for Web Developers", issuer: "Johns Hopkins University", date: "Feb 2023", image: certJhuWeb.url },
  { title: "Spring Boot: IoC & Dependency Injection", issuer: "Coursera Project Network", date: "Aug 2024", image: certSpring.url },
  { title: "Introduction to Microsoft Azure Cloud Services", issuer: "Microsoft", date: "Feb 2023", image: certAzure.url },
  { title: "Python Project for Data Science", issuer: "IBM", date: "Jun 2023", image: certIbmPyDs.url },
  { title: "Python Project for Data Science (Credly)", issuer: "IBM", date: "Jun 2023", image: certIbmPyDs2.url },
  { title: "Using Python to Interact with the Operating System", issuer: "Google", date: "Jun 2024", image: certGooglePyOs.url },
  { title: "Programming for Everybody (Python)", issuer: "University of Michigan", date: "Jan 2023", image: certPython.url },
  { title: "Python for Non-Programmers", issuer: "LinkedIn Learning", date: "Aug 2023", image: certLinkedInPy.url },
  { title: "The Basics of Linux Command Line", issuer: "Udemy", date: "Dec 2022", image: certLinux.url },
  { title: "Innovation & Entrepreneurship", issuer: "EIT Digital", date: "Nov 2025", image: certEit.url },
  { title: "Leadership Skills", issuer: "IIM Ahmedabad", date: "Oct 2023", image: certIimaLeadership.url },
  { title: "Social Media Management", issuer: "Meta", date: "Aug 2023", image: certMetaSocial.url },
  { title: "Building Web Applications in PHP", issuer: "University of Michigan", date: "Mar 2019", image: certMichiganPhp.url },
  { title: "Spring MVC, Spring Boot and REST Controllers", issuer: "LearnQuest", date: "Aug 2024", image: certSpringMvc.url },
  { title: "EF SET English Certificate — B2 Upper Intermediate", issuer: "EF SET", date: "Nov 2024", image: certEfsetB2.url },
  { title: "English Language — Level 3", issuer: "Yanfa3", date: "Feb 2025", image: certYanfaEnglish.url },
  { title: "Elementary English as a Second Language", issuer: "Saylor Academy", date: "Dec 2022", image: certSaylorEnglish.url },
];

const certRow1 = certifications.slice(0, 10);
const certRow2 = certifications.slice(10);

const projects: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: { github?: string; live?: string };
}[] = [
  {
    title: "ESEN Joker Club",
    description:
      "Designed and developed the official website for our university's Joker Club. Features include event calendars, member profiles, and photo galleries. Implemented responsive design for all devices and optimized loading times.",
    image: "https://sofiennefzi.me/joker.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    links: {},
  },
  {
    title: "Hotel Booking",
    description:
      "A comprehensive hotel management system with room booking functionality, admin dashboard, and payment integration. Developed as my final year project with secure user authentication and database management.",
    image: "https://sofiennefzi.me/hotel.jpg",
    tags: ["PHP", "MySQL", "JavaScript", "jQuery"],
    links: {},
  },
  {
    title: "Gourmet Restaurant",
    description:
      "Modern restaurant website with online reservation system, interactive menu, and food gallery. Focused on creating an elegant UI with smooth animations and intuitive navigation for the best user experience.",
    image: "https://sofiennefzi.me/resto.jpg",
    tags: ["React", "CSS Modules", "Node.js"],
    links: {},
  },
  {
    title: "YouTube Downloader",
    description:
      "Desktop application that downloads YouTube videos in multiple formats and resolutions. Includes progress tracking, playlist support, and quality selection options.",
    image: "https://sofiennefzi.me/yt.jpg",
    tags: ["Python", "Tkinter", "Pytube"],
    links: {},
  },
  {
    title: "Ping Pong",
    description:
      "A retro-style ping pong game with score tracking, difficulty levels, and multiplayer support. Built to understand game physics and real-time user input handling.",
    image: "https://sofiennefzi.me/ping%20pong.jpg",
    tags: ["Python", "Turtle", "Game Dev"],
    links: {},
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe with adjustable AI difficulty. Features include score history, player vs player mode, and responsive design that works on both desktop and mobile devices.",
    image: "https://sofiennefzi.me/XO.jpg",
    tags: ["JavaScript", "Minimax Algorithm", "Responsive Design"],
    links: {},
  },
  {
    title: "Task Flow",
    description:
      "Full-stack productivity application with user authentication, project management, and task tracking. Features a responsive dashboard with productivity insights, priority-based task organization, and intuitive project categorization for seamless workflow management.",
    image: "https://sofiennefzi.me/task.jpg",
    tags: ["Spring Boot", "Angular", "MySQL", "JWT", "TypeScript"],
    links: {},
  },
  {
    title: "Job Search Automator",
    description:
      "Intelligent automation system that streamlines job hunting by scraping relevant positions, analyzing job-description fit with AI, generating personalized cover letters, and organizing opportunities in a centralized dashboard.",
    image: "https://sofiennefzi.me/n8n.jpg",
    tags: ["n8n", "AI Integration", "Web Scraping", "Google Sheets API", "Prompt Engineering"],
    links: {},
  },
  {
    title: "CNSS Data Management Platform",
    description:
      "Secure full-stack web application built during my internship at Caisse Nationale de Sécurité Sociale (Tunis, 2025) for internal data management and automation. Includes an API middleware that auto-extracts and populates databases, with JWT-secured access.",
    image: "https://sofiennefzi.me/interface%20API.png",
    tags: ["Spring Boot", "Angular", "REST APIs", "Spring Security", "JWT", "Bootstrap"],
    links: {},
  },
  {
    title: "CNSS Admin CRUD System",
    description:
      "Comprehensive admin dashboard for CNSS Tunisia with full CRUD, advanced filtering and sorting, bulk data import/export, and activity audit logs for user and data management.",
    image: "https://sofiennefzi.me/Capture%20d%E2%80%99%C3%A9cran%202025-05-22%20232534.jpg",
    tags: ["Spring Boot", "Angular", "TypeScript", "MySQL"],
    links: {},
  },
  {
    title: "ESEN Digital Library System",
    description:
      "Full-stack digital library platform for ESEN with dual-role authentication, complete book lifecycle management, an interactive discovery interface, automated loan tracking, and a responsive design across devices.",
    image: "https://sofiennefzi.me/lib_esen/1.jpeg",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    links: {},
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description:
      "Full-stack e-commerce analytics platform (2024) with real-time sales monitoring, abandoned-cart analysis, CAC calculations, product performance analytics, ad-campaign ROI tracking, and customer segmentation.",
    image: "https://sofiennefzi.me/main.jpg",
    tags: ["Spring Boot", "Angular", "Oracle", "TypeScript", "HTML5", "CSS3"],
    links: {},
  },
  {
    title: "AI Agent Web Scraping",
    description:
      "Intelligent automation that scrapes business data from Google Maps, Yellow Pages, Apollo, Instagram, and TikTok through natural-language commands. The agent picks the right tool per query and delivers cleaned results into Google Sheets in real time.",
    image: "https://sofiennefzi.me/n8n20%20(1).jpg",
    tags: ["n8n", "OpenAI GPT-4", "Apify", "Google Sheets API", "JavaScript", "REST APIs"],
    links: {},
  },
  {
    title: "Python YouTube Downloader",
    description:
      "Python + Flask web app that downloads YouTube videos or extracts audio through a clean UI. Uses FFMPEG for high-quality media processing, dotenv for secure config, and an automated downloads-folder cleanup pipeline.",
    image: "https://sofiennefzi.me/yt-img.jpg",
    tags: ["Python", "Flask", "FFMPEG", "dotenv", "JavaScript", "REST APIs"],
    links: {},
  },
  {
    title: "Restaurant Analytics Chatbot",
    description:
      "Production-ready Flask app bringing natural-language analytics to restaurant operations. Ask about revenue, margins, menu performance or staffing — LangChain + GPT-4o-mini (Gemini fallback) turns questions into SQL and interactive Chart.js dashboards.",
    image: "https://sofiennefzi.me/chat-interface.jpg",
    tags: ["Python", "Flask", "LangChain", "GPT-4o-mini", "MySQL", "SQLAlchemy", "Chart.js"],
    links: { live: "https://sofiennefzi.me/", github: "https://github.com/sofyennefzi/chatbot" },
  },
  {
    title: "AI-Powered Job Application System",
    description:
      "End-to-end n8n workflow that finds roles, scores fit with GPT-4, writes tailored cover letters, and logs structured results into Google Sheets. Scales to 100+ targeted applications in minutes with company-aware context.",
    image: "https://sofiennefzi.me/n8n%20jobs/workflow.jpg",
    tags: ["n8n", "Apify", "OpenAI GPT-4", "Google Sheets", "HTTP APIs", "JSON"],
    links: {},
  },
  {
    title: "Clinic Management System",
    description:
      "Full-stack HealthTech app for dental and medical clinics: drag-and-drop scheduling with FullCalendar, patient management, automated payment tracking, an analytics dashboard, role-based auth with audit logging, and French localization.",
    image: "https://sofiennefzi.me/care/dashbored.jpg",
    tags: ["FastAPI", "MySQL", "Bootstrap 5", "Chart.js", "FullCalendar", "bcrypt"],
    links: {},
  },
  {
    title: "WhatsApp AI Assistant with Calendar & CRM",
    description:
      "Personal WhatsApp AI agent built on n8n that books appointments, sends confirmations, and syncs with Google Calendar and a CRM. Understands Tunisian Arabic and French, and replies in the same language.",
    image: projWhatsappAi.url,
    tags: ["n8n", "OpenAI", "WhatsApp API", "Google Calendar", "CRM"],
    links: {},
  },
  {
    title: "AI Cold Email Agent",
    description:
      "Automated cold outreach pipeline that pulls leads from Google Sheets, drafts personalized emails with AI, sends them and logs delivery status and timestamps back into the sheet.",
    image: projColdEmail.url,
    tags: ["n8n", "OpenAI", "Gmail API", "Google Sheets"],
    links: {},
  },
  {
    title: "AI Agent for Gmail Triage",
    description:
      "AI mail assistant that reads incoming messages, classifies them into labels (Action Required, Follow-up, Job Update, Newsletter, System Notification…) and organizes the inbox automatically.",
    image: projGmailAiAgent.url,
    tags: ["n8n", "OpenAI", "Gmail API", "Classification"],
    links: {},
  },
  {
    title: "Indeed Jobs Scraper with AI Rating",
    description:
      "Automation that scrapes Indeed job postings via Apify, extracts salary, location and description, then rates each opportunity with AI to prioritize the best matches in a live Google Sheet.",
    image: projIndeed.url,
    tags: ["n8n", "Apify", "OpenAI", "Google Sheets"],
    links: {},
  },
  {
    title: "LinkedIn Jobs Scraper",
    description:
      "n8n workflow that scrapes LinkedIn job listings on schedule, cleans the data and pushes structured results into Sheets and a personal dashboard for follow-up.",
    image: projLinkedin.url,
    tags: ["n8n", "Web Scraping", "LinkedIn", "Google Sheets"],
    links: {},
  },
  {
    title: "NoteApp — Android",
    description:
      "Native Android note-taking app built with Java and Room DB. Features pinning, quick search, swipe-to-delete and a clean Material UI. Awarded 20/20 in the BIS 2025 mobile project.",
    image: projNoteApp.url,
    tags: ["Android", "Java", "Room DB", "SQLite"],
    links: {},
  },
  {
    title: "AI Cover Letter Generator",
    description:
      "n8n workflow triggered on schedule that pulls a job dataset from Apify, filters and sends each posting to OpenAI to generate a tailored cover letter, then logs everything into Google Sheets.",
    image: projCoverLetter.url,
    tags: ["n8n", "Apify", "OpenAI", "Google Sheets"],
    links: {},
  },
  {
    title: "Google Maps Lead Scraper to Sheets",
    description:
      "Lead generation automation that extracts business names, phones, emails, addresses and ratings from Google Maps and streams them into a structured Google Sheet ready for outreach.",
    image: projGmapsLead.url,
    tags: ["n8n", "Apify", "Google Maps", "Google Sheets"],
    links: {},
  },
  {
    title: "A* Algorithm Memory Optimization",
    description:
      "Python research project comparing data structures (2D matrix, dictionary, CSR sparse format) for the A* pathfinding algorithm. Benchmarked execution times on grids up to 100×100 to prove memory-locality gains.",
    image: projAstar.url,
    tags: ["Python", "Algorithms", "A*", "Performance"],
    links: {},
  },
  {
    title: "Telegram AI Booking Assistant",
    description:
      "Voice-and-text Telegram bot that transcribes audio messages, understands Arabic/French/English and books, updates or cancels Google Calendar meetings on behalf of the user.",
    image: projTelegramAi.url,
    tags: ["n8n", "Telegram", "OpenAI Whisper", "Google Calendar"],
    links: {},
  },
  {
    title: "VIVID AURA — Fashion Store",
    description:
      "E-commerce fashion brand website with product catalog, collections, cart and Instagram-integrated lookbook. Focus on premium typography and imagery.",
    image: projAuraStore.url,
    tags: ["React", "TypeScript", "Tailwind", "E-commerce"],
    links: {},
  },
  {
    title: "Personal Life Manager on Telegram",
    description:
      "n8n-based personal assistant that logs expenses, tasks, notes and reminders straight from Telegram messages, using AI to route each request to the right database.",
    image: projLifeManager.url,
    tags: ["n8n", "Telegram", "OpenAI", "Notion / Sheets"],
    links: {},
  },
  {
    title: "Chat with Your Database (AI)",
    description:
      "Natural-language interface that lets non-technical users query a SQL database in plain English. AI translates the question into SQL, runs it safely and returns formatted answers.",
    image: projChatDb.url,
    tags: ["n8n", "OpenAI", "SQL", "LangChain"],
    links: {},
  },
  {
    title: "Mobile Auth Project",
    description:
      "Mobile project featuring a polished login and account flow, form validation and secure credential handling. Delivered as a coursework project with a focus on UX.",
    image: projMobileLogin.url,
    tags: ["Android", "Java", "UI/UX"],
    links: {},
  },
  {
    title: "AI Email Support Agent",
    description:
      "Customer-support AI agent combining Gmail triggers, Gemini and OpenAI models with simple memory. Reads support requests, drafts answers and logs each conversation into a Google Sheet.",
    image: projEmailSupport.url,
    tags: ["n8n", "Gemini", "OpenAI", "Gmail API"],
    links: {},
  },
  {
    title: "E-Commerce Website (Arabic)",
    description:
      "Arabic-first e-commerce storefront with product search, discount badges and category grid. Optimized for right-to-left layout and local delivery workflows.",
    image: projEcomArabic.url,
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "RTL"],
    links: {},
  },
  {
    title: "Fekra w Flous — Fintech Dashboard",
    description:
      "Admin dashboard for a micro-financing platform: user statistics, available financing offers, activity charts and pending-approval queue with role-based access.",
    image: projFekraFlous.url,
    tags: ["Angular", "Spring Boot", "Chart.js", "MySQL"],
    links: {},
  },
  {
    title: "Flower Shop Website",
    description:
      "Elegant florist storefront with hero, product gallery, reviews and contact form. Focus on soft typography, generous whitespace and smooth scrolling animations.",
    image: projFlower.url,
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: {},
  },
  {
    title: "Community Manager — El Mouradi",
    description:
      "Community-management case study for hotel El Mouradi: search-engine and social-media audit, Facebook content analysis, and posting/engagement strategy recommendations.",
    image: projCommunityMgr.url,
    tags: ["Community Management", "Social Media", "Case Study"],
    links: {},
  },
  {
    title: "TikTok Influence Strategy — Monoprix",
    description:
      "Influencer-marketing strategy on TikTok for Monoprix's 93rd anniversary: audience targeting, creator tiers, content pillars and KPIs. Delivered with Tawa Digital.",
    image: projMonoprix.url,
    tags: ["Marketing", "TikTok", "Influence", "Strategy"],
    links: {},
  },
  {
    title: "Influence Strategy — Neutrogena",
    description:
      "Skincare influence-marketing strategy for Neutrogena: positioning as the healthy-skin expert, creator matrix, storytelling angles and campaign KPIs.",
    image: projNeutrogena.url,
    tags: ["Marketing", "Influence", "Strategy", "Skincare"],
    links: {},
  },
  {
    title: "Ethnographic Study — Freelance in Tunisia",
    description:
      "Light participant-observation study of the 428K-member Facebook group “Freelance in Tunisia”, mapping missions, advice patterns and community rituals of Tunisian freelancers.",
    image: projEthno.url,
    tags: ["Ethnography", "Research", "Community"],
    links: {},
  },
  {
    title: "My First AI Agent",
    description:
      "First hands-on AI agent built end-to-end in n8n: chat trigger, memory, custom tools and prompt engineering — the foundation for all my later automations.",
    image: projFirstAi.url,
    tags: ["n8n", "AI Agent", "OpenAI", "Prompt Engineering"],
    links: {},
  },
  {
    title: "Auth UI — Login & Registration",
    description:
      "Modern authentication interface with dual-panel login/register, animated transitions and clean form validation. Reusable UI kit for full-stack projects.",
    image: projAuthUi.url,
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    links: {},
  },
  {
    title: "QR Code Generator",
    description:
      "Web app that generates QR codes on the fly from any URL or text. Supports download, size options and quick regeneration.",
    image: projQrGen.url,
    tags: ["JavaScript", "HTML5", "CSS3", "QR"],
    links: {},
  },
  {
    title: "ESEN Institutional Website",
    description:
      "Institutional website concept for ESEN (École Supérieure d'Économie Numérique): programs, faculty, key figures and contact — highlighting the school's identity in digital economy.",
    image: projEsenSite.url,
    tags: ["React", "TypeScript", "Tailwind"],
    links: {},
  },
  {
    title: "Library CRUD",
    description:
      "Classic library management CRUD: books, authors, subscribers and reservations, with add/edit/delete flows and search — built as an academic full-stack project.",
    image: projLibraryCrud.url,
    tags: ["PHP", "MySQL", "HTML5", "CSS3"],
    links: {},
  },
  {
    title: "Odoo — Custom Module",
    description:
      "Custom Odoo 18 module (`partner_extension`) extending the partner model with new fields, views and business logic. Packaged and installed on a local Odoo instance.",
    image: projOdoo.url,
    tags: ["Odoo 18", "Python", "XML", "ERP"],
    links: {},
  },
  {
    title: "Air Travel Website",
    description:
      "Simple travel-agency landing page with hero, destinations, about and booking sections. Focus on clean typography and responsive layout.",
    image: projAirTravel.url,
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: {},
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SectionOrnament />
        <AboutSection />
        <SectionOrnament />
        <NationalEntrepreneurSection />
        <SectionOrnament />
        <SkillsSection />
        <SectionOrnament />
        <ProjectsSection />
        <SectionOrnament />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function SectionOrnament() {
  return (
    <div className="mx-auto max-w-5xl px-6" aria-hidden="true">
      <div className="section-ornament">
        <span />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          Sofyen<span className="text-muted-foreground">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={cvAsset.url}
          download
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-accent"
        >
          <Download size={16} />
          <span className="hidden sm:inline">CV</span>
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="hero-blob left-[-6rem] top-[-4rem] h-72 w-72 animate-[float-slow_14s_ease-in-out_infinite]"
        style={{ background: "oklch(0.75 0.14 60)" }}
      />
      <div
        aria-hidden="true"
        className="hero-blob right-[-8rem] top-24 h-96 w-96 animate-[float-slower_18s_ease-in-out_infinite]"
        style={{ background: "oklch(0.72 0.12 30)" }}
      />
      <div
        aria-hidden="true"
        className="hero-blob left-1/3 bottom-[-6rem] h-72 w-72 animate-[float-slow_20s_ease-in-out_infinite]"
        style={{ background: "oklch(0.78 0.08 90)", opacity: 0.35 }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:items-center md:py-28">
        <div className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-full border-4 border-card bg-muted shadow-xl md:w-64">
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-full opacity-70 blur-2xl"
            style={{ background: "conic-gradient(from 0deg, oklch(0.75 0.14 60), oklch(0.72 0.12 30), oklch(0.78 0.08 90), oklch(0.75 0.14 60))" }}
          />
          <img
            src={profilePicture}
            alt="Sofyen Nefzi profile"
            className="relative h-full w-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-base font-medium text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
            Sofyen Nefzi
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground sm:text-xl">
            Full-Stack Developer | Angular, Spring Boot,{" "}
            <br className="hidden sm:block" />
            Python & n8n Automation
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={cvAsset.url}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-all hover:bg-accent hover:shadow-md hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Info
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <SocialLink
              href="https://www.linkedin.com/in/sofien-nefzi-223651267/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/sofyennefzi"
              icon={Github}
              label="GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
    >
      <Icon size={20} />
    </a>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-card/30 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow justify-center">
          Get To Know More
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon={Briefcase}
              title="Experience"
              lines={[
                "Founder & AI Developer — AI4Digital",
                "Full-Stack Dev — Brima Digital",
                "Full-Stack Dev — CNSS",
                "E-commerce Specialist — Shop Tounsi",
              ]}
            />
            <InfoCard
              icon={GraduationCap}
              title="Education"
              lines={[
                "Master in E-Business — ESEN",
                "Licence in Business Computing — ESEN",
                "Bac Informatique",
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a creative developer who enjoys pushing boundaries and finding
              innovative solutions. With strong communication skills and a
              collaborative nature, I thrive in team environments. My critical
              thinking helps me analyze situations effectively, and I
              consistently meet deadlines to deliver quality results on time.
            </p>
            <div className="flex justify-center">
              <div className="aspect-square w-56 overflow-hidden rounded-full border-4 border-border bg-card shadow-md">
                <img
                  src={aboutPicture}
                  alt="Sofyen Nefzi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ElementType;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <Icon size={28} className="text-muted-foreground" />
      <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
        {lines.map((line) => (
          <li key={line} className="flex items-start gap-2">
            <ChevronRight size={16} className="mt-0.5 shrink-0 text-primary" />
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NationalEntrepreneurSection() {
  return (
    <section className="border-t border-border bg-card/30 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
          <figure className="w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={nationalEntrepreneur.url}
              alt="National Student Entrepreneur certificate — Sofyen Nefzi"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>

          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Award size={14} />
              National Recognition
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              National Student Entrepreneur Status
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Awarded the national “Étudiant-Entrepreneur” status by the
              University of Manouba and the Ministry of Higher Education. This
              recognition supports my journey in building digital solutions,
              combining academic rigor with real-world entrepreneurship.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                Université de la Manouba
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                Level: Initiateur
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                2025 – 2026
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {agencyProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
              <div className="mt-6 flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Globe size={14} />
                  {project.badge}
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 lg:self-start"
                >
                  <ExternalLink size={16} />
                  Visit {project.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow justify-center">
          Explore My
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <group.icon size={20} className="text-secondary-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {group.category}
                </h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Shield size={20} className="text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>
            <span className="text-xs text-muted-foreground">
              {certifications.length} credentials
            </span>
          </div>

          <div
            className="group/marquee relative mt-6 flex flex-col gap-4 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-[marquee_50s_linear_infinite] gap-4 group-hover/marquee:[animation-play-state:paused]">
              {[...certRow1, ...certRow1].map((cert, i) => (
                <CertCard key={`${cert.title}-${i}`} cert={cert} />
              ))}
            </div>
            <div className="flex w-max animate-[marquee-reverse_50s_linear_infinite] gap-4 group-hover/marquee:[animation-play-state:paused]">
              {[...certRow2, ...certRow2].map((cert, i) => (
                <CertCard key={`${cert.title}-r2-${i}`} cert={cert} />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Hover to pause · continuous learning across web, cloud, data, and leadership
          </p>
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: (typeof certifications)[number] }) {
  return (
    <figure className="group/card relative w-64 shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover/card:scale-105"
        />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 via-background/85 to-transparent p-3 transition-transform duration-300 group-hover/card:translate-y-0">
        <p className="text-xs font-semibold text-foreground line-clamp-2">
          {cert.title}
        </p>
        <p className="mt-0.5 text-[10px] text-muted-foreground">
          {cert.issuer} · {cert.date}
        </p>
      </figcaption>
    </figure>
  );
}

const agencyProjects = [
  {
    title: "AI4Digital",
    badge: "Live Agency",
    description:
      "My own agency — we design and ship custom AI automations, workflows, image generation, ad copy and video so brands scale on autopilot. I built the platform end-to-end: brand, site, and delivery workflow.",
    tags: ["AI Automation", "n8n", "Next.js", "Branding"],
    image: ai4digitalAsset.url,
    live: "https://ai4digital.live",
  },
  {
    title: "Brima Digital",
    badge: "Live Agency",
    description:
      "Website for Brima Digital, a content creation and social media marketing agency. I designed and developed the full experience — narrative, motion, and creator/brand journeys — helping them showcase collaborations and tell brand stories.",
    tags: ["React", "Motion", "Storytelling", "Marketing Site"],
    image: brimaDigitalAsset.url,
    live: "https://brimadigital.com",
  },
];


const PROJECT_CATEGORIES = [
  "All",
  "Web Development",
  "Mobile",
  "Automation & AI",
  "Strategy & Marketing",
  "Tools & Scripts",
] as const;
type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

function getProjectCategory(p: (typeof projects)[number]): Exclude<ProjectCategory, "All"> {
  const tags = p.tags.map((t) => t.toLowerCase());
  const hasTag = (needles: string[]) =>
    tags.some((t) => needles.some((n) => t.includes(n)));

  if (hasTag(["android"])) return "Mobile";
  if (
    hasTag([
      "marketing",
      "influence",
      "strategy",
      "community management",
      "ethnography",
      "research",
    ])
  )
    return "Strategy & Marketing";
  if (hasTag(["n8n"])) return "Automation & AI";
  if (hasTag(["langchain", "gpt", "openai", "gemini", "whisper", "ai agent"]))
    return "Automation & AI";
  if (
    hasTag([
      "tkinter",
      "pytube",
      "game dev",
      "algorithms",
      "a*",
      "performance",
      "odoo",
      "erp",
      "ffmpeg",
      "qr",
    ])
  )
    return "Tools & Scripts";
  return "Web Development";
}

function ProjectsSection() {
  const categorized = useMemo(
    () => projects.map((p) => ({ ...p, category: getProjectCategory(p) })),
    [],
  );

  const groups = useMemo(() => {
    const order = PROJECT_CATEGORIES.filter((c) => c !== "All") as Exclude<
      ProjectCategory,
      "All"
    >[];
    return order
      .map((cat) => ({
        category: cat,
        items: categorized.filter((p) => p.category === cat),
      }))
      .filter((g) => g.items.length > 0);
  }, [categorized]);

  return (
    <section id="projects" className="border-t border-border bg-card/30 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow justify-center">Browse My Recent</p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>

        <div className="mt-16 space-y-20">
          {groups.map((group, idx) => (
            <div key={group.category} id={`projects-${group.category.toLowerCase().replace(/\s|&/g, "-")}`}>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {group.category}
                  </h3>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {group.items.length} project{group.items.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((project) => (
                  <article
                    key={project.title}
                    className="card-glow group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex gap-3">
                        {project.links.github && (
                          <ProjectLink
                            href={project.links.github}
                            icon={Github}
                            label="GitHub"
                          />
                        )}
                        {project.links.live && (
                          <ProjectLink
                            href={project.links.live}
                            icon={ExternalLink}
                            label="Live Demo"
                          />
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Get in Touch
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact Me
        </h2>
        <p className="mt-4 text-muted-foreground">
          Open to opportunities in full-stack development, AI automation, and
          digital transformation projects.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="mailto:sofien.nefzi@esen.tn"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-card p-5 text-foreground transition-colors hover:bg-accent sm:w-auto"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Mail size={20} className="text-secondary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium">sofien.nefzi@esen.tn</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sofien-nefzi-223651267/"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-card p-5 text-foreground transition-colors hover:bg-accent sm:w-auto"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Linkedin size={20} className="text-secondary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="font-medium">Sofien Nefzi</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          <Code2 size={16} />
          Built by Sofyen Nefzi © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
