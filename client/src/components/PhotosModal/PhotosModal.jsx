import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from '../AnswerModal/styles.js';

const FileInput = styled.input`

`;

const PhotosModal = function({ handleClose, handleUpload }) {
  const [ photos, setPhotos ] = useState([]);

  const fileSelectedHandler = function(event) {
    if (photos.length < 5) {
      setPhotos(prev => {
        let updated = [...prev];
        return updated.concat(event.target.files[0]);
      });
    }
  }

  return (
    <ModalBackground>
      <ModalContent>
        <ExitModalArticle>
          <ExitModalBtn onClick={handleClose} name='close-btn'>X</ExitModalBtn>
        </ExitModalArticle>
        <h2>Upload photo</h2>
        <FileInput type='file' onChange={fileSelectedHandler}/>
        <StyledInput onClick={handleUpload}/>
      </ModalContent>
    </ModalBackground>
  );
};

export default PhotosModal;