$(function() { // on dom ready

    var cy = cytoscape({

        container: document.getElementById('cy'),

        boxSelectionEnabled: false,
        autounselectify: true,
        maxZoom: 2,
        minZoom: 0.5,

        elements: {
            nodes: [{
                data: {
                    id: 'A',
                    topic: ['a']
                }
            },{
                data: {
                    id: 'B',
                    topic: ['a','b']
                }
            },{
                data: {
                    id: 'C',
                    topic: ['a','c']
                }
            },{
                data: {
                    id: 'D',
                    topic: ['a']
                }
            },{
                data: {
                    id: 'F',
                    topic: ['c']
                }
            },{
                data: {
                    id: 'X',
                    topic: ['b']
                }
            },{
                data: {
                    id: 'Y',
                    topic: ['b']
                }
            },{
                data: {
                    id: 'Z',
                    topic: ['b']
                }
            }
          ],edges:[
            {
              data:{
                source:'A',
                target:'B',
                topic: 'a'
              }
            },{
              data:{
                source:'B',
                target:'C',
                topic: 'a'
              }
            },{
              data:{
                source:'C',
                target:'D',
                topic: 'a'
              }
            },{
              data:{
                source:'C',
                target:'F',
                topic: 'c'
              }
            },{
              data:{
                source:'X',
                target:'Y',
                topic: 'b'
              }
            },{
              data:{
                source:'Y',
                target:'B',
                topic: 'b'
              }
            },{
              data:{
                source:'B',
                target:'Z',
                topic: 'b'
              }
            }
          ]
        },

        layout: {
            name:"cose-bilkent",
            padding: 100
        },

        ready: function() {
            window.cy = this;
            //window.cy.elements().addClass('short');
        },

        //style: 'node { content: data(label); text-wrap: ellipsis; text-max-width:3px; }'
        style: [
          {
              selector: 'node',
              style: {
                  'label': 'data(id)'
              }
          },
            {
                selector: 'node.short',
                style: {
                    'label': 'data(name)',
                    'text-wrap': 'ellipsis',
                    'text-max-width': '3px'
                }
            },
            {
                selector: 'node.long',
                style: {
                    'label': 'data(name)',
                }
            },
            {
                selector: 'edge',
                style: {
                    'target-arrow-shape':'triangle',
                    'line-color': '#838081',
                    'curve-style': 'bezier'
                }
            }
        ]
    });

    // 클릭시 qtip나오게
    /*
    cy.$('#n').qtip({
      content: 'Hello!',
      position: {
        my: 'bottom center',
        at: 'bottom center'
      },
      style: {
        classes: 'qtip-bootstrap',
        tip: {
          width: 16,
          height: 8
        }
      }
    });*/

    // 마우스 오버시 qtip나오게
    /*
    cy.on('mouseover', 'node', function(event) {
        var node = event.target;
        console.log(node.id());
        node.qtip({
          content: 'Hello!',
          show: {
                event: event.type,
                ready: true
             },
          hide: {
                event: 'mouseout unfocus'
          },
          position: {
            my: 'top center',
            at: 'bottom center'
          },
          style: {
            classes: 'qtip-bootstrap',
            tip: {
              width: 16,
              height: 8
            }
          }
        });
    });
    */

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
        color = getRandomColor()
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

    cy.on('mouseover', 'node', function(event) {
        var node = event.target;
        sethighlightEdge(node);
    });


    cy.on('mouseout', 'node', function(event) {
        //var node = event.target;
        removehighlightEdge(event.cy);
    });

/*
    cy.on('mouseover', 'node', function(event) {
        var node = event.target;
        //console.log(node.data('topic'));
    //        node.removeClass('short');
    //        node.addClass('long');
        sethighlightEdge(node);
    });
    cy.on('mouseout', 'node', function(event) {
        var node = event.target;
        node.removeClass('long');
        node.addClass('short');
    });
*/
}); // on dom ready
