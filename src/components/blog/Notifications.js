import React from 'react'
import moment from 'moment'


const Notifications = (props) => {
    const { notifications } = props
    return (
        <div >
            <h4 className="center grey-text ">Notifications</h4>
            <ul className="center">
                {notifications && notifications.map(notification => {
                    return(
                        <li key={notification.id}>
                        <span className="pink-text">{notification.user}</span>
                        <span> {notification.content} </span>
                        <div className="grey-text">
                        {moment(notification.time.toDate()).fromNow()}
                        </div>
                        <br></br>
                        </li>
                    )
                })}
            </ul>
        </div>

        
    )
  }


export default Notifications
