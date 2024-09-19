const Koa = require('koa');
const logger = require('koa-logger');
const router = require('@koa/router')();

const app = new Koa();

const StrapiRequest = require('./strapi');
const { bxRequest } = require('./bx');
const axios = require('axios').default;
const { strapi, request } = StrapiRequest;

// const proxy = require('http-proxy-middleware');
let bxu = '94.26.249.21:3337';

// const axios = require('axios').default;

const appConfig = [];

// const { bx, request } = require('./bx');

// middlewares
const fields = require('./api/fields.json');

async function responseTime(ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', ms + 'ms');

  ctx.response.body({});
}

async function requestData(ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;

  ctx.set('X-Response-Time', ms + 'ms');

  ctx.response.body({});
}

// async function requestTasks(ctx, next) {
//   const start = new Date();
//   await next();
//   // const ms = new Date() - start;

//   const id = 1;
//   ctx.set('X-SPSK-Id', id);

//   // ctx.state
// }

app.use(logger());

const helloWorld = async (ctx, next) => {
  let p = [ctx.request.params, ctx.request.query];

  // let tickets = await request('tickets');

  // ctx.response.body = tickets.data;

  ctx.response.body = fields;
  await next();
  // ctx.response.body = tickets;
};

const BitrixRequest = async (ctx, next) => {
  let p = [ctx.request.params, ctx.request.query];

  let fields = await bxRequest('crm.deal.list');

  ctx.response.body = fields;

  await next();
  // ctx.response.body = tickets;
};

router.get('/', helloWorld);
router.get('/bx', BitrixRequest);

router.all('/tasks', async function (ctx, next) {
  if (ctx.query.id) {
    console.log('ID');
  }

  console.log(ctx.request);

  // ctx.response.body = 200;
  // ctx.response.route('');

  let routeTask = axios;
  // .post('http://s3.psk1.spb.ru:9080/api/tasks.php'})
  // .then((r) => console.log(r.data));

  // (routeTask);

  await next();
});

// bx
const fields = {
  key: 'ВидОперации',
  options: [],
};


app.use(router.routes());

app.listen(3000);
