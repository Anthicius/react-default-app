import React, { createContext, useState, useEffect } from 'react';

export const ApiDataContext = createContext();

export const ApiDataProvider = (props) => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3001/posts');
            const data = await response.json();
            setApiData((prevData) => ({ ...prevData, posts: data }));
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/users');
            const data = await response.json();
            setApiData((prevData) => ({ ...prevData, users: data }));
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const fetchComments = async () => {
        try {
            const response = await fetch('http://localhost:3001/comments');
            const data = await response.json();
            setApiData((prevData) => ({ ...prevData, comments: data }));
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };
    const fetchAlbums = async () => {
        try {
            const response = await fetch('http://localhost:3001/albums');
            const data = await response.json();
            setApiData((prevData) => ({ ...prevData, albums: data }));
        } catch (error) {
            console.error('Error fetching albums:', error);
        }
    };
    const fetchPhotos = async () => {
        try {
            const response = await fetch('http://localhost:3001/photos?_limit=10');
            const data = await response.json();
            setApiData((prevData) => ({ ...prevData, photos: data }));
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    const fetchData = async () => {
        await Promise.all([fetchPosts(), fetchUsers(), fetchAlbums(), fetchPhotos(), fetchComments()]);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    // Man kazkodel teko po viena fetch data daryti, nes kazkodel kai bandziau fetchinti http://localhost:3001/ man nepullino resources kad galeciau access it with data.post or data.comments....

    return (
        <ApiDataContext.Provider value={{ apiData, setApiData }}>
            {props.children}
        </ApiDataContext.Provider>
    );
};
