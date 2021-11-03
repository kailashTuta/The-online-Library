import React from 'react'
import useFetch from '../hooks/useFetch'
import ServiceList from './ServiceList'
import Footer from './Footer';
import { Spinner } from 'react-bootstrap'

const Services = () => {

    const { data: services, isPending, error } = useFetch('http://localhost:5000/services')

    return (
        <div>
            <h1 className="display-3 text-center font-weight-bold">Services</h1>
            <div className="services">
                {error && <p>{error}</p>}
                {isPending && <Spinner animation="grow" />}
                {services && <ServiceList services={services} />}
            </div>

            <Footer />
        </div>
    )
}

export default Services
