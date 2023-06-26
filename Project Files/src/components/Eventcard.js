import React from 'react';
import "./eventcard.css";
import { Link } from 'react-router-dom';

export default function Eventcard(props) {
  return (
    <>
      <article className="card">
        <img
          className="card__background"
          src={props.imglink}
          alt='event-img'
          width="1920"
          height="2193"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{props.name}</h2>
            <p className="card__description">
              {props.d}
            </p>
          </div>
          <button className="card__button"><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event${props.eve}`}>Read more</Link></button>
      </div>
    </article >
    </>
  );
}