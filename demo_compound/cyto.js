document.addEventListener('DOMContentLoaded', function() {

    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),

        elements: {
                    nodes: [{
                            data: {
                                id: 'B',
                                name: "S.Korea, Russia to begin preparations for FTA negotiations: Moon"
                            }
                        },
                        {
                            data: {
                                id: 'k',
                                name: "Moon to discuss economic cooperation, denuclearization with Putin",
                                parent: 'B'
                            }
                        },
                        {
                            data: {
                                id: 'a',
                                name: "Korea to take on Mexico in crucial 2nd match"
                            }
                        },
                        {
                            data: {
                                id: 'b',
                                name: "S.Korea fall to Mexico 2-1 for 2nd straight loss"
                            }
                        },
                        {
                            data: {
                                id: 'c',
                                name: "Korea hasn't scored a goal, Son Heung-min has"
                            }
                        },
                        {
                            data: {
                                id: 'd',
                                name: "S.Korea, Russia to begin preparations for FTA negotiations: Moon",
                                parent: 'B'
                            }
                        },
                        {
                            data: {
                                id: 'e',
                                name: "President Moon down with flu"
                            }
                        },
                        {
                            data: {
                                id: 'A',
                                name: "S.Korea stun Germany on way out of World Cup"
                            }
                        },
                        {
                            data: {
                                id: 'f',
                                name: "Preparing for a miracle, S.Korea polish up tactics for match vs. Germany",
                                parent: 'A'
                            }
                        },
                        {
                            data: {
                                id: 'g',
                                name: "S.Korea stun Germany on way out of World Cup",
                                parent: 'A'
                            }
                        },
                        {
                            data: {
                                id: 'h',
                                name: "S.Korea avoid dishonorable records with win over Germany",
                                parent: 'A'
                            }
                        }
                    ],
                    edges: [{
                            data: {
                                source: 'a',
                                target: 'b'
                            }
                        },
                        {
                            data: {
                                source: 'b',
                                target: 'c'
                            }
                        },
                        {
                            data: {
                                source: 'd',
                                target: 'c'
                            }
                        },
                        {
                            data: {
                                source: 'c',
                                target: 'e'
                            }
                        },
                        {
                            data: {
                                source: 'c',
                                target: 'f'
                            }
                        },
                        {
                            data: {
                                source: 'f',
                                target: 'g'
                            }
                        },
                        {
                            data: {
                                source: 'g',
                                target: 'h'
                            }
                        },
                        {
                            data: {
                                source: 'k',
                                target: 'd'
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

    cy.nodes().on("expandcollapse.afterexpand", function(event)
    { var node = this;
      window.cy.elements().addClass('short')
    }
    )


    cy.on('mouseover', 'node', function(event) {
        var node = event.target;
        console.log(node.id())
        node.removeClass('short');
        node.addClass('long');
    });

    cy.on('mouseout', 'node', function(event) {
        var node = event.target;
        node.removeClass('long');
        node.addClass('short');
    });

    var api = cy.expandCollapse('get');

    document.getElementById("collapseAll").addEventListener("click", function() {
        api.collapseAll();
    });

    document.getElementById("expandAll").addEventListener("click", function() {
        api.expandAll();
    });
});
