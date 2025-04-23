import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PostList from './PostList';
import { PostContext } from '../context/PostContext';

function PostPage() {
    //variabile di stato per caricamento
    const [loading, setLoading] = useState(true);
    //variabile di stato per messaggio errore
    const [error, setError] = useState(null);
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';
    // funzione per aggiornare la lista post
    const { setPosts } = useContext(PostContext);

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
        ;
    }, [setPosts]);

    //gestione del caricamento

    if (loading) {
        return <div>Caricamento dei post...</div>;
    }
    // gestione errore
    if (error) {
        return <div>Errore nel caricamento dei post: {error}</div>;
    }

    return (
        <div>
            <h1>Post</h1>
            <PostList />
        </div>
    );
}

export default PostPage;