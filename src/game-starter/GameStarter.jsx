import React from 'react';

const GameStarter = () => {
  let amountOfPlayers = 2;

  const createPlayers = (amountOfPlayers) => {
    let players = [];
    for (let i = 0; i < amountOfPlayers; i++) {
      players.push(<input type="text" placeholder="Player Name" key={i} />);
    }
    return players;
  };
  return (
    <form
      className="bg-white inline-flex flex-col items-center rounded-xl p-6 gap-y-4"
      action="#"
    >
      {amountOfPlayers > 0 && createPlayers(amountOfPlayers)}
      <button type="button">+ Add New Player</button>
      <input type="submit" value="START GAME" />
      <small className="text-dcred font-sans">
        Please fill in the names of all players.
      </small>
    </form>
  );
};

export default GameStarter;
