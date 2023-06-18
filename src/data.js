import { colors } from './colors';
import { names,connections } from './team_data.js';

export const nodes = [];
export const links = [];

let MAIN_NODE_SIZE = 50;
let CHILD_NODE_SIZE = 80;
// const LEAF_NODE_SIZE = 5;
const DEFAULT_DISTANCE = 20;
const MAIN_NODE_DISTANCE = 90;
// const LEAF_NODE_DISTANCE = 30;
export const MANY_BODY_STRENGTH = -20;
export const textoffset= 70; 
export const subtextOffset= 90; 
export const imageOffset= 1.9;

let i =0;

const addMainNode = (node, size= MAIN_NODE_SIZE) => {
  node.size = MAIN_NODE_SIZE;
  node.color = colors[i++][1];

  nodes.push(node);
};

const addChildNode = (
  parentNode,
  childNode,
  size = CHILD_NODE_SIZE,
  distance = DEFAULT_DISTANCE,
 
) => {
  childNode.size = size;
  childNode.color = parentNode.color;
  nodes.push(childNode);

  links.push({
    source: parentNode,
    target: childNode,
    distance,
    color: parentNode.color,
  });
};

const assembleChildNode = (parentNode, id) => {
  const childNode = { id, image };
  addChildNode(parentNode, childNode);
};

const connectMainNodes = (source, target, relationshipText,thickness = 1) => {
  links.push({
    source,
    target,
    distance: MAIN_NODE_DISTANCE,
    color: source.color,
    relationship: relationshipText,
    thickness,
  });
};

export const addMainNodes = () => {
  console.log('addMainNodes');
  names.forEach((name) => {
    addMainNode(name);
  });
}

export const mapConnections = () => {
  console.log('mapConnections');
  names.forEach((name) => {
    connections.forEach((connection) => {
      if(connection.source === name.id){
        const target = names.find((n) => n.id === connection.target);
        connectMainNodes(name, target, connection.relationship);
      }
    });
  });
}

export const defaultNodeSize = CHILD_NODE_SIZE;

addMainNodes();
mapConnections();