const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', async (req, res) => {
    const count = req.query.count || 20
    const response = await axios.get(`https://randomuser.me/api/?results=${count}`)
    //res.json({success:true})
    res.json({ data: response.data.results });
})

app.listen(4000, () => {
    console.log("server is running on port 4000")
});
