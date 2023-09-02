//import { useState } from "react"

import { io } from 'socket.io-client'

const App = () => {

  const send = () => {
    const socket = io();

    // send a message to the server
    socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

    // receive a message from the server
    socket.on("hello from server", (...args) => {
      console.log(args)
    });
  }

  return (
    <div className="App">
      <button onClick={send}>SEND</button>
    </div>
  )
}

export default App
