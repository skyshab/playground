import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BlogContextProvider } from '../context/blogContext';
import Posts from './Posts';
import Post from './Post';

const Blog = (props) => {
    const { match } = props;
    const path = match.path;

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
