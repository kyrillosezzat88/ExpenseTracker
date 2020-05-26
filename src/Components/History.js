import React , {useContext , useEffect} from 'react'
import {ExpenseContext} from '../ContextApi/ExpenseContext'
import axios from 'axios';

export default function History() {
    const {transactions , dispatch} = useContext(ExpenseContext);
    async function FetchData(){
        transactions.loading = true;
        try{
            const response = await axios.get('/api/v1/transactions');
            let Income = 0;
            let Expense = 0;
            for(let i of response.data.data){
                i.Amount > 0 ? Income += i.Amount : Expense += i.Amount
            }
            dispatch({type:'GET_TRANSACTIONS' , data: response.data.data ,Income , Expense});
        }catch(err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
        FetchData();
    },[ ]);
    //Function to Remove transactions 
    const Remove = async (id) => {
        try{
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({type:'REMOVE_TRANSACTIONS', id});
    
        } catch(err) {
            console.log(err.message)
        }
    }
    return (
        <div className='History'>
            <h4>History</h4>
            {transactions.transactions.length > 0 ? (
                transactions.transactions.map(trans => (
                <div onClick={() => Remove(trans._id) }  className={`details ${trans.Amount > 0 ? 'Income' : 'Expense' }`} key={trans._id}>
                    <h6>{trans.Text}</h6>
                    <h6>{trans.Amount}</h6>
                </div>
            ))
            ) : (
                <p>There Is No Expense or Income </p>
            )}
        </div>
    )
}
