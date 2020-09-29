import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { followAPI } from '../../api/api';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectPage}
              onClick={() => props.onPageChanged(p)}
            >
              {` ${p} `}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img
                    src={!u.photos.small ? userPhoto : u.photos.small}
                    alt="Avatar"
                    className={s.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.toggleIsFollowingProgress(true, u.id);
                      followAPI.unfollow(u.id).then((response) => {
                        if (response.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleIsFollowingProgress(false, u.id);
                      });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.toggleIsFollowingProgress(true, u.id);
                      followAPI.follow(u.id).then((response) => {
                        if (response.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleIsFollowingProgress(false, u.id);
                      });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
