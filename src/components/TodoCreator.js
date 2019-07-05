import React from 'react';
import styled from 'styled-components';

const TodoForm = styled.form`
  width: 100%;
`;

const TitleInput = styled.input`
  text-align: center;
  margin: 0;
  height: 40px;
  font-size: 20px;
  width: 100%;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
`;

export default function TodoCreator({ addTodo }) {

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({
      title: e.target.title.value,
      done: false,
    });
    e.target.title.value = '';
    e.target.title.blur();
  }

  return (
      <TodoForm onSubmit={handleSubmit} >
        <TitleInput
          name='title'
          type='text'
          placeholder='Write todo and press enter'
          autoComplete='off'
        />
      </TodoForm>
  )
}