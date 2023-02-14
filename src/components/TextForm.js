// import { useState } from "react"
import React, { useState } from 'react';
import copy from "copy-to-clipboard";  


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case", "success");
    }
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case", "success");
    }
  
    const handleClearClick = () =>{
     
        let newText = "";
        setText(newText);
        props.showAlert("Clear text", "success");
    }
    const handleCopyClick = () =>{
        copy(text);
        alert(`You have copied "${text}"`);
        props.showAlert("copied to clipboard ", "success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra space", "success");
    }
   
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // update the setText 
    // setText("king is king")
    //text = new Text // wrong way to set the state
    // setText("New Text");  // correct way to change the state
    return (
        <>
        <div className='container  bg-light'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="Mybox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'light':'dark'}} id="mybox" rows="8" placeholder='Enter the text'></textarea>
            </div>
            <button className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert To uppercase</button>
            <button className="btn btn-success mx-2 my-2" onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-success mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-success mx-2 my-2" onClick={handleCopyClick} >Copy Text</button>
            <button className="btn btn-success mx-2 my-2" onClick={handleExtraSpace} >Remove Extra Space</button>
        </div>
        <div className="container my-4 bg-light" >
            <h2>Your Text Summary </h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
