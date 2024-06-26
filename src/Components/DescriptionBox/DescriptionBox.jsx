import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio nulla consectetur aliquam temporibus doloribus eius praesentium beatae velit, distinctio molestias nam voluptatem sunt ab aut earum odit commodi vero eos? Molestias sed dolorum consequuntur in quam, soluta asperiores tempora ut voluptate vel minus saepe blanditiis id fugit distinctio similique.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox