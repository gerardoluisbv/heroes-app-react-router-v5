import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";

//const heroImages = require.context('../../assets/heroes', true);

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {
   
  // const imagePath = `/assets/${id}.jpg`;


    return (
        <div className="col">
            <div className="card animate__animated animate__fadeIn">
               
                <div className="row no-gutters">
                    <div className="col-4">
                       <img src={ heroImages(`./${ id }.jpg`).default } className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title"> {superhero} </h5>
                            <p className="card-text"> { alter_ego } </p>
  

                            {
                               
                                ( alter_ego !== characters )
                                    && <p className="text-muted"> { 
                                        characters.slice(0, 25) // modifica el string para ser mostrado de manera corta
                                        }... </p>
                            }

                            <p className="card-text">
                                <small className="text-muted"> { first_appearance } </small>
                            </p>

                            <Link to = {`/hero/${id}`} style={{ fontSize: '0.8rem' }}>
                                Mas...
                            </Link>

                        </div>

                    </div>   
                </div>
               
            </div>
        </div>
    )
}
