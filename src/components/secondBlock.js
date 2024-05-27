import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { square } from './functionSlice';

const SecondBlock = () => {
  const nameSecondBlock = useSelector((state) => state.arr.value);
  const valueSecondBlock = useSelector((state) => state.counter.value);
  const funcRedux = useSelector((state) => state.func.value);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {nameSecondBlock}
        {valueSecondBlock}
      </div>

      <button onClick={() => dispatch(square())}>Function Square</button>
      <div>function reduce {funcRedux}</div>
    </div>
  );
};

export default SecondBlock;
