import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

function noPosts() {
    return (<div><p>NO POSTS</p></div>);
}
const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return noPosts();
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => ({
    syncPosts: state.posts.posts
});

export default connect(mapStateToProps, null)(Posts);
