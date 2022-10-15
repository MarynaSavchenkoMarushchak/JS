//input Array clients Arrey balances, string , amount
//Output Number(balanct-amount),Array balances
// const withdraw = (clients, balances, client, amount) => {
//   for (let i = 0; i <= clients.length - 1; i += 1) {
//     if (clients[i] === client && balances[i] >= amount) {
//       balances[i] -= amount
//       console.log(balances[i], balances)
//       return balances
//     }
//   }
//   console.log(-1, balances)
//   return -1
// }

// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//input Array clients Arrey balances, string , amount
//Output Number(balanct-amount),Array balances

const withdraw = (clients, balances, client, amount) => {
  for (let i = 0; i < clients.length - 1; i += 1) {
    if (clients[i] === client && balances[i] >= amount) {
      balances[i] -= amount
      console.log(balances[i], balances)
      return balances
    }
  }
  console.log(-1, balances)
  return -1
}
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50)
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
