const withdraw = (clients, balances, client, amount) => {
  for (let i = 0; i < clients.length; i += 1) {
    if ((client === clients[i]) & (amount <= balances[i])) {
      console.log(client + ',', balances[i] - amount)
    }
    if ((client === clients[i]) & (amount > balances[i])) {
      console.log('-1')
      return -1
    }
  }
}

const withdraw2 = (clients, balances, client, amount) => {
  const res = clients.indexOf(client)
  if ((res >= 0) & (amount <= balances[res])) {
    console.log(client + ',', balances[res] - amount)
    return res
  }
  return 'False'
}

console.log(withdraw2(['Ann', 'John', 'User'], [1400, 50, -6], 'John', 40))
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10) // ==> -1 (balances array should be [1400, 87, -6])
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100)
