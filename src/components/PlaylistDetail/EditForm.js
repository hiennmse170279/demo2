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
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditForm({ isOpen, onClose, playListName, userId }) {
  const navigator = useNavigate();
  const { BACK_END_PORT } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    name: playListName,
    newname: '',
  });
  const handleUpdateName = async () => {
    axios
      .patch(`${BACK_END_PORT}/api/v1/playlist/user/${userId}`, formData)
      .then((response) => {
        if (response.data === 'Update Successfully') {
          alert(response.data);
          onClose();
          setFormData({ ...formData, name: formData.newname, newname: '' });
          navigator(`/my-playlist-song/${formData.newname}`);
        }
      })
      .catch((error) => {
        alert('Cant update playlist', error);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Playlist Name</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder='Enter new name'
            onChange={(e) =>
              setFormData({ ...formData, newname: e.target.value })
            }
            value={formData.newname}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={handleUpdateName}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditForm;
