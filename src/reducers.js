
function userReducer(state, action) {
    let { type } = action
    switch (type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
 
        default:
            return state;
    }
}

function delPost (title, state){
    return state.filter(post => post.title !== title)
}
const search = (searchText, state) =>{
    //makes sure whichever ones do not match are set to false
    console.log("search was called");
   
    for (var i = 0; i <state.length; i++) {
      state[i].doesMatchSearch = true;
    }
    for (var j = 0; j < state.length; j++) {
      if (!state[j].author.toLowerCase().includes(searchText.toLowerCase())) {
        state[j].doesMatchSearch = false;
      }
    }
    return state
}
function disabledReducer(state, action) {
    console.log(state)
    console.log(action)
    let { type } = action
    switch (type) {
        case 'DISABLE_VOTING':
            console.log("The disabled is "+ action.value)
            return action.value
        default: 
            return state
    }
}  
function postsReducer(state, action) {
    console.log(state)
    let { type } = action
    switch (type) {
        case 'CREATE_NEW_POST':
            const newPost = { title: action.title, content: action.content, author: action.author, doesMatchSearch: action.doesMatchSearch}
            return [newPost, ...state]
        case 'DELETE_POST':
            const deletedPosts = delPost(action.value, state)
            return [...deletedPosts]
        case 'FILTER_POSTS':
            const filteredPosts = search(action.value, state)
            return [...filteredPosts]
        default:
            return state;
    }
}


export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),//only one item
        posts: postsReducer(state.posts, action),//multiple items
        disabled: disabledReducer(state.disabled, action)
    }
}