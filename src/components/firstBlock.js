import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { up, down } from './newSlice';

const ArrStateComponet = () => {
  const arrState = useSelector((state) => state.arr.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Значения</div>
      <button onClick={() => dispatch(up())}>Up</button>
      <button onClick={() => dispatch(down())}>Down</button>
      <div>Результат: {arrState}</div>
    </div>
  );
};

export default ArrStateComponet;
