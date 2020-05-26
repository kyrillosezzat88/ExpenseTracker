import React , {useContext} from 'react';
import {ExpenseContext} from '../ContextApi/ExpenseContext';
import '../Style/Loader.css';
const Loader = () => {
    const {transactions} = useContext(ExpenseContext);
    return(
        <div className={transactions.loading ? 'loader' : 'loaded'}>
            <div className="book">
            <div className="inner">
                <div className="left"></div>
                <div className="middle"></div>
                <div className="right"></div>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        </div>
    )
}
export default Loader;