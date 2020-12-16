var app = new Vue(
  {
    el: "#container",
    data: {
      emailList: []
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

    }
  }
);
