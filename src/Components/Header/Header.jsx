import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../Redux/Actions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';

const Header = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch(logoutUser());
        history.push('');
    };

    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt={user?.name} src={user?.picture} />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search..." type="text" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
                <ExitToAppIcon onClick={logout} title={'Logout'} />
            </div>
        </div>
    );
};

export default Header;