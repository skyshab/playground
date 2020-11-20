import Posts from './Posts';
import Post from './Post';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BlogContextProvider } from '../context/blogContext';

const Blog = (props) => {
    const { match } = props;
    const path = match.path;

    // useEffect(getPosts, [getPosts]);

    return (
        <BlogContextProvider>
            <Switch>
                <Route path={`${path}/:postId`} component={Post} />
                <Route exact path={path} component={Posts} />
            </Switch>
        </BlogContextProvider>
    );
};

export default Blog;
