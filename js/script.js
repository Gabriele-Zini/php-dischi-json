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
      console.log(resp)
    });
  },
  methods: {},
}).mount("#app");
