import React, { useState } from 'react';
import PlayerScore from './PlayerScore';
import PlayerControl from './PlayerControl';

const ScoreBoard = (props) => {
  const [players, setPlayers] = useState(props.players);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);

  const nextPlayerHandler = () => {
    const currentPlayerIdx = currentPlayer.id;
    let nextPlayerIdx = 0;
    if (currentPlayerIdx + 1 != players.length) {
      nextPlayerIdx = currentPlayerIdx + 1;
    }
    setCurrentPlayer(players[nextPlayerIdx]);
  };

  const updatePlayerScore = (idx, score) => {
    setPlayers((prevPlayers) => {
      let newPlayers = [...prevPlayers];
      newPlayers[idx].score = score;
      return newPlayers;
    });
  };

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
      <PlayerControl
        player={currentPlayer}
        nextPlayerHandler={nextPlayerHandler}
        updatePlayerScore={updatePlayerScore}
        setIsWinnerHandler={props.setIsWinnerHandler}
      />
    </div>
  );
};

export default ScoreBoard;
