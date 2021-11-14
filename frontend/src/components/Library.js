import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import NavabarComp from './NavabarComp'

const Library = () => {
    const history = useHistory();
    const callLibrary = async () => {
        try {
            const res = await fetch('http://localhost:5000/library', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        }
        catch (err) {
            console.log(err);
            history.push('/login')
        }
    }
    useEffect(() => {
        callLibrary();
    })
    return (
        <div>
            <NavabarComp />
            <h1 className="text-center">Library</h1>
        </div>
    )
}

export default Library
