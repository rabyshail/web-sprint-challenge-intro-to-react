// Write your Character component here
import React from "react";
//import { handlers } from "../mocks/handlers";

const Character = (props) => {
 const { character } = props
    return (
        <div className="character-data-wrapper">
            <h2>{character.name}</h2>
            <h3 className="character-info-wrapper">More Information</h3>
                <ul className="character-info-list">
                    <li>Height: {character.height}</li>
                    <li>Mass: {character.mass}</li>
                    <li>Hair Color: {character.hair_color}</li> 
                    <li>Skin Color: {character.skin_color}</li> 
                    <li>Eye Color: {character.eye_color}</li> 
                    <li>Birth Year: {character.birth_year}</li> 
                    <li>Gender: {character.gender}</li> 
                </ul>
        </div>
    )
}

export default Character;