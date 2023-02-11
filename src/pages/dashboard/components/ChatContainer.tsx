import React, { FC } from 'react';
import ChatDisplay from './ChatDisplay';
import ChatHeader from './ChatHeader';
import MatchesDisplay from './MatchesDisplay';

const ChatContainer: FC = () => {
  return (
    <div className="dashboard__chat-container">
      <ChatHeader />
      <div className="">
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
