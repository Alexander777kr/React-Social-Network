import axios from 'axios';
import { unfollow } from '../redux/users-reducer';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '383c979e-a527-4d82-8610-f85ec1aabf05',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post('follow/' + userId).then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete('follow/' + userId)
      .then((response) => response.data);
  },
  getProfile(userId) {
    return instance.get('profile/' + userId).then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get('auth/me').then((response) => response.data);
  },
};
