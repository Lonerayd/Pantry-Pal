import React, { useState, useEffect } from 'react';
import ReactShadowRoot from 'react-shadow-root';

const styles = `:host {
  display: inline-flex;
}
span {
  background-color: #333;
  border-radius: 3px;
  color: #fff;
  padding: 1px 5px;
}
button {
  background-color: #fff;
  border: 1px solid currentColor;
  border-radius: 3px;
  cursor: pointer;
  outline: 0;
  padding: 10px;
}
button:active {
  background-color: #333;
  color: #fff;
}
button,
span {
  margin: 0 2px;
}`;

const Demo1 = () => {
  const [cnt, setCnt] = useState(0);

  const increment = () => {
    setCnt(prevCnt => prevCnt + 1);
  };

  useEffect(() => {
    const basicDemoElement = document.querySelector('basic-demo');
    if (basicDemoElement) {
      // Perform additional actions if the element is present
    }
  }, []);

  if (document.querySelector('basic-demo')) {
    return null; // Return null if <basic-demo> element is present
  }

  return (
    <basic-demo>
      {/* The shadow root will be attached to this element */}
      <ReactShadowRoot>
        <style>{styles}</style>
        <span>{cnt}</span>
        <p>hello</p>
        <button onClick={increment}>Click Me</button>
      </ReactShadowRoot>
    </basic-demo>
  );
};

export default Demo1;
