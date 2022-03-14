import { config } from "dotenv";
console.log('See, process.env.ZOPSMART =', process.env.ZOPSMART);
config({ path: "./configs/.env" });
console.log('Now it is, process.env.ZOPSMART =', process.env.ZOPSMART);
