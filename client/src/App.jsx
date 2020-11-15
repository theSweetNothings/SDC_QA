import React, { useState, useEffect, useAsync } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import QuestionList from './components/QuestionList/QuestionList.jsx';
import styled from 'styled-components';

const Container = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
`;

const App = function(props) {
  const [questions, setQuestions] = useState([]);

  // Perform GET request on mount based off product id
  useEffect(() => {
    let isMounted = true;   // This keeps track of whether the component is mounted
    const id = props.match.params.id;
    axios.get(`http://52.26.193.201:3000/qa/${id}`)
    .then(response => {
      if (isMounted) {    // Sets state only if the component is still mounted
        setQuestions(response.data.results)
      }
    })
    .catch(error => console.log(error));
    // This callback fires when the component unmounts
    return () => { isMounted = false };
  }, []);

  return (
    <Container>
      <SearchBar/>
      {questions && <QuestionList questions={questions}/>}
    </Container>
  );
};

export default App;