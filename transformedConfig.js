import Zode from "@zode/zode";

const app = new Zode.default();

// console.log(process.env);

console.log(app.context.config.logger.level);
