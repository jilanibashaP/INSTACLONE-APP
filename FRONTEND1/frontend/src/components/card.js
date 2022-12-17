
import React, { useEffect } from "react";
import '../styles/Card.css';
const Card = ({item}) => {

    // console.log(item)
    // let date = item.Date.String()
    // console.log(date)

    return (
        <div>

            <div id="card">
                <div id="dot-cont">
                    <div>
                        <h3>{item.Author}</h3>
                        <p className="opac" >{item.Location}</p>
                    </div>
                    <div id="dot">
                        <img src="./images/dots.png" width="20em" height="20em"></img>
                    </div>
                </div>
                <div>
                    <img src={item.file} width="590px" height="300px"></img>
                </div>
                <div id="date-con">
                <img src="./images/like.png" width="20px" height="20px" ></img>
                <img src="./images/share.png" width="20px" height="20px" id="imgd"></img>
                <p id="date">{item.Date}</p>
                </div>
                <p className="opac" id='like'>{item.Likes} likes</p>
                <h3 id="des">{item.Description}</h3>
            </div>

        </div>
    )
}

export default Card;

