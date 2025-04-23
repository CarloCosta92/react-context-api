import React, { useContext } from 'react';
import PostCard from './PostCard';
import { PostContext } from '../context/PostContext';

function PostList() {
    //hook useContext per accedere al valore fornito da PostContext
    const { posts } = useContext(PostContext);

    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;