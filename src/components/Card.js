import React from 'react';
// import './Card.css';

const Card = ({name,email,id}) => {
    // const {name,email,id} = props;
    return (
        <div className=" bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div className="tc">
                <h2>{name}</h2>
                <a className="link" href="mailto:jane@gmail.com">{email}</a>
            </div>
        </div>
    ) 
}

export default Card;