import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();
    const {addtransactions} = useContext(GlobalContext);

        const onSubmit = e => {
            e.preventDefault();
            const newTransaction = {
              id: Math.floor(Math.random() * 100000000),
              description,
              transactionAmount: +transactionAmount
            }
            AddTransaction(newTransaction);
          }

    return(
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Description</label>
            <input  type="text" 
                    id="description" 
                    placeholder="Detail of Transaction..." 
                    value={description}
                    onChange={(e)=> setDescription(e.target.value) }
            />

        </div>

        <div className="form-control">  
        <label htmlFor="amount">Transaction Amount <br />(negative - expense, positive - income)</label>
            <input  type="number" 
                    id="amount" 
                    placeholder="Enter amount..." 
                    value={transactionAmount}
                    onChange={(e)=> setTransactionAmount(e.target.value) }
            />
        </div>
        <button className="btn">Add transaction</button>
    </form>
      </>
    )
}