import React from "react";
import { useParams } from "react-router";
import "../styles/CharacterDetails.scss";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { getCharacterById } from '../data/mockCharacters';

//images
import logo from "../assets/images/logo.png";
import loader2 from "../assets/images/loader2.gif";
import errorGif from '../assets/images/error.gif'

const CharacterDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const character = getCharacterById(id);

    if (character === null) {
        return (
            <div className="characterDetailsContainer">
                <div className="header">
                    <BsFillArrowLeftCircleFill className="backIcon" onClick={() => navigate(-1)} />
                    <img src={logo} className="logo" alt="rickyMonty-logo" />
                </div>
                <div className="loaderContainer deetLoader">
                    <img src={errorGif} className="gif" alt="error" />
                    <div className="text">Character not found</div>
                </div>
            </div>
        );
    }

    return (
        <div className="characterDetailsContainer">
            <div className="header">
                <BsFillArrowLeftCircleFill className="backIcon" onClick={() => navigate(-1)} /> <img src={logo} className="logo" alt="rickyMonty-logo" />
            </div>
            <div className="detailsSection">
                <img src={character.image} className="avatar" alt="avatar" />
                <h1 className="name">{character.name}</h1>
                <div className="id">#{character.id}</div>

                <div className="features">
                    <div className="feature">
                        <div className="feature-data">{character.status || "-"}</div>
                        <div className="feature-name">status</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">{character.gender || "-"}</div>
                        <div className="feature-name">gender</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {character.species || "-"}
                        </div>
                        <div className="feature-name">species</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">{character.type || "-"}</div>
                        <div className="feature-name">type</div>
                    </div>
                </div>

                <div className="secitonTitle">Originated From : </div>
                <div className="features">
                    <div className="feature">
                        <div className="feature-data">
                            {character.origin?.name || "-"}
                        </div>
                        <div className="feature-name">Name</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {character.origin?.type || "-"}
                        </div>
                        <div className="feature-name">Type</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {character.origin?.dimension || "-"}
                        </div>
                        <div className="feature-name">Dimension</div>
                    </div>
                </div>

                <div className="secitonTitle">Last Known Location : </div>
                <div className="features">
                    <div className="feature">
                        <div className="feature-data">
                            {character.location?.name || "-"}
                        </div>
                        <div className="feature-name">Name</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {character.location?.type || "-"}
                        </div>
                        <div className="feature-name">Type</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {character.location?.dimension || "-"}
                        </div>
                        <div className="feature-name">Dimension</div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default CharacterDetails;
