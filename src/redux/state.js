let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State is changed');
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessage,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessage = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-MESSAGE') {
      this._state.dialogsPage.newMessage = action.message;
      this._callSubscriber(this._state);
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

// export const addMessage = () => {
//   let newMessage = {
//     id: 4,
//     message: state.dialogsPage.newMessage,
//   };
//   state.dialogsPage.messages.push(newMessage);
//   rerenderEntireTree();
// };

// export const updateMessage = (message) => {
//   state.dialogsPage.newMessage = message;
//   rerenderEntireTree();
// };

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// };

export default store;
window.state = store;
