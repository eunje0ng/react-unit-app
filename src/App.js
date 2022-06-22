import './App.css';
import './Rwd.css';

import {useState} from 'react';

function App() {
  const [centimeter, setCentimeter] = useState("");
  const [inch, setInch] = useState("");
  const [status, setStatus] = useState(false);
  const handleCentimeter = (e) => {
    setCentimeter(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setInch(centimeter / 2.54);
  }
  const handleInch = (e) => {
    e.preventDefault();
    setInch(centimeter * 2.54);
  }
  const resetInput = () => {
    setCentimeter("0");
    setInch("0");
  }
  const switchInput = () => {
    setStatus(!status);
  }

  return (
    <div className="App">
      <h1 className='title-text my-0 py-1 t-center'>단위 환산</h1>
      <p className='info my-0 py-1 t-center'>츠를 ㅑㅜ초로 환산하는 앱</p>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label><input type="number" value={centimeter} onChange={handleCentimeter} placeholder='센티미터를 입력하세요.' disabled={!status} />cm</label>
            <label><input type="number" value={inch} onChange={handleInch} placeholder='인치로 환산됩니다.' disabled={status} />inch</label>
            <input className='button' type="submit" value="환산하기" />
            <input className='button2' type="reset" onClick={resetInput} value="초기화" />
            <input className='button3' type="button" onClick={switchInput} value="변환" />
          </div>
        </form>
      </div>
      <p className='copy my-0 py-1'>&copy; eun-jeong</p>
    </div>
  );
}

export default App;
