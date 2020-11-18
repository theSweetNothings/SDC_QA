import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from '../AnswerModal/styles.js';

const FileInput = styled.input`
  align-self: center;
  width: 60%;
`;

const Thumbnails = styled.section`
  display: flex;
  justifiy-content: center;
  margin: 10px 0px;
`;

const Image = styled.img`
  border: 1px solid seashell;
  border-radius: 5px;
  height: 50px;
  margin: 5px;
  width: 50px;
`;

const PhotosModal = function({ handleClose, handleUpload }) {
  const [ photos, setPhotos ] = useState([]);

  const fileSelectedHandler = function(event) {
    if (photos.length < 5) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPhotos(prev => {
            let updated = [...prev];
            return updated.concat(reader.result);
          });
        }
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <ModalBackground name='photos-background'>
      <ModalContent>
        <ExitModalArticle>
          <ExitModalBtn
            onClick={handleClose} name='photos-close-btn'>X
          </ExitModalBtn>
        </ExitModalArticle>
        <h2>Upload photo</h2>
        <br/>
        { photos.length < 5 && <FileInput type='file' onChange={fileSelectedHandler}/> }
        <Thumbnails>
          { photos && photos.map(photo => <Image key={uuidv4()} src={photo}/>) }
        </Thumbnails>
        <StyledButton
          onClick={() => handleUpload(photos)}>Upload
        </StyledButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default PhotosModal;