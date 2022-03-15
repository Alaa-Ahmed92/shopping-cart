import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { messages } from './messages';

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{messages.content}</main>
      <Footer />
    </div>
  );
}

export default App;
