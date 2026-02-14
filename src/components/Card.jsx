import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.scss'

const Card = ({ character }) => {
    const { id, name, status, type, image, species, gender } = character;
    const navigate = useNavigate()

    return (
        <div className="cardContainer" onClick={() => navigate(`/${id}`)}>
            <img src={image} className="avatar" alt="avatar" />
            <h3 className="name">{name}</h3>
            <div className="id">#{id}</div>
            <div className="features">

                <div className="feature">
                    <div className="feature-data">{species || "-"}</div>
                    <div className="feature-name">species</div>
                </div>

                <div className="feature">
                    <div className="feature-data">{gender || "-"}</div>
                    <div className="feature-name">gender</div>
                </div>

                <div className="feature">
                    <div className="feature-data">{status || "-"}</div>
                    <div className="feature-name">status</div>
                </div>

                <div className="feature">
                    <div className="feature-data">{type || "-"}</div>
                    <div className="feature-name">type</div>
                </div>
            </div>

            <button
                type="button"
                className="viewCharacterBtn"
                onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/${id}`)
                }}
            >
                View character
            </button>
        </div >
    );
};

export default Card;
