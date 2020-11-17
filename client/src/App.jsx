import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import QuestionList from './components/QuestionList/QuestionList.jsx';
import AnswerModal from './components/AnswerModal/AnswerModal.jsx';
import styled from 'styled-components';

const Container = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
`;

const App = function(props) {
  // State
  const [ questions, setQuestions ] = useState([]);
  const [ product, setProduct ] = useState(null);
  const [ showAnswerModal, setShowAnswerModal ] = useState(false);
  const [ clickedQuestion, setClickedQuestion ] = useState(null);

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
          setProduct(response.data);
        }
      })
      .catch(error => console.log(error));
    // This callback fires when the component unmounts to prevent attempts at changing state after the component unmounts
    return () => { isMounted = false };
  }, []);

  const toggleAnswerForm = function(bool, query) {
    setShowAnswerModal(bool);
    // setClickedQuestion(query);
  }

  return (
    <Container>
      <SearchBar/>
      {questions && <QuestionList questions={questions} product={product} toggleAnswerForm={toggleAnswerForm}/>}
      {showAnswerModal && <AnswerModal />}
    </Container>
  );
};

export default App;