// hello_server.ts
import { serve } from 'http/server.ts';
import { resolve } from "path/mod.ts";

const path = resolve("hello_server");
console.log(`Path to file: ${path}`);

const body = new TextEncoder().encode("Hello World\n");
for await (const req of serve(":8000")) {
  req.respond({ body });
}