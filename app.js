const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    const photo = {
        id:1,
        name: 'Blog Title',
        description: 'Blog description'
    }
    res.send(photo);
})

app.listen(port, () => {
    console.log(`listening on port:${port}`);
});