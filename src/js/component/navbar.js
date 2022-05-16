import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  		<div className="container-fluid d-flex">
		  <Link to={'/'}>
    		<a className="navbar-brand" href="#">Harry Potter</a>
    		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      		<span className="navbar-toggler-icon"></span>
    		</button>
			</Link>
    		<div className="collapse navbar-collapse" id="navbarSupportedContent">
      		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<div className="d-flex">
        	<li className="d-flex nav-item dropdown">
          	<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          	</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
		  	{store.favH.map((obj, i) => { return <li className="dropdown-item" key={i}><Link to={'/houses/'+obj}>{obj} </Link><button className="bg-white border-0" onClick={() => {actions.deleteH(obj)}}><i class="fas fa-times"></i></button></li>})}
			{store.favC.map((obj, i) => { return <li className="dropdown-item" key={i}><Link to={'/characters/'+obj}>{obj}</Link><button  className="bg-white border-0" onClick={() => {actions.deleteC(obj)}}><i class="fas fa-times"></i></button></li>})}
          </ul>
        	</li>
			</div>
			
      </ul>
    </div>
  </div>
</nav>
	);
};
