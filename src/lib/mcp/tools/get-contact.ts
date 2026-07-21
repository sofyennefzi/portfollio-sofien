import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../data";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description:
    "Returns Sofyen Nefzi's public contact channels and a link to download his CV.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: profile.name,
      email: profile.email,
      website: profile.website,
      cvUrl: profile.cvUrl,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
