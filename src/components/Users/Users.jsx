import React from 'react';
import s from './Users.module.css';
let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: '1',
        photoUrl:
          'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: '2',
        photoUrl:
          'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
        followed: true,
        fullName: 'Sasha',
        status: 'I am a boss too',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: '3',
        photoUrl:
          'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
        followed: false,
        fullName: 'Andrew',
        status: 'I am a boss too',
        location: { city: 'Krasnodar', country: 'Russia' },
      },
    ]);
  }
  let users = props.users.map((u) => (
    <div key={u.id}>
      <span>
        <div>
          <img src={u.photoUrl} alt="Avatar" className={s.userPhoto} />
        </div>
        <div>
          {u.followed ? (
            <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
          ) : (
            <button onClick={() => props.follow(u.id)}>Follow</button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </span>
      </span>
    </div>
  ));
  return <div>{users}</div>;
};

export default Users;
