import React from 'react';
import data from '../data.json';

function SortOfSizes(props) {
  let sizes = data.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let ArrayofSizes = [...new Set(sizes)];
  return (
    <>
      <h2>Select Sizes of product</h2>
      {ArrayofSizes.map((size) => (
        <label>
          <input
            type="checkbox"
            name={size}
            value={size}
            onClick={props.click}
            className="btn"
          />
          <span
            className={
              props.checked && props.name === { size } ? 'btn1' : 'sizes'
            }
          >
            {size}
          </span>
        </label>
      ))}
    </>
  );
}

export default SortOfSizes;
