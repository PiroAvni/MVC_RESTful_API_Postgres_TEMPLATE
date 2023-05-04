require('dotenv').config();

const api = require('./api');

const port = process.env.PORT || 5000

api.listen(process.env.PORT, () => {
    console.log(`API listening on port ${port}...`);
})