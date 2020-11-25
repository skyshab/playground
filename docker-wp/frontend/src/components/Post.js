import React, { useContext } from 'react';
import { ReactComponent as LoadingIcon } from '../loading.svg';
import { Link } from 'react-router-dom';
import { blogContext } from '../context/blogContext';
const wpautop = require('wpautop');

const Post = (props) => {
    const { posts, loading, error } = useContext(blogContext);
    const id = props.match.params.postId;
    const post = posts.find((post) => post.id === parseInt(id));

    return (
        <div className='post container mx-auto p-4'>
            {loading && <LoadingIcon />}

            {post && (
                <div>
                    {/* <img
                        src={post.url}
                        alt={post.title}
                        className='min-w-full my-4'
                    /> */}

                    <h1 className='text-blue-600 text-4xl leading-tight'>
                        {post.title.rendered}
                    </h1>
                    <div
                        className='post-body'
                        dangerouslySetInnerHTML={{
                            __html: wpautop(post.content.rendered, false),
                        }}
                    ></div>
                    <Link to='/blog' className='hover:underline text-blue-500'>
                        Return to Blog
                    </Link>
                </div>
            )}

            {error && <h2>error</h2>}
        </div>
    );
};

export default Post;
