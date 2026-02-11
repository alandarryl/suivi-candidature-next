import React from 'react';
import { inputForm } from '@/utils/Urls';

function CandidatureForm() {

    const handleChange = () =>{
        //
    }

    const handleSubmit = (e) =>{
        //
        e.preventDefault();
    }

    return (
        <div>
        <form onSubmit={handleSubmit} >
            {inputForm.map((fields, index) =>(
                <div key={index} >
                    <label htmlFor={fields.id} >{fields.label} </label>
                    {fields.type === "select" ? (
                        <select>
                            {fields.options.map((option, index ) =>(
                                <option key={index} value={option} > 
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
            <button className="btn" >Envoyer<button>
        </form>
        </div>
    )
}

export default CandidatureForm