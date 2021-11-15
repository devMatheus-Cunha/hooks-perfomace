import React, { useState, useMemo } from "react";

// components
import { Item } from "./components/item";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  // functions
  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const countItemsWithOne = useMemo(() => {
    console.log("Render");
    return items.filter((item) => item.includes("1")).length;
  }, [items]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem 0" }}>
      <input
        type="text"
        onChange={(event) => setNewItem(event.target.value)}
        value={newItem}
      />
      <button type="button" onClick={addItemToList}>
        Add
      </button>
      <ul>
        {items.map((item) => {
          return <Item key={item} title={item} />;
        })}
      </ul>
      <div>Count: {countItemsWithOne}</div>
    </div>
  );
}

export default App;
