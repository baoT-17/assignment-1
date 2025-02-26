import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Avocado']);
  const [newItem, setNewItem] = useState('');
  const [showAOnly, setShowAOnly] = useState(false);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const filteredItems = showAOnly
    ? items.filter(item => item.toLowerCase().startsWith('a'))
    : items;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <ul className="mb-4">
        {filteredItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item}</span>
            <button
              onClick={() => handleDeleteItem(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="flex mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border p-2 flex-grow rounded-l"
          placeholder="Add new item"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Add Item
        </button>
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showAOnly}
            onChange={() => setShowAOnly(!showAOnly)}
            className="mr-2"
          />
          Show Only Items Starting with 'A'
        </label>
      </div>
    </div>
  );
};

export default ItemList;