import {
  Card,
  CardBody,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import CommentItems from './CommentItems';
import { IoSend } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { SongContext } from '@/Pages/SongDetails';
import { GlobalContext } from '@/Provider';
import axios from 'axios';

function Comment({ songCommentData, ...props }) {
  const { information, setReload } = useContext(SongContext);
  const { BACK_END_PORT } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    userId: information?.userId,
    songId: information?.songId,
    content: '',
    parentId: null,
  });
  const handleComment = () => {
    if (formData?.content.length) {
      axios
        .post(`${BACK_END_PORT}/api/v1/comment`, formData)
        .then((response) => {
          if (response.data === 'Comment Successfully') {
            setFormData({ ...formData, content: '' });
            setReload(true);
            setTimeout(() => {
              setReload(false);
            }, 500);
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Error when upload your comment' + err);
        });
    } else {
      alert('Please input your comment');
    }
  };
  const handleDelete = (id) => {
    axios
      .post(`${BACK_END_PORT}/api/v1/comment/${id}`, formData)
      .then((response) => {
        if (response.data === 'Deleted Comment Successfully!') {
          setReload(true);
          setTimeout(() => {
            setReload(false);
          }, 500);
        }
      })
      .catch((err) => {
        alert('Error when upload your comment' + err);
      });
  };
  return (
    <Card className='comment' {...props}>
      <CardBody>
        <Flex w={'100%'} mt={2} mb={6}>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
            }
            height={'40px'}
            width={'40px'}
            alignSelf={'start'}
            m={{ base: '0 0 15px 0', md: '0 15px 0 0' }}
          />
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              placeholder='Enter your comment'
              borderRadius={'9999px'}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />
            <InputRightElement
              width='3.5rem'
              color={'#1877F2'}
              fontSize={'20px'}
            >
              <IoSend style={{ cursor: 'pointer' }} onClick={handleComment} />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <CommentItems
          songCommentData={songCommentData}
          BACK_END_PORT={BACK_END_PORT}
          handleDelete={handleDelete}
        />
      </CardBody>
    </Card>
  );
}

export default Comment;
