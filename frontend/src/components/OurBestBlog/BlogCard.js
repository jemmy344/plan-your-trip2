import React from 'react';
import "./styles.css"

export const BlogCard = ({ image, title, content }) => {
    return (
        <div className='col-md-6'>
        <div className='row pt-3 d-flex flex-wrap nowrap'>
          <div className='col-3'>
            <img src={image} cl alt={title} className='blog-img rounded-img' />
          </div>
          <div className='col-9'>
            <h5>{title}</h5>
            <p>{content}</p>
            <p className='mt-3'>Read More </p>
          </div>
        </div>
      </div>
      
    )
}