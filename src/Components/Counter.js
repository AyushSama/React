import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function Counter(props) {

    const [curr , setCount] = useState(props.count);
    const inc = ()=>{
        setCount(curr+1);
    }
    const dec = ()=>{
        setCount(curr-1);
    }
    const handleOnChange = (event)=>{
        setCount(event.target.number)
    }
  return (
    <div>
        <button type="button" onClick={inc}  className="btn btn-primary mx-3">Increment</button>
        <button type="button" onClick={dec} onChange={handleOnChange} className="btn btn-secondary">Decrement</button>
        <textarea className="form-control my-3" value={curr} onChange={handleOnChange} rows="3"></textarea>
    </div>
  )
}

Counter.propTypes={
    count: PropTypes.number,
}

Counter.defaultProps = {
    count: 0
};
