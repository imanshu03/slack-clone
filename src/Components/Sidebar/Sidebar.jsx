import React, { useState, useEffect } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "../../firebase";
import { useSelector } from 'react-redux';

const Sidebar = () => {
 
    const defaultChannels = [
        {
            Icon: InsertCommentIcon,
            Title: 'Threads'
        },
        {
            Icon: InboxIcon,
            Title: 'Mentions & reactions'
        },
        {
            Icon: DraftsIcon,
            Title: 'Saved Items'
        },
        {
            Icon: BookmarkBorderIcon,
            Title: 'Channel Browser'
        },
        {
            Icon: PeopleAltIcon,
            Title: 'People & user groups'
        },
        {
            Icon: AppsIcon,
            Title: 'Apps'
        },
        {
            Icon: FileCopyIcon,
            Title: 'File Browser'
        }
    ];

    const [channels, setChannels] = useState([]);

    const user = useSelector(state => state.user);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    name: doc.data().name
                }
            )));
        });
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.name}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            {
                defaultChannels.map(e => <SidebarOption {...e} key={e.Title} />)
            }
            <SidebarOption Icon={ExpandLessIcon} Title={'Show less'} />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} Title={'Channels'} />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption Title={'Add Channel'} />
            {
                channels.map(channel => <SidebarOption Title={channel.name} id={channel.id} key={channel.id} />)
            }
        </div>
    );
};

export default Sidebar;