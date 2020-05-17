
import { parseDate } from 'https://deno.land/std/datetime/mod.ts';

const myDate = parseDate("08-10-2019", "dd-mm-yyyy");

console.log(myDate);