import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "../../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

const Chat = () => {

    const { roomId } = useParams();

    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMesages, setRoomMessage] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => setRoomDetails(snapshot.data()));
            db.collection('rooms').doc(roomId).collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setRoomMessage(snapshot.docs.map(doc => doc.data())));
        }
    }, [roomId]);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {
                    roomMesages.map(message => (
                        <Message {...message} key={message.timestamp} />
                    ))
                }
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    );
};

export default Chat;