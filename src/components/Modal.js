import React from 'react';

export const Modal = (props) => {

  if(!props.isOpen)
  {
    return null
  }
  else{
    return (
      <div className = "app__modal">
          <div className = "app__modal__div--front">{props.children}</div>
          <div className = "app__modal__div--back" onClick={() => props.openModal()}></div>
      </div>
      )
  }


}
