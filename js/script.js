var app = new Vue(
  {
    el: "#container",
    data: {
      emailList: [],
      colorArray: [],
      color: "#",
      letters: '0123456789ABCDEF',
    },

    created: function(){
      for(var i = 0; i < 10; i++){
        this.colorArray.push(this.randomColor())
      }
      console.log(this.colorArray);
    },

    mounted: function(){
      const self = this;
      for(var i = 0; i < 10; i++){
        axios
        .get(' https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
          self.emailList.push(response.data.response);
        });
      }
    },

    methods: {
      randomColor: function(){
        this.color = "#";
        for(var i = 0; i < 6; i++){
          this.color += this.letters[Math.floor(Math.random() * 16)]
        }
        return this.color;

      }
    }
  }
);
