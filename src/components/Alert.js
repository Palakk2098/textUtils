import React from 'react';

const Alert = (props) => {
  const capitalize = (message) => {
    return message.charAt(0).toUpperCase() + message.slice(1);
  };

  return (
    props.alert && (
      <div class={`alert alert-${props.alert.type}`} role="alert">
        {capitalize(props.alert.type)} : {props.alert.message}
      </div>
    )
  );
};

export default Alert;
