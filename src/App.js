import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode enabled successfully.', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled successfully.', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  const showAlert = (message, type) => {
    setAlert({ type, message });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div>
      {/* <TextForm
          heading={'Enter the text to analyze'}
          mode={mode}
          showAlert={showAlert}
        /> */}
      {/* <About /> */}
      {/* <BrowserRouter basename="/"> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={ */}
        <TextForm
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* } */}
        {/* ></Route>
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
