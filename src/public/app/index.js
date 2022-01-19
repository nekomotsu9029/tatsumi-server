var app = new Vue({
    el: '#app',
    data: {
        urlServer: 'http://localhost:3000',
        data: [],
        historyModal: []
    },
    methods: {
        obtainData: function () {
            let url = this.urlServer + '/api/data';
            axios.get(url).then(({data})=>{
                this.data = data.data;
            })
        },
        setHistoryModal: function(arr){
            this.historyModal = arr;
        }
      },
    mounted(){
        this.obtainData();
    }
  })