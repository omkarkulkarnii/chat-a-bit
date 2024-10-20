import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import ChatProvider from './Context/ChatProvider';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ChatProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/chats" component={ChatPage} />
            </Switch>
          </div>
        </Router>
      </ChatProvider>
    </ErrorBoundary>
  );
}

export default App;
