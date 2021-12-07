import React from 'react'
import {AddContact} from "./AddContact"
export const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
                <AddContact/>
            </div>
        </div>
    )
}
