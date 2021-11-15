import React, { useState } from 'react';

// components
import { Item } from './components/item';

function App() {
  const [items, setItems] = useState<string[]>([])

// functions
function addItemToList() {
    setItems([...items , `Item ${items.length}`]);
}

  return (
    <div className="App">
      <button type="button" onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return <Item key={item} title={item}/>
        })}
      </ul>
    </div>
  );
}

export default App;
