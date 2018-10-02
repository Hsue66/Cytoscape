

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

var data = {
  title:'TITLE',
  date:'2017-03-30',
  contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}

var article = new Vue({
  el:'#article',
  data: data
});
