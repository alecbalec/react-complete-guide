import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [newTitle, setNewTitle] = useState('');
    // const [newAmount, setNewAmount] = useState('');
    // const [newDate, setNewDate] = useState('');

    const [userInput, setUserInput] = useState({
        newTitle: '',
        newAmount: '',
        newDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                newTitle: event.target.value
            }
        });
        console.log(userInput);
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                newAmount: event.target.value
            }
        });
        console.log(userInput);
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                newDate: event.target.value
            }
        });
        console.log(userInput);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.newTitle,
            amount: userInput.newAmount,
            date: new Date(userInput.newDate).toString()
        };

        console.log(expenseData);

        setUserInput({
            newTitle: '',
            newAmount: '',
            newDate: ''
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expens__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input placeholder="New expense"
                        type="text" 
                        value={userInput.newTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        placeholder="$" 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={userInput.newAmount} 
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2022-01-01" 
                        max="2023-01-01" 
                        value={userInput.newDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;