import {
  select,
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
  drag,
  zoom,
  zoomIdentity,
} from 'd3';

import {
  nodes,
  links,
  MANY_BODY_STRENGTH,
  nodeSizes,
  defaultNodeSize,
  textoffset,
  subtextOffset,
  imageOffset,
  addMainNodes
} from './data';



//svg needs
const svg = select('#container');
const width = +svg.attr('width');
const height = +svg.attr('height');
const centerX = width / 2;
const centerY = height / 2;

//initail center
const initialX = window.innerWidth / 2; // Set initial X position to the center of the screen
const initialY = window.innerHeight / 2; // Set initial Y position to the center of the screen


//zoom functions
const zoomBehavior = zoom().on('zoom', zoomed);

svg.call(zoomBehavior);

function zoomed(event) {
  svg.attr('transform', event.transform);
}

//for simulation
const simulation = forceSimulation(nodes)
  .force(
    'charge',
    forceManyBody().strength(MANY_BODY_STRENGTH)
  )
  .force(
    'link',
    forceLink(links).distance(
      (link) => link.distance
    )
  ) //ex
  .force('center', forceCenter(initialX, initialY))




//for dragging
const dragInteraction = drag().on(
  'drag',
  (event, node) => {
    node.fx = event.x;
    node.fy = event.y;
    simulation.alpha(1);
    simulation.restart();
  }
);

//creating lines and varible the thickness
const lines = svg
  .selectAll('line')
  .data(links)
  .enter()
  .append('line')
  .attr('stroke', 'gray')
  .attr(
    'stroke-width',
    (link) => link.thickness || 1
  );

//realtionship between the nodes are defined as linklabels
const labels = svg
  .selectAll('.link-label')
  .data(links)
  .enter()
  .append('text')
  .attr('class', 'link-label')
  .attr('text-anchor', 'middle')
	.style('font-weight', 'bold')
  .attr('dy', -5)
  .attr('dx', -5)
  .text((link) => link.relationship);

// const images = svg
//   .selectAll('image')
//   .data(nodes)
//   .enter()
//   .append('image')
//   .attr('xlink:href', (node) => node.image)
//   .attr('x', (node) => node.x - node.size / 2)
//   .attr('y', (node) => node.y - node.size / 2)
//   .attr('width', (node) => node.size)
//   .attr('height', (node) => node.size)
//   .attr('clip-path', `circle(${defaultNodeSize / 2}px)`);

//node structure is given as circles
const circles = svg
  .selectAll('circle')
  .data(nodes)
  .enter() //ex
  .append('circle')
  .attr('fill', (node) => node.color || 'gray')
  .attr('r', (node) => defaultNodeSize)
  .call(dragInteraction);

//image element in svg with clip-path to palce it centre the circle
const images = svg
  .selectAll('image')
  .data(nodes)
  .enter()
  .append('image')
  .attr('xlink:href', (node) => node.image)
  .attr('x', (node) => node.x - (node.size * 0.7) / 2)  // Adjust x position to center the image
  .attr('y', (node) => node.y - (node.size * 0.7) / 2)  // Adjust y position to center the image
  .attr('width', (node) => node.size * 0.7)  // Adjust width to 70% of node size
  .attr('height', (node) => node.size * 0.7)  // Adjust height to 70% of node size
  .call(dragInteraction);

// images
//   .append('clipPath')
//   .attr('id', (node, i) => `clip-${i}`)
//   .append('circle')
//   .attr('r', (node) => node.size / 2)
//   .attr('cx', (node) => node.size / 2)
//   .attr('cy', (node) => node.size / 2);

// images
//   .attr(
//     'clip-path',
//     (node, i) => `url(#clip-${i})`
//   )
//   .append('circle')
//   .attr('r', (node) => node.size / 2)
//   .attr('fill', 'none')
//   .attr('stroke', 'gray');

const text = svg
  .selectAll('.node-label')
  .data(nodes)
  .enter()
  .append('text')
  .attr('class', 'node-label')
  .attr('text-anchor', 'middle')
  .attr('alignment-baseline', 'middle')
  .style('pointer-events', 'none')
  .style('font-weight', 'bold')
  .style('font-family', 'Arial')
  .style('font-size', (node) =>
    Math.min(node.size / 3, 18)
  ) // Adjust the division and maximum font size as needed
  .text((node) => node.id)
  .attr('x', (node) => node.x)
  .attr('y', (node) => node.y);

const subtext = svg
  .selectAll('.node-sublabel')
  .data(nodes)
  .enter()
  .append('text')
  .attr('class', 'node-sublabel')
  .attr('text-anchor', 'middle')
  .attr('alignment-baseline', 'middle')
  .style('pointer-events', 'none')
  .style('font-size', '12px')
  .style('font-family', 'Arial')
  .attr('x', (node) => node.x)
  .attr('y', (node) => node.y)
  .text((node) => node.designation);

//simulation
simulation.on('tick', () => {
  
  circles
    .attr('cx', (node) => node.x)
    .attr('cy', (node) => node.y);
  text
    .attr('x', (node) => node.x)
    .attr(
      'y',
      (node) =>
        node.y + node.size / 2 +textoffset
    )
    .style('font-size', (node) =>
      Math.min(node.size / 1.5, 1000)
    ); // Adjust the division and maximum font size as needed

  subtext
    .attr('x', (node) => node.x)
    .attr(
      'y',
      (node) =>
        node.y +
        node.size / 2 + subtextOffset
    )
    .style('font-size', (node) =>
      Math.min(node.size / 3, 1000)
    ); // Adjust the division and maximum font size as needed

  lines
    .attr('x1', (link) => link.source.x)
    .attr('y1', (link) => link.source.y)
    .attr('x2', (link) => link.target.x)
    .attr('y2', (link) => link.target.y)
    .attr(
      'stroke-width',
      (link) => link.thickness || 1
    );

  labels
    .attr(
      'x',
      (link) =>
        (link.source.x + link.target.x) / 2
    )
    .attr(
      'y',
      (link) =>
        (link.source.y + link.target.y) / 2
    );
  images
    .attr('x', (node) => node.x - (node.size *imageOffset) / 2)  // Adjust x position to center the image
    .attr('y', (node) => node.y - (node.size *imageOffset) / 2)  // Adjust y position to center the image
    .attr('width', (node) => node.size *imageOffset)  // Adjust width to 70% of node size
    .attr('height', (node) => node.size *imageOffset);  // Adjust height to 70% of node size

});