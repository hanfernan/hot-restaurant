//Dependencies========================================
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000

require('./routing/html-routes.js')(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Display all reservations
app.get('/api/reservation', (req, res) => res.json(reservation));

//Display a single reservation or return false
app.get('api/reservation/:reservation', (req, res) => {
    const chosen = req.params.reservation;

    console.log(chosen);

    for (let i=0; i < reservation.length; i++) {
        if (chosen === reservation[i].routeName) {
            return res.json(reservation[i]);
        }
    }
    return res.json(false);
});

//create a new reservation
app.post('/api/reservation', (req, res) => {
    const newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();

    reservation.push(newReservation);
    res.json(newReservation);
});

//start the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));