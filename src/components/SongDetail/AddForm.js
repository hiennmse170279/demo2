import { GlobalContext } from '@/Provider';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';

function AddSongAndPlaylist({ isOpen, onClose, songId, userId, setReload }) {
  const { BACK_END_PORT } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    name: '',
    songid: songId,
  });

  const addNewPlaylistandAndSong = () => {
    axios
      .post(`${BACK_END_PORT}/api/v1/playlist/user/${userId}/newadd`, formData)
      .then((response) => {
        if (response.data === 'Playlist is created successfully') {
          alert(response.data);
          setFormData({ ...formData, name: '' });
          setReload(true);
          setTimeout(() => {
            setTimeout(false);
          }, 500);
          onClose();
        }
      })
      .catch((error) => {
        alert('Cant create playlist', error);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Playlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder='Enter name'
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={addNewPlaylistandAndSong}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddSongAndPlaylist;
