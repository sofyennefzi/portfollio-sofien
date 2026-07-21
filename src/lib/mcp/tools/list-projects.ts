import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projectCategories } from "../data";

// Compact project index. Titles + one-liner summaries + tags + category.
// Kept static to stay import-safe (no DB / env reads).
const projects: Array<{
  title: string;
  summary: string;
  tags: string[];
  category: (typeof projectCategories)[number];
  url?: string;
}> = [
  { title: "AI4Digital", summary: "AI-first digital agency website — services, case studies, lead capture.", tags: ["Next.js", "AI", "Agency"], category: "Web Development", url: "https://ai4digital.live" },
  { title: "Brima Digital", summary: "Full-service digital agency site — branding, dev, marketing offerings.", tags: ["Web", "Agency"], category: "Web Development", url: "https://brimadigital.com" },
  { title: "CNSS Data Management", summary: "Internal data management platform for Tunisia's social-security agency.", tags: ["Full-Stack", "Enterprise"], category: "Web Development" },
  { title: "Clinic Management System", summary: "Appointments, patients, and billing for a private clinic.", tags: ["Full-Stack", "Healthcare"], category: "Web Development" },
  { title: "AI Agent Web Scraping", summary: "Autonomous agent that scrapes, cleans, and structures web data on demand.", tags: ["AI Agent", "n8n", "Scraping"], category: "Automation & AI" },
  { title: "AI-Powered Job Application", summary: "Agent that tailors resumes and applies to jobs at scale.", tags: ["AI Agent", "Automation"], category: "Automation & AI" },
  { title: "Restaurant Analytics Chatbot", summary: "Chatbot that answers business questions over a restaurant's sales data.", tags: ["LLM", "Analytics"], category: "Automation & AI" },
  { title: "WhatsApp AI Assistant", summary: "AI concierge over WhatsApp Business API with tool use.", tags: ["WhatsApp", "AI Agent", "n8n"], category: "Automation & AI" },
  { title: "AI Cold Email Agent", summary: "Personalized cold-email outreach driven by scraped signals.", tags: ["AI", "Outreach", "n8n"], category: "Automation & AI" },
  { title: "Indeed Scraper", summary: "Scheduled scraper feeding a job-search pipeline.", tags: ["Scraping", "n8n"], category: "Tools & Scripts" },
  { title: "LinkedIn Scraper", summary: "Profile and post scraper for lead-gen workflows.", tags: ["Scraping", "n8n"], category: "Tools & Scripts" },
  { title: "Task Flow", summary: "Lightweight team task manager with realtime updates.", tags: ["React", "Realtime"], category: "Web Development" },
  { title: "ESEN Joker Club", summary: "Student club site — events, members, gallery.", tags: ["Web"], category: "Web Development" },
  { title: "Hotel Booking", summary: "Full booking flow with availability and payments.", tags: ["Full-Stack"], category: "Web Development" },
  { title: "YouTube Downloader", summary: "Utility for downloading and converting YouTube media.", tags: ["Python", "Tool"], category: "Tools & Scripts" },
  { title: "Android NoteApp", summary: "Native notes app with local persistence.", tags: ["Android", "Kotlin"], category: "Mobile" },
  { title: "Marketing Influence Strategies", summary: "Playbooks and campaign frameworks for creator-led growth.", tags: ["Strategy", "Marketing"], category: "Strategy & Marketing" },
];

const InputSchema = {
  category: z
    .enum(projectCategories)
    .optional()
    .describe("Filter to one category. Omit to return all projects."),
  search: z
    .string()
    .optional()
    .describe("Case-insensitive substring match against title, summary, or tags."),
  limit: z
    .number()
    .int()
    .positive()
    .max(100)
    .optional()
    .describe("Maximum number of projects to return."),
};

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "Lists Sofyen Nefzi's public portfolio projects. Optionally filter by category (Web Development, Mobile, Automation & AI, Strategy & Marketing, Tools & Scripts) or a free-text search.",
  inputSchema: InputSchema,
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, search, limit }) => {
    const q = search?.trim().toLowerCase();
    let items = projects;
    if (category) items = items.filter((p) => p.category === category);
    if (q) {
      items = items.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    if (limit) items = items.slice(0, limit);
    const payload = { count: items.length, categories: projectCategories, projects: items };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
