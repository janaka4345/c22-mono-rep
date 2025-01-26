import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send({ "message": 'welcome server running yooo' });
});

app.listen(5000, () => {
  console.log('server running on port 5000');
});
