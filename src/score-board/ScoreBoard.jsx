import React, { useState } from 'react';
import PlayerScore from './PlayerScore';
import DartSvg from './DartSvg';

const ScoreBoard = (props) => {
  const [players, setPlayers] = useState(props.players);

  return (
    <div className="flex flex-col space-y-8 w-full max-w-96">
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-white text-2xl">Scores</h1>
        {players.map((player) => {
          return (
            <PlayerScore
              key={player.id}
              name={player.name}
              score={player.score}
              color={player.color}
            />
          );
        })}
      </div>
      <div className=" flex flex-col">
        <div className="flex justify-between items-center px-6 py-6 bg-dcnavy rounded-t-xl">
          <h2 className="text-white text-3xl font-bold">Aref</h2>
          <i
            className="text-white font-bold not-italic text-2xl bg-yellow-600 p-2 rounded-xl shadow-lg"
            style={{ backgroundColor: players[0].color }}
          >
            478
          </i>
        </div>

        <form className="px-4 py-8 flex flex-col items-center space-y-4 bg-white rounded-b-xl">
          <div className="flex space-x-2">
            <div className="flex items-center">
              <DartSvg />
            </div>
            <input
              type="text"
              placeholder="Score"
              className="p-2 rounded-xl outline-none border border-gray-300 w-full"
            />
            <select
              name="multiplaier"
              id="multiplier"
              className="p-2 rounded-xl outline-none border
               border-gray-300"
            >
              <option value="1">x1</option>
              <option value="2">x2</option>
              <option value="3">x3</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <div className="flex items-center">
              <DartSvg />
            </div>
            <input
              type="text"
              placeholder="Score"
              className="p-2 rounded-xl outline-none border border-gray-300 w-full"
            />
            <select
              name="multiplaier"
              id="multiplier"
              className="p-2 rounded-xl outline-none border border-gray-300"
            >
              <option value="1">x1</option>
              <option value="2">x2</option>
              <option value="3">x3</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <div className="flex items-center">
              <DartSvg />
            </div>
            <input
              type="text"
              placeholder="Score"
              className="p-2 rounded-xl outline-none border border-gray-300 w-full"
            />
            <select
              name="multiplaier"
              id="multiplier"
              className="p-2 rounded-xl outline-none border border-gray-300"
            >
              <option value="1">x1</option>
              <option value="2">x2</option>
              <option value="3">x3</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-dcgreen px-8 py-3 text-white font-bold rounded-xl shadow-lg"
          >
            Calculate
          </button>
          <small className="text-dcred">
            Oops, you've been busted; your score will be reset.
          </small>
        </form>
      </div>
    </div>
  );
};

export default ScoreBoard;
