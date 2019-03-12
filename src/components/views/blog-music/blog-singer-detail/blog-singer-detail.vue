<template>

</template>

<script>
    import {mapGetters}  from 'vuex'
    import {getSingerDetail} from '../../../../../src/api/api'
    import {createSong} from '../../../common/song/song';
    export default {
        name: "blog-singer-detail",
        data(){
            return{
                songs:[]
            }
        },
        computed:{
            ...mapGetters([
                'singer'
            ])
        },
        created(){
            console.log(this.singer.id)
            this._getDetail()
        },
        methods:{
            _getDetail(){
                getSingerDetail(this.singer.id).then(data=>{
                    if(data.code  === 0){
                       this.songs = this.normalizeSongs(data.data.list)
                        console.log(this.songs)
                    }
                })
            },
            normalizeSongs(list){
                let res = [];
                list.forEach(item =>{
                    let {musicData} = item
                    if(musicData.songid && musicData.albummid){
                        res.push(createSong(musicData))
                    }
                })
                return res
            }
        }
    }
</script>

<style scoped>

</style>
