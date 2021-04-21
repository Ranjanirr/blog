import React, { useState } from 'react'

export default function NewPostForm({ user, dispatch }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const postStyle = {
        display: "flex",
        flexDirection: "column",
        width: "50%" 
    }
    function handleTitle(evt) {
        setTitle(evt.target.value)
    }

    function handleContent(evt) {
        setContent(evt.target.value)
    }

    function handleCreate() {
        const newPost = { title, content, author: user, doesMatchSearch:true }
        dispatch({ type: 'CREATE_NEW_POST', ...newPost })
        setTitle('')
        setContent('')
    }

    return (
        <form onSubmit={e => { e.preventDefault(); handleCreate() }}>
            <div style = {{fontFamily: 'Train One, cursive'}}>Author: <b>{user}</b></div>
            <div style = {postStyle}>
                <input style = {{marginBottom: 10, marginTop: 10}} placeholder="Title" value={title} onChange={handleTitle} type="text" name="create-title" id="create-title" />
                <textarea value={content} onChange={handleContent} />
                <input style = {{marginBottom: 10, marginTop: 10}} type="submit" value="Create" />
            </div>
            
        </form>
    )
}
