import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as LoadingIcon } from '../loading.svg';
import { Link } from 'react-router-dom';
const wpautop = require('wpautop');

const Post = ({ post }) => {
    return post ? (
        <div className='post container mx-auto p-4'>
            <img src={post.url} alt={post.title} className='min-w-full my-4' />

            <h1 className='text-blue-600 text-4xl leading-tight'>
                {post.title}
            </h1>
            <div
                className='post-body'
                dangerouslySetInnerHTML={{ __html: wpautop(post.body, false) }}
            ></div>
            <Link to='/blog' className='hover:underline text-blue-500'>
                Return to Blog
            </Link>
        </div>
    ) : (
        <LoadingIcon />
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.postId;
    const post = state.blog.posts.find((post) => post.id === parseInt(id));

    return {
        post,
    };
};

export default connect(mapStateToProps)(Post);
