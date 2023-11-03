import React from 'react';
import {
  Box,
  Text,
  Stack,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Card,
  IconButton,
  Image,
  CardBody,
} from '@chakra-ui/react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FcLike,  FcRating } from 'react-icons/fc';
import axios from 'axios';

const SongItem = ({
  data,
  index,
  playListName,
  BACK_END_PORT,
  user_id,
  setReload,
}) => {
  const navigator = useNavigate();

  const handleSongDetail = (id) => {
    navigator(`/song/${id}`);
  };

  const handleRemoveSongFromPlaylist = (e) => {
    e.stopPropagation();
    const formData = new FormData();
    formData.append('name', playListName);
    formData.append('songid', data?.id);
    axios
      .put(`${BACK_END_PORT}/api/v1/playlist/user/${user_id}`, formData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.data === 'Remove Successfully!') {
          alert(response.data);
          setReload(true);
          setTimeout(() => {
            setReload(false);
          }, 500);
          // let newSongs = [...playListDetail?.songs];
          // newSongs.splice(index, 1);
          // setPlayListDetail({ ...playListDetail, songs: newSongs });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Can't remove song from playlist", err);
      });
  };
  return (
    <Card
      cursor={'pointer'}
      onClick={() => handleSongDetail(data?.id)}
      _hover={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
      my={5}
    >
      <CardBody>
        <Flex>
          <Box w={'3%'} display={'flex'} alignItems={'center'}>
            <Text>{index}</Text>
          </Box>
          <Box w={'5%'}>
            <Image src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/e/8/83e83c4a068f0b994a99735e440b76df.jpg' />
          </Box>
          <Box w={'1%'}></Box>
          <Box w={'19%'}>
            <Stack>
              <Text
                overflow={'hidden'}
                whiteSpace={'nowrap'}
                display={'-webkit-box'}
                textOverflow={'ellipsis'}
                fontWeight={'600'}
                style={{
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {data?.songName}
              </Text>
              <Text
                overflow={'hidden'}
                whiteSpace={'nowrap'}
                display={'-webkit-box'}
                textOverflow={'ellipsis'}
                fontSize={'12px'}
                style={{
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {data?.singer}
              </Text>
            </Stack>
          </Box>
          <Box
            w={'65%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-around'}
          >
            <Flex alignItems={'center'}>
              <FcLike style={{ marginRight: '5px' }} />
              <Text>{data?.totalLike}</Text>
            </Flex>
            {/* <Flex alignItems={'center'}>
              <FcHeadset style={{ marginRight: '5px' }} />
              <Text>{data?.view}</Text>
            </Flex> */}
            <Flex alignItems={'center'}>
              <FcRating style={{ marginRight: '5px' }} />
              <Text>{data?.rating}</Text>
            </Flex>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            w={'5%'}
            alignItems={'center'}
            fontSize={'24px'}
            onClick={(e) => e.stopPropagation()}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<FiMoreHorizontal />}
                variant='outline'
              />
              <MenuList>
                <MenuItem
                  icon={<DeleteIcon />}
                  fontSize={'14px'}
                  onClick={handleRemoveSongFromPlaylist}
                >
                  Remove Song
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SongItem;
