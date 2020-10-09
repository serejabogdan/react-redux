import React from 'react';
import Post from './Post'
function noPosts() {
    return (
        <div>
            <p>
                NO POSTS
            </p>
        </div>);
}
export default ({posts}) => {
    if(!posts.length) {
        return noPosts();
    }    
    return posts.map(post => <Post post={post} key={post}/>)
}