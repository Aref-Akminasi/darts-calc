import React from 'react';
import PlayerInput from './PlayerInput';

import { useState } from 'react';

const maxPlayers = 8;
const minPlayers = 1;

const GameStarter = (props) => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState({ status: false, message: '' });

  if (players.length === 0) {
    const defaultPlayers = [];
    for (let i = 0; i < minPlayers; i++) {
      defaultPlayers.push({ name: '' });
    }
    setPlayers(defaultPlayers);
  }

  const addPlayerHandler = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.length === maxPlayers
        ? prevPlayers
        : [...prevPlayers, { name: '' }]
    );
  };

  const removePlayerHandler = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.length === minPlayers
        ? prevPlayers
        : prevPlayers.filter((player, idx) => idx < prevPlayers.length - 1)
    );
  };

  const editPlayerHandler = (idx, txt) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers[idx].name = txt;
      return newPlayers;
    });
  };

  const isDuplicate = (arr) => {
    const uniqueSet = new Set();
    const newArr = arr.map((item) => item.name);
    newArr.forEach((item) => uniqueSet.add(item));
    return !(uniqueSet.size === newArr.length);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!players.every((player) => player.name) || isDuplicate(players)) {
      setError({
        status: true,
        message: 'Error: Verify player names.',
      });
    } else {
      if (error.status) {
        setError({
          status: false,
          message: '',
        });
      }
      props.setPlayersHandler(players);
    }
  };

  return (
    <form
      className="bg-white inline-flex flex-col items-center rounded-xl p-6 gap-y-4 shadow-xl"
      action="#"
      onSubmit={submitHandler}
    >
      {players.map((player, idx) => (
        <PlayerInput
          key={idx}
          value={player.name}
          editPlayerHandler={editPlayerHandler}
          idx={idx}
        />
      ))}

      <div className="w-full flex justify-around">
        <button
          type="button"
          onClick={removePlayerHandler}
          className="bg-dcred text-white p-3 rounded-xl active:scale-95 font-bold"
        >
          - Player
        </button>
        <button
          type="button"
          onClick={addPlayerHandler}
          className="bg-dcgreen text-white p-3 rounded-xl active:scale-95 font-bold"
        >
          + Player
        </button>
      </div>

      <input
        type="submit"
        value="START GAME"
        className="bg-dcblue w-full text-white p-3 rounded-xl active:scale-95 font-bold cursor-pointer"
      />
      {error.status && (
        <small className="text-dcred font-sans">{error.message}</small>
      )}
    </form>
  );
};

export default GameStarter;
