import React from 'react'
import Image from './images/teams.png'
import './edits.css'
function Edits() {
    return (
        <div >
        <h1 className="custom-heading" >Want to Change your Team Members</h1>
        <div className='fl'>
            <div >
                <img src={Image} alt='person' height='500px' className='imgp'></img>
            </div>
            <div>
                <h1 className="custom" align='center'>Are you Looking for a new Team..!!!</h1>
                <p className='pp'>You can change your teammates at any time you can replace,shift your team mate  as
                  according to your work and reqirement .Please reach us admin team will definetly gets resolved  </p>
                <div className="button-container">
                <button type="button"  className="request-admin-button" >Request Admin To Change The Team</button>
                </div>
            </div>
            

        </div>
    </div>
    )
}

export default Edits
