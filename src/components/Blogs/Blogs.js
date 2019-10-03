import React from 'react';

import Blog from './Blog/Blog';
import './Blogs.css';

const blogs = (props) =>{
    const blogs = props.blogs.map(blog => {
        return <Blog img={blog.img} title={blog.title} date={blog.date}/>
    });
    return(
        <div className="Blogs">
           {blogs}
        </div>
    );
};

export default blogs;