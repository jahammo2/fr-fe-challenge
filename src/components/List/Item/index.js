import { useForm } from 'react-hook-form';

import partsService from '../../../services/parts.js';

function Item({ part }) {
  const { handleSubmit: formSubmit, register } = useForm();

  function handleSubmit(values) {
    return partsService
      .update(part.id, values)
      .then(data => {
        console.log('data', data);
      });
  }

  const onSubmit = formSubmit(handleSubmit);

  const { part: partDetails } = part;

  return (
    <li>
      <h2>{partDetails.file_name}</h2>

      <form onSubmit={ onSubmit }>
        <label>
          <h4>
            Quantity
          </h4>

          <input
            defaultValue={ part.quantity }
            type="text"
            { ...register("quantity") }
          />
        </label>

        <input
          type="submit"
          value="Update"
        />
      </form>
    </li>
  );
}

export default Item;
