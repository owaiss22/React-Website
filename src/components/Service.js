import React from 'react';
//Data
import Sdata from './Sdata';
//Bootstrap
import Cards from './Cards';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-center">
                    <div className="horizontal-heading mb-5">
                        <h5>What We Do</h5>
                        <h2>Our Services</h2>
                    </div>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Sdata.map((val, index) => {
                                        return <Cards key={index} imgScr={val.imgScr} title={val.title} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;