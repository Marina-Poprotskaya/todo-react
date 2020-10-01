import React from 'react';
import './style.css';


class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // this.state = {

    // }

    render() {
        return (
            <div className='main'>
                <div className='task-list-wrapper'>
                    <div className='list-item'>
                    <div className='content'>example</div>
                    <div className='buttons-wrapper'>
                        <div className='btn up'></div>
                        <div className='btn down'></div>
                        <div className='btn fix'></div>
                        <div className='btn del'></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;