
import React from 'react'

export default function Logout({ user, dispatch }) {
    const logoutStyle = {
        display: "flex",
        margin: "5px",
        flexDirection: "column",
        width: "50%",
        fontFamily: 'Train One, cursive'
      };
    return (
        <form style = {logoutStyle} onSubmit={e => { e.preventDefault(); dispatch({ type: 'LOGOUT' }) }}>
            Logged in as: {user}
            <input type="submit" style = {{marginTop: 15}} value="Logout" />
        </form>
    )
}