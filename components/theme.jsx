import React, { useState } from 'react';

export function Btntheme() {
  const [color, setColor] = useState(false);

  function changeColor() {
    console.log('ola');
  }

  return (
    <>
      <button onClick={() => setColor(!color)}>Change color</button>
    </>
  );
}
