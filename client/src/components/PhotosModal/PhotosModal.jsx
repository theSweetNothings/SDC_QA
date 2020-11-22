import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalInput, ModalLabel, StyledButton, StyledInput, Thumbnails, Image } from '../AnswerModal/styles.js';

const FileInput = styled.input`
  align-self: center;
  width: 60%;
`;

const PhotosModal = function({ handleClose, handleUpload }) {
  const [ photos, setPhotos ] = useState([]);
  const [ newPhoto, setNewPhoto ] = useState('');
  const [ thumbs, setThumbs ] = useState([]);

  const handleChange = function(event) {
    if (photos.length < 5) {
      const { value } = event.target;
      setNewPhoto(value);
    }
  };

  const handleSubmit = function(event) {
    event.preventDefault();
    setPhotos(prev => {
      const updated = [...prev, newPhoto];
      return updated;
    });
    setNewPhoto('');
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
        {photos.length < 5 &&
          <ModalForm onSubmit={handleSubmit}>
            <ModalLabel>Photo URL:
              <ModalInput
                type='text'
                value={newPhoto}
                onChange={handleChange}
              />
            </ModalLabel>
            <br/>
            <StyledInput type='submit' value='Save'/>
          </ModalForm>
        }
        <Thumbnails>
          { photos && photos.map(photo => <Image key={uuidv4()} src={photo}/>) }
        </Thumbnails>
        <StyledButton
          onClick={() => handleUpload(photos)}>
          Upload Photos
        </StyledButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default PhotosModal;


      /*
      // Commented out from earlier change
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPhotos(prev => {
            let updated = [...prev];
            return updated.concat(reader.result);
          });
        }
      }
      //reader.readAsDataURL(event.target.files[0]);
    }
  };*/
        /*
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setThumbs(prev => {
            let updatedThumbs = [...prev];
            return updatedThumbs.concat({ url: reader.result });
          });
        }
      };
      reader.readAsDataURL(event.target.files[0]);*/