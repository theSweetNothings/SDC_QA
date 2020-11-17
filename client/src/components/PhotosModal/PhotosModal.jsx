import React from 'react';
import styled from 'styled-components';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from '../AnswerModal/styles.js';

const FileInput = styled.input`

`;

const PhotosModal = function({ handleClose }) {
  return (
    <ModalBackground>
      <ModalContent>
        <ExitModalArticle>
          <ExitModalBtn onClick={handleClose} name='close-btn'>X</ExitModalBtn>
        </ExitModalArticle>
        <h2>Upload photo</h2>
      </ModalContent>
    </ModalBackground>
  );
};

export default PhotosModal;