import React from 'react';

function Choice(props) {
  const onClick = (event) => {
    props.onClick(event.target.id);
  }

  const { choice } = props;
  return (
    <div className="ui input item">
      <input type="radio" id={choice.id} name={choice.questionId} onClick={e=>onClick(e)}></input>
      <label htmlFor={choice.id}>{choice.choice}</label>
    </div>
  );
}

export default Choice;