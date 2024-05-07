import React from 'react'

const TestContent = ({ blog }) => {
    return (
        <div className='w-full h-auto mx-20' dangerouslySetInnerHTML={{ __html: blog.content }}>
        </div>
    )
}

export default TestContent