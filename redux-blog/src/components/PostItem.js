import React from 'react';
import { Link } from 'react-router-dom';
const wpautop = require('wpautop');

const PostItem = (props) => {
    const { id, title, body, thumb } = props.post;
    const content = wpautop(body, false);
    const path = `/blog/${id}`;

    return (
        <div className='bg-white shadow p-4 my-8 rounded flex flex-col sm:flex-row items-start'>
            <img
                src={thumb}
                alt={title}
                className='w-full mb-4 sm:w-auto sm:mr-8'
            />

            <div>
                <Link to={path}>
                    <h2 className='text-blue-600 text-2xl leading-tight'>
                        {title}
                    </h2>
                </Link>
                <div
                    className='post-item-content'
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
                <Link
                    to={path}
                    className='rounded bg-blue-600 py-2 px-4 mt-2 inline-block text-white w-auto'
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default PostItem;
