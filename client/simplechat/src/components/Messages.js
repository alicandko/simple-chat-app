import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Messages.scss';

const propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(Object).isRequired,
};

const YOU = 'You';
const DATE_FORMAT = 'Do MMM YYYY h:mm';

export const Messages = ({ username, messages }) => {
  const messageElements = messages.map((message, index) => (
    <div className="messages__message" key={message.id}>
      <div className="messages__username">
        {message.username === username ? YOU : message.username}
      </div>
      <div className="messages__text">{message.text}</div>
      <div className="messages__date">{moment(message.date).format(DATE_FORMAT)}</div>
    </div>
  ));

  return <div className="messages">{messageElements}</div>;
};

Messages.propTypes = propTypes;
