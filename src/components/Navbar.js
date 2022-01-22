import React from 'react'
// import { Link } from "react-router-dom";


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/about">About</a> */}
                            {/* <Link className="nav-link" to="/about">About</Link> */}
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="mode" onChange={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="mode">Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}