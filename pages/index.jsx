import React, { useState } from 'react';
import Link from 'next/link';
import { Btntheme } from '../components/theme';

export default function Home() {
  const [color, setColor] = useState(false);

  return (
    <div>
      <div>
        <h1 className={`${color ? 'color' : ''}`}>Online interaction</h1>
      </div>
      <div>
        <p className={`${color ? 'color' : ''}`}>
          Welcome, here you will learn how to interact online with other people
          but if you already interact online we will help you to improve even
          more.
        </p>
      </div>
      <div>
        <button onClick={() => setColor(!color)}>Change color</button>
      </div>
      <div>
        <Link href="/indroduction">
          <a>Next</a>
        </Link>
      </div>
    </div>
  );
}
