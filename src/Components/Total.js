import React, {useContext} from 'react';
import {ExpenseContext} from '../ContextApi/ExpenseContext'
import {numberWithCommas} from '../uitils/format'
const Total = () => {
    const {transactions} = useContext(ExpenseContext);
    //Total Component
    return(
        <div className="Total">
            <h2>Expense Tracker </h2>
            <div className="balance">
                <h4>Your Balance</h4>
                <h2>$ {numberWithCommas(transactions.Income + transactions.Expense)}</h2>
            </div>
        </div>
    )
}
export default Total;