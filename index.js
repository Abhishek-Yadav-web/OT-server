const mongo = require('./config/mongo');
const app = require('./app.js');



// server connection
app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running 🚀`);

    // Mongo Config
    mongo();
})