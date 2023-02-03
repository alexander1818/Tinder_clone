import { FC, useState } from 'react';
import ChatContainer from './components/ChatContainer';
import TinderCard from 'react-tinder-card';

const db = [
  {
    name: 'Richard Hendricks',
    url: '',
  },
  {
    name: 'Erlich Bachman',
    url: '',
  },
  {
    name: 'Monica Hall',
    url: '',
  },
  {
    name: 'Jared Dunn',
    url: '',
  },
  {
    name: 'Dinesh Chugtai',
    url: '',
  },
];

const Dashboard: FC = () => {
  const characters = db;
  const [lastDirection, setLastDirection] = useState<string>('');

  const swiped = (direction: string, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete);
    console.log('direction', direction);
    setLastDirection(direction);
  };

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
  };
  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="dashboard__swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className="card">
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <h2 className="swipe-info">You swiped {lastDirection}</h2>
        ) : (
          <h2 className="swipe-info" />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
