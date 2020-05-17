import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import * as log from "https://deno.land/std/log/mod.ts";

await log.setup({});
const logger = await log.getLogger();
const s = serve({ port: 8000 });
logger.info("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

