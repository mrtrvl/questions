import React from 'react';

function ErrorMessage(props) {
  if (!props.message) {
    return null
  } else {
    return (
      <div>
        {props.message}
      </div>
    );
  }
}

export default ErrorMessage;