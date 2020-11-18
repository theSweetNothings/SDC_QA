import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from '../AnswerModal/styles.js';

const FileInput = styled.input`
  align-self: center;
  width: 60%;
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
  };

  return (
    <ModalBackground>
      <ModalContent>
        <ExitModalArticle>
          <ExitModalBtn
            onClick={handleClose} name='close-btn'>X
          </ExitModalBtn>
        </ExitModalArticle>
        <h2>Upload photo</h2>
        <br/>
        { photos.length < 5 && <FileInput type='file' onChange={fileSelectedHandler}/> }
        <br/>
        <StyledButton
          onClick={() => handleUpload(photos)}>Upload
        </StyledButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default PhotosModal;