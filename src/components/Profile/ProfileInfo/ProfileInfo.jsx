import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="main-logo.jpg" width="100%" height="200px" />
      </div>
      <div className={s.descriptionBlock}>
        <div>ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
