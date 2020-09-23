import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import StoreContext from '../../StoreContext';

const Navbar = () => {
  //const friendsList = state.friends.map((friend) => <Friend friend={friend} />);
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={`${s.item} ${s.active}`}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings" activeClassName={s.activeLink}>
            Settings
          </NavLink>
        </li>
        <li className={s.item}>
          <h3>Friends</h3>
          {/* {friendsList} */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
