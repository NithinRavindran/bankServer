const express = require('express');   //import express //  step 1


const app = express();      // app creation step 2


app.listen(3000, () => {                          //port set at 3000
    console.log("server started at 3000");
})
