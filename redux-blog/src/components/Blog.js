import Posts from './Posts';
import Post from './Post';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../redux/blog/actions';

const Blog = (props) => {
    const { getPosts, match } = props;
    const path = match.path;

    useEffect(getPosts, [getPosts]);

    return (
        <div className='Blog'>
            <Switch>
                <Route path={`${path}/:postId`} component={Post} />
                <Route exact path={path} component={Posts} />
            </Switch>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(getPosts());
        },
    };
};

export default connect(null, mapDispatchToProps)(Blog);
