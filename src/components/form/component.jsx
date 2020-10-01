import React from 'react';
import './style.css';

class Form extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // this.state = {

    // }

    render() {
        return (
            <form className='form'>
                <input className='form-input' type='text' placeholder='Type your task...' required/>
                <button className='form-button' type='submit'>Add</button>
            </form>
        )
    }
}

export default Form;