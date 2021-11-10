import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const UserDashboard = () => {
    const history = useHistory();
    const [userData, setUserData] = useState();
    const callUserDashboard = async () => {
        try {
            const res = await fetch('http://localhost:5000/users/dashboard', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

            if (data.role === 'admin') {
                history.push('/admin-dashboard');
            }
            else if (data.role === 'user') {
                history.push('/user-dashboard');
            }

        }
        catch (err) {
            console.log(err);
            history.push('/login')
        }
    }
    useEffect(() => {
        callUserDashboard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h1>User Dashboard</h1>
        </div>
    )
}

export default UserDashboard
