import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transactions = (Transactions) => {
    
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = Transactions.transactionAmount < 0 ? '-' : '+';
    
    return(
    <div>
        <li className={Transactions.transactionamount < 0 ? 'minus' : 'plus'}>
            {Transactions.description} 
            <span>{sign}${Math.abs(Transactions.transactionamount)}</span>
            <button onClick={() => deleteTransaction(Transactions.id)} className="delete-btn">x</button>
        </li>

    </div>


    )
}