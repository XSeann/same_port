import { useState } from "react"

import { io } from 'socket.io-client'

const App = () => {
  const [message, setMessage] = useState([])
  const send = () => {
    const socket = io();

    // send a message to the server
    socket.emit("chat message", 5, "6", { 7: Uint8Array.from([8]) });

    // receive a message from the server
    socket.on("chat message", (...args) => {
      setMessage(e => [...e, args])
      console.log(args)
    });
  }

  return (
    <div className="App">
      {message.length && message.map(data => 
        <div>
          {data}
        </div>
      )}
      <button onClick={send}>SEND</button>
    </div>
  )
}

export default App
