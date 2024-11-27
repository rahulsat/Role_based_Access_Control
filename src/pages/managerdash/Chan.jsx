import React from 'react'
import './chan.css'
import Image from '../managerdash/manger.png'
function Changer() {
    return (
        <div >
            <h1 className="custom-heading" >Want to Make changes in Teams...</h1>
            <div className='fl'>
                <div >
                    <img src={Image} alt='person' height='500px' className='imgp'></img>
                </div>
                <div>
                    <h1 className="custom">Will you a make a Best Team...!!!</h1>
                    <p className='pp'>You can change the Teams and edit the teams and team members make assign according to there 
                        roles according to there performance.  </p>
                    <div className="button-container">
                    <button type="button"  className="request-admin-button" >Request Admin To Change The Role </button>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Changer
