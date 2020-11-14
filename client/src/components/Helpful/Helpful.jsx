import React from 'react';

const Helpful = function(props) {
  return (
    <article>
      <p>Helpful?</p>
      <p><u>Yes</u> ({props.helpful})</p>
    </article>
  )
};

export default Helpful;