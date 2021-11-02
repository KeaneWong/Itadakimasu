const express = require('express')
const app = express();
const cors = require('cors')

const path = require('path')

const AWS = require('aws-sdk');
const fs=require('fs');
const keys = require('./keys.js');

const pool = require('./db');

const multer = require('multer');


const  uploadFile  = require('./s3')
const PORT = process.env.PORT || 5000
//process.env.NODE_ENV => production || undefined

//middleware
app.use(cors())
app.use(express.json())

//app.use(express.static(path.join(__dirname, "Itadakimasu/build")));
app.use(express.static("./Itadakimasu/build"));

if(process.env.NODE_ENV  === 'production')
{
  app.use(express.static(path.join(__dirname, "Itadakimasu/build") ) );



}

console.log(path.join(__dirname,"Itadakimasu/build"));

// configuring the DiscStorage engine.
const storage = multer.diskStorage({
    destination : 'uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

AWS.config.update({
    accessKeyId: keys.iam_access_id,
    secretAccessKey: keys.iam_secret,
    region: 'us-west-1',
});

//Creating a new instance of S3:
const s3= new AWS.S3();




//routes
//creating a post CURRENTLY UNUSED
app.post('/images', upload.single('image'), async (req,res) => {
	const file = req.file
	console.log(file)	

	const result = await (uploadFile(file))
	await unlinkFile(file.path)
	console.log(result) 


	const description = req.body.description
	res.send({imagePath: `/images/${result.Key}`})



})

//getting all posts

app.get('/posts', async (request, response) => {
	try{
		
        const allposts = await pool.query('SELECT * FROM blogposts');
        
        response.json(allposts.rows);
        
    }
    catch (err){
        console.error(err.message);
    }
});

//get a post, the metadata only. Text not included yet
app.get('/posts/:id', async (request, response) => {
	
		const id = parseInt(request.params.id)
       	try{
		
	        const post = await pool.query("SELECT * FROM blogposts WHERE post_id = $1", [id]);
	        response.json(post.rows);
        
	    }
	    catch (err){
	        console.error(err.message);
	    }
    
});

//get a post's text
app.get('/postText/:file_name',(request, response) =>{

	retrieveFile(request.params.file_name, response);

});

function retrieveFile(filename,res){

  const getParams = {
    Bucket: 'itadakimasu-photos',
    Key: filename
  };

   s3.getObject(getParams, function(err, data) {
    if (err){
      return res.status(400).send({success:false,err:err});
    }
    else{
      return res.send(data.Body);
    }
  });
}

//update post


//delete a post


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Itadakimasu/build/index.html"));
})


app.listen(process.env.PORt || PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})

















