(function (d3) {
  'use strict';

  // Generated with https://paletton.com/#uid=75x0u0kigkU8ZuBdTpdmbh6rjc7
  const colors = [
    ['#9D4452', '#E6A6B0', '#BE6B78', '#812836', '#5B0D1A'],
    ['#A76C48', '#F4CAAF', '#C99372', '#884E2A', '#602E0E'],
    ['#2E6B5E', '#719D93', '#498175', '#1B584A', '#093E32'],
    ['#538E3D', '#A6D096', '#75AC61', '#3A7424', '#1F520C'],
    ['#9D4452', '#E6A6B0', '#BE6B78', '#812836', '#5B0D1A'],
    ['#A76C48', '#F4CAAF', '#C99372', '#884E2A', '#602E0E'],
    ['#2E6B5E', '#719D93', '#498175', '#1B584A', '#093E32'],
    ['#538E3D', '#A6D096', '#75AC61', '#3A7424', '#1F520C'],
    ['#9D4452', '#E6A6B0', '#BE6B78', '#812836', '#5B0D1A'],
    ['#A76C48', '#F4CAAF', '#C99372', '#884E2A', '#602E0E'],
    ['#2E6B5E', '#719D93', '#498175', '#1B584A', '#093E32'],
    ['#538E3D', '#A6D096', '#75AC61', '#3A7424', '#1F520C'],
    ['#9D4452', '#E6A6B0', '#BE6B78', '#812836', '#5B0D1A'],
    ['#A76C48', '#F4CAAF', '#C99372', '#884E2A', '#602E0E'],
    ['#2E6B5E', '#719D93', '#498175', '#1B584A', '#093E32'],
    ['#538E3D', '#A6D096', '#75AC61', '#3A7424', '#1F520C'],
    ['#9D4452', '#E6A6B0', '#BE6B78', '#812836', '#5B0D1A'],
    ['#A76C48', '#F4CAAF', '#C99372', '#884E2A', '#602E0E'],
    ['#2E6B5E', '#719D93', '#498175', '#1B584A', '#093E32'],
    ['#538E3D', '#A6D096', '#75AC61', '#3A7424', '#1F520C'],
    ['#9D4452', '#E6A6B0', '#BE6B78', '#812836', '#5B0D1A'],
    ['#A76C48', '#F4CAAF', '#C99372', '#884E2A', '#602E0E'],
    ['#2E6B5E', '#719D93', '#498175', '#1B584A', '#093E32'],
    ['#538E3D', '#A6D096', '#75AC61', '#3A7424', '#1F520C'],
    ['#9D4452', '#E6A6B0', '#BE6B78', '#812836', '#5B0D1A'],
    ['#A76C48', '#F4CAAF', '#C99372', '#884E2A', '#602E0E'],
    ['#2E6B5E', '#719D93', '#498175', '#1B584A', '#093E32'],
    ['#538E3D', '#A6D096', '#75AC61', '#3A7424', '#1F520C'],
  ];

  const name1 = {id:'Name1', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name2 = {id:'Name2', image: "https://tse1.mm.bing.net/th?id=OIP.noXt7512Uyo2hOKMweAt_wHaHJ&pid=Api&P=0&h=180", designation:"tag" };
  const name3 = {id:'Name3',image: "https://tse1.mm.bing.net/th?id=OIP.noXt7512Uyo2hOKMweAt_wHaHJ&pid=Api&P=0&h=180", designation:"tag"};
  const name4 = {id:'Name4', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name5 = {id:'Name5', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name6 = {id:'Name6', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name7 = {id:'Name7', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name8 = {id:'Name8', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name9 = {id:'Name9', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name10 = {id:'Name10', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name11= {id:'Name11', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name12= {id:'Name12', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name13= {id:'Name13', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name14= {id:'Name14', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name15= {id:'Name15', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name16= {id:'Name16', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name17= {id:'Name17', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name18= {id:'Name18', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name19= {id:'Name19', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name20 = {id:'Name20', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name21 = {id:'Name21', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name22= {id:'Name22', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name23= {id:'Name23', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name24= {id:'Name24', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};
  const name25= {id:'Name25', image: "https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png" , designation:"tag"};

  const nodes = [];
  const links = [];

  let MAIN_NODE_SIZE = 50;
  let CHILD_NODE_SIZE = 80;
  const MAIN_NODE_DISTANCE = 90;
  // const LEAF_NODE_DISTANCE = 30;
  const MANY_BODY_STRENGTH = -20;
  const textoffset= 70; 
  const subtextOffset= 90; 
  const imageOffset= 1.9;

  let i =0;

  const addMainNode = (node, size= MAIN_NODE_SIZE) => {
    node.size = MAIN_NODE_SIZE;
    node.color = colors[i++][1];

    nodes.push(node);
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



  addMainNode(name1);
  addMainNode(name2);
  addMainNode(name3);
  addMainNode(name4);
  addMainNode(name5);
  addMainNode(name6);
  addMainNode(name7);
  addMainNode(name8);
  addMainNode(name9);
  addMainNode(name10);
  addMainNode(name11);
  addMainNode(name12);
  addMainNode(name13);
  addMainNode(name14);
  addMainNode(name15);
  addMainNode(name16);
  addMainNode(name17);
  addMainNode(name18);
  addMainNode(name19);
  addMainNode(name20);
  addMainNode(name21);
  addMainNode(name22);
  addMainNode(name23);
  addMainNode(name24);
  addMainNode(name25);


  //connection with name 1 as source
  connectMainNodes(name1, name2, "Went to the same College");
  connectMainNodes(name1, name5, "Worked togther in the past");
  connectMainNodes(name1, name9, "Worked togther in the past");
  connectMainNodes(name1, name6, "Worked togther in the past");
  connectMainNodes(name1, name3, "Worked togther in the past");
  connectMainNodes(name1, name7, "Worked togther in the past");
  connectMainNodes(name1, name10, "Worked togther in the past");
  connectMainNodes(name1, name11, "Referred to join Unislink");
  connectMainNodes(name1, name23, "HR Help for recruitment");



  //connection with name2 as source
  connectMainNodes(name2, name4, "Worked togther in the past");
  connectMainNodes(name2, name12, "Referred to Join Unislink");
  connectMainNodes(name2, name13, "Worked togther in the past");
  connectMainNodes(name2, name14, "Referred to Join Unislink");
  connectMainNodes(name2, name15, "Referred to Join Unislink");


   //connections with name3 as source
  connectMainNodes(name3, name16, "Referred to Join Unislink");
  connectMainNodes(name3, name6, "Worked togther in the past");
  connectMainNodes(name3, name7, "Worked togther in the past");
  connectMainNodes(name3, name10, "Worked togther in the past");


  //connections with name4 as source
  connectMainNodes(name4, name17, "Referred to Join Unislink");

  //connections with  name5 as source
  connectMainNodes(name5, name18, "Referred to Join Unislink");
  connectMainNodes(name5, name9, "Worked togther in the past");
  connectMainNodes(name5, name19, "Worked togther in the past");
  connectMainNodes(name5, name20, "Referred to Join Unislink");
  connectMainNodes(name5, name24, "Referred to Join Unislink");
  connectMainNodes(name5, name25, "Referred to Join Unislink");

  //connections with name6 as source
  connectMainNodes(name6, name7, "Worked togther in the past");
  connectMainNodes(name6, name10, "Worked togther in the past");

  //connections with name7 as source
  connectMainNodes(name7, name10, "Worked togther in the past");

  //connections with name8 as source
  connectMainNodes(name8, name7, "Worked togther in the past");
  connectMainNodes(name8, name10, "Worked togther in the past");
  connectMainNodes(name8, name6, "Worked togther in the past");

  //connections with name23 as source
  connectMainNodes(name23, name22, "Love at first sight");
  connectMainNodes(name23, name21, "Love at first sight");


  const nodeSizes = {
  	Name1:80,
    Name2:80,
    Name3:80,
    Name4:80,
    Name5:80,
    Name6:80,
    Name7:80,
    Name8:80,
    Name9:80,
    Name10:80,
    Name11:80,
    Name12:80,
    Name13:80,
    Name14:80,
    Name15:80,
    Name16:80,
    Name17:80,
    Name18:80,
    Name19:80,
    Name20:80,
    Name21:80,
    Name22:80,
    Name23:80,
    Name24:80,
    Name25:80,
    Name26:80,
    Name27:80,
  };


  const defaultNodeSize = CHILD_NODE_SIZE;




  // Name1	Gnana
  // Name2	Saravana
  // Name3	Pramesh
  // Name4	Baskar
  // Name5	Guru
  // Name6	Srividhya
  // Name7	Muthu
  // Name8	Sujitha
  // Name9	Geetha
  // Name10	Hama
  // Name11	Santhosh
  // Name12	Kowsalya
  // Name13	Venkatesh
  // Name14	Krishna
  // Name15	Ragul
  // Name16	Dhanasekari
  // Name17	Aishwarya
  // Name18	Durga
  // Name19	Pravin
  // Name20	Dalton
  // Name21	Selva
  // Name22	Vignesh
  // Name23	Jhansi
  // Name24 Kaneesh
  // Name25 Hari




  // const artsWeb = { id: 'Arts Web' };
  // addMainNode(artsWeb);
  // assembleChildNode(artsWeb, 'Community Vision');
  // assembleChildNode(artsWeb, 'Silicon Valley Creates');

  //svg needs
  const svg = d3.select('#container');
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  //initail center
  const initialX = window.innerWidth / 2; // Set initial X position to the center of the screen
  const initialY = window.innerHeight / 2; // Set initial Y position to the center of the screen


  //zoom functions
  const zoomBehavior = d3.zoom().on('zoom', zoomed);

  svg.call(zoomBehavior);

  function zoomed(event) {
    svg.attr('transform', event.transform);
  }

  //for simulation
  const simulation = d3.forceSimulation(nodes)
    .force(
      'charge',
      d3.forceManyBody().strength(MANY_BODY_STRENGTH)
    )
    .force(
      'link',
      d3.forceLink(links).distance(
        (link) => link.distance
      )
    ) //ex
    .force('center', d3.forceCenter(initialX, initialY));




  //for dragging
  const dragInteraction = d3.drag().on(
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
    .attr(
      'r',
      (node) =>
        nodeSizes[node.id] || defaultNodeSize
    )
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

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImNvbG9ycy5qcyIsInRlYW1fZGF0YS5qcyIsImRhdGEuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgd2l0aCBodHRwczovL3BhbGV0dG9uLmNvbS8jdWlkPTc1eDB1MGtpZ2tVOFp1QmRUcGRtYmg2cmpjN1xuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFtcbiAgWycjOUQ0NDUyJywgJyNFNkE2QjAnLCAnI0JFNkI3OCcsICcjODEyODM2JywgJyM1QjBEMUEnXSxcbiAgWycjQTc2QzQ4JywgJyNGNENBQUYnLCAnI0M5OTM3MicsICcjODg0RTJBJywgJyM2MDJFMEUnXSxcbiAgWycjMkU2QjVFJywgJyM3MTlEOTMnLCAnIzQ5ODE3NScsICcjMUI1ODRBJywgJyMwOTNFMzInXSxcbiAgWycjNTM4RTNEJywgJyNBNkQwOTYnLCAnIzc1QUM2MScsICcjM0E3NDI0JywgJyMxRjUyMEMnXSxcbiAgWycjOUQ0NDUyJywgJyNFNkE2QjAnLCAnI0JFNkI3OCcsICcjODEyODM2JywgJyM1QjBEMUEnXSxcbiAgWycjQTc2QzQ4JywgJyNGNENBQUYnLCAnI0M5OTM3MicsICcjODg0RTJBJywgJyM2MDJFMEUnXSxcbiAgWycjMkU2QjVFJywgJyM3MTlEOTMnLCAnIzQ5ODE3NScsICcjMUI1ODRBJywgJyMwOTNFMzInXSxcbiAgWycjNTM4RTNEJywgJyNBNkQwOTYnLCAnIzc1QUM2MScsICcjM0E3NDI0JywgJyMxRjUyMEMnXSxcbiAgWycjOUQ0NDUyJywgJyNFNkE2QjAnLCAnI0JFNkI3OCcsICcjODEyODM2JywgJyM1QjBEMUEnXSxcbiAgWycjQTc2QzQ4JywgJyNGNENBQUYnLCAnI0M5OTM3MicsICcjODg0RTJBJywgJyM2MDJFMEUnXSxcbiAgWycjMkU2QjVFJywgJyM3MTlEOTMnLCAnIzQ5ODE3NScsICcjMUI1ODRBJywgJyMwOTNFMzInXSxcbiAgWycjNTM4RTNEJywgJyNBNkQwOTYnLCAnIzc1QUM2MScsICcjM0E3NDI0JywgJyMxRjUyMEMnXSxcbiAgWycjOUQ0NDUyJywgJyNFNkE2QjAnLCAnI0JFNkI3OCcsICcjODEyODM2JywgJyM1QjBEMUEnXSxcbiAgWycjQTc2QzQ4JywgJyNGNENBQUYnLCAnI0M5OTM3MicsICcjODg0RTJBJywgJyM2MDJFMEUnXSxcbiAgWycjMkU2QjVFJywgJyM3MTlEOTMnLCAnIzQ5ODE3NScsICcjMUI1ODRBJywgJyMwOTNFMzInXSxcbiAgWycjNTM4RTNEJywgJyNBNkQwOTYnLCAnIzc1QUM2MScsICcjM0E3NDI0JywgJyMxRjUyMEMnXSxcbiAgWycjOUQ0NDUyJywgJyNFNkE2QjAnLCAnI0JFNkI3OCcsICcjODEyODM2JywgJyM1QjBEMUEnXSxcbiAgWycjQTc2QzQ4JywgJyNGNENBQUYnLCAnI0M5OTM3MicsICcjODg0RTJBJywgJyM2MDJFMEUnXSxcbiAgWycjMkU2QjVFJywgJyM3MTlEOTMnLCAnIzQ5ODE3NScsICcjMUI1ODRBJywgJyMwOTNFMzInXSxcbiAgWycjNTM4RTNEJywgJyNBNkQwOTYnLCAnIzc1QUM2MScsICcjM0E3NDI0JywgJyMxRjUyMEMnXSxcbiAgWycjOUQ0NDUyJywgJyNFNkE2QjAnLCAnI0JFNkI3OCcsICcjODEyODM2JywgJyM1QjBEMUEnXSxcbiAgWycjQTc2QzQ4JywgJyNGNENBQUYnLCAnI0M5OTM3MicsICcjODg0RTJBJywgJyM2MDJFMEUnXSxcbiAgWycjMkU2QjVFJywgJyM3MTlEOTMnLCAnIzQ5ODE3NScsICcjMUI1ODRBJywgJyMwOTNFMzInXSxcbiAgWycjNTM4RTNEJywgJyNBNkQwOTYnLCAnIzc1QUM2MScsICcjM0E3NDI0JywgJyMxRjUyMEMnXSxcbiAgWycjOUQ0NDUyJywgJyNFNkE2QjAnLCAnI0JFNkI3OCcsICcjODEyODM2JywgJyM1QjBEMUEnXSxcbiAgWycjQTc2QzQ4JywgJyNGNENBQUYnLCAnI0M5OTM3MicsICcjODg0RTJBJywgJyM2MDJFMEUnXSxcbiAgWycjMkU2QjVFJywgJyM3MTlEOTMnLCAnIzQ5ODE3NScsICcjMUI1ODRBJywgJyMwOTNFMzInXSxcbiAgWycjNTM4RTNEJywgJyNBNkQwOTYnLCAnIzc1QUM2MScsICcjM0E3NDI0JywgJyMxRjUyMEMnXSxcbl07XG4iLCJleHBvcnQgY29uc3QgbmFtZTEgPSB7aWQ6J05hbWUxJywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG5leHBvcnQgY29uc3QgbmFtZTIgPSB7aWQ6J05hbWUyJywgaW1hZ2U6IFwiaHR0cHM6Ly90c2UxLm1tLmJpbmcubmV0L3RoP2lkPU9JUC5ub1h0NzUxMlV5bzJoT0tNd2VBdF93SGFISiZwaWQ9QXBpJlA9MCZoPTE4MFwiLCBkZXNpZ25hdGlvbjpcInRhZ1wiIH1cbmV4cG9ydCBjb25zdCBuYW1lMyA9IHtpZDonTmFtZTMnLGltYWdlOiBcImh0dHBzOi8vdHNlMS5tbS5iaW5nLm5ldC90aD9pZD1PSVAubm9YdDc1MTJVeW8yaE9LTXdlQXRfd0hhSEomcGlkPUFwaSZQPTAmaD0xODBcIiwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lNCA9IHtpZDonTmFtZTQnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lNSA9IHtpZDonTmFtZTUnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lNiA9IHtpZDonTmFtZTYnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lNyA9IHtpZDonTmFtZTcnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lOCA9IHtpZDonTmFtZTgnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lOSA9IHtpZDonTmFtZTknLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lMTAgPSB7aWQ6J05hbWUxMCcsIGltYWdlOiBcImh0dHBzOi8vaTEud3AuY29tL3d3dy5jb2ZmZWVuYW5jeS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAzL2NpcmNsZXN1bnNldDEucG5nXCIgLCBkZXNpZ25hdGlvbjpcInRhZ1wifVxuZXhwb3J0IGNvbnN0IG5hbWUxMT0ge2lkOidOYW1lMTEnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lMTI9IHtpZDonTmFtZTEyJywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG5leHBvcnQgY29uc3QgbmFtZTEzPSB7aWQ6J05hbWUxMycsIGltYWdlOiBcImh0dHBzOi8vaTEud3AuY29tL3d3dy5jb2ZmZWVuYW5jeS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAzL2NpcmNsZXN1bnNldDEucG5nXCIgLCBkZXNpZ25hdGlvbjpcInRhZ1wifVxuZXhwb3J0IGNvbnN0IG5hbWUxND0ge2lkOidOYW1lMTQnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lMTU9IHtpZDonTmFtZTE1JywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG5leHBvcnQgY29uc3QgbmFtZTE2PSB7aWQ6J05hbWUxNicsIGltYWdlOiBcImh0dHBzOi8vaTEud3AuY29tL3d3dy5jb2ZmZWVuYW5jeS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAzL2NpcmNsZXN1bnNldDEucG5nXCIgLCBkZXNpZ25hdGlvbjpcInRhZ1wifVxuZXhwb3J0IGNvbnN0IG5hbWUxNz0ge2lkOidOYW1lMTcnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lMTg9IHtpZDonTmFtZTE4JywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG5leHBvcnQgY29uc3QgbmFtZTE5PSB7aWQ6J05hbWUxOScsIGltYWdlOiBcImh0dHBzOi8vaTEud3AuY29tL3d3dy5jb2ZmZWVuYW5jeS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAzL2NpcmNsZXN1bnNldDEucG5nXCIgLCBkZXNpZ25hdGlvbjpcInRhZ1wifVxuZXhwb3J0IGNvbnN0IG5hbWUyMCA9IHtpZDonTmFtZTIwJywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG5leHBvcnQgY29uc3QgbmFtZTIxID0ge2lkOidOYW1lMjEnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lMjI9IHtpZDonTmFtZTIyJywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG5leHBvcnQgY29uc3QgbmFtZTIzPSB7aWQ6J05hbWUyMycsIGltYWdlOiBcImh0dHBzOi8vaTEud3AuY29tL3d3dy5jb2ZmZWVuYW5jeS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAzL2NpcmNsZXN1bnNldDEucG5nXCIgLCBkZXNpZ25hdGlvbjpcInRhZ1wifVxuZXhwb3J0IGNvbnN0IG5hbWUyND0ge2lkOidOYW1lMjQnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lMjU9IHtpZDonTmFtZTI1JywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG5leHBvcnQgY29uc3QgbmFtZTI2PSB7aWQ6J05hbWUyNicsIGltYWdlOiBcImh0dHBzOi8vaTEud3AuY29tL3d3dy5jb2ZmZWVuYW5jeS5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAzL2NpcmNsZXN1bnNldDEucG5nXCIgLCBkZXNpZ25hdGlvbjpcInRhZ1wifVxuZXhwb3J0IGNvbnN0IG5hbWUyNz0ge2lkOidOYW1lMjcnLCBpbWFnZTogXCJodHRwczovL2kxLndwLmNvbS93d3cuY29mZmVlbmFuY3kuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9jaXJjbGVzdW5zZXQxLnBuZ1wiICwgZGVzaWduYXRpb246XCJ0YWdcIn1cbmV4cG9ydCBjb25zdCBuYW1lMjg9IHtpZDonTmFtZTI4JywgaW1hZ2U6IFwiaHR0cHM6Ly9pMS53cC5jb20vd3d3LmNvZmZlZW5hbmN5LmNvbS93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDMvY2lyY2xlc3Vuc2V0MS5wbmdcIiAsIGRlc2lnbmF0aW9uOlwidGFnXCJ9XG4iLCJpbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQge1xubmFtZTEsXG5uYW1lMixcbm5hbWUzLFxubmFtZTQsXG5uYW1lNSxcbm5hbWU2LFxubmFtZTcsXG5uYW1lOCxcbm5hbWU5LFxubmFtZTEwLFxubmFtZTExLFxubmFtZTEyLFxubmFtZTEzLFxubmFtZTE0LFxubmFtZTE1LFxubmFtZTE2LFxubmFtZTE3LFxubmFtZTE4LFxubmFtZTE5LFxubmFtZTIwLFxubmFtZTIxLFxubmFtZTIyLFxubmFtZTIzLFxubmFtZTI0LFxubmFtZTI1LFxubmFtZTI2LFxubmFtZTI3LFxufSBmcm9tICcuL3RlYW1fZGF0YS5qcyc7XG5cbmV4cG9ydCBjb25zdCBub2RlcyA9IFtdO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gW107XG5cbmxldCBNQUlOX05PREVfU0laRSA9IDUwO1xubGV0IENISUxEX05PREVfU0laRSA9IDgwO1xuLy8gY29uc3QgTEVBRl9OT0RFX1NJWkUgPSA1O1xuY29uc3QgREVGQVVMVF9ESVNUQU5DRSA9IDIwO1xuY29uc3QgTUFJTl9OT0RFX0RJU1RBTkNFID0gOTA7XG4vLyBjb25zdCBMRUFGX05PREVfRElTVEFOQ0UgPSAzMDtcbmV4cG9ydCBjb25zdCBNQU5ZX0JPRFlfU1RSRU5HVEggPSAtMjA7XG5leHBvcnQgY29uc3QgdGV4dG9mZnNldD0gNzA7IFxuZXhwb3J0IGNvbnN0IHN1YnRleHRPZmZzZXQ9IDkwOyBcbmV4cG9ydCBjb25zdCBpbWFnZU9mZnNldD0gMS45O1xuXG5sZXQgaSA9MDtcblxuY29uc3QgYWRkTWFpbk5vZGUgPSAobm9kZSwgc2l6ZT0gTUFJTl9OT0RFX1NJWkUpID0+IHtcbiAgbm9kZS5zaXplID0gTUFJTl9OT0RFX1NJWkU7XG4gIG5vZGUuY29sb3IgPSBjb2xvcnNbaSsrXVsxXTtcblxuICBub2Rlcy5wdXNoKG5vZGUpO1xufTtcblxuY29uc3QgYWRkQ2hpbGROb2RlID0gKFxuICBwYXJlbnROb2RlLFxuICBjaGlsZE5vZGUsXG4gIHNpemUgPSBDSElMRF9OT0RFX1NJWkUsXG4gIGRpc3RhbmNlID0gREVGQVVMVF9ESVNUQU5DRSxcbiBcbikgPT4ge1xuICBjaGlsZE5vZGUuc2l6ZSA9IHNpemU7XG4gIGNoaWxkTm9kZS5jb2xvciA9IHBhcmVudE5vZGUuY29sb3I7XG4gIG5vZGVzLnB1c2goY2hpbGROb2RlKTtcblxuICBsaW5rcy5wdXNoKHtcbiAgICBzb3VyY2U6IHBhcmVudE5vZGUsXG4gICAgdGFyZ2V0OiBjaGlsZE5vZGUsXG4gICAgZGlzdGFuY2UsXG4gICAgY29sb3I6IHBhcmVudE5vZGUuY29sb3IsXG4gIH0pO1xufTtcblxuY29uc3QgYXNzZW1ibGVDaGlsZE5vZGUgPSAocGFyZW50Tm9kZSwgaWQpID0+IHtcbiAgY29uc3QgY2hpbGROb2RlID0geyBpZCwgaW1hZ2UgfTtcbiAgYWRkQ2hpbGROb2RlKHBhcmVudE5vZGUsIGNoaWxkTm9kZSk7XG59O1xuXG5jb25zdCBjb25uZWN0TWFpbk5vZGVzID0gKHNvdXJjZSwgdGFyZ2V0LCByZWxhdGlvbnNoaXBUZXh0LHRoaWNrbmVzcyA9IDEpID0+IHtcbiAgbGlua3MucHVzaCh7XG4gICAgc291cmNlLFxuICAgIHRhcmdldCxcbiAgICBkaXN0YW5jZTogTUFJTl9OT0RFX0RJU1RBTkNFLFxuICAgIGNvbG9yOiBzb3VyY2UuY29sb3IsXG4gICAgcmVsYXRpb25zaGlwOiByZWxhdGlvbnNoaXBUZXh0LFxuICAgIHRoaWNrbmVzcyxcbiAgfSk7XG59O1xuXG5cblxuYWRkTWFpbk5vZGUobmFtZTEpO1xuYWRkTWFpbk5vZGUobmFtZTIpO1xuYWRkTWFpbk5vZGUobmFtZTMpO1xuYWRkTWFpbk5vZGUobmFtZTQpO1xuYWRkTWFpbk5vZGUobmFtZTUpO1xuYWRkTWFpbk5vZGUobmFtZTYpO1xuYWRkTWFpbk5vZGUobmFtZTcpO1xuYWRkTWFpbk5vZGUobmFtZTgpO1xuYWRkTWFpbk5vZGUobmFtZTkpO1xuYWRkTWFpbk5vZGUobmFtZTEwKTtcbmFkZE1haW5Ob2RlKG5hbWUxMSk7XG5hZGRNYWluTm9kZShuYW1lMTIpO1xuYWRkTWFpbk5vZGUobmFtZTEzKTtcbmFkZE1haW5Ob2RlKG5hbWUxNCk7XG5hZGRNYWluTm9kZShuYW1lMTUpO1xuYWRkTWFpbk5vZGUobmFtZTE2KTtcbmFkZE1haW5Ob2RlKG5hbWUxNyk7XG5hZGRNYWluTm9kZShuYW1lMTgpO1xuYWRkTWFpbk5vZGUobmFtZTE5KTtcbmFkZE1haW5Ob2RlKG5hbWUyMCk7XG5hZGRNYWluTm9kZShuYW1lMjEpO1xuYWRkTWFpbk5vZGUobmFtZTIyKTtcbmFkZE1haW5Ob2RlKG5hbWUyMyk7XG5hZGRNYWluTm9kZShuYW1lMjQpO1xuYWRkTWFpbk5vZGUobmFtZTI1KTtcblxuXG4vL2Nvbm5lY3Rpb24gd2l0aCBuYW1lIDEgYXMgc291cmNlXG5jb25uZWN0TWFpbk5vZGVzKG5hbWUxLCBuYW1lMiwgXCJXZW50IHRvIHRoZSBzYW1lIENvbGxlZ2VcIik7XG5jb25uZWN0TWFpbk5vZGVzKG5hbWUxLCBuYW1lNSwgXCJXb3JrZWQgdG9ndGhlciBpbiB0aGUgcGFzdFwiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTEsIG5hbWU5LCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lMSwgbmFtZTYsIFwiV29ya2VkIHRvZ3RoZXIgaW4gdGhlIHBhc3RcIik7XG5jb25uZWN0TWFpbk5vZGVzKG5hbWUxLCBuYW1lMywgXCJXb3JrZWQgdG9ndGhlciBpbiB0aGUgcGFzdFwiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTEsIG5hbWU3LCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lMSwgbmFtZTEwLCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lMSwgbmFtZTExLCBcIlJlZmVycmVkIHRvIGpvaW4gVW5pc2xpbmtcIik7XG5jb25uZWN0TWFpbk5vZGVzKG5hbWUxLCBuYW1lMjMsIFwiSFIgSGVscCBmb3IgcmVjcnVpdG1lbnRcIik7XG5cblxuXG4vL2Nvbm5lY3Rpb24gd2l0aCBuYW1lMiBhcyBzb3VyY2VcbmNvbm5lY3RNYWluTm9kZXMobmFtZTIsIG5hbWU0LCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lMiwgbmFtZTEyLCBcIlJlZmVycmVkIHRvIEpvaW4gVW5pc2xpbmtcIik7XG5jb25uZWN0TWFpbk5vZGVzKG5hbWUyLCBuYW1lMTMsIFwiV29ya2VkIHRvZ3RoZXIgaW4gdGhlIHBhc3RcIik7XG5jb25uZWN0TWFpbk5vZGVzKG5hbWUyLCBuYW1lMTQsIFwiUmVmZXJyZWQgdG8gSm9pbiBVbmlzbGlua1wiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTIsIG5hbWUxNSwgXCJSZWZlcnJlZCB0byBKb2luIFVuaXNsaW5rXCIpO1xuXG5cbiAvL2Nvbm5lY3Rpb25zIHdpdGggbmFtZTMgYXMgc291cmNlXG5jb25uZWN0TWFpbk5vZGVzKG5hbWUzLCBuYW1lMTYsIFwiUmVmZXJyZWQgdG8gSm9pbiBVbmlzbGlua1wiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTMsIG5hbWU2LCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lMywgbmFtZTcsIFwiV29ya2VkIHRvZ3RoZXIgaW4gdGhlIHBhc3RcIik7XG5jb25uZWN0TWFpbk5vZGVzKG5hbWUzLCBuYW1lMTAsIFwiV29ya2VkIHRvZ3RoZXIgaW4gdGhlIHBhc3RcIik7XG5cblxuLy9jb25uZWN0aW9ucyB3aXRoIG5hbWU0IGFzIHNvdXJjZVxuY29ubmVjdE1haW5Ob2RlcyhuYW1lNCwgbmFtZTE3LCBcIlJlZmVycmVkIHRvIEpvaW4gVW5pc2xpbmtcIik7XG5cbi8vY29ubmVjdGlvbnMgd2l0aCAgbmFtZTUgYXMgc291cmNlXG5jb25uZWN0TWFpbk5vZGVzKG5hbWU1LCBuYW1lMTgsIFwiUmVmZXJyZWQgdG8gSm9pbiBVbmlzbGlua1wiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTUsIG5hbWU5LCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lNSwgbmFtZTE5LCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lNSwgbmFtZTIwLCBcIlJlZmVycmVkIHRvIEpvaW4gVW5pc2xpbmtcIik7XG5jb25uZWN0TWFpbk5vZGVzKG5hbWU1LCBuYW1lMjQsIFwiUmVmZXJyZWQgdG8gSm9pbiBVbmlzbGlua1wiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTUsIG5hbWUyNSwgXCJSZWZlcnJlZCB0byBKb2luIFVuaXNsaW5rXCIpO1xuXG4vL2Nvbm5lY3Rpb25zIHdpdGggbmFtZTYgYXMgc291cmNlXG5jb25uZWN0TWFpbk5vZGVzKG5hbWU2LCBuYW1lNywgXCJXb3JrZWQgdG9ndGhlciBpbiB0aGUgcGFzdFwiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTYsIG5hbWUxMCwgXCJXb3JrZWQgdG9ndGhlciBpbiB0aGUgcGFzdFwiKTtcblxuLy9jb25uZWN0aW9ucyB3aXRoIG5hbWU3IGFzIHNvdXJjZVxuY29ubmVjdE1haW5Ob2RlcyhuYW1lNywgbmFtZTEwLCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuXG4vL2Nvbm5lY3Rpb25zIHdpdGggbmFtZTggYXMgc291cmNlXG5jb25uZWN0TWFpbk5vZGVzKG5hbWU4LCBuYW1lNywgXCJXb3JrZWQgdG9ndGhlciBpbiB0aGUgcGFzdFwiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTgsIG5hbWUxMCwgXCJXb3JrZWQgdG9ndGhlciBpbiB0aGUgcGFzdFwiKTtcbmNvbm5lY3RNYWluTm9kZXMobmFtZTgsIG5hbWU2LCBcIldvcmtlZCB0b2d0aGVyIGluIHRoZSBwYXN0XCIpO1xuXG4vL2Nvbm5lY3Rpb25zIHdpdGggbmFtZTIzIGFzIHNvdXJjZVxuY29ubmVjdE1haW5Ob2RlcyhuYW1lMjMsIG5hbWUyMiwgXCJMb3ZlIGF0IGZpcnN0IHNpZ2h0XCIpO1xuY29ubmVjdE1haW5Ob2RlcyhuYW1lMjMsIG5hbWUyMSwgXCJMb3ZlIGF0IGZpcnN0IHNpZ2h0XCIpO1xuXG5cbmV4cG9ydCBjb25zdCBub2RlU2l6ZXMgPSB7XG5cdE5hbWUxOjgwLFxuICBOYW1lMjo4MCxcbiAgTmFtZTM6ODAsXG4gIE5hbWU0OjgwLFxuICBOYW1lNTo4MCxcbiAgTmFtZTY6ODAsXG4gIE5hbWU3OjgwLFxuICBOYW1lODo4MCxcbiAgTmFtZTk6ODAsXG4gIE5hbWUxMDo4MCxcbiAgTmFtZTExOjgwLFxuICBOYW1lMTI6ODAsXG4gIE5hbWUxMzo4MCxcbiAgTmFtZTE0OjgwLFxuICBOYW1lMTU6ODAsXG4gIE5hbWUxNjo4MCxcbiAgTmFtZTE3OjgwLFxuICBOYW1lMTg6ODAsXG4gIE5hbWUxOTo4MCxcbiAgTmFtZTIwOjgwLFxuICBOYW1lMjE6ODAsXG4gIE5hbWUyMjo4MCxcbiAgTmFtZTIzOjgwLFxuICBOYW1lMjQ6ODAsXG4gIE5hbWUyNTo4MCxcbiAgTmFtZTI2OjgwLFxuICBOYW1lMjc6ODAsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Tm9kZVNpemUgPSBDSElMRF9OT0RFX1NJWkU7XG5cblxuXG5cbi8vIE5hbWUxXHRHbmFuYVxuLy8gTmFtZTJcdFNhcmF2YW5hXG4vLyBOYW1lM1x0UHJhbWVzaFxuLy8gTmFtZTRcdEJhc2thclxuLy8gTmFtZTVcdEd1cnVcbi8vIE5hbWU2XHRTcml2aWRoeWFcbi8vIE5hbWU3XHRNdXRodVxuLy8gTmFtZThcdFN1aml0aGFcbi8vIE5hbWU5XHRHZWV0aGFcbi8vIE5hbWUxMFx0SGFtYVxuLy8gTmFtZTExXHRTYW50aG9zaFxuLy8gTmFtZTEyXHRLb3dzYWx5YVxuLy8gTmFtZTEzXHRWZW5rYXRlc2hcbi8vIE5hbWUxNFx0S3Jpc2huYVxuLy8gTmFtZTE1XHRSYWd1bFxuLy8gTmFtZTE2XHREaGFuYXNla2FyaVxuLy8gTmFtZTE3XHRBaXNod2FyeWFcbi8vIE5hbWUxOFx0RHVyZ2Fcbi8vIE5hbWUxOVx0UHJhdmluXG4vLyBOYW1lMjBcdERhbHRvblxuLy8gTmFtZTIxXHRTZWx2YVxuLy8gTmFtZTIyXHRWaWduZXNoXG4vLyBOYW1lMjNcdEpoYW5zaVxuLy8gTmFtZTI0IEthbmVlc2hcbi8vIE5hbWUyNSBIYXJpXG5cblxuXG5cbi8vIGNvbnN0IGFydHNXZWIgPSB7IGlkOiAnQXJ0cyBXZWInIH07XG4vLyBhZGRNYWluTm9kZShhcnRzV2ViKTtcbi8vIGFzc2VtYmxlQ2hpbGROb2RlKGFydHNXZWIsICdDb21tdW5pdHkgVmlzaW9uJyk7XG4vLyBhc3NlbWJsZUNoaWxkTm9kZShhcnRzV2ViLCAnU2lsaWNvbiBWYWxsZXkgQ3JlYXRlcycpO1xuXG4iLCJpbXBvcnQge1xuICBzZWxlY3QsXG4gIGZvcmNlU2ltdWxhdGlvbixcbiAgZm9yY2VNYW55Qm9keSxcbiAgZm9yY2VMaW5rLFxuICBmb3JjZUNlbnRlcixcbiAgZHJhZyxcbiAgem9vbSxcbiAgem9vbUlkZW50aXR5LFxufSBmcm9tICdkMyc7XG5cbmltcG9ydCB7XG4gIG5vZGVzLFxuICBsaW5rcyxcbiAgTUFOWV9CT0RZX1NUUkVOR1RILFxuICBub2RlU2l6ZXMsXG4gIGRlZmF1bHROb2RlU2l6ZSxcbiAgdGV4dG9mZnNldCxcbiAgc3VidGV4dE9mZnNldCxcbiAgaW1hZ2VPZmZzZXQsXG59IGZyb20gJy4vZGF0YSc7XG5cblxuXG4vL3N2ZyBuZWVkc1xuY29uc3Qgc3ZnID0gc2VsZWN0KCcjY29udGFpbmVyJyk7XG5jb25zdCB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKTtcbmNvbnN0IGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5jb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuY29uc3QgY2VudGVyWSA9IGhlaWdodCAvIDI7XG5cbi8vaW5pdGFpbCBjZW50ZXJcbmNvbnN0IGluaXRpYWxYID0gd2luZG93LmlubmVyV2lkdGggLyAyOyAvLyBTZXQgaW5pdGlhbCBYIHBvc2l0aW9uIHRvIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlblxuY29uc3QgaW5pdGlhbFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyOyAvLyBTZXQgaW5pdGlhbCBZIHBvc2l0aW9uIHRvIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlblxuXG5cbi8vem9vbSBmdW5jdGlvbnNcbmNvbnN0IHpvb21CZWhhdmlvciA9IHpvb20oKS5vbignem9vbScsIHpvb21lZCk7XG5cbnN2Zy5jYWxsKHpvb21CZWhhdmlvcik7XG5cbmZ1bmN0aW9uIHpvb21lZChldmVudCkge1xuICBzdmcuYXR0cigndHJhbnNmb3JtJywgZXZlbnQudHJhbnNmb3JtKTtcbn1cblxuLy9mb3Igc2ltdWxhdGlvblxuY29uc3Qgc2ltdWxhdGlvbiA9IGZvcmNlU2ltdWxhdGlvbihub2RlcylcbiAgLmZvcmNlKFxuICAgICdjaGFyZ2UnLFxuICAgIGZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aChNQU5ZX0JPRFlfU1RSRU5HVEgpXG4gIClcbiAgLmZvcmNlKFxuICAgICdsaW5rJyxcbiAgICBmb3JjZUxpbmsobGlua3MpLmRpc3RhbmNlKFxuICAgICAgKGxpbmspID0+IGxpbmsuZGlzdGFuY2VcbiAgICApXG4gICkgLy9leFxuICAuZm9yY2UoJ2NlbnRlcicsIGZvcmNlQ2VudGVyKGluaXRpYWxYLCBpbml0aWFsWSkpXG5cblxuXG5cbi8vZm9yIGRyYWdnaW5nXG5jb25zdCBkcmFnSW50ZXJhY3Rpb24gPSBkcmFnKCkub24oXG4gICdkcmFnJyxcbiAgKGV2ZW50LCBub2RlKSA9PiB7XG4gICAgbm9kZS5meCA9IGV2ZW50Lng7XG4gICAgbm9kZS5meSA9IGV2ZW50Lnk7XG4gICAgc2ltdWxhdGlvbi5hbHBoYSgxKTtcbiAgICBzaW11bGF0aW9uLnJlc3RhcnQoKTtcbiAgfVxuKTtcblxuLy9jcmVhdGluZyBsaW5lcyBhbmQgdmFyaWJsZSB0aGUgdGhpY2tuZXNzXG5jb25zdCBsaW5lcyA9IHN2Z1xuICAuc2VsZWN0QWxsKCdsaW5lJylcbiAgLmRhdGEobGlua3MpXG4gIC5lbnRlcigpXG4gIC5hcHBlbmQoJ2xpbmUnKVxuICAuYXR0cignc3Ryb2tlJywgJ2dyYXknKVxuICAuYXR0cihcbiAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAobGluaykgPT4gbGluay50aGlja25lc3MgfHwgMVxuICApO1xuXG4vL3JlYWx0aW9uc2hpcCBiZXR3ZWVuIHRoZSBub2RlcyBhcmUgZGVmaW5lZCBhcyBsaW5rbGFiZWxzXG5jb25zdCBsYWJlbHMgPSBzdmdcbiAgLnNlbGVjdEFsbCgnLmxpbmstbGFiZWwnKVxuICAuZGF0YShsaW5rcylcbiAgLmVudGVyKClcbiAgLmFwcGVuZCgndGV4dCcpXG4gIC5hdHRyKCdjbGFzcycsICdsaW5rLWxhYmVsJylcbiAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG5cdC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnYm9sZCcpXG4gIC5hdHRyKCdkeScsIC01KVxuICAuYXR0cignZHgnLCAtNSlcbiAgLnRleHQoKGxpbmspID0+IGxpbmsucmVsYXRpb25zaGlwKTtcblxuLy8gY29uc3QgaW1hZ2VzID0gc3ZnXG4vLyAgIC5zZWxlY3RBbGwoJ2ltYWdlJylcbi8vICAgLmRhdGEobm9kZXMpXG4vLyAgIC5lbnRlcigpXG4vLyAgIC5hcHBlbmQoJ2ltYWdlJylcbi8vICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAobm9kZSkgPT4gbm9kZS5pbWFnZSlcbi8vICAgLmF0dHIoJ3gnLCAobm9kZSkgPT4gbm9kZS54IC0gbm9kZS5zaXplIC8gMilcbi8vICAgLmF0dHIoJ3knLCAobm9kZSkgPT4gbm9kZS55IC0gbm9kZS5zaXplIC8gMilcbi8vICAgLmF0dHIoJ3dpZHRoJywgKG5vZGUpID0+IG5vZGUuc2l6ZSlcbi8vICAgLmF0dHIoJ2hlaWdodCcsIChub2RlKSA9PiBub2RlLnNpemUpXG4vLyAgIC5hdHRyKCdjbGlwLXBhdGgnLCBgY2lyY2xlKCR7ZGVmYXVsdE5vZGVTaXplIC8gMn1weClgKTtcblxuLy9ub2RlIHN0cnVjdHVyZSBpcyBnaXZlbiBhcyBjaXJjbGVzXG5jb25zdCBjaXJjbGVzID0gc3ZnXG4gIC5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gIC5kYXRhKG5vZGVzKVxuICAuZW50ZXIoKSAvL2V4XG4gIC5hcHBlbmQoJ2NpcmNsZScpXG4gIC5hdHRyKCdmaWxsJywgKG5vZGUpID0+IG5vZGUuY29sb3IgfHwgJ2dyYXknKVxuICAuYXR0cihcbiAgICAncicsXG4gICAgKG5vZGUpID0+XG4gICAgICBub2RlU2l6ZXNbbm9kZS5pZF0gfHwgZGVmYXVsdE5vZGVTaXplXG4gIClcbiAgLmNhbGwoZHJhZ0ludGVyYWN0aW9uKTtcblxuLy9pbWFnZSBlbGVtZW50IGluIHN2ZyB3aXRoIGNsaXAtcGF0aCB0byBwYWxjZSBpdCBjZW50cmUgdGhlIGNpcmNsZVxuY29uc3QgaW1hZ2VzID0gc3ZnXG4gIC5zZWxlY3RBbGwoJ2ltYWdlJylcbiAgLmRhdGEobm9kZXMpXG4gIC5lbnRlcigpXG4gIC5hcHBlbmQoJ2ltYWdlJylcbiAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAobm9kZSkgPT4gbm9kZS5pbWFnZSlcbiAgLmF0dHIoJ3gnLCAobm9kZSkgPT4gbm9kZS54IC0gKG5vZGUuc2l6ZSAqIDAuNykgLyAyKSAgLy8gQWRqdXN0IHggcG9zaXRpb24gdG8gY2VudGVyIHRoZSBpbWFnZVxuICAuYXR0cigneScsIChub2RlKSA9PiBub2RlLnkgLSAobm9kZS5zaXplICogMC43KSAvIDIpICAvLyBBZGp1c3QgeSBwb3NpdGlvbiB0byBjZW50ZXIgdGhlIGltYWdlXG4gIC5hdHRyKCd3aWR0aCcsIChub2RlKSA9PiBub2RlLnNpemUgKiAwLjcpICAvLyBBZGp1c3Qgd2lkdGggdG8gNzAlIG9mIG5vZGUgc2l6ZVxuICAuYXR0cignaGVpZ2h0JywgKG5vZGUpID0+IG5vZGUuc2l6ZSAqIDAuNykgIC8vIEFkanVzdCBoZWlnaHQgdG8gNzAlIG9mIG5vZGUgc2l6ZVxuICAuY2FsbChkcmFnSW50ZXJhY3Rpb24pO1xuXG4vLyBpbWFnZXNcbi8vICAgLmFwcGVuZCgnY2xpcFBhdGgnKVxuLy8gICAuYXR0cignaWQnLCAobm9kZSwgaSkgPT4gYGNsaXAtJHtpfWApXG4vLyAgIC5hcHBlbmQoJ2NpcmNsZScpXG4vLyAgIC5hdHRyKCdyJywgKG5vZGUpID0+IG5vZGUuc2l6ZSAvIDIpXG4vLyAgIC5hdHRyKCdjeCcsIChub2RlKSA9PiBub2RlLnNpemUgLyAyKVxuLy8gICAuYXR0cignY3knLCAobm9kZSkgPT4gbm9kZS5zaXplIC8gMik7XG5cbi8vIGltYWdlc1xuLy8gICAuYXR0cihcbi8vICAgICAnY2xpcC1wYXRoJyxcbi8vICAgICAobm9kZSwgaSkgPT4gYHVybCgjY2xpcC0ke2l9KWBcbi8vICAgKVxuLy8gICAuYXBwZW5kKCdjaXJjbGUnKVxuLy8gICAuYXR0cigncicsIChub2RlKSA9PiBub2RlLnNpemUgLyAyKVxuLy8gICAuYXR0cignZmlsbCcsICdub25lJylcbi8vICAgLmF0dHIoJ3N0cm9rZScsICdncmF5Jyk7XG5cbmNvbnN0IHRleHQgPSBzdmdcbiAgLnNlbGVjdEFsbCgnLm5vZGUtbGFiZWwnKVxuICAuZGF0YShub2RlcylcbiAgLmVudGVyKClcbiAgLmFwcGVuZCgndGV4dCcpXG4gIC5hdHRyKCdjbGFzcycsICdub2RlLWxhYmVsJylcbiAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcbiAgLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsICdub25lJylcbiAgLnN0eWxlKCdmb250LXdlaWdodCcsICdib2xkJylcbiAgLnN0eWxlKCdmb250LWZhbWlseScsICdBcmlhbCcpXG4gIC5zdHlsZSgnZm9udC1zaXplJywgKG5vZGUpID0+XG4gICAgTWF0aC5taW4obm9kZS5zaXplIC8gMywgMTgpXG4gICkgLy8gQWRqdXN0IHRoZSBkaXZpc2lvbiBhbmQgbWF4aW11bSBmb250IHNpemUgYXMgbmVlZGVkXG4gIC50ZXh0KChub2RlKSA9PiBub2RlLmlkKVxuICAuYXR0cigneCcsIChub2RlKSA9PiBub2RlLngpXG4gIC5hdHRyKCd5JywgKG5vZGUpID0+IG5vZGUueSk7XG5cbmNvbnN0IHN1YnRleHQgPSBzdmdcbiAgLnNlbGVjdEFsbCgnLm5vZGUtc3VibGFiZWwnKVxuICAuZGF0YShub2RlcylcbiAgLmVudGVyKClcbiAgLmFwcGVuZCgndGV4dCcpXG4gIC5hdHRyKCdjbGFzcycsICdub2RlLXN1YmxhYmVsJylcbiAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcbiAgLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsICdub25lJylcbiAgLnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXG4gIC5zdHlsZSgnZm9udC1mYW1pbHknLCAnQXJpYWwnKVxuICAuYXR0cigneCcsIChub2RlKSA9PiBub2RlLngpXG4gIC5hdHRyKCd5JywgKG5vZGUpID0+IG5vZGUueSlcbiAgLnRleHQoKG5vZGUpID0+IG5vZGUuZGVzaWduYXRpb24pO1xuXG4vL3NpbXVsYXRpb25cbnNpbXVsYXRpb24ub24oJ3RpY2snLCAoKSA9PiB7XG4gIFxuICBjaXJjbGVzXG4gICAgLmF0dHIoJ2N4JywgKG5vZGUpID0+IG5vZGUueClcbiAgICAuYXR0cignY3knLCAobm9kZSkgPT4gbm9kZS55KTtcbiAgdGV4dFxuICAgIC5hdHRyKCd4JywgKG5vZGUpID0+IG5vZGUueClcbiAgICAuYXR0cihcbiAgICAgICd5JyxcbiAgICAgIChub2RlKSA9PlxuICAgICAgICBub2RlLnkgKyBub2RlLnNpemUgLyAyICt0ZXh0b2Zmc2V0XG4gICAgKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgKG5vZGUpID0+XG4gICAgICBNYXRoLm1pbihub2RlLnNpemUgLyAxLjUsIDEwMDApXG4gICAgKTsgLy8gQWRqdXN0IHRoZSBkaXZpc2lvbiBhbmQgbWF4aW11bSBmb250IHNpemUgYXMgbmVlZGVkXG5cbiAgc3VidGV4dFxuICAgIC5hdHRyKCd4JywgKG5vZGUpID0+IG5vZGUueClcbiAgICAuYXR0cihcbiAgICAgICd5JyxcbiAgICAgIChub2RlKSA9PlxuICAgICAgICBub2RlLnkgK1xuICAgICAgICBub2RlLnNpemUgLyAyICsgc3VidGV4dE9mZnNldFxuICAgIClcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIChub2RlKSA9PlxuICAgICAgTWF0aC5taW4obm9kZS5zaXplIC8gMywgMTAwMClcbiAgICApOyAvLyBBZGp1c3QgdGhlIGRpdmlzaW9uIGFuZCBtYXhpbXVtIGZvbnQgc2l6ZSBhcyBuZWVkZWRcblxuICBsaW5lc1xuICAgIC5hdHRyKCd4MScsIChsaW5rKSA9PiBsaW5rLnNvdXJjZS54KVxuICAgIC5hdHRyKCd5MScsIChsaW5rKSA9PiBsaW5rLnNvdXJjZS55KVxuICAgIC5hdHRyKCd4MicsIChsaW5rKSA9PiBsaW5rLnRhcmdldC54KVxuICAgIC5hdHRyKCd5MicsIChsaW5rKSA9PiBsaW5rLnRhcmdldC55KVxuICAgIC5hdHRyKFxuICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAobGluaykgPT4gbGluay50aGlja25lc3MgfHwgMVxuICAgICk7XG5cbiAgbGFiZWxzXG4gICAgLmF0dHIoXG4gICAgICAneCcsXG4gICAgICAobGluaykgPT5cbiAgICAgICAgKGxpbmsuc291cmNlLnggKyBsaW5rLnRhcmdldC54KSAvIDJcbiAgICApXG4gICAgLmF0dHIoXG4gICAgICAneScsXG4gICAgICAobGluaykgPT5cbiAgICAgICAgKGxpbmsuc291cmNlLnkgKyBsaW5rLnRhcmdldC55KSAvIDJcbiAgICApO1xuICBpbWFnZXNcbiAgICAuYXR0cigneCcsIChub2RlKSA9PiBub2RlLnggLSAobm9kZS5zaXplICppbWFnZU9mZnNldCkgLyAyKSAgLy8gQWRqdXN0IHggcG9zaXRpb24gdG8gY2VudGVyIHRoZSBpbWFnZVxuICAgIC5hdHRyKCd5JywgKG5vZGUpID0+IG5vZGUueSAtIChub2RlLnNpemUgKmltYWdlT2Zmc2V0KSAvIDIpICAvLyBBZGp1c3QgeSBwb3NpdGlvbiB0byBjZW50ZXIgdGhlIGltYWdlXG4gICAgLmF0dHIoJ3dpZHRoJywgKG5vZGUpID0+IG5vZGUuc2l6ZSAqaW1hZ2VPZmZzZXQpICAvLyBBZGp1c3Qgd2lkdGggdG8gNzAlIG9mIG5vZGUgc2l6ZVxuICAgIC5hdHRyKCdoZWlnaHQnLCAobm9kZSkgPT4gbm9kZS5zaXplICppbWFnZU9mZnNldCk7ICAvLyBBZGp1c3QgaGVpZ2h0IHRvIDcwJSBvZiBub2RlIHNpemVcblxufSk7XG4iXSwibmFtZXMiOlsic2VsZWN0Iiwiem9vbSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUxpbmsiLCJmb3JjZUNlbnRlciIsImRyYWciXSwibWFwcGluZ3MiOiI7OztFQUFBO0VBQ08sTUFBTSxNQUFNLEdBQUc7RUFDdEIsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFDekQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFT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QUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLDhGQUE4RixHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUM7RUFDdEosTUFBTSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSw4RkFBOEYsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFDO0VBQ3RKLE1BQU0sTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsOEZBQThGLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBQztFQUN0SixNQUFNLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLDhGQUE4RixHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUM7RUFDdEosTUFBTSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSw4RkFBOEYsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFDO0VBQ3RKLE1BQU0sTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsOEZBQThGLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBQztFQUN2SixNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLDhGQUE4RixHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUM7RUFDdkosTUFBTSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSw4RkFBOEYsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFDO0VBQ3RKLE1BQU0sTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsOEZBQThGLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBQztFQUN0SixNQUFNLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLDhGQUE4RixHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUM7RUFDdEosTUFBTSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxF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RUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0VBQzdELGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixDQUFDLENBQUM7RUFDN0QsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0VBQzdELGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLDRCQUE0QixDQUFDLENBQUM7RUFDOUQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0VBQzdELGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUMzRDtBQUNBO0FBQ0E7RUFDQTtFQUNBLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLDJCQUEyQixDQUFDLENBQUM7RUFDN0QsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0VBQzlELGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLDJCQUEyQixDQUFDLENBQUM7QUFDN0Q7QUFDQTtFQUNBO0VBQ0EsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0VBQzdELGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixDQUFDLENBQUM7RUFDN0QsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0FBQzlEO0FBQ0E7RUFDQTtFQUNBLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQUM3RDtFQUNBO0VBQ0EsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0VBQzdELGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLDRCQUE0QixDQUFDLENBQUM7RUFDOUQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0VBQzdELGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLDJCQUEyQixDQUFDLENBQUM7QUFDN0Q7RUFDQTtFQUNBLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztFQUM3RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLDRCQUE0QixDQUFDLENBQUM7QUFDOUQ7RUFDQTtFQUNBLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQUM5RDtFQUNBO0VBQ0EsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0VBQzdELGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztFQUM5RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixDQUFDLENBQUM7QUFDN0Q7RUFDQTtFQUNBLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUscUJBQXFCLENBQUMsQ0FBQztFQUN4RCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFDeEQ7QUFDQTtFQUNPLE1BQU0sU0FBUyxHQUFHO0VBQ3pCLENBQUMsS0FBSyxDQUFDLEVBQUU7RUFDVCxFQUFFLEtBQUssQ0FBQyxFQUFFO0VBQ1YsRUFBRSxLQUFLLENBQUMsRUFBRTtFQUNWLEVBQUUsS0FBSyxDQUFDLEVBQUU7RUFDVixFQUFFLEtBQUssQ0FBQyxFQUFFO0VBQ1YsRUFBRSxLQUFLLENBQUMsRUFBRTtFQUNWLEVBQUUsS0FBSyxDQUFDLEVBQUU7RUFDVixFQUFFLEtBQUssQ0FBQyxFQUFFO0VBQ1YsRUFBRSxLQUFLLENBQUMsRUFBRTtFQUNWLEVBQUUsTUFBTSxDQUFDLEVBQUU7RUFDWCxFQUFFLE1BQU0sQ0FBQyxFQUFFO0VBQ1gsRUFBRSxNQUFNLENBQUMsRUFBRTtFQUNYLEVBQUUsTUFBTSxDQUFDLEVBQUU7RUFDWCxFQUFFLE1BQU0sQ0FBQyxFQUFFO0VBQ1gsRUFBRSxNQUFNLENBQUMsRUFBRTtFQUNYLEVBQUUsTUFBTSxDQUFDLEVBQUU7RUFDWCxFQUFFLE1BQU0sQ0FBQyxFQUFFO0VBQ1gsRUFBRSxNQUFNLENBQUMsRUFBRTtFQUNYLEVBQUUsTUFBTSxDQUFDLEVBQUU7RUFDWCxFQUFFLE1BQU0sQ0FBQyxFQUFFO0VBQ1gsRUFBRSxNQUFNLENBQUMsRUFBRTtFQUNYLEVBQUUsTUFBTSxDQUFDLEVBQUU7RUFDWCxFQUFFLE1BQU0sQ0FBQyxFQUFFO0VBQ1gsRUFBRSxNQUFNLENBQUMsRUFBRTtFQUNYLEVBQUUsTUFBTSxDQUFDLEVBQUU7RUFDWCxFQUFFLE1BQU0sQ0FBQyxFQUFFO0VBQ1gsRUFBRSxNQUFNLENBQUMsRUFBRTtFQUNYLENBQUMsQ0FBQztBQUNGO0FBQ0E7RUFDTyxNQUFNLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7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