import React from "react";
import { Link } from "react-router-dom";

export const Description = ({ image, nameCharapter, species, gender, birth, eye,hair, patronus, alive, actor, ancestry, house}) => {
  return <div className="card mb-3 mx-5 px-5" style={{maxwidth: "540px", border: "none"}}>
    <div className="row g-0">
      <div className="col-md-4 mx-5 my-3">
        <img src={image} className="img-fluid rounded-start" alt="..." style={{height:"350px", width:"250px"}}/>
      </div>
      <div className="col-md-7">
        <div className="card-body mx-5 my-5">
          <h5 className="card-title">{nameCharapter}</h5>
          <p className="card-text"><b>Specie:</b> {species}</p>
          <p className="card-text"><b>Gender:</b> {gender}</p>
          <p className="card-text"><b>Date of Birth:</b> {birth}</p>
          <p className="card-text"><b>Eye Colour: </b> {eye}</p>
          <p className="card-text"><b>Hair Colour:</b> {hair}</p>
          <p className="card-text"><b>Patronus:</b> {patronus}</p>
          <p className="card-text"><b>Alive:</b> {alive}</p>
        </div>
      </div>
    </div>
    <div className="card-footer bg-transparent border-secondary">
        <div className="d-flex justify-content-center text-muted fs-5">
            <div className="mx-3 px-3"><p><b>Actor:</b>{actor}</p></div>
            <div className="mx-3 px-3"><p><b>Ancestry:</b> {ancestry}</p></div>
            <div className="mx-3 px-3"><p><b>House:</b> {house}</p></div>
        </div>
    </div>
    <Link to={'/'}>
      <button className="btn btn-outline-primary">Back to Home!</button>
    </Link>
  </div>;
};
