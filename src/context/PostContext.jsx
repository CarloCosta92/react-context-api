import { createContext, useState, useContext } from 'react';

export const PostContext = createContext({
    posts: [],
    setPosts: () => { },
});

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => useContext(PostContext);
export default PostContext;