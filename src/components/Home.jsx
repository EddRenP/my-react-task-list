import { Card, CardHeader, CardBody, Heading, Text, Stack, StackDivider} from '@chakra-ui/react'

function Home(){

    return (
    <div className="div-all">
        <div className="div-header">
        <Stack divider={<StackDivider />} spacing='8'>
                <Card variant="filled">
                    <CardHeader>
                        <Heading size='lg' textTransform='uppercase'>Welcome to Task List App!</Heading>
                    </CardHeader>
                </Card>
                <Card variant="filled">
                    <CardBody>
                        <Text>Hi -user-! and thanks for using my app, hope it will help you on your daily life!</Text>
                    </CardBody>
                </Card>
            </Stack>
        </div>
    </div>
    );
}

export default Home;