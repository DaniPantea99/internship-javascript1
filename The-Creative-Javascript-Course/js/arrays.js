const listUsers = [`Dev Ed`, `Johnny`, `George`];

console.log(listUsers[0]);
console.log(typeof listUsers);

listUsers.pop();
console.log(listUsers);

listUsers.push(`Bob`);
console.log(listUsers);

listUsers.shift();
console.log(listUsers);

listUsers.unshift(`Roger`);
console.log(listUsers);


console.log(listUsers.length);
