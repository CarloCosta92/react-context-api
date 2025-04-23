import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                console.log(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
        ;
    }, []);


    //gestione del caricamento

    if (loading) {
        return <div>Caricamento dei post...</div>;
    }

    if (error) {
        return <div>Errore nel caricamento dei post: {error}</div>;
    }

    return (
        <div>
            <h1>Post</h1>
        </div>
    );
}

export default PostPage;