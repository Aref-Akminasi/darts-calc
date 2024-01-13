import React from 'react';

const PlayerInput = (props) => {
  return (
    <input
      name="player"
      type="text"
      placeholder="Player Name"
      className="text-center p-2 border rounded-xl outline-none focus:border-black"
      onChange={(event) => {
        props.editPlayerHandler(props.idx, event.target.value);
      }}
    />
  );
};

export default PlayerInput;
