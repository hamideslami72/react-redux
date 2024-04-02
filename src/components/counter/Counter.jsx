import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../store/slices/counterSlice';
import Increment from './Increment';
import Decrement from './Decrement';

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className='mx-auto space-y-4 justify-center mt-20 bg-gray-50 w-1/3 rounded-lg p-10'>
      <div className='flex space-x-4'>
        <Increment />
        <span className='font-bold text-xl'>{count}</span>
        <Decrement />
      </div>
      <div className='flex space-x-4'>

        <input
          className='py-1 px-4 bg-white w-20 rounded border border-fuchsia-500'
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />

        

        <button
          className='py-1 px-4 bg-fuchsia-200 rounded-lg'
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>

      </div>
    </div>
  );
}
