import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/view-cases', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:4000/cases');
      res.render('view-cases', {"cases": response.data})
    } catch (error) {
      console.error('Error making request:', error);
      res.render('view-cases', {"cases": ''});
    }
  });
}
