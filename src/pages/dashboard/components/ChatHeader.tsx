import React, { FC } from 'react';

const ChatHeader: FC = () => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="profile__img-container">
          <img src="" alt="" />
        </div>
        <h3>User Name</h3>
      </div>
      <i className="log-out-icon">&#8656;</i>
    </div>
  );
};

export default ChatHeader;
