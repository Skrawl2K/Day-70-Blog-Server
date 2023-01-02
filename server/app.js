//! IMPORTS
import express from 'express'
import cors from 'cors'
import multer from 'multer'  // packages um bilder hochzuladen bzw. um forms auszulesen
import morgan from 'morgan' // loggin middleware

//! VARIABLES

const app = express();
const PORT = 9095;
const posts = [];
const upload = multer({ dest: './public' });

//!---------------------------------------------------------------------

//! APP.USE
app.use(morgan('dev')); // -> every request will be shown in dev format
app.use(cors());
app.use('./public', express.static('./public'));



//! APP.POST
app.post('/newPost', upload.single('blogPicture'), (req, res) => {
    console.log("Body", req.file);
    const post = {
        title: req.body.title,
        text: req.body.text,
        picture: req.file.path,
        name: req.body.text
    };
    posts.push(post);
})

app.get('/newPost', (_, res) => {
    res.json(posts);
})



app.listen(PORT, () => console.log("This server is running on port:", PORT));