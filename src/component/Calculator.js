import React from "react";
import {useState} from 'react';

function Calculator(){
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
        <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label><input type="number" id='cm' value={!status ? centimeter * 2.54 : centimeter} onChange={handleCentimeter} placeholder='센티미터를 입력하세요.' disabled={!status} /> cm</label>
            <label><input type="number" id='inch' value={status ? centimeter * 2.54 : centimeter} onChange={handleCentimeter} placeholder='인치로 환산됩니다.' disabled={status} /> inch</label>
            <input type="reset" onClick={resetInput} value="초기화" />
            <input type="submit" onClick={switchInput} value="입력반전" />
          </div>
        </form>
      </div>
    )
}

export default Calculator;