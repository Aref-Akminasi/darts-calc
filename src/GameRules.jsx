const GameRules = () => {
  return (
    <div className="max-w-96 text-white">
      <h1 className="text-2xl font-bold">Game Rules:</h1>
      <ul className="list-disc">
        <li>Each player or team begins with a score of 501.</li>
        <li>
          To win, you must reduce your score to exactly zero. However, there's a
          twist: your final dart must land in a double segment or the bullseye.
        </li>
        <li>
          If your score reaches 1 or goes below zero during your turn, that
          turn's score is cancelled. Your score then reverts to what it was at
          the beginning of that turn.
        </li>
      </ul>
    </div>
  );
};

export default GameRules;
