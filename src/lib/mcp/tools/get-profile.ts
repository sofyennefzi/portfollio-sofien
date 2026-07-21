import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { profile, education, experience, recognition } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Returns Sofyen Nefzi's public portfolio profile: name, title, bio, contact links, experience, education, and national recognition status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { profile, experience, education, recognition };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
