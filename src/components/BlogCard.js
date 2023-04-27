import React from 'react'
import {Link} from 'react-router-dom'
function BlogCard(){
    return(
        <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src='images/blog-1.jpg' alt='blog' className='img-fluid'/>
                </div>
                <div className='blog-content'>
                    <p className='date'>01.01.2023</p>
                    <h5 className='title'>A beautiful Sunday Morning</h5>
                    <p className='desc'>It is a wonderful day today with full of positivity and inner light.
                    It is going to be one of the best days of my life with all new experiences</p>
                    <Link to='/' className='button'>Read More</Link>
                </div>
            </div>
        </div>
    )
}
export default BlogCard