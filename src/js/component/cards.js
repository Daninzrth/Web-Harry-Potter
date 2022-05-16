import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ imagen, nameCharapter, actor, ancestry, house }) => {
  const {store , actions} = useContext(Context);

  return (
    <div className="card card-block mx-2 py-2" style={{ width: "16rem" }}>
      <img
        className="card-img-top"
        src={imagen}
        style={{ height: "300px" }}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{nameCharapter}</h5>
        <p className="card-text">
          <b>Actor:</b> {actor}
        </p>
        <p className="card-text">
          <b>Ancestry:</b> {ancestry}
        </p>
        <p className="card-text">
          <b>House:</b> {house}
        </p>
        <div className="d-flex">
          <Link to={'/characters/'+nameCharapter}>
          <button href="#" className="btn btn-outline-primary">
            Learn more!
          </button>
          </Link>
          <button className="btn btn-outline-warning ms-auto" onClick={() => {actions.addFavC(nameCharapter)}}>
            <i class="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
