import { Application } from 'express';
import axios from 'axios';


export default function (app: Application): void {
  let ID = '';
  app.get('/', async (req, res) => {
    try {
      res.render('home', {"example": ''})
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {"example": ''});
    }
  });

  app.post('/', async (req, res) => {
    ID = req.body.ID;
    try {
      const response = await axios.get('http://localhost:4000/cases/' + ID);
      res.render('home', { "example": response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
  
  app.post('/delete', async (req, res) => {
    try {
      await axios.delete('http://localhost:4000/cases/' + ID);
      res.redirect('/');
    } catch (error) {
      console.error('Error making request:', error);
      res.redirect('/');
    }
  });
}
