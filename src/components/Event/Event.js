import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Event = () => {
    const { id } = useParams();
    const { services } = useServices();

    const singleService = services.filter(service => service._id === id);
    return (
        <div>
            <div>
                <div className="services container my-5">
                    <div className="row g-4 w-50 mx-auto">
                        {singleService.map(service => <div key={service._id} className="col-12">
                            <img className="w-100" src={service.img} alt="" />
                            <h3 className="w-100 bg-primary p-2 rounded-3 text-white">{service.name}</h3>
                            <button className="btn btn-warning w-100 fw-bold"><h3>Join Project</h3></button>

                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;