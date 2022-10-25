export const reverseArray = (arr) =>
  !Array.isArray(arr) ? null : [...arr].reverse();
// ...............................................................
export const withdraw = (clients, balances, client, amount) => {
  let indexOfPerson = clients.indexOf(client);
  return balances[indexOfPerson] >= amount
    ? (balances[indexOfPerson] -= amount)
    : -1;
};
// ...............................................................
export const getAdults = (obj) =>
  Object.fromEntries(Object.entries(obj).filter((key) => 18 <= key[1]));
