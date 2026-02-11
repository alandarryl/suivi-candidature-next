"use client";

import React,  { useState } from 'react';
import { inputForm } from '@/utils/formFields';
import axios from "axios";
import URL from '@/utils/Urls';

function CandidatureForm() {

    const [formData, setFormData] = useState({})

    const handleChange = (e) =>{
        //
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) =>{
        //
        e.preventDefault();
        try {
            const response = await axios.post(URL.POST_CANDIDATURE, formData);
            console.log(response.data)
        } catch (error) {
            //
            console.console.log(error);
            
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit} >
            {inputForm.map((fields, index) =>(
                <div key={index} >
                    <label htmlFor={fields.id} >{fields.label} </label>
                    {fields.type === "select" ? (
                        <select name={fields.name} onChange={handleChange} >
                            {fields.options.map((option, index ) =>(
                                <option key={index}value={option} > 
                                    {option} 
                                </option>
                            ) )}
                        </select>
                     ):(
                        <input
                            type={fields.type}
                            id={fields.id}
                            name={fields.name}
                            placeholder={fields.placeholder}
                            onChange={handleChange}
                        />
                        ) }
                </div>
            ))}
            <button className="btn" type="submit" >Envoyer</button>
        </form>
        </div>
    )
}

export default CandidatureForm