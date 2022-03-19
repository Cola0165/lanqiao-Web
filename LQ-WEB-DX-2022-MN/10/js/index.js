const app = new Vue({
  el: "#app",
  // 在此处补全代码，实现二级菜单搜索功能
  data: {
    search: "",
    flag: 0,
    List: [],
    postList:[]
  },
  async created() {
    axios.get('./data.json')
      .then(res => {
        this.List = res.data;
      });
  },
  computed:{
    filteredList(){
      this.postList=[];
        for(var i=0;i<this.List.length;i++){
          this.flag=0;
          if(typeof this.List[i].children == 'object'){
            for(var j=0;j<this.List[i].children.length;j++){
              if(this.List[i].children[j].meta.title.indexOf(this.search)!=-1){
                if(this.search!="") this.$set(this.List[i].children[j], 'color', 'yellow');
                this.flag=1;
              }
              else this.$set(this.List[i].children[j], 'color', '');
              
            } 
          }
          if(this.List[i].meta.title.indexOf(this.search)!=-1){
            if(this.search!="") this.$set(this.List[i], 'color', 'yellow');
            this.flag=1;
          }
          else this.$set(this.List[i], 'color', '');
          if(this.flag==1) this.postList.push(this.List[i]);
        }
        return (this.postList)
    }
  }  
});
