import handleProfileSignup from './6-final-user';

const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
console.log(queue);
