import React, { useState } from 'react';
import { Box, Image, Flex, Button, IconButton } from '@chakra-ui/react';
import { BsMusicNote } from 'react-icons/bs';
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';

function MusicCardItem({
  name,
  content,
  image,
  showNumberSong,
  numberSongs,
  isChorListDetail,
  id,
  setReload,
  BACK_END_PORT,
  removeSong,
  ...props
}) {
  const [removeStatus, setRemoveStatus] = useState(false);
  const [configData, setConfigData] = useState({});

  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      color='white'
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      p={'16px'}
      onMouseEnter={() => setRemoveStatus(true)}
      onMouseLeave={() => setRemoveStatus(false)}
      {...props}
    >
      {
        <Box
          height={isChorListDetail ? '' : '220px'}
          width='100%'
          mb={isChorListDetail ? '4px' : '16px'}
        >
          <Image
            src={
              image
                ? image
                : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/e/8/83e83c4a068f0b994a99735e440b76df.jpg'
            }
            alt='Card image'
            objectFit='cover'
            w='100%'
            h='100%'
            borderRadius={'6px'}
          />
        </Box>
      }
      {removeStatus && isChorListDetail && (
        <Box position={'relative'}>
          <IconButton
            position={'absolute'}
            onClick={() => removeSong(id)}
            bottom={0}
            left={0}
            isRound={true}
            variant='solid'
            colorScheme='red'
            aria-label='Done'
            fontSize='20px'
            icon={<DeleteIcon />}
          />
        </Box>
      )}
      <Box
        mt={'10%'}
        minH={'62px'}
        marginTop={'4px'}
        overflow={'hidden'}
        textOverflow={'ellipsis'}
      >
        <Box>
          <Box
            borderRadius='full'
            colorscheme='teal'
            overflow={isChorListDetail ? 'visible' : 'hidden'}
            textOverflow={'ellipsis'}
            fontSize={'1rem'}
            fontWeight={'700'}
          >
            {name}
          </Box>
          {showNumberSong && (
            <Flex
              borderRadius='full'
              overflow={isChorListDetail ? 'visible' : 'hidden'}
              textOverflow={'ellipsis'}
              alignItems={'center'}
              mt={2}
            >
              <BsMusicNote style={{ marginRight: '5px' }} />
              {numberSongs} songs
            </Flex>
          )}
        </Box>
        <Box
          mt={'4px'}
          overflow={isChorListDetail ? 'visible' : 'hidden'}
          whiteSpace={'normal'}
          display={isChorListDetail ? 'block' : '-webkit-box'}
          textOverflow={'ellipsis'}
          fontSize={'0.875rem'}
          style={
            isChorListDetail
              ? {}
              : {
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }
          }
        >
          {content}
        </Box>
      </Box>
    </Box>
  );
}

export default MusicCardItem;
