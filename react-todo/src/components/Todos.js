import { React } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { List, Paper } from '@material-ui/core';

const Todos = (props) => {
    return (
        <Paper>
            <List style={{ padding: '0' }}>
                {props.todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        markComplete={props.markComplete}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </List>
        </Paper>
    );
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default Todos;
