<template>
    <div class="singer-wrap">
        <div class="head-nav" v-if="sinngers">
            <ul>
                <li  v-for="(item,index) in sinngers">{{item.title.substring(0,1)}}</li>
            </ul>
        </div>
        <div class="singer-list">
            <ul>
                <li  v-for="(item,index) in sinngers">
                    <h3>{{item.title}}</h3>
                   <div class="singer">
                      <div v-for="singer in item.item">
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

    const HOT = '热搜';
    const DEFULT_LENGTH = 10;
    export default {
        name: "blog-music-singer",
        data() {
            return {
                sinngers: []
            }
        },
        created() {
            this._getSingerList()
        },
        methods: {
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
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    border-radius: 50%;
                    font-size: 14px;
                    color: rgba(0,0,0,.6);
                }
                li.active{
                    color: #fff;
                    background:#2dd1a5 ;
                }
            }
        }
       .singer-list{
           width: 1000px;
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