import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { TUserInitState } from '../../../store/types';

const ChatHeader: FC = () => {
  const { user } = useTypedSelector<TUserInitState>((state) => state.userMe);

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="profile__img-container">
          <img src="" alt="" />
        </div>
        <h3>{user && user.username}</h3>
      </div>
      <i className="log-out-icon">&#8656;</i>
    </div>
  );
};

export default ChatHeader;
