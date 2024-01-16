import React from 'react';
import PlayerScore from './PlayerScore';

const ScoreBoard = (props) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold text-white text-2xl">Scores:</h1>

      {props.players.map((player) => {
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
  );
};

export default ScoreBoard;
