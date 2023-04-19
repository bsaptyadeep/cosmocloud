import { useState } from 'react';
import './App.css';
import {
  Heading, Button
} from '@chakra-ui/react'
import DataNode from './components/dataNode';
import { TreeNode, types } from './config';

function App() {

  const [data, setData] = useState([]);

  const addTree = () => {
    const tr = new TreeNode("addName", types[0], null);
    setData([...data, tr]);
  }

//  console.log(data)

  return (
    <div className="App">
      <div className='app-top'>
        <Heading as='h4' size='md'>
          Field name and type
        </Heading>
        <Button onClick={addTree} spacing={4} colorScheme='blue'>+</Button>
        <Button onClick={() => {
          console.log(data)
        }} spacing={4} colorScheme='blue'>Save</Button>
      </div>
      {
        data.map((tree, index) => (
          <DataNode key={Math.random(1, 0) * 200} node={tree} setData={setData} data={data} i={index}/>
        ))
      }
    </div>
  );
}

export default App;
