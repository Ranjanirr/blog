
import React, { useReducer} from 'react'
import appReducer from './reducers'


import PostList from './post/PostList'
import NewPostForm from './post/NewPostForm'
import UserBar from './user/UserBar'


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl', doesMatchSearch: true},
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl', doesMatchSearch: true },
  { title: 'Im a bad boy', content: 'DUH!', author: 'Phineas Eilish', doesMatchSearch: true }
]

function App() {
  const headStyle = {
    color: "#004d66",
    backgroundColor: "#b3ecff",
    padding: "10px",
    fontFamily: "Pangolin",
    border: "2px solid red",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "underline"
  };
  const bodyStyle = {
    color: "#004d66",
    fontFamily: 'Lobster, cursive'
    
  };
  //const [user, dispatchUser] = useReducer(userReducer, '')
  //const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts)

 const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts, disabled:false})
 //appReducer 
 const { user, posts, disabled } = state

 let search = searchText =>{
    dispatch({ type: 'FILTER_POSTS', value: searchText})
 }
 
var filterPosts = (posts) => {
  const result = posts.filter((post) => post.doesMatchSearch === true);
  console.log(result)
  return result;
};

const sorted = posts.sort(function(a, b) {
  console.log("After the value of disabled is " +disabled)
  var authorA = a.author.toUpperCase(); // ignore upper and lowercase
  var authorB = b.author.toUpperCase(); // ignore upper and lowercase
  if (authorA < authorB) {
    return -1;
  }
  if (authorA > authorB) {
    return 1;
  }

  // names must be equal
  return 0;
})
const filtered = filterPosts(sorted)
  return (
    <div className="container">
      <hr />
      <h1  style = {headStyle}> Blog using react hooks </h1>
      <hr />
      <div style={{ padding: 8 }}>
        <div>
          <UserBar user={user} dispatch={dispatch} />
          <hr />
          {user && <NewPostForm user={user} dispatch={dispatch} />}
          <br />
          <hr />
        </div>
      
        <PostList posts={filtered} dispatch = {dispatch} onSearch = {search} disabled = {disabled}/>
      </div>
    </div>
  );
}

export default App;
