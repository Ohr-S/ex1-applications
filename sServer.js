const express = require('express');
const app = express();
const port = 3000;

const common = require("./routes/common");

// use static files
app.use(express.static('../ex1/public'));

// use following middleware when URL is an invalid page
app.use((req, res, next) => {
    let errMsg = 'Page not found!';
    
    common.sendErrMsg(errMsg, res);
});

app.listen(port, () => console.log(`Server started`));