const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello DevOps !</h1><p>Le pipeline fonctionne.</p>');
});
app.listen(3000, () => console.log('Serveur prêt sur le port 3000'));
