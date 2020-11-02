import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container } from '@material-ui/core';

const Menu = () => {
    return (
        <div style={{ flexGrow: 1, textAlign: 'right' }}>
            <Link to='/'>Todos</Link> | <Link to='/about'>About</Link>
        </div>
    );
};

const Header = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth='sm'>
                <Toolbar style={{ padding: '0' }}>
                    <h1>Get sh*t done!</h1>
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
