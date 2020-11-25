import React, { createContext, useReducer, useEffect } from 'react';
import { blogReducer, initialState } from './blogReducer';
import { getPosts } from './blogActions';

export const blogContext = createContext();

export const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, initialState);

    useEffect(() => {
        getPosts(dispatch);
    }, []);

    return (
        <blogContext.Provider value={{ ...state }}>
            {children}
        </blogContext.Provider>
    );
};
