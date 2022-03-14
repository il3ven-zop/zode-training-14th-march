import Zode from "@zode/zode";
const app = new Zode.default();
console.log(`
This app is going to be running on ${app.context.config.raw.ZODE_ENV}. 
Thus, also reading '.${app.context.config.raw.ZODE_ENV}.env'.
`);
app.start();
