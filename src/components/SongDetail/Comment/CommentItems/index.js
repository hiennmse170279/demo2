import {
  Avatar,
  Card,
  CardBody,
  chakra,
  Flex,
  Stack,
  useColorModeValue,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import ReplyItem from './ReplyItem';
import { FaRegComment, FaTrash } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';
import { SongContext } from '@/Pages/SongDetails';
import axios from 'axios';

function TestimonialCard(props) {
  const {
    id,
    username,
    content,
    avatar = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    subComment = [],
    handleDelete,
    index,
    BACK_END_PORT,
  } = props;
  const [showBox, setShowBox] = useState(false);
  const { information, setReload } = useContext(SongContext);
  const [formData, setFormData] = useState({
    userId: information?.userId,
    songId: information?.songId,
    content: '',
    parentId: id,
  });

  const handleComment = () => {
    if (formData?.content.length) {
      axios
        .post(`${BACK_END_PORT}/api/v1/comment`, formData)
        .then((response) => {
          if (response.data === 'Reply Comment Successfully') {
            setFormData({ ...formData, content: '' });
            setShowBox(false);
            setReload(true);
            setTimeout(() => {
              setReload(false);
            }, 500);
          }
        })
        .catch((err) => {
          alert('Error when upload your comment' + err);
        });
    } else {
      alert('Please input your comment');
    }
  };

  const ReplyInput = (
    <Flex w={'100%'} mb={4} justifyContent={'flex-start'}>
      <Avatar
        src={avatar}
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
        <InputRightElement width='3.5rem' color={'#1877F2'} fontSize={'20px'}>
          <IoSend
            style={{ cursor: 'pointer' }}
            onClick={() => handleComment()}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
  const ReplyComment = subComment?.map((item, index) => (
    <ReplyItem
      item={item}
      key={index}
      information={information}
      setReload={setReload}
      BACK_END_PORT={BACK_END_PORT}
      handleDelete={handleDelete}
    />
  ));
  return (
    <Flex
      boxShadow={'lg'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={'0.5rem 1.5rem'}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      w={'100%'}
    >
      <Flex mb={subComment?.length ? '10px' : 0} w={'100%'}>
        <Avatar
          src={avatar}
          height={'40px'}
          width={'40px'}
          alignSelf={'start'}
          m={{ base: '0 0 15px 0', md: '0 15px 0 0' }}
        />
        <Stack alignItems={'flex-start'} w={'100%'}>
          <Card
            width={'100%'}
            boxShadow={
              'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
            }
          >
            <CardBody>
              <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}
              >
                <chakra.p
                  fontFamily={'Work Sans'}
                  fontWeight={'bold'}
                  fontSize={18}
                  pb={2}
                >
                  {username}
                </chakra.p>
                <chakra.p
                  fontFamily={'Inter'}
                  fontWeight={'medium'}
                  fontSize={'15px'}
                >
                  {content}
                </chakra.p>
              </Flex>
            </CardBody>
          </Card>
          <Flex>
            <Text
              color={'#1877F2'}
              cursor={'pointer'}
              display={'flex'}
              alignItems={'center'}
              _hover={{ textDecoration: 'underline' }}
              mb={subComment?.length ? 2 : 0}
              onClick={() => setShowBox(!showBox)}
            >
              <FaRegComment style={{ marginRight: '3px' }} /> Reply
            </Text>
            <Text
              color={'red'}
              cursor={'pointer'}
              display={'flex'}
              ml={5}
              alignItems={'center'}
              _hover={{ textDecoration: 'underline' }}
              mb={subComment?.length ? 2 : 0}
              onClick={() => handleDelete(id, index)}
            >
              <FaTrash style={{ marginRight: '3px' }} /> Delete
            </Text>
          </Flex>
          {showBox && ReplyInput}
          {ReplyComment}
        </Stack>
      </Flex>
    </Flex>
  );
}

export default function CommentItems({
  handleDelete = handleDelete,
  songCommentData = [],
  BACK_END_PORT,
}) {
  return (
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}
    >
      <Flex flexWrap={'wrap'} w={'100%'}>
        {songCommentData && songCommentData?.map((cardInfo, index) => (
          <TestimonialCard
            key={index}
            {...cardInfo}
            index={index}
            BACK_END_PORT={BACK_END_PORT}
            handleDelete={handleDelete}
            w={'100%'}
          />
        ))}
      </Flex>
    </Flex>
  );
}
