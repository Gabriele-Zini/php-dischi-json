const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "./server.php",
      diskList: [],
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
        console.log(resp.data[index]);
      });
    }
  },
}).mount("#app");
