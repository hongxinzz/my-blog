<template>
    <div class="singer-wrap" ref="sing" @scroll="move">
        <div class="head-nav" v-if="sinngers" @click="moveSingerList">
            <ul>
                <li  :data-index="index" :class="clickIndex == index ? 'active':''"  v-for="(item,index) in sinngers">{{item.title.substring(0,1)}}</li>
            </ul>
        </div>
        <div class="singer-list"  >
            <ul :style="mainStyles" >
                <li  v-for="(item,index) in sinngers" :data-index ="index" class="singer-item">
                    <h3 >{{item.title}}</h3>
                   <div class="singer">
                      <div v-for="singer in item.item" @click="selectItem(singer)">
                          <img :src="singer.avatar" alt="">
                          <p>{{singer.name}}</p>
                      </div>
                   </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getSingerList} from "../../../../api/api";
    import Singer from '../../../common/singer/singer.js'
    import {getDataIndex} from "../../../../utils/utils";
    import  {mapMutations} from 'vuex'

    const HOT = '热搜';
    const DEFULT_LENGTH = 10;
    export default {
        name: "blog-music-singer",
        data() {
            return {
                sinngers: [],
                childTop:0,
                clickIndex:0,
                singList:[],
                startScroll:0,
                endScroll:0,
                firstScroll:true
            }
        },
        computed:{
            mainStyles(){
                let style = {};
                style.transform = `translateY(${-parseInt(this.childTop+40)}px)`;
                return style;
            },
        },
        created() {
            this._getSingerList()
        },
        methods: {
            ...mapMutations({
                setSinger:'setSinger'
            }),
            _getSingerList() {
                getSingerList().then(data => {
                    if (data.code === 0) {
                        this.sinngers = this.formatSingerData(data.data.list);
                    }
                })
            },
            formatSingerData(data) {
                let map = {
                    hot: {
                        title: HOT,
                        item: []
                    }
                };
                let hot = [];
                let sortList = [];
                data.forEach((item, index) => {
                    if (index < DEFULT_LENGTH) {
                        map.hot.item.push(new Singer({
                            id: item.Fsinger_mid,
                            name: item.Fsinger_name
                        }))
                    }
                    const key = item.Findex;
                    if (!map[key]) {
                        map[key] = {
                            title: key,
                            item: []
                        }
                    }
                    map[key].item.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                });
                for (let key in map) {
                    let val = map[key];
                    if (val.title.match(/[a-zA-Z]/)) {
                        sortList.push(val)
                    } else if (val.title === HOT) {
                        hot.push(val)
                    }
                }
                sortList.sort((a, b) => {
                    return a.title.charCodeAt(0) - b.title.charCodeAt(0);
                })
                return hot.concat(sortList)
            },
            moveSingerList(e,index){
                this.singList = [...document.getElementsByClassName('singer-item')];
                if(index || index == 0){
                    this.clickIndex = index
                }else{
                    this.clickIndex = getDataIndex(e.target,'index');
                }
                this.childTop = this.singList[this.clickIndex].offsetTop - this.$refs.sing.scrollTop;
                // this.singList[this.clickIndex].childNodes[0].style.position = 'fixed';
            },
            move(e){
                this.startScroll = this.$refs.sing.scrollTop;
                if(this.startScroll >= this.endScroll){
                    this.clickIndex = parseInt(this.clickIndex) + 1
                }else if(this.startScroll <= this.endScroll){
                    this.clickIndex = parseInt(this.clickIndex) - 1
                }
                if(this.clickIndex < 0){
                    this.clickIndex = 0;
                }
                if(this.singList.length &&this.clickIndex  >=this.singList.length-1){
                    this.clickIndex=this.singList.length-1
                }
                this.endScroll = this.startScroll
                this.moveSingerList(e, this.clickIndex);
            },
            selectItem(item){
                // console.log(item.id,item)
                this.$router.push('/singerDetail/'+item.id)
                this.setSinger(item)
            }
        }
    }
</script>

<style scoped lang="scss">
    .singer-wrap{
        width: 100%;
        height: 800px;
        overflow: scroll;
        padding: 20px;
        background: #fff;
        .head-nav{
            position: absolute;
            right:54px;
            top: 50%;
            transform: translateY(-50%);
            margin-bottom: 15px;
            ul{
                display: flex;
                flex-direction: column;
                justify-content: center;
                li{
                    padding: 5px;
                    text-align: center;
                    border-radius: 50%;
                    font-size: 14px;
                    color: rgba(0,0,0,.6);
                    cursor: pointer;
                }
                li.active{
                    color: #fff;
                    background:#2dd1a5 ;
                }
            }
        }
       .singer-list{
           width: 1000px;
           ul{
               transition: all .5s linear;
           }
           h3{
               width: 100%;
               box-sizing: border-box;
               padding: 4px;
               margin: 20px 0;
               text-align: center;
               color: rgba(0,0,0,.8);
               background: #f5f5f5;
           }
           .singer{
               display: flex;
               flex-wrap: wrap;
               div{
                   width: calc(1000px / 4);
                   text-align: center;
                   img{
                       width: 150px;
                       height: 150px;
                       display: inline-block;
                       border-radius: 50%;
                   }
                   p{
                       text-align: center;
                       padding: 10px 0;
                   }
               }
           }
       }
    }

</style>
