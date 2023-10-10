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
        <button type="button" onClick={inc}  className={`btn btn-${props.mode==='light'?'primary':'success'} my-3 mx-3`}>Increment</button>
        <button type="button" onClick={dec}  className={`btn btn-${props.mode==='light'?'secondary':'danger'} my-3 mx-3`}>Decrement</button>
        <textarea className="form-control my-3" value={curr} onChange={props.toggleMode} rows="3"></textarea>
    </div>
  )
}

Counter.propTypes={
    count: PropTypes.number,
}

Counter.defaultProps = {
    count: 0
};
