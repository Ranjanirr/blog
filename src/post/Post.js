import React, {useState} from 'react'

export default function Post(props) {
    let { title, content, author } = props
    let [votes, changeVotes] = useState(0)
    let [resultMessage, changeMessage] = useState("")
    let dispatch = props.dispatch

    const headStyle = {
        color: "#004d66",
        backgroundColor: "#b3ecff",
        padding: "10px",
        fontFamily: "Pangolin",
        border: "2px solid red",
        borderRadius: "5px",
        width: "50%",
        textAlign: "center"
      };
      const bodyStyle = {
        color: "#004d66",
        fontFamily: 'Lobster, cursive'
        
      };
    function handleVote(voteVal){  
        console.log(props.disabled + " is the value on handleVote")
        if (props.disabled !=  true){
            changeVotes(votes + voteVal)
            changeMessage("Net vote: " + (votes + voteVal))
        }   
        if(votes === 5){
            dispatch({ type: 'DISABLE_VOTING', value: true })
            changeMessage("This is our winning post")
        }
    }
    function handleDelete() {
        
        dispatch({ type: 'DELETE_POST', value: title})
    
    }
    

    return (
        <div style = {bodyStyle} >
            <h3 style={headStyle}>{title}</h3>
            <div>{content}</div>
            <br />
            <i>Written by <b>{author}</b></i>
            <div>
                <button style = {{marginRight: 10, marginTop:10}} onClick={e => handleVote(1)}>Up-vote</button>
                <button style = {{marginRight: 10, marginTop:10}} onClick={e => handleVote(-1)}>Down-vote</button>
            </div>
            <div>
                <p>{resultMessage}</p>
            </div>
            <button style = {{marginRight: 10, marginTop:10, backgroundColor: " #ff3333"}} onClick = {handleDelete}>Delete</button>
        </div>
        
    )
}
