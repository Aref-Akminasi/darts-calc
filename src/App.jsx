import './App.css';
import GameRules from './GameRules';
import GameStarter from './game-starter/GameStarter';
import Logo from './logo/Logo';
import { useState } from 'react';
import ScoreBoard from './score-board/ScoreBoard';

function App() {
  const [players, setPlayers] = useState([]);

  const setPlayersHandler = (players) => {
    let colors = [
      '#ff6b18',
      '#b140cd',
      '#94a625',
      '#8a3d1d',
      '#952136',
      '#b58f09',
      '#09b562',
      '#09b5b5',
    ];
    const newPlayers = players.map((player, idx) => {
      const colorIdx = Math.floor(Math.random() * colors.length);
      const colorValue = colors[colorIdx];
      colors = colors.filter((color, idx) => idx !== colorIdx);
      return {
        id: idx,
        name: player.name,
        score: 501,
        color: colorValue,
      };
    });
    setPlayers(newPlayers);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b	from-[#16294A] to to-[#1F3B6A]">
      <Logo />
      <main className="flex-1 flex flex-col justify-center items-center p-8 space-y-8">
        {players.length > 0 ? (
          <ScoreBoard players={players} />
        ) : (
          <>
            <GameRules />
            <GameStarter setPlayersHandler={setPlayersHandler} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
