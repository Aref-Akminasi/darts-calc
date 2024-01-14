import './App.css';
import GameRules from './GameRules';
import GameStarter from './game-starter/GameStarter';
import Logo from './logo/Logo';
import { useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  const setPlayersHandler = (players) => {
    const newPlayers = players.map((player, idx) => ({
      id: idx,
      name: player.name,
      score: 501,
    }));
    setPlayers(newPlayers);
  };

  console.log(players);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b	from-[#16294A] to to-[#1F3B6A]">
      <Logo />
      <main className="flex-1 flex flex-col justify-center items-center p-8 space-y-8">
        <GameRules />
        <GameStarter setPlayersHandler={setPlayersHandler} />
      </main>
    </div>
  );
}

export default App;
