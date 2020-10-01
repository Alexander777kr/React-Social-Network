import React from 'react';
import s from './ProfileInfo.module.css';
import mainLogo from '../../../assets/images/main-logo.jpg';
import Preloader from '../../common/Preloader/Preloader';
import avatar from '../../../assets/images/avatar.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const contacts = [];
  for (const [key, value] of Object.entries(props.profile.contacts)) {
    if (value) {
      contacts.push(`${key}: ${value}`);
    }
  }
  return (
    <div>
      {/*<div>
        <img src={mainLogo} width="100%" height="200px" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img
          src={props.profile.photos.large ? props.profile.photos.large : avatar}
          className={s.margin}
          width="300"
          height="300"
        />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>
          {props.profile.aboutMe ? (
            <span className={s.bold}>Обо мне: {props.profile.aboutMe}</span>
          ) : null}
        </div>
        <div>
          <span className={s.bold}>Полное имя</span>: {props.profile.fullName}
        </div>
        <div>
          <span className={s.bold}>Готовность к работе</span>:
          {props.profile.lookingForAJob
            ? props.profile.lookingForAJobDescription
            : 'Не ищу работу'}
        </div>
        <div>
          {contacts.length > 0 ? (
            <div className={`${s.bold} ${s.margin}`}>Контакты:</div>
          ) : null}
          {contacts.map((contact) => (
            <div>{contact}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
