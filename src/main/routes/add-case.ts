import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
    app.get('/add-case', async (req, res) => {
        res.render('add-case');
    });

    app.post('/add-case', async (req, res) => {
        const {caseNumber, title, description, status} = req.body;
        const dueDate = req.body['due-date-year'] + '-' + req.body['due-date-month'] + '-' + req.body['due-date-day'];
         
        
        try {
            await axios.post('http://localhost:4000/cases', { 
                caseNumber,
                title,
                description,
                status,
                dueDate
            });
            res.render('add-case', {})
        } catch (error) {
            console.error('Error making request:', error);
            res.render('add-case', {});
        }
    });
}
