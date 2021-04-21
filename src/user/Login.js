import React, { useState } from 'react'

export default function Login({ dispatch }) {

  const [username, serUsername] = useState('')

  function handleUsername(evt) {
    serUsername(evt.target.value)
  }
  const loginStyle = {
    display: "flex",
    margin: "5px"
  };
  return (
    <form onSubmit={e => { e.preventDefault(); dispatch({ type: 'LOGIN', username }) }}>
     <div >
        <input style = {loginStyle} type="text" placeholder="Username"value={username} onChange={handleUsername} name="login-username" id="login-username" />
        <input style = {loginStyle} type="password" placeholder="Password" name="login-password" id="login-password" />
        <input style = {loginStyle} type="submit" value="Login" disabled={username.length === 0} />
     </div>
    </form>
  )
}
