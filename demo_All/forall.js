var queryInput = new Vue({
  el:'#queryInput',
  data:{
    query:''
  },
  methods:{
    sendQuery: function(event){
      alert('Searching for '+this.query)
    }
  }
});

var articleData = {
  title:'TITLE',
  date:'2017-03-30',
  contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}

var article = new Vue({
  el:'#article',
  data: articleData
});

document.addEventListener('DOMContentLoaded', function() {
    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),

        elements: {
                    nodes: [{
                            data: {
                                id: 'B',
                                name: "S.Korea, Russia to begin preparations for FTA negotiations: Moon",
                                topic:['moon']
                            }
                        },
                        {
                            data: {
                                id: 'k',
                                name: "Moon to discuss economic cooperation, denuclearization with Putin",
                                parent: 'B',
                                topic:['moon'],
                                date:'2017',
                                contents:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor'
                            }
                        },
                        {
                            data: {
                                id: 'a',
                                name: "Korea to take on Mexico in crucial 2nd match",
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                id: 'b',
                                name: "S.Korea fall to Mexico 2-1 for 2nd straight loss",
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                id: 'c',
                                name: "Korea hasn't scored a goal, Son Heung-min has",
                                topic:['soccer','moon'],
                                date:'2017',
                                contents:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor'
                            }
                        },
                        {
                            data: {
                                id: 'd',
                                name: "S.Korea, Russia to begin preparations for FTA negotiations: Moon",
                                parent: 'B',
                                topic:['moon']
                            }
                        },
                        {
                            data: {
                                id: 'e',
                                name: "President Moon down with flu",
                                topic:['moon']
                            }
                        },
                        {
                            data: {
                                id: 'A',
                                name: "S.Korea stun Germany on way out of World Cup",
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                id: 'f',
                                name: "Preparing for a miracle, S.Korea polish up tactics for match vs. Germany",
                                parent: 'A',
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                id: 'g',
                                name: "S.Korea stun Germany on way out of World Cup",
                                parent: 'A',
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                id: 'h',
                                name: "S.Korea avoid dishonorable records with win over Germany",
                                parent: 'A',
                                topic:['soccer']
                            }
                        }
                    ],
                    edges: [{
                            data: {
                                source: 'a',
                                target: 'b',
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                source: 'b',
                                target: 'c',
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                source: 'd',
                                target: 'c',
                                topic:['moon']
                            }
                        },
                        {
                            data: {
                                source: 'c',
                                target: 'e',
                                topic:['moon']
                            }
                        },
                        {
                            data: {
                                source: 'c',
                                target: 'f',
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                source: 'f',
                                target: 'g',
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                source: 'g',
                                target: 'h',
                                topic:['soccer']
                            }
                        },
                        {
                            data: {
                                source: 'k',
                                target: 'd',
                                topic:['moon']
                            }
                        }
                    ]
                },

        ready: function() {
            var api = this.expandCollapse({
                layoutBy: {
                    name: "cose-bilkent",
                    animate: "end",
                    randomize: false,
                    fit: true
                },
                fisheye: true,
                animate: false,
                undoable: false
            });
            api.collapseAll();
            window.cy = this;
            window.cy.elements().addClass('short');
        },


        style: [
            {
                selector: 'node.short',
                style: {
                    'background-color': '#444242',
                    'label': 'data(name)',
                    'text-opacity': 0.5,
                    'text-valign': 'center',
                    'text-halign': 'right',
                    'text-wrap': 'ellipsis',
                    'text-max-width': '150px'
                }
            },
            {
                selector: 'node.long',
                style: {
                    'background-color': '#444242',
                    'label': 'data(name)',
                    'text-opacity': 0.5,
                    'text-valign': 'center',
                    'text-halign': 'right'
                }
            },
            {
                selector: ':parent',
                style: {
                    'background-opacity': 0.333
                }
            },

            {
                selector: "node.cy-expand-collapse-collapsed-node",
                style: {
                    "background-color": "#b00004",
                    "shape": "rectangle"
                }
            },

            {
                selector: 'edge',
                style: {
                    'curve-style': 'bezier',
                    'width': 3,
                    'line-color': '#838081',
                    'target-arrow-shape': 'triangle',
                    'target-arrow-color': '#838081'
                }
            },

            {
                selector: 'edge.meta',
                style: {
                    'width': 2,
                    'line-color': 'red'
                }
            },

            {
                selector: ':selected',
                style: {
                    "border-width": 3,
                    "border-color": '#DAA520'
                }
            }
        ],
        minZoom: 1 / 4,
        maxZoom: 4,

    });


    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function sethighlightEdge(node){
      var nowList = node.data('topic');
      for(var now in nowList){
        color = getRandomColor();
        node.successors().each(
          function(e){
            if(e.isEdge() && e.data('topic').includes(nowList[now])){
              e.style('line-color', color);
              e.style('target-arrow-color', color);
              }
        });
        node.predecessors().each(
          function(e){
            if(e.isEdge() && e.data('topic').includes(nowList[now])){
              e.style('line-color', color);
              e.style('target-arrow-color', color);
              }
        });
      }
    }

    function removehighlightEdge(t_cy){
      t_cy.edges().forEach(function(target){
        target.style('line-color', '#838081');
        target.style('target-arrow-color', '#838081');
      });
    }

    cy.nodes().on("expandcollapse.aftercollapse", function(event){
      var node = this;
      node.style('text-opacity',0.5);
    });

    cy.nodes().on("expandcollapse.afterexpand", function(event){
      var node = this;
      window.cy.elements().addClass('short');
      node.style('text-opacity',0);
      console.log(node)
    });


    cy.on('mouseover', 'node', function(event) {
        var node = event.target;
        console.log(node.id());
        node.removeClass('short');
        node.addClass('long');
        sethighlightEdge(node);
    });

    cy.on('mouseout', 'node', function(event) {
        var node = event.target;
        node.removeClass('long');
        node.addClass('short');
        removehighlightEdge(event.cy);
    });

    cy.on('tap', 'node', function(event) {
        var node = event.target;
        articleData.content = node.data('contents');
        articleData.title = node.data('name');
        articleData.date = node.data('date');
    });



    var api = cy.expandCollapse('get');

    document.getElementById("collapseAll").addEventListener("click", function() {
        api.collapseAll();
    });

    document.getElementById("expandAll").addEventListener("click", function() {
        api.expandAll();
    });
});
