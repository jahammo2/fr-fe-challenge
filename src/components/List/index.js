import { useEffect, useState } from 'react';

import Item from './Item';
import partsService from '../../services/parts.js';

function List() {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    return partsService
      .index(1)
      .then(setParts);
  }, []);

  return (
    <ul className="List">
      {parts.map(part => {
        return <Item key={part.id} part={part} />;
      })}
    </ul>
  );
}

export default List;
