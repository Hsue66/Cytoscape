Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el:'#app-7',
  data :{
    groceryList:[
      {id: 0, text:'Veg'},
      {id: 1, text:'Che'},
      {id: 2, text:'Food'}
    ]
  }
});

var app71 = new Vue({
  el:'#app-71',
  data :{
    BookList:[
      {id: 0, text:'B1'},
      {id: 1, text:'B2'},
      {id: 2, text:'B3'}
    ]
  }
});

var app6 = new Vue({
  el:'#app-6',
  data:{
    message:'hello vue'
  }
});

var app5 = new Vue({
  el:'#app-5',
  data:{
    message:'Hello! VUE JS!'
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split(' ').reverse().join(' ');
    }
  }
});

var app = new Vue({
  el: '#app',
  data:{
    name:'Vue'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
  }
});

var app3 = new Vue({
  el:'#app-3',
  data:{
    seen:true
  }
});

var app4 = new Vue({
  el:'#app-4',
  data:{
    todos:[
      {text:'Learn JavaScript'},
      {text:'Learn Vue'},
      {text:'Learn Nodejs'}
    ]
  }
});
