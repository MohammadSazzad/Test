import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/1KaPevY.png',
  imageSize: 90,
};

function App() {
  return (
    <>
    <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

export default App
