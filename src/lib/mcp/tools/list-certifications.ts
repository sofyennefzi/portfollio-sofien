import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const certifications = [
  { title: "Foundations of Cybersecurity", issuer: "Google (Coursera)" },
  { title: "Introduction to Microsoft Azure Cloud Services", issuer: "Microsoft (Coursera)" },
  { title: "Programming for Everybody (Python)", issuer: "University of Michigan (Coursera)" },
  { title: "Spring Boot: IoC and Dependency Injection", issuer: "Coursera" },
  { title: "Innovation & Entrepreneurship — Design Thinking to Funding", issuer: "Coursera" },
  { title: "The Basics of Linux Command Line", issuer: "Udemy" },
  { title: "PHP", issuer: "Certification" },
  { title: "Spring MVC", issuer: "Certification" },
  { title: "English Level 3", issuer: "Language Certification" },
  { title: "English B2", issuer: "Language Certification" },
  { title: "Google, IBM, Meta, Johns Hopkins, IIMA, LinkedIn Learning, Board Infinity, Saylor Academy",
    issuer: "Various — see portfolio for full list (20+ credentials)" },
];

export default defineTool({
  name: "list_certifications",
  title: "List certifications",
  description: "Lists Sofyen Nefzi's certifications and credentials shown on the portfolio.",
  inputSchema: {
    limit: z.number().int().positive().max(100).optional(),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ limit }) => {
    const items = limit ? certifications.slice(0, limit) : certifications;
    const payload = { count: items.length, certifications: items };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
