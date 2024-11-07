import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import { useState } from "react";
import Nav from './components/Navigation/Nav';
import AppRoutes from "./routes/appRoutes";
import 'bootstrap/dist/css/bootstrap.min.css'
// import TinyMCEEditor from "./components/TinyMCEEditor/TinyMCE";

function App() {
  const [account, setAccount] = useState('')
  // const [editorValue, setEditorValue] = useState('');

  // const handleEditorChange = (content) => {
  //   setEditorValue(content);
  // };

  return (
    <>
      <Router>
        <div className="header">
          <Nav />
        </div>

        <div className='app-container'>
          <AppRoutes />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>
  );
}

export default App;