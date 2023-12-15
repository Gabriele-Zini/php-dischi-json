const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "./server.php",
      diskList: [],
      temporaryAlbum: {},
    };
  },
  created() {
    axios.get(this.apiUrl).then((resp) => {
      this.diskList = resp.data;
      console.log(this.diskList);
    });
  },
  methods: {
    getAlbum(index) {
      axios
        .get(this.apiUrl, {
          params: {
            index: index,
          },
        })
        .then((resp) => {
          this.temporaryAlbum = resp.data;
          console.log(resp.data);
        });
    },
    exitAlbum() {
      this.temporaryAlbum = {};
    },
  },
}).mount("#app");
