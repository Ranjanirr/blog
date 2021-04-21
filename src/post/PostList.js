import React from 'react'

import Post from './Post'

export default function PostList(props) {
    
    const handleSearch = e =>{
        e.preventDefault();
        console.log(e.target.value);
        const searchText = e.target.value
        props.onSearch(searchText)
      }

    
    return (
        <div>
             <input
                className="search"
                type="text"
                placeholder="Search an author..."
                onChange={handleSearch}
                style = {{marginBottom: 10}}
            />
            {props.posts.map((p, i) => (
                <React.Fragment key={'post-' + i}>
                    <Post {...p} dispatch = {props.dispatch} disabled = {props.disabled} />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    )
}
