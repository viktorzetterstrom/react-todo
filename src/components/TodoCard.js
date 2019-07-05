import React from 'react';
import styled from 'styled-components';


export default function TodoCard({ remover, index, clickHandler, title, done }) {
  const CardContainer = styled.div`
    position: relative;
    width: 100%;
    display:flex;
  `

  const Card = styled.button`
    color: ${done
      ? 'red'
      : 'green'
    };
    width: 100%;
    font-size: 16px;
    border: 0;
    height: 40px;
    transition: background-color 0.5s ease;
    background-color: #eeeeee;
    &:hover {
      background-color: #dddddd;
      cursor: pointer;
    }
    &:focus {
      outline: 0;
    }
  `;

  const RemoveButton = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    width: 40px;
    color: red;
    border: none;
    background-color: #eeeeee;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: red;
      color: #eeeeee;
      cursor: pointer;
    }
    &:focus {
      outline: 0;
    }
  `

  return (
    <CardContainer>
      {
        done
          ? <RemoveButton onClick={() => remover(index)}>X</RemoveButton>
          : <></>
      }
      <Card onClick={() => clickHandler(index, done)}>{title}</Card>
    </CardContainer>
  )
}