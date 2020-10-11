import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import db from "../../firebase";
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId }) => {

    const user = useSelector(state => state.user);

    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').doc(channelId)
                .collection('messages').add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.name,
                    userImage: user.picture
                });
        }
    };

    return (
        <div className="chatInput">
            <form onSubmit={sendMessage}>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message ${channelName?.toLowerCase()}`} />
                <button onClick={sendMessage}>SEND</button>
            </form>
        </div>
    );
};

export default ChatInput;