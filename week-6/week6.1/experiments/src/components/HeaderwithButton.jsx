
import { useState } from 'react';
import Header from './Header'
function HeaderwithButton() {
     const [title, setTitle] = useState("Hello World");
    return (
  <>
        <button onClick={() => setTitle("my name is"+Math.random())}>
        Update the title
      </button>
      <Header title={title} />
  </>
    );
}

export default HeaderwithButton;