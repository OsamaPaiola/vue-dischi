const app = new Vue({
  el: "#app",
  data: {
    cds: [],
    actualGenre:'all',
  },
  created(){

    // get album
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then( response => {
      // handle success
      this.cds = response.data.response
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },
  methods: {
    filterGenre() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( response => {
        let cdsList = response.data.response;

        if (this.actualGenre !== 'all') {
          cdsList = cdsList.filter(cd => cd.genre.toLowerCase() === this.actualGenre);
        }

        this.cds = cdsList;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    }
  }

});
