import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Image,
} from '@chakra-ui/react';

function Chord({ songData, ...props }) {
  return (
    <Card w={'22%'} {...props}>
      <CardHeader>
        <Text fontWeight={'700'} fontSize={'1.5rem'}>
          Chords List
        </Text>
      </CardHeader>
      <Divider />
      <CardBody>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>Guitar</Tab>
            <Tab>Ukulele</Tab>
            <Tab>Piano</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
                {songData?.chords
                  ?.filter((item) => item?.type === 'Guitar')
                  ?.map((item) => (
                    <Stack
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                      mb={3}
                    >
                      <Box>
                        <Image src={item?.image} />
                      </Box>
                      <Box>
                        <Text fontWeight={'500'} fontSize={'1rem'}>
                          {item?.chordName}
                        </Text>
                      </Box>
                    </Stack>
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
                {songData?.chords
                  ?.filter((item) => item?.type === 'Ukulele')
                  ?.map((item) => (
                    <Stack alignItems={'center'} justifyContent={'flex-start'}>
                      <Box>
                        <Image src={item?.image} />
                      </Box>
                      <Box>
                        <Text fontWeight={'500'} fontSize={'1rem'}>
                          {item?.chordName}
                        </Text>
                      </Box>
                    </Stack>
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
                {songData?.chords
                  ?.filter((item) => item?.type === 'Piano')
                  ?.map((item) => (
                    <Stack alignItems={'center'} justifyContent={'flex-start'}>
                      <Box>
                        <Image src={item?.image} />
                      </Box>
                      <Box>
                        <Text fontWeight={'500'} fontSize={'1rem'}>
                          {item?.chordName}
                        </Text>
                      </Box>
                    </Stack>
                  ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default Chord;
