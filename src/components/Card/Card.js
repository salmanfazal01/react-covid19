import React from "react";

import './Card.css';

const CARD_COLORS = {
    red: "#dc3545",
    blue: "#17a2b8",
    green: "#28a745",
    yellow: "#ffc107",
    grey: "#6c757d",
    pink: "#d21784"
};

const Card = (props) => {
    return (
        <div className="card updateCard">
            <div className="d-flex" id="casesTotal">

                {props.icon ? (<div className="p-2 flex-sign mr-2" style={{backgroundColor: CARD_COLORS[props.background]}}>
                    <span className="fa-stack fa-lg">
                        <i className={props.icon + " case-icon fa-stack-1x fa-inverse"} aria-hidden="true"></i>
                    </span>
                </div>) : null}


                <div className="p-2 flex-fill">
                    {props.title ? (<div className="p-block text-muted">
                        <span className="case-title">{props.title}</span>
                    </div>) : null}

                    {props.value ? (<div className="p-block case-number">{props.value}</div>) : null}
                    {props.children}
                </div>

            </div>
        </div>

    )
};

export default Card;