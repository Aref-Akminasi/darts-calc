import React from 'react';

const GameStarter = () => {
  return (
    <form className="bg-white flex flex-col max-w-xl content-center">
      <input type="text" placeholder="Player Name" />
      <input type="text" placeholder="Player Name" />
      <input type="text" placeholder="Player Name" />
      <button type="button">+ Add New Player</button>
      <input type="submit" value="START GAME" />
      <small className="inline">Please fill in the names of all players.</small>
    </form>
  );
};

export default GameStarter;
