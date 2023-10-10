import React from 'react'

export default function Alert(props) {

    const captilize = (word)=>{
        let temp = word.toLowerCase();
        return temp.charAt(0).toUpperCase() + temp.slice(1);
    }

  return (
    props.alert && <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
    <strong>{captilize(props.alert.type)}:</strong>{props.alert.msg}
    </div>
  )
}
