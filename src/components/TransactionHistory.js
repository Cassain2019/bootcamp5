import React, {useContext} from 'react';


//Import Global Context
import {GlobalContext} from '../context/GlobalState';

//Import Transactions
import {Transactions} from './Transactions';
export const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext);

    return(
    <>
        <h3>Transaction History</h3>
        <ul className="list">
            {transactions.map(transactions => (
            <Transactions key={transactions.id} transactions={transactions}></Transactions>
            ))}
        </ul>
    </>
    )
}