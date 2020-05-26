import React , {createContext  , useReducer} from 'react';
import Reducer from './Reducer';

//initial State
const initialState ={
    transactions:[],
    Income:0,
    Expense:0,
    total:0,
    error:null,
    loading:true
}
//create Context
export const ExpenseContext = createContext(initialState);

const ExpenseProvder = props => {
    const [transactions , dispatch] = useReducer(Reducer , initialState);
    return(
        <ExpenseContext.Provider value={{transactions , dispatch}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}
export default ExpenseProvder;