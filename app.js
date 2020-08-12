/*  y comment out part last vedio k h 
    
// IT IS ALL ABOUT HOW TO USE PUG .
// y kam krna hi krna h agr express ki app bna rhe h toh 
const express = require("express");

// module lana new 
const path = require("path");
const { title } = require("process");
const app = express();
const port= 80;

//  Serving Static files 
app.use('/static',express.static('static'));

//  Set the template engine as pug
app.set('view engine','pug'); 

// Set the views ditrectory 
// path ek module h 
app.set('views',path.join(__dirname,'views'));

// our pug demo end point 

app.get('/demo',(req,res)=>{
res.status(200).render('demo',{title: 'Hey Kartikey',message: 'Hello There ! Thanks for telling me how to use PUG'});
});

// app mein request bhej rhe h 
app.get("/",(req,res)=>{
    res.status(200).send("This is my first express app with Kartikey");
});
app.get("/about",(req,res)=>{
    res.status(200).send("This is about my first express app with Kartikey");
    });
    app.post("/about",(req,res)=>{
        res.status(200).send("This is post request about my first express app with Kartikey");
        });
        app.get("/this", (req, res)=>{
            res.status(404).send("This page is not found on my website cwh");
        });
app.listen(port,()=>{
console.log(`The application started sucessfully on port ${port}`);
});

*/

 // Now how to use html files .LET'S SEE

// y kam krna hi krna h agr express ki app bna rhe h toh 
const express = require("express");

// module lana new 
const path = require("path");
const { title } = require("process");
//const { fstat } = require("fs");
const  fs = require("fs");
const app = express();
const port= 80;

//  EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));
//yhi same likhna h 
app.use(express.urlencoded());

//   PUG SPECIFIC STUFF
app.set('view engine','pug'); //  Set the template engine as pug
app.set('views',path.join(__dirname,'views'));// Set the views ditrectory 

//END POINTS 
app.get('/',(req,res)=>{
    // ab mann lo agr ki hm index.pug k title aur andr kch content bhejna chate h app.js m likh k toh y krna chaiye
    const con ="This is the best content on the internet so far so use it wisely";
    const params ={'title':'GYM by PUG' , 'content' : con };
    // send use nhi krenge infact render use krenge kuki hm render kr rhe h 
res.status(200).render('index.pug', params );
});

app.post('/' , (req,res)=>{
  //  console.log(req.body); y simple se log kr dega console m 
  console.log(req.body); 
//   but agr chahte h ki ek file ki trh aa jaye y toh kch aisa krenge 
name=req.body.name;
email=req.body.email;
age=req.body.age;
gender=req.body.gender;
address=req.body.address;
more=req.body.more;
//RATT LO Y SB PROCESS
let outputtowrite=`The name is ${name} , age is ${age} , Email is ${email} , gender is ${gender} ,address is ${address} and more about ${name} is -- ${more} `;
fs.writeFileSync('output.txt',outputtowrite);

const params={'message':'Your Form has submitted suceesfully '};
res.status(200).render('index.pug',params);
});


// START THE SERVER
app.listen(port,()=>{
console.log(`The application started sucessfully on port ${port}`);
});
