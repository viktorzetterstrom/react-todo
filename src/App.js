import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoCreator from './components/TodoCreator';
import TodoCard from './components/TodoCard';
import './App.css';

function App() {
  const TodoApp = styled.div`
  width: 320px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  const [todos, setTodos] = useState(localStorage.todos
    ? JSON.parse(localStorage.todos)
    : [
      { title: 'clean', done: false},
      { title: 'walk dog', done: true},
      { title: 'shop', done: true},
      { title: 'wash', done: false},
    ]
  );

  useEffect(() => {
    localStorage.todos = JSON.stringify(todos)
  }, [ todos ]);

  const addTodo = todo => setTodos([ ...todos, todo ]);

  const switchTodoState = (index, done) => setTodos(
    todos.map((todo, i) => index === i
      ? {...todo, done: !done}
      : todo
    )
  );

  const removeTodo = index => setTodos(
    todos.filter((_, i) => i !== index)
  );



  return (
    <TodoApp>
      <TodoCreator addTodo={addTodo}/>
      {
        // Unfinished items
        todos
          .sort((todo1, todo2) => todo1.done - todo2.done)
          .map((todo, i) =>
            <TodoCard
              clickHandler={switchTodoState}
              remover={removeTodo}
              key={i}
              index={i}
              {...todo}
            />)
      }
    </TodoApp>
  );
}

export default App;
