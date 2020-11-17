import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
`;

const Helpful = function(props) {
  return (
    <Article>
      <p style={{ marginRight: '.25rem'}}>Helpful?</p>
      <p><u>Yes</u> ({props.helpful})</p>
    </Article>
  );
};

export default Helpful;