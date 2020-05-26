import React, {useContext , useState} from 'react';
import { ExpenseContext } from '../ContextApi/ExpenseContext';
import axios from 'axios'
const Transiction = () => {
    const { dispatch} = useContext(ExpenseContext);
    const [Amount , setAmount ] = useState(0);
    const [Text , setText] = useState('');
    const [Error , setError] = useState(false);
    const Add = async (e) => {
        e.preventDefault();
        if(Amount && Text) {
            dispatch({type:'ADD_TRANSACTIONS' , Text , Amount});
            await axios.post('/api/v1/transactions/add' , {Text , Amount});
            setError(false);
        } else{ setError(true)}
        setAmount('');
        setText('');
    }
    return(
        <div className="Transiction">
            <h4>Add New Transiction</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="Text">Text</label>
                    <input onChange={(e) => setText(e.target.value)} value={Text} type="text" placeholder='Enter Text...' id='Text' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="Amount">Amount<br/> (Negative - Expense , Positive -Income) </label>
                    <input onChange={(e) => setAmount(Number(e.target.value))} value={Amount} type="number" placeholder='Enter Amount...' id='Amount' required/>
                </div>
                {Error ? <p className='Error'>Please Enter Text and Amount</p> : null }
                <button className='btn' onClick={Add}>Add Transaction</button>
            </form>
        </div>
    )
}
export default Transiction;