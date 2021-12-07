import React, { useState} from 'react'
import { ContactList } from './ContactList';

export const AddContact = () => {
    const [input, setInput] = useState({
        name: "",
        email: ""
    })


let data = []





    const addContactHandler = (e) => {
        e.preventDefault()
        if (input.name === "" || input.email === "") {
            alert("all fields are mandatory to be filled")
            return
        }
      data.push(input)
      console.log(data, "mamm")
      localStorage.setItem("inputs", JSON.stringify(data));

    };
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={addContactHandler}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        placeholder="Enter Name ..."
                        onChange={e => setInput({...input,name:e.target.value})}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={input.email}
                        onChange={e => setInput({...input,email:e.target.value})}
                        placeholder="Enter email" />
                </div>
                <button className="ui button blue" >Add</button>
            </form>
            {data?.length > 0 && <ContactList contacts={data}  setInput={setInput}/> }
        </div>
    )
}
