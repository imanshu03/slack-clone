import React from 'react';
import FaceIcon from '@material-ui/icons/Face';

const Message = ({ userImage, user, message, timestamp }) => {

    return (
        <div className="message">
            { userImage !== '' ? <img src={userImage} alt="" /> : <FaceIcon />}
            <div className="message__info">
                <h4>{user}
                    <span className="message_timestamp">{
                        new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;