import React, { useState } from 'react';
import { Btntheme } from '../components/theme';

export default function Indroduction() {
  const [color, setColor] = useState(false);
  const [value, setValue] = useState(false);

  function changerValue() {
    return new Promise((resolve) => {
      setValue(true);
    });
  }

  async function test() {
    await changerValue();
    console.log(value);
  }
  console.log(value);

  return (
    <>
      <button onClick={() => setColor(!color)}>Change color</button>
      <div>
        <h1 className={`${color ? 'color' : ''}`}>Internet interaction</h1>
      </div>
      <div>
        <p className={`${color ? 'color' : ''}`}>
          Lorem ipsum dolor sit amet. Qui nesciunt officia qui quod
          necessitatibus qui nihil porro qui laborum porro accusamus reiciendis
          quo quibusdam voluptatem? Ex doloremque galisum et aspernatur voluptas
          et explicabo assumenda est possimus explicabo et reiciendis tenetur
          qui optio assumenda a officia cupiditate. Sit asperiores repellendus
          iste enim rem eius deserunt ad quas enim! Qui dolore velit qui dolor
          et voluptas vitae ut provident quibusdam. Sit vero architecto in magni
          unde et dolorem laudantium ex rerum autem. Aut facilis voluptatem aut
          distinctio voluptatem et suscipit laudantium! Ut corrupti voluptatem
          et fugiat impedit non quae rerum aut iste provident. Qui aperiam
          voluptatum rem libero doloremque et dolorem expedita. Qui quibusdam
          veniam aut suscipit officiis in reiciendis nulla et aspernatur nulla
          et quasi vero id exercitationem esse qui dolores quos. Et molestias
          quia ut culpa iusto vel esse magnam aut eius voluptas hic dignissimos
          minus 33 pariatur tempora.
        </p>
      </div>
      <div>
        <button onClick={changerValue}>Changer value</button>
      </div>
    </>
  );
}
