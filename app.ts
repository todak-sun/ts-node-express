import * as express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send({
    status: 'ok',
  });
});

app.listen(5000, () => {
  console.log('실행중');
});
