import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  debugger;
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        {/*<Route path="/dialogs" component={Dialogs} />
  <Route path="/profile" component={Profile} />*/}
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateMessage={props.updateMessage}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
