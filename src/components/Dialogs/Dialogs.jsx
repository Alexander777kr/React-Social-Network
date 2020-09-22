import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state, ...props }) => {
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessage = React.createRef();
  let addMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
  };

  let updateTextareaField = () => {
    let message = newMessage.current.value;
    props.dispatch({ type: 'UPDATE-MESSAGE', message: message });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <textarea
          ref={newMessage}
          value={state.newMessage}
          onChange={updateTextareaField}
        ></textarea>

        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
