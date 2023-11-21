import { Link } from "react-router-dom";
import { Tabs, TabList, Tab } from '@chakra-ui/react'

function Header(){

    return (
    <div className="div-all">
        <div className="div-header">
            <h1>To do List</h1>
            <Tabs isLazy defaultIndex={0} align='center' size='lg' variant='soft-rounded' colorScheme='gray'>
                <TabList>
                    <Tab><Link to="/">Home</Link></Tab>
                    <Tab><Link to="/about">About</Link></Tab>
                    <Tab><Link to="/detail">Detail</Link></Tab>
                </TabList>
            </Tabs>
        </div>
    </div>);
}

export default Header;