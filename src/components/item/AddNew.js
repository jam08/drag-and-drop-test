import { useState } from "react";
import './index.css';

const AddNew = ({handleAddItem}) => {
  const [newItem, setNewItem] = useState('');

  const handleAddChange = ({ target }) => {
    const { value } = target;
    setNewItem(value);
  };

  const handleAddToList = () => {
    if (!newItem) return;
    handleAddItem(newItem);
    setNewItem('');
  };

  return (
    <div className="add-new-container">
      <input type="text" id="add-item" value={newItem} onChange={handleAddChange}/>
      <button className="add-button" onClick={handleAddToList}>Add new</button>
    </div>
  );
};

export default AddNew;
