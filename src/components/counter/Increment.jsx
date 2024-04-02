import { useDispatch } from 'react-redux';
import { increment } from '../../store/slices/counterSlice';

export default function Increment(){

    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    }

    return(
        <>
            <button
                className='py-1 px-4 bg-fuchsia-200 rounded-lg'
                aria-label="Increment value"
                onClick={incrementHandler}
            >
             +
            </button>
        </>
    )
}