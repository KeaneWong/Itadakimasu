const express = require('express')
const app = express();
const cors = require('cors')

const pool = require('./db')

const multer = require('multer')
const upload = multer({dest: 'uploads/'})


const { uploadFile } = require('./s3')

//middleware
app.use(cors())
app.use(express.json())

//routes
//creating a post
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
        const allposts = await pool.query("SELECT * FROM blogposts");
        
        response.json(allposts.rows);
        
    }
    catch (err){
        console.error(err.message);
    }
});

//get a post


//update post


//delete a post


app.listen(5000, () =>{
    console.log("Server started on port 5000")
})