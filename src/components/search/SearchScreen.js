import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q] );

  

    const initialForm = {
        searchText: q,
    };
    
    const [ formValues , handleInputChange ] = useForm( initialForm );

    const { searchText } = formValues;

    const handleSearch = (e) => {

        e.preventDefault();
        navigate(`?q=${ searchText }`);
        
    }


    return (
        <>
        <div className="row">
            <h1> Busquedas </h1>
            <hr />

            <div className="col-5">
                <h4> Buscar </h4>
                <hr />

                <form onSubmit={ handleSearch }>
                    <input 
                        type="text"
                        placeholder="Buscar un heroe" 
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        
                        value= { searchText }
                        onChange={ handleInputChange }
                    />

                <button 
                    className="btn btn-outline-primary mt-1"
                    type="submit" 
                >
                    Buscar...
                </button>

                </form>

            </div>

            <div className="col-7">
                <h4>Resultados</h4>
                <hr />

                {
                        (q === '')
                        &&
                        <div className="alert alert-info animate__animated animate__fadeIn">
                            Buscar un heroe
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0 )
                        &&
                        <div className="alert alert-danger animate__animated animate__fadeIn">
                            No nay resultados { q }
                        </div>
                    }

                {
                    heroesFiltered.map(hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }

            </div>

        </div>
        </>
    )
}
