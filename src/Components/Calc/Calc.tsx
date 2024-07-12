import React, { useState, useEffect, FC } from 'react';
import './calc.css';

const Calculator: FC = () => {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        const evaluated = evaluateExpression(expression);
        setResult(evaluated);
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      try {
        const evaluated = evaluateExpression(expression);
        setResult(evaluated);
      } catch {
        setResult('Error');
      }
    } else if (event.key === 'Escape') {
      setExpression('');
      setResult('');
    } else {
      const validKeys = '0123456789+-*/().,√%';
      if (validKeys.includes(event.key)) {
        setExpression((prevExpression) => prevExpression + event.key);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [expression]);

  const evaluateExpression = (expr: string): string => {
    try {
      const sanitizedExpr = expr
        .replace(/,/g, '.')
        .replace(/×/g, '*')
        .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
        .replace(/%/g, '/100');
      const result = new Function('return ' + sanitizedExpr)();
      return result.toString();
    } catch {
      return 'Error';
    }
  };

  return (
    <div className="calculator-container">
      <div className='calculator'>
        <div className='display'>{expression}</div>
        <div className="total-display">{result}</div>
        <hr />
        <div className="calculator-buttons">
          {['C', '√', '%', '/',
            '7', '8', '9', '×',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '00', '0', '.', '='].map((btn, i) => (
              <button
                key={i}
                className={`calculator-button ${btn === '=' ? 'total' : ''}`}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;