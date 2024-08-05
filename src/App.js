import React, { useState } from 'react';

const SearchFilter = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange', 'Mango']);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      const itemExists = items.some(item => item.toLowerCase() === inputValue.toLowerCase());
      if (!itemExists) {
        setItems([...items, inputValue]);
      }
      setInputValue('');
    }
  };


  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>SEARCH FILTER</h1>
      <input
        type="text"
        placeholder='Search'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>ADD</button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
