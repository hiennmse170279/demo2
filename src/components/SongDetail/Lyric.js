import { Card, CardBody, CardHeader, Divider, Text } from '@chakra-ui/react';
function Lyrics({ songDescription, userfullname, ...props }) {
  return (
    <Card {...props}>
      <CardHeader display={'flex'} justifyContent={'space-between'}>
        <Text fontWeight={'700'} fontSize={'1.5rem'}>
          Lyrics
        </Text>
        <Text fontWeight={'400'} fontSize={'1rem'} textDecoration={'underline'}>
          by{' ' + userfullname}
        </Text>
      </CardHeader>
      <Divider />
      <CardBody fontSize={"1.1rem"}>
        {songDescription?.split('\n')?.map((line, index) => {
          return (
            <Text key={index} dangerouslySetInnerHTML={{ __html: line }} />
          );
        })}
      </CardBody>
    </Card>
  );
}

export default Lyrics;
