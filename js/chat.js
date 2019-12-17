
const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageContainer = document.getElementById('chat')
const messageInput = document.getElementById('message-input')
const name = haeNimi();

socket.emit('new-user', name)
appendMessage('Sinä liityit')

socket.on('user-connected', name =>{
  appendMessage('[' + name + ' liittyi]')
})

socket.on('user-disconnected', name =>{
  appendMessage('[' + name + ' disconnected]')
})

socket.on('chat-message', data =>{
  appendMessage(`${data.name}: ${data.message}`)
})

messageForm.addEventListener('submit', e =>{
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`Sinä: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ""
})


function huonenappi(id){
  const huone = id;
  socket.emit('huoneen-vaihto', huone, name)
}
function test(id){
  console.log(id);
}

function appendMessage(message){
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}

function luoHuone(nimi){
  var buttonElement = document.createElement('button')
  buttonElement.innerText = nimi;
  buttonElement.onClick = '"test()"';
  buttonElement.setAttribute('id', nimi);
  huoneContainer.append(buttonElement);
}

function haeNimi(){
  var x = document.cookie;
  b = x.split('=');
  return b[0];
}
