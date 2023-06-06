import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from 'store/counter/types';

export default function Counter() {
    const { total, step } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: INCREMENT, payload: step });
    }
    
    const handleDecrement = () => {
        dispatch({ type: DECREMENT, payload: step });
    }
  return (
        <div style={{marginLeft: 50, marginTop: 50}}>
            <h1>COUNTER</h1>
            <p style={{ fontSize: 24, marginLeft: 50 }}><b>{total}</b></p>
            <div>
                <Button variant="contained" onClick={handleIncrement}> + </Button> {' '}
                <Button variant="contained" onClick={handleDecrement}> - </Button>
            </div>
        </div>
  )
}

