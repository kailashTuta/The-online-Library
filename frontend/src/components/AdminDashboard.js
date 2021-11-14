import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavabarComp from './NavabarComp'


const AdminDashboard = () => {
    const history = useHistory();
    const [adminData, setAdminData] = useState();
    const callAdminDashboard = async () => {
        try {
            const res = await fetch('http://localhost:5000/admin/dashboard', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            setAdminData(data);

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
            else {
                if (data.role === 'admin') {
                    history.push('/admin-dashboard');
                }
                else if (data.role === 'user') {
                    history.push('/user-dashboard');
                }
            }
        }
        catch (err) {
            console.log(err);
            history.push('/login')
        }
    }
    useEffect(() => {
        callAdminDashboard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <NavabarComp />
            <h1>AdminDashboard</h1>
        </div>
    )
}

export default AdminDashboard
