import React , {useContext} from 'react';
import { ExpenseContext } from '../ContextApi/ExpenseContext';
const Expenses = () => {
    const {transactions} = useContext(ExpenseContext);
    return(
        <div className="Expenses">
            <div className="Income">
                <h4>Income</h4>
                <h2>${transactions.Income}</h2>
            </div>
            <div className="Expense">
                <h4>Expense</h4>
                <h2>${transactions.Expense}</h2>
            </div>
        </div>
    )
}
export default Expenses;