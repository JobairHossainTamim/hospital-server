const  express = require("express");
require('dotenv').config()
const app = express();
const cors=require('cors');
const path=require('path')
const bodyParser = require('body-parser');
// Router Path
const userRoute=require('./routers/userRoute');
const adminRoute = require("./routers/adminRoute");
const doctorRoute = require("./routers/doctorRoute");
// dataBase Connection  
const dbCon=require('./config/dbConfig');

// App Required 
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));
app.use(bodyParser.raw({type: 'application/json'}));

// Router 
app.use('/api/user',userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);


  



const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log("Server running on port " + PORT));