import { useDispatch } from 'react-redux';
import { increment } from '../../store/slices/counterSlice';

export default function incrementByAmount({value}){

    const dispatch = useDispatch();

    const incrementByAmountHandler = (value) => {
        dispatch(increment());
        () => dispatch(incrementByAmount(Number(incrementAmount) || 0))
    }

    return(
        <>
            <button
                className='py-1 px-4 bg-fuchsia-200 rounded-lg'
                onClick={incrementByAmountHandler(value)}
            >
                Add Amount
            </button>
        </>
    )
}