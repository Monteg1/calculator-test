import React from 'react';
import './calc.css';

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className='calculator'>
        <div className='display'>20*80*0.5</div>
        <div className="total-display">800</div>
        <hr />
          <div className="calculator-buttons">
            <button className="calculator-button">C</button>
            <button className="calculator-button">√</button>
            <button className="calculator-button">%</button>
            <button className="calculator-button">/</button>
            <button className="calculator-button">7</button>
            <button className="calculator-button">8</button>
            <button className="calculator-button">9</button>
            <button className="calculator-button">×</button>
            <button className="calculator-button">4</button>
            <button className="calculator-button">5</button>
            <button className="calculator-button">6</button>
            <button className="calculator-button">-</button>
            <button className="calculator-button">1</button>
            <button className="calculator-button">2</button>
            <button className="calculator-button">3</button>
            <button className="calculator-button">+</button>
            <button className="calculator-button">00</button>
            <button className="calculator-button">0</button>
            <button className="calculator-button">,</button>
            <button className="calculator-button total">=</button>
          </div>
      </div>
    </div>
  );
};

export default Calculator;