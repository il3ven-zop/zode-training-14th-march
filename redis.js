// Redis should be running on localhost:6379.

import Zode from "@zode/zode";
const app = new Zode.default();

app.get('/set', async (ctx) => {
    await ctx.redis.set('zopsmart', 'hsr layout');
    return 'Ok';
})

app.get('/get', async (ctx) => {
    return ctx.redis.get('random');
})

app.start(3000);
