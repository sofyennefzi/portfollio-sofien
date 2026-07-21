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
} from "lucide-react";

import cvAsset from "@/assets/sofien-nefzi-cv.pdf.asset.json";
import aboutAsset from "@/assets/sofien-about.jpg.asset.json";

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
  "Google Cybersecurity Professional Certificate",
  "Microsoft Azure Cloud Services",
  "Spring Boot (Coursera): IoC, DI, MVC & REST",
  "English B2 — EF SET",
];

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

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Shield size={20} className="text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Certifications
            </h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
              >
                <Layers size={14} />
                {cert}
              </span>
            ))}
          </div>
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
