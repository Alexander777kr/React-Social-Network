import React from 'react';
import s from './ProfileInfo.module.css';
import mainLogo from '../../../assets/images/main-logo.jpg';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  console.log(props);
  if (!props.profile) {
    return <Preloader />;
  }
  const contacts = [];
  for (const [key, value] of Object.entries(props.profile.contacts)) {
    contacts.push(`${key}: ${value ? value : '-'}`);
  }
  return (
    <div>
      <div>
        <img src={mainLogo} width="100%" height="200px" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>
          <span className={s.bold}>Обо мне</span>: {props.profile.aboutMe}
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
          Контакты:
          {contacts.map((contact) => (
            <div>{contact}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
