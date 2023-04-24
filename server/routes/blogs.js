const express = require('express');
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const Router = express.Router();
const Blog = require('../models/Blog');
//Route 1:fetch all blogs 
Router.get('/fetchallblogs', fetchuser, async (req, res) => {
    try {
        const blogs = await Blog.find({ user: req.user.id });
        res.json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})
//Route 2:add a blog
Router.post('/addblog', fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })], async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            //if there are errors,return bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const blog = new Blog({
                title, description, tag, user: req.user.id
            })
            const saveBlog = await blog.save();
            res.json(saveBlog);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("some error occured")
        }

    })

//Route 3 :update an existing blog
Router.put('/updateblog/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    //creating a new blog
    try {
        const newBlog = {};
        if (title) { newBlog.title = title };
        if (description) { newBlog.description = description };
        if (tag) { newBlog.tag = tag };
        //validating the blog if it exists or not
        let blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).send("not found");
        if (blog.user.toString() !== req.user.id) return res.status(401).send("Not allowed");
        blog = await Blog.findByIdAndUpdate(req.params.id, { $set: newBlog }, { new: true });
        res.json({ blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//Route 4:Delete an existing blog
Router.delete('/deleteblog/:id', fetchuser, async (req, res) => {
    try {
        //validating a blog if it exists or not
        let blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).send("not found");
        blog = await Blog.findByIdAndDelete(req.params.id);
        res.json({ "success": "blog has been deleted" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})
module.exports = Router;