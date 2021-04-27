import React from 'react';
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );
let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];