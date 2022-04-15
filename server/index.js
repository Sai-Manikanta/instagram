const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        api: 'instagram'
    })
})  

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));