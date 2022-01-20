import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}>
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert"></button> */}
            </div>
        </div>
    )
}

export default Alert
