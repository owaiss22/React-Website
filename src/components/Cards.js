import React from 'react';

const Cards = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgScr} className="card-img-top cardImage" alt="web Development    " />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;