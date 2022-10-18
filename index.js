const mongo = require('./config/mongo');
const app = require('./app.js');



// server connection
app.listen(process.env.PORT || 5001,()=>{
    console.log(`Server is running 🚀`);

    // Mongo Config
    mongo();
})