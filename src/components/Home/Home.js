import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import useServices from '../../useServices/useServices';
import './Home.css';
const Home = () => {

    const { services } = useServices();
    let history = useHistory();

    const handleServiceBtn = (id) => {
        const url = `/events/event/${id}`;
        history.push(url);
    }
    return (
        <div>
            <div className="intro-search">
                <h1 className="my-5">GROW BY HELPING PEOPLE IN NEED</h1>
                <InputGroup className="my-3 w-25 mx-auto">
                    <FormControl
                        placeholder="Search.."
                        aria-label="Search.."
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
            <div className="services container my-5">
                <div className="row g-4">
                    {services.map(service => <div key={service._id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <img className="w-100" src={service.img} alt="" />
                        <button onClick={() => handleServiceBtn(service._id)} className="w-100 btn btn-primary">{service.name}</button>
                    </div>)}
                </div>
            </div>

        </div>
    );
};

export default Home;