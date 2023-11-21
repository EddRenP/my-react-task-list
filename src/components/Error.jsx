import { Card, CardHeader, CardBody, Heading, Text, Stack, StackDivider} from '@chakra-ui/react'

const Error = () => {
    return (
      <div className="div-all">
        <div className="div-header">
        <Stack divider={<StackDivider />} spacing='8'>
                <Card variant="filled">
                    <CardHeader backgroundColor='red.200'>
                        <Heading size='lg' color='red.700' textTransform='uppercase'>Error!</Heading>
                    </CardHeader>
                    <CardBody backgroundColor='red.200'>
                        <Text color='red.700'>Sorry, there has been an error with the app!</Text>
                    </CardBody>
                </Card>
            </Stack>
        </div>
    </div>
    );
  };

export default Error;