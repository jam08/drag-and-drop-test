import { useState } from 'react';
import AddNew from '../item/AddNew';
import './index.css';

const ACTION_KEYCODES = [ 'Space', 'ArrowDown', 'ArrowUp'];

const List = () => {
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState();
  const [itemInFocus, setItemInFocus] = useState();

  const handleAddItem = (newItem) => {
    const list = [...items];
    if (!list.length) {
      setItemInFocus(newItem);
    }
    list.push(newItem);
    setItems(list);
  };

  const handleDragStart = ({ dataTransfer, target }) => {
    // to be implemented
    // console.log('start dragging');
    // dataTransfer.setData('text/plain', target.id);
    //   setTimeout(() => {
    //     //hide target
    // }, 0);
  };

  const handleDrop = (event) => {
    // to be implemented
    // event.preventDefault();
    // const { dataTransfer, target } = event;
    // const listItem = dataTransfer.getData('text/plain');
  };

  const handleDragOver = (event) => {
    // to be implemented
    event.preventDefault();
  }
  
  const handleKeyDown = (event) => {
    const { code, target } = event;
    // const { id, checked } = target;
    
    if (!ACTION_KEYCODES.includes(code)) return;

    const currentItemInFocus = items.indexOf(itemInFocus);
    const selectionIndex = items.includes(selection) ? items.indexOf(selection) : null;
    const list = [ ...items ];
    
    switch (code) {
      case 'Space':
        if (!selection) {
          setSelection(itemInFocus);
          return;
        }
        setSelection(null);
        break;
      
      case 'ArrowDown':    
        if (!selection) {
          if (currentItemInFocus === items.length - 1) return;
          setItemInFocus(items[currentItemInFocus + 1]);
          return;
        }  
        // move down
        const listLength = list.length;
        if (selectionIndex === listLength - 1) return; // cannot be moved down
        list.splice(selectionIndex, 1);
        list.splice(selectionIndex + 1, 0, selection);
        setItems(list);
        break;
      case 'ArrowUp':
        if (!selection) {
          if (!currentItemInFocus) return;
          setItemInFocus(items[currentItemInFocus - 1]);
          return;
        }
        // move up
        if (!selectionIndex) return; // cannot be moved up
          list.splice(selectionIndex, 1);
          list.splice(selectionIndex - 1, 0, selection);
          setItems(list);
        break;

      default:
        return;
    }
  }

  return (
    <div className="list-container" aria-labelledby="items-list">
      <AddNew handleAddItem={handleAddItem} />
      <ul role="listbox" className="list_ul">
        {items.map((item, index) => (
          <li 
            id={item}
            key={item}
            role="option" 
            aria-selected={item === selection} 
            draggable={true} 
            tabIndex={itemInFocus === item ? 0 : -1}
            onKeyDown={handleKeyDown}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={
              item === selection 
              ? 'item item-selected' : itemInFocus === item 
              ? 'item item-hasFocus' : 'item'}
          >
            <span htmlFor={item}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
