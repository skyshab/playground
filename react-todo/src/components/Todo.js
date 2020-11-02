import React from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton,
} from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const TodoItem = (props) => {
    const { id, title } = props.todo;
    const getStyle = () => {
        return {
            textDecoration: props.todo.completed ? 'line-through' : 'none',
        };
    };

    return (
        <ListItem role={undefined} dense button>
            <ListItemIcon>
                <Checkbox
                    edge='start'
                    tabIndex={-1}
                    disableRipple
                    inputProps={{}}
                    onChange={props.markComplete.bind(this, id)}
                />
            </ListItemIcon>

            <ListItemText primary={title} style={getStyle()} />

            <ListItemSecondaryAction>
                <IconButton
                    edge='end'
                    aria-label='delete todo'
                    onClick={props.deleteTodo.bind(this, id)}
                >
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
