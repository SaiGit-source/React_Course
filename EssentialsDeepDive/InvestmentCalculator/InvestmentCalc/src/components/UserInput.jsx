import { useState } from "react"

export default function UserInput({onInputChange, inputStateVal}){
    {/* you can find id="user-input" in the CSS file */}
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" 
                    onChange={(event) => onInputChange("initialInvestment", event.target.value)}
                    value={inputStateVal.initialInvestment} 
                    required></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" 
                    onChange={(event) => onInputChange("annualInvestment", event.target.value)} 
                    value={inputStateVal.annualInvestment} 
                    required></input>
                </p>
                {/* we need the state val to update in input field */}
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" 
                    onChange={(event) => onInputChange("expectedReturn", event.target.value)}
                    value={inputStateVal.expectedReturn} 
                    required></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                    onChange={(event) => onInputChange("duration", event.target.value)} 
                    value={inputStateVal.duration}
                    required></input>
                </p>
            </div>
        </section>
    )
}