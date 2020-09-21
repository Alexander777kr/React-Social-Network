import { rerenderEntireTree } from '../render';
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'Its my first post', likesCount: 11 },
    ],
    newPostText: 'it-kamasutra.com',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dymich' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you' },
      { id: 3, message: 'Yo' },
    ],
    newMessage: 'newMessage',
  },
  sidebar: {
    friends: [
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessage,
  };
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
};

export let updateMessage = (message) => {
  state.dialogsPage.newMessage = message;
  rerenderEntireTree(state);
};

export default state;
