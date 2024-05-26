import React from 'react';
import { useSelector } from 'react-redux';

const SecondBlock = () => {
  const nameSecondBlock = useSelector((state) => state.arr.value);
  const valueSecondBlock = useSelector((state) => state.counter.value);
  return (
    <div>
      <div>
        {nameSecondBlock}
        {valueSecondBlock}
      </div>
    </div>
  );
};

export default SecondBlock;
