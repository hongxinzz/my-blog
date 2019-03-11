<template>

</template>

<script>
    import {mapGetters}  from 'vuex'
    import {getSingerDetail} from '../../../../../src/api/api'
    export default {
        name: "blog-singer-detail",
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
                        console.log(data.data.list)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
