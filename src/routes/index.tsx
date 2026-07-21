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

const projects = [
  {
    title: "CNSS Data Management Platform",
    description:
      "Secure full-stack web application for internal data management and automation at CNSS Tunisia. Features an API middleware that auto-extracts and populates databases.",
    image: "https://sofiennefzi.me/interface%20API.png",
    tags: ["Spring Boot", "Angular", "JWT", "REST APIs", "Bootstrap"],
    links: {},
  },
  {
    title: "Clinic Management System",
    description:
      "Full-stack clinic platform for dental and medical practices with appointment scheduling, patient management, payment tracking, and analytics dashboards.",
    image: "https://sofiennefzi.me/care/agenda.jpg",
    tags: [
      "Python",
      "FastAPI",
      "MySQL",
      "Bootstrap 5",
      "Chart.js",
      "FullCalendar",
    ],
    links: {},
  },
  {
    title: "AI Agent Web Scraping",
    description:
      "Intelligent automation system that understands natural-language commands and scrapes business data from Google Maps, Yellow Pages, Apollo, and social platforms.",
    image: "https://sofiennefzi.me/n8n20%20(1).jpg",
    tags: ["n8n", "OpenAI", "Apify", "Google Sheets API", "REST APIs"],
    links: {},
  },
  {
    title: "AI-Powered Job Application System",
    description:
      "End-to-end automated workflow that finds jobs, scores fit, writes custom cover letters, and logs everything for one-click outreach.",
    image: "https://sofiennefzi.me/n8n%20jobs/workflow.jpg",
    tags: ["n8n", "Apify", "OpenAI GPT-4", "Google Sheets", "HTTP APIs"],
    links: {},
  },
  {
    title: "Restaurant Analytics Chatbot",
    description:
      "Production-ready Flask app that lets restaurant owners ask natural-language questions about revenue, margins, and menu performance, returning instant insights.",
    image: "https://sofiennefzi.me/chat-interface.jpg",
    tags: [
      "Python",
      "Flask",
      "LangChain",
      "GPT-4o-mini",
      "MySQL",
      "Chart.js",
    ],
    links: {
      github: "https://github.com/sofyennefzi/chatbot",
      live: "https://sofiennefzi.me/",
    },
  },
  {
    title: "Task Flow",
    description:
      "Full-stack productivity application with user authentication, project management, task tracking, and a responsive dashboard with productivity insights.",
    image: "https://sofiennefzi.me/task.jpg",
    tags: ["Spring Boot", "Angular", "MySQL", "JWT", "TypeScript"],
    links: {},
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <NationalEntrepreneurSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
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
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:items-center md:py-28"
    >
      <div className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-full border-4 border-card bg-muted shadow-xl md:w-64">
        <img
          src={profilePicture}
          alt="Sofyen Nefzi profile"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <p className="text-base font-medium text-muted-foreground">
          Hello, I'm
        </p>
        <h1 className="mt-1 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
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
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-all hover:bg-accent hover:shadow-sm"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-sm"
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
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
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
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
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
            className="group/marquee relative mt-6 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            }}
          >
            <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-3 group-hover/marquee:[animation-play-state:paused]">
              {[...certifications, ...certifications].map((cert, i) => (
                <figure
                  key={`${cert.title}-${i}`}
                  className="group/card relative w-28 shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover/card:scale-105"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 via-background/85 to-transparent p-2 transition-transform duration-300 group-hover/card:translate-y-0">
                    <p className="text-[10px] font-semibold leading-tight text-foreground line-clamp-2">
                      {cert.title}
                    </p>
                    <p className="mt-0.5 text-[9px] text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </figcaption>
                </figure>
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

function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border bg-card/30 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Browse My Recent
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
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
      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
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
