import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import "../../assets/css/LogIdeaPopup.css";


function LogIdeaPopup(props) {


    return (props.trigger) ? (
        <React.Fragment>
            <div className="popup">
                <div className="popup-inner">
                    <p className="close-btn">Close</p>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    ) :"";



}



export default LogIdeaPopup;