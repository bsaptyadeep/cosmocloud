import React from 'react';
import {
    Button, Editable,
    EditableInput,
    EditablePreview,
    Select,
    Switch
} from '@chakra-ui/react';
import { TreeNode, types } from '../config';

const DataNode = ({ node, setData, data, i}) => {

    const onChangeType = (e) => {
        node.onChangetype(e.target.value)
        if (e.target.value !== 'OBJECT') {
            node.deleteDescendants();
            setData([...data])
        }
    }

    const addDescendants = () => {
        if (node.type === "OBJECT") {
            const child = new TreeNode("xyz", types[0], node)
            node.addDescendant(child)
            setData([...data])
        }
    }

    const deleteNode = () => {
        if (node.parent === null) {
            const copy = data.filter(item => item !== node)
            setData([...copy])
        }
        else {
            node.deleteNode()
            setData([...data])
        }
    }

    return (
        <div className='child-container'>
            <div className='node-container'>
                <h3>{i!=null?i+1:<></>}</h3>
                <Editable maxW="100px"
                    onChange={(e) => {
                        node.onChangeValue(e)
                    }}
                    defaultValue={node.value}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Select maxW="200px" defaultValue={node.type}
                    onChange={onChangeType}
                >
                    {
                        types.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))
                    }
                </Select>
                <Switch onChange={(e) => {
                    node.toggleFlag()
                    setData([...data])
                }} isChecked={node.flag} id='email-alerts' />
                <Button onClick={addDescendants} spacing={4} colorScheme='blue'>+</Button>
                <Button onClick={deleteNode} spacing={4} colorScheme='blue'>Delete</Button>
            </div>
            {
                node.descendants === [] ?
                    <></> :
                    (
                        <div className='child-container'>
                            {
                                node.descendants.map((child) => (
                                    <DataNode key={Math.random(1, 0) * 200} node={child} data={data} setData={setData} />
                                ))
                            }
                        </div>
                    )
            }
        </div>

    )
}

export default DataNode