import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    if(props.mode === 'dark') {
        document.body.style.backgroundColor = 'rgb(5 40 70)';
        document.body.style.color = '#fff';
    }
    else {
		document.body.style.backgroundColor = 'white';
        document.body.style.color = '#000';
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const doUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success', 'Converted to Uppercase.');
    }
    const doLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success', 'Converted to Lowercase.');
    }
    const removeSpaces = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert('success', 'Removed extra spaces.');
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Copied to Clipboard.');
    }
    const clearText = () => {
        setText('');
        props.showAlert('success', 'Cleared Text.');
    }
    return (
        <>
            <div className="container mb-3">
                <h1 className='text-center mb-4'>{props.heading}</h1>
                <textarea className="form-control mb-3" value={text} id="input" rows="8" placeholder='Enter your input' onChange={handleOnChange} style={ props.mode==='dark'? {backgroundColor: 'rgb(30, 80, 120)', color:'white'} : {backgroundColor: 'rgb(248 249 250)', color: 'black'}}></textarea>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={doUpperCase}>Uppercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={doLowerCase}>Lowercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={removeSpaces}>Remove Spaces</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={copyText}>Copy Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container px-2">
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter(elem => {return elem.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(elem => {return elem.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length !== 0 ? text : "Nothing to Preview."}</p>
            </div>
        </>
    )
}
