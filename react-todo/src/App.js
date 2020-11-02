import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from 'styled-components';

class App extends Component {
    state = {
        todos: [],
    };

    theme = {
        spacing: 4,
        palette: {
            primary: '#007bff',
        },
    };

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((res) => this.setState({ todos: res.data }));
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            }),
        });
    };

    deleteTodo = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) =>
                this.setState({
                    todos: [
                        ...this.state.todos.filter((todo) => todo.id !== id),
                    ],
                })
            );
    };

    addTodo = (title) => {
        axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                title: title,
                completed: false,
            })
            .then((res) =>
                this.setState({ todos: [...this.state.todos, res.data] })
            );
    };

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <div className='App'>
                    <Router>
                        <Header />
                        <Container maxWidth='sm'>
                            <Route
                                exact
                                path='/'
                                render={(props) => (
                                    <React.Fragment>
                                        <AddTodo addTodo={this.addTodo} />
                                        <Todos
                                            todos={this.state.todos}
                                            markComplete={this.markComplete}
                                            deleteTodo={this.deleteTodo}
                                        />
                                    </React.Fragment>
                                )}
                            />
                            <Route path='/about' component={About} />
                        </Container>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
