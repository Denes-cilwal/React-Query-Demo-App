import React from 'react'
import user from "../images/user.png"
export const ContactCard = (props) => {
    const {id,name,email} = props.contact
    return (
        <div>
        <div className="item">
        <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <div className="header" key={id}>
                {name}
            </div>
            {email}

        </div>
        <i className="trash alternative outline icon" style={{color:"red"}}></i>
    </div>
        </div>
    )
}
