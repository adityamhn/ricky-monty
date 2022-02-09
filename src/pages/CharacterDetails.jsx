import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";
import "../styles/CharacterDetails.scss";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

//images
import logo from "../assets/images/logo.png";
import loader2 from "../assets/images/loader2.gif";
import errorGif from '../assets/images/error.gif'


//Query to get character details
const getCharacterDetails = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      image
      id
      created
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
     
    }
  }
`;

const CharacterDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(getCharacterDetails, {
        variables: {
            id: id,
        },
    });


    if (error) {
        return <div className="loaderContainer deetLoader">
            <img src={errorGif} className="gif" alt="error" />
            <div className="text">Error Occured!! Please Try later</div>
        </div>
    }

    if (loading) {
        return <div className="loaderContainer deetLoader">
            <img src={loader2} className="gif" alt="loader" />
            <h1 className="text">Loading...</h1>
        </div>;
    }

    return (
        <div className="characterDetailsContainer">
            <div className="header">
                <BsFillArrowLeftCircleFill className="backIcon" onClick={() => navigate(-1)} /> <img src={logo} className="logo" alt="rickyMonty-logo" />
            </div>
            <div className="detailsSection">
                <img src={data?.character?.image} className="avatar" alt="avatar" />
                <h1 className="name">{data?.character?.name}</h1>
                <div className="id">#{data?.character?.id}</div>

                <div className="features">
                    <div className="feature">
                        <div className="feature-data">{data?.character?.status || "-"}</div>
                        <div className="feature-name">status</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">{data?.character?.gender || "-"}</div>
                        <div className="feature-name">gender</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {data?.character?.species || "-"}
                        </div>
                        <div className="feature-name">species</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">{data?.character?.type || "-"}</div>
                        <div className="feature-name">type</div>
                    </div>
                </div>

                <div className="secitonTitle">Originated From : </div>
                <div className="features">
                    <div className="feature">
                        <div className="feature-data">
                            {data?.character?.origin?.name || "-"}
                        </div>
                        <div className="feature-name">Name</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {data?.character?.origin?.type || "-"}
                        </div>
                        <div className="feature-name">Type</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {data?.character?.origin?.dimension || "-"}
                        </div>
                        <div className="feature-name">Dimension</div>
                    </div>
                </div>

                <div className="secitonTitle">Last Known Location : </div>
                <div className="features">
                    <div className="feature">
                        <div className="feature-data">
                            {data?.character?.location?.name || "-"}
                        </div>
                        <div className="feature-name">Name</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {data?.character?.location?.type || "-"}
                        </div>
                        <div className="feature-name">Type</div>
                    </div>

                    <div className="feature">
                        <div className="feature-data">
                            {data?.character?.location?.dimension || "-"}
                        </div>
                        <div className="feature-name">Dimension</div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default CharacterDetails;
