import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const MiniCards = ({actor, nameCharacter}) => {
  const {store , actions} = useContext(Context);
  
    return <div className="card card-block mx-2 py-2" style={{ width: "16rem" }}>
    <div className="card-body">
      <h5 className="card-title">{nameCharacter}</h5>
      <p className="card-text">
        <b>Actor:</b> {actor}
      </p>
      <div className="d-flex">
        <Link to={'/characters/'+nameCharacter}>
        <button href="#" className="btn btn-outline-primary">
          Learn more!
        </button>
        </Link>
        <button className="btn btn-outline-warning ms-auto" onClick={() => {actions.addFavC(nameCharacter)}}>
          <i class="far fa-heart"></i>
        </button>
      </div>
    </div>
  </div>
}