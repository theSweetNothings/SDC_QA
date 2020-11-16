import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import QuestionList from './components/QuestionList/QuestionList.jsx';
import styled from 'styled-components';

const Container = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
`;

const App = function(props) {
  // State
  const [ questions, setQuestions ] = useState([]);
  const [ productName, setProductName ] = useState(null);

  // Perform GET request on mount based off product id
  // useEffect works like ComponentDidMount when its second argument is an empty array
  useEffect(() => {
    // Keep track of whether the component is mounted
    let isMounted = true;
    // Grab id from the url; React-router passes it nested in props
    const id = props.match.params.id;
    // Get questions from API & set state only if the component is still mounted
    axios.get(`http://52.26.193.201:3000/qa/${id}`)
      .then(response => {
        if (isMounted) {
          setQuestions(response.data.results)
        }
      })
      .catch(error => console.log(error));
    // Get product name from API & set state only if the component is still mounted
    axios.get(`http://52.26.193.201:3000/products/${id}`)
      .then(response => {
        if (isMounted) {
          setProductName(response.data.results[0].name)
        }
      })
      .catch(error => console.log(error));
    // This callback fires when the component unmounts to prevent attempts at changing state after the component unmounts
    return () => { isMounted = false };
  }, []);

  return (
    <Container>
      <SearchBar/>
      {questions && <QuestionList questions={questions} product={productName}/>}
    </Container>
  );
};

export default App;