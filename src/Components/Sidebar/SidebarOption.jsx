import React from 'react';
import { useHistory } from "react-router-dom";
import swal from '@sweetalert/with-react';
import db from "../../firebase";

const SidebarOption = ({ Icon, Title, id, addChannelOption }) => {

    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        }
    };

    const addChannel = async () => {
        let channelName = '';
        const changeName = (e) => {
            channelName = e.target.value;
            channelName = channelName.trim();
        };
        const res = await swal({
            title: "Enter channel Name",
            content: (
                <input type="text" placeholder="channel name" onChange={changeName} />
            ),
            buttons: ["Cancel", "Add"]
        });
        if (res && channelName !== '') {
            db.collection('rooms').add({
                name: channelName
            });
        }
    };

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{Title}</h3>
            ) : <>
                    <span className="sidebarOption__hash">#</span>
                    <h3>{Title}</h3>
                </>
            }
        </div>
    );
};

export default SidebarOption;