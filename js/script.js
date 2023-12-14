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
      axios.get(this.apiUrl).then((resp) => {
        this.temporaryAlbum = resp.data[index];
        console.log(resp.data[index]);
      });
    },
    exitAlbum() {
      this.temporaryAlbum = {};
    },
  },
}).mount("#app");
