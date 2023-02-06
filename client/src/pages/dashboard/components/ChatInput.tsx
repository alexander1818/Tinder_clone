import React, { FC, useState } from 'react';

const ChatInput: FC = () => {
  const [value, setValue] = useState<string>('');
  const handleChangeFields = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };
  return (
    <div className="chat-input">
      Chat Input
      <textarea value={value} onChange={handleChangeFields} />
      <button className="secondary-button">Submit</button>
    </div>
  );
};

export default ChatInput;
