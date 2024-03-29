import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { SETSTEP } from 'store/counter/types';

export default function Step() {
    const dispatch = useDispatch();
    const step = useSelector(state => state.counter.step)
    console.log(step);
    
    const handleSubmit = e => {
        e.preventDefault();
        const { value } = e.target.elements.step;
        dispatch ({ type: SETSTEP, payload: Number(value) })
    }

  return (
    <form style={{ marginLeft: 50, marginTop: 20 }}
          onSubmit={handleSubmit} >
          
          <TextField id="standard-basic"
                    label="step"
                    variant="standard"
                    name='step'
                    type='number'
          /> {' '}
          <Button variant="contained" type='submit'>Set Step</Button>
    </form>
  )
}
