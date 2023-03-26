import { Card,  CardBody, CardFooter,Stack,Heading,Text,Button } from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';

function PrejectCard(props) {
  return (<>
  <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={props.image}
    width={600}
    height={500}
    alt={props.alt}
  />

  <Stack>
    <CardBody>
      <Heading size='md'> <div style={{color:"white"}}>{props.Heading}</div></Heading>

      <Text py='3'>
        <div style={{color:"white"}}>{props.description}</div>
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='light'>
       {/* <Link href={props.github}>GitHub Link</Link>  */}
      </Button>
    </CardFooter>
  </Stack>
</Card>
  </>
   
  )
}

export default PrejectCard;