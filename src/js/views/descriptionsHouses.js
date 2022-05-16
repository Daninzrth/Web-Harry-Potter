import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DescriptionHouse } from "../component/descriptionHouse";
import { Context } from "../store/appContext";
import {MiniCards} from "../component/minicards"
import { Link } from "react-router-dom";

export const DescriptionsHouses = () => {
  const { name } = useParams();
  const { store, action } = useContext(Context);
  return (
    <div className="card mb-3 mx-5 px-5" style={{maxwidth: "540px", border: "none"}}>
      {store.houses?.map((obj, i) => {
        if (obj.name == name) {
          if (name == "Gryffindor") {
            return (
              <div>
                <DescriptionHouse
                  image="https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-gryffindor-harry-potter-61cm_12422_1.jpg"
                  name={obj.name}
                  description={obj.description}
                />
                <div className="card-footer bg-transparent border-secondary">
                  <div className="justify-content-center text-muted">
                    <div className="row">
                    {store.gryffindor?.map((obj, i) => {
                      return (
                        <div className="col-3 my-3">
                        <MiniCards
                          nameCharacter={obj.name}
                          actor={obj.actor}
                          i={i}
                        />
                      </div>);
                    })}
                    </div>
                  </div>
                </div>
              </div>
            );} else if (name == 'Slytherin') {
                return (
                    <div>
                      <DescriptionHouse
                        image="https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg"
                        name={obj.name}
                        description={obj.description}
                      />
                      <div className="card-footer bg-transparent border-secondary">
                        <div className="justify-content-center text-muted">
                            <div className="row">
                          {store.slytherin?.map((obj, i) => {
                            return (
                                <div className="col-3 my-3">
                                <MiniCards
                                  nameCharacter={obj.name}
                                  actor={obj.actor}
                                  i={i}
                                />
                              </div>
                            );
                          })}
                          </div>
                        </div>
                      </div>
                    </div>)

            } else if (name == "Hufflepuff") {
                return (
                    <div>
                      <DescriptionHouse
                        image="https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-hufflepuff-harry-potter-61cm_12419_1.jpg"
                        name={obj.name}
                        description={obj.description}
                      />
                      <div className="card-footer bg-transparent border-secondary">
                        <div className=" justify-content-center text-muted ">
                            <div className="row">
                          {store.hufflepuff?.map((obj, i) => {
                            return (
                                <div className="col-3 my-3">
                                <MiniCards
                                  nameCharacter={obj.name}
                                  actor={obj.actor}
                                  i={i}
                                />
                              </div>
                            );
                          })}
                          </div>
                        </div>
                      </div>
                    </div>)

            }else if (name == "Ravenclaw") {
                return (
                    <div>
                      <DescriptionHouse
                        image="https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-ravenclaw-harry-potter-61cm_12420_1.jpg"
                        name={obj.name}
                        description={obj.description}
                      />
                      <div className="card-footer bg-transparent border-secondary">
                        <div className=" justify-content-center text-muted">
                            <div className="row">
                          {store.ravenclaw?.map((obj, i) => {
                            return (
                                <div className="col-3 my-3">
                                <MiniCards
                                  nameCharacter={obj.name}
                                  actor={obj.actor}
                                  i={i}
                                />
                              </div>
                            );
                          })}
                          </div>
                        </div>
                      </div>
                    </div>)
            }
}})}
    <Link to={'/'}>
      <button className="btn btn-outline-primary">Back to Home!</button>
    </Link>
    </div>
  );
};
