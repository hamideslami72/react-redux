import { useDispatch } from "react-redux";
import { decrement } from "../../store/slices/counterSlice";

export default function Decrement(){

    const dispatch = useDispatch()
    const decrementHandler = () => {
        dispatch(decrement());
    }

    return(
        <>
           <button
                className='py-1 px-4 bg-fuchsia-200 rounded-lg'
                aria-label="Decrement value"
                onClick={decrementHandler}
            >
             -
            </button>
        </>
    )
}