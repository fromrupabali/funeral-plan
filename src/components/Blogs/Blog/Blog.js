import React from 'react';
import { Link } from 'react-router-dom';

import './Blog.css';


const blog = props => (
  <Link to="/blogs/blog" className="Blog">
    <div>
      <img src={props.img} alt="blog" />
      <div className="BlogDetails">
        <h2>{props.title}</h2>
        <p>
          <span className="DateIcon">
            <i className="fas fa-calendar-day"></i>
          </span>
          {props.date}
        </p>
      </div>
    </div>
  </Link>
);

export default blog;
