import React, { useState, useRef } from 'react';
import DartSvg from './DartSvg';
import CalculatorSvg from './CalculatorSvg';

const PlayerControl = (props) => {
  const firstScore = useRef('');
  const secondScore = useRef('');
  const thirdScore = useRef('');

  const firstMulti = useRef(1);
  const secondMulti = useRef(1);
  const thirdMulti = useRef(1);

  const calculateScore = (e) => {
    e.preventDefault();
    let newScore = props.player.score;
    const scores = [
      [firstScore.current.value, firstMulti.current.value],
      [secondScore.current.value, secondMulti.current.value],
      [thirdScore.current.value, thirdMulti.current.value],
    ];

    for (let i = 0; i < scores.length; i++) {
      const currentArrow = scores[i];
      if (
        newScore - currentArrow[0] * currentArrow[1] === 0 &&
        currentArrow[1] === '2'
      ) {
        newScore -= currentArrow[0] * currentArrow[1];
        props.updatePlayerScore(props.player.id, newScore);
        props.setIsWinnerHandler(props.player.name);
        break;
      } else if (
        newScore - currentArrow[0] * currentArrow[1] === 1 ||
        newScore - currentArrow[0] * currentArrow[1] < 0 ||
        (newScore - currentArrow[0] * currentArrow[1] === 0 &&
          currentArrow[1] != '2')
      ) {
        props.updatePlayerScore(props.player.id, props.player.score);
        break;
      } else {
        newScore -= currentArrow[0] * currentArrow[1];
        props.updatePlayerScore(props.player.id, newScore);
      }
    }
    resetFields();
    props.nextPlayerHandler();
  };

  const resetFields = () => {
    firstScore.current.value = '';
    firstMulti.current.value = '1';
    secondScore.current.value = '';
    secondMulti.current.value = '1';
    thirdScore.current.value = '';
    thirdMulti.current.value = '1';
  };
  return (
    <div className=" flex flex-col">
      <div className="flex justify-between items-center px-6 py-6 bg-dcnavy rounded-t-xl">
        <h2 className="text-white text-3xl font-bold">{props.player.name}</h2>
        <i
          className="text-white font-bold not-italic text-2xl bg-yellow-600 p-2 rounded-xl shadow-lg"
          style={{ backgroundColor: props.player.color }}
        >
          {props.player.score}
        </i>
      </div>

      <form
        className="px-4 py-8 flex flex-col items-center space-y-4 bg-white rounded-b-xl"
        onSubmit={calculateScore}
        action="#"
      >
        <div className="flex space-x-2">
          <div className="flex items-center">
            <DartSvg />
          </div>
          <input
            type="number"
            placeholder="Score"
            className="p-2 rounded-xl outline-none border border-gray-300 w-full"
            ref={firstScore}
          />
          <select
            name="multiplier"
            id="multiplier1"
            className="p-2 rounded-xl outline-none border
         border-gray-300"
            ref={firstMulti}
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
            type="number"
            placeholder="Score"
            className="p-2 rounded-xl outline-none border border-gray-300 w-full"
            ref={secondScore}
          />
          <select
            name="multiplier"
            id="multiplier2"
            className="p-2 rounded-xl outline-none border border-gray-300"
            ref={secondMulti}
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
            type="number"
            placeholder="Score"
            className="p-2 rounded-xl outline-none border border-gray-300 w-full"
            ref={thirdScore}
          />
          <select
            name="multiplier"
            id="multiplier3"
            className="p-2 rounded-xl outline-none border border-gray-300"
            ref={thirdMulti}
          >
            <option value="1">x1</option>
            <option value="2">x2</option>
            <option value="3">x3</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-dcgreen px-8 py-3 text-white font-bold rounded-xl shadow-lg active:scale-95 flex items-center justify-center space-x-1"
        >
          <CalculatorSvg />
          <span>Calculate</span>
        </button>
      </form>
    </div>
  );
};

export default PlayerControl;
