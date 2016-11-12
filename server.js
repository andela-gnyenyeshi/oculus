import express from 'express';

const app = express();
const port = process.env.PORT || 4040;

app.get('/', (req, res) => {
  res.send('Virtual Reality is the future. You know :)');
});

app.get('/akirachix', (req, res) => {
  res.status(200).send('All Systems Go');
});

app.get('/systems', (req, res) => {
  res.status(200).send('Lydia and Ruth and Winnie are rockstars!!');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

export default app;
