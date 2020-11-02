import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    Paper,
    InputBase,
    InputAdornment,
    IconButton,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class AddTodo extends Component {
    state = {
        title: '',
    };

    onChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };

    render() {
        return (
            <Paper
                component='form'
                onSubmit={this.onSubmit}
                style={{ margin: '1rem auto' }}
            >
                <InputBase
                    fullWidth
                    name='title'
                    placeholder='add a new todo'
                    value={this.state.title}
                    onChange={this.onChange}
                    style={{ padding: '6px 1rem 5px 1rem', height: '2.5rem' }}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                edge='end'
                                aria-label='add todo'
                                type='submit'
                            >
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Paper>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
