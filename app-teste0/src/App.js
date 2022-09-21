import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Hello from './components/Hello';
import ClimaTempo from './components/ClimaTempo';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [container, setContainer] = useState('noContainer');
    const onNewTodo = (value) => {
        setTodos([
            ...todos,
            {
                id: new Date().getTime(),
                title: value,
                checked: false,
            },
        ]);
    };
    const onHello = (value) => {
        setNomeUsuario(value);
        setContainer('container');
    };

    const onToggle = (todo) => {
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id
                    ? {
                          ...obj,
                          checked: !todo.checked,
                      }
                    : obj
            )
        );
    };

    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    return (
        <section id="app" className="container">
            <Hello onHello={onHello} />
            <div className={container}>
                <ClimaTempo ClimaTempo={ClimaTempo} />

                
                <header>
                    <h2 className="title">Olá {nomeUsuario} !</h2>
                </header>
                <section className="main">
                    <NewTodo onNewTodo={onNewTodo} />
                    <TodoList
                        todos={todos}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                </section>
            </div>
        </section>
    );
};

export default App;
