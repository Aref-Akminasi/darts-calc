const GameOver = (props) => {
  const reloadLocationHandler = () => {
    location.reload();
  };
  return (
    <div className="max-w-80 w-full">
      <div className="flex flex-col items-center shadow-lg">
        <h1 className="text-3xl font-bold text-white p-8 bg-dcnavy w-full text-center rounded-t-xl">
          {props.winners.length > 1 ? 'Winners' : 'Winner'}
        </h1>
        <div className="text-2xl font-bold p-4 bg-white w-full text-center rounded-b-xl">
          {props.winners.map((winner, idx) => (
            <div key={idx}>
              {`#${idx + 1} `}
              {winner}
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-full bg-dcblue text-white mt-6 p-4 rounded-2xl font-bold active:scale-95 shadow-lg"
        onClick={reloadLocationHandler}
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
