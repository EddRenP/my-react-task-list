import { Card, CardHeader, CardBody, Heading, Text, VStack, StackDivider, useDisclosure, Button} from '@chakra-ui/react'
import { ScaleFade } from '@chakra-ui/react'

function About(){
    const { isOpen, onToggle } = useDisclosure();

    return (
    <div className="div-all">
        <VStack divider={<StackDivider />} spacing={4} align='stretch'>
            <Button onClick={onToggle} colorScheme='green' marginBottom={10}>{isOpen ? 'Show less' : 'Show more'}</Button>
        </VStack>
        <ScaleFade initialScale={0.9} in={isOpen}>
            <div className="div-header">
                <VStack divider={<StackDivider />} spacing={4} align='stretch'>
                    <Card variant="filled">
                        <CardHeader>
                            <Heading size='md'>Made with JavaScript, HTML and CSS.</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                The sole purpose for this app is to help those who are very busy on a daily basis, hence
                        they need to be able to have a record of their tasks, that way they can remember what's
                        next to be done.
                            </Text>
                        </CardBody>
                    </Card>
                    <Card variant="filled">
                        <CardHeader>
                            <Heading size='md'>Powered by React, Express, MongoDB, etc....</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                            With this app, you will be able to add a task, by defining it's name and description,
                        also you will be able to mark which task has been done, therefore maintaining an order
                        for you to follow. Also you can edit tasks for any mistakes done before or simply if
                        you want to, and delete tasks if you don't want them to appear anymore or if they are 
                        already completed and too old to appear on your list.
                            </Text>
                        </CardBody>
                    </Card>
                </VStack>
            </div>
        </ScaleFade>
    </div>);
}

export default About;