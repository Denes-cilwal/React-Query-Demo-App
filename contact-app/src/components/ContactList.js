import React, {useEffect} from 'react'
import user from "../images/user.png"
export const ContactList = (props) => {
    console.log(props, "abcd")

    useEffect(() => {
        const retrieveInputs  = localStorage.getItem("input")
        if(retrieveInputs){
            props.setInput(retrieveInputs)
        }
     }, [])

   const renderContactList = props?.contacts?.map((contact, index) => {
        return (
            <div className="item">
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header" key={index}>
                        {contact.name}
                    </div>
                    {contact.email}

                </div>
                <i className="trash alternative outline icon" style={{ color: "red" }}></i>
            </div>
        )
    })

 
    return (
        <div className="ui called list">
            {renderContactList}
        </div>
    )
}
