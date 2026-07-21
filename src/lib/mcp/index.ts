import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listCertifications from "./tools/list-certifications";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "sofyen-portfolio-mcp",
  title: "Sofyen Nefzi Portfolio",
  version: "0.1.0",
  instructions:
    "Public portfolio for Sofyen Nefzi (full-stack dev & AI engineer, founder of AI4Digital and Brima Digital). Use get_profile for bio/experience/education, list_projects (optional category or search) to explore his work across Web Development, Mobile, Automation & AI, Strategy & Marketing, and Tools & Scripts, list_certifications for credentials, and get_contact for email, website, and CV download link.",
  tools: [getProfile, listProjects, listCertifications, getContact],
});
