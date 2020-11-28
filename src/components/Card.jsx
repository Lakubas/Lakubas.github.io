import React, {Fragment} from "react";

function Detail(props) {
    let detail = props.detailInfo;
    console.log(detail);

    return (
        <Fragment>
            <p className="info">{detail.phone}</p>
            <p className="info">{detail.email}</p>
        </Fragment>
    );
}

function Card(props) {
    let contact = props.contact;
    let detailInfo = {
        phone: contact.phone,
        email: contact.email
    };

    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{contact.name}</h2>
                <img className="circle-img" src={contact.imgURL} alt="avatar_img"/>
            </div>
            <div className="bottom">
                <Detail detailInfo={detailInfo}/>
            </div>
        </div>
    );
}

export default Card;
