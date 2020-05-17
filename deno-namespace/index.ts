
import { green, bold } from "https://deno.land/std/fmt/colors.ts";


Object.entries(Deno).forEach(([key, value])=> {
  console.log(` - ${bold(green(key))}: `, value);  
})