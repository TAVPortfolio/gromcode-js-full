'use strict';
let message = 'Just learn it';
function sendMessage(name) {
  const sender = 'Your Gromcode';
  return console.log(`${name}, ${message}! ${sender}`);
}

function setMessage(text) {
  message = text;
}

sendMessage('Ann');
setMessage('Good job');
sendMessage('Tom');
