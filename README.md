# Intution behind implementation

Assumed each data as node of a graph, if the node type is OBJECT we can add more child node to it.

# Data Node Class Data Members

String value,
String type: (OBJECT/NUMBER/STRING/BOOLEAN),
boolean flag,
Node parent,
Node array of descendants,

# Data Node Class Member Methods

## onChangeValue :
Update Value of a Node


## onChangeType :
Update Type of a Node

## toggleFlag :
Toggle the flag on switch click of a Node

## addDescendents :
add descendents to a node only when type is OBJECT

## deleteNode :
Delete the Node and its child Nodes if exists
