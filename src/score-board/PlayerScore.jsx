import React from 'react';

const PlayerScore = (props) => {
  return (
    <div className="bg-dclightnavy flex min-w-96 px-6 py-2 justify-between items-center rounded-xl border">
      <h3 className="text-white font-bold">{props.name}</h3>
      <strong
        style={{
          backgroundColor: props.color,
          color: 'white',
          padding: '0.5rem',
          borderRadius: '0.75rem',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        {props.score}
      </strong>
    </div>
  );
};

export default PlayerScore;
