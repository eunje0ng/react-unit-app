import './App.css';
import './Rwd.css';
import Calculator from './component/Calculator'

import {useState} from 'react';

function App() {
  const [centimeter, setCentimeter] = useState("");
  const [status, setStatus] = useState(true);
  const handleCentimeter = (e) => {
    setCentimeter(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const resetInput = () => {
    setCentimeter("");
  }
  const switchInput = () => {
    setStatus(!status);
  }

  return (
    <div className="App">
      <h1 className='title-text my-0 py-1 t-center'>단위 환산</h1>
      <p className='info my-0 py-1 t-center'>츠를 ㅑㅜ초로 환산하는 앱</p>
      <Calculator />
      <p className='copy my-0 py-1'>&copy; eun-jeong</p>
    </div>
  );
}

export default App;
