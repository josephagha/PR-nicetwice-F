import React, { useContext, useEffect } from 'react';
import messagesContext from '../../context/message/messageContext'

import Spinner from '../0_1_layout/Spinner';

import MessageItem from './MessageItem'

const Messages = () => {

  const MessagesContext = useContext(messagesContext)

  const { getMessages, messages, loading } = MessagesContext;

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line 
  }, []);

  if (messages !== null && !loading) {
    return (
      <div className="messages">
        {messages.map(message => (<MessageItem key={message._id} message={message} />))}
        {(messages.length === 0) ? <h3>No message</h3> : null}
      </div>
    )
  } else {
    return (<Spinner />)
  }

};

export default Messages;
