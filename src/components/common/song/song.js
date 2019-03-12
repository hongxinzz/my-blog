import {getSongUrl} from '../../../api/api.js'
export default class Song{
    constructor({id,mid,singer,name,album,duration,image,url}){
        this.id = id;
        this.mid = mid;
        this.singer = singer;
        this.name = name;
        this.album = album;
        this.duration = duration;
        this.image = image;
        this.url = url;
    }
    getUrl() {
        if (this.url) {
            return Promise.resolve(this.url)
        }

        return new Promise((resolve, reject) => {
            getSongUrl(this.mid).then(res => {
                if (res.code === ERR_OK) {
                    this.url = `http://isure.stream.qqmusic.qq.com/${
                        res.req_0.data.midurlinfo[0].purl
                        }`
                    resolve(this.url)
                } else {
                    reject('no url')
                }
            })
        })
    }
}

export  const createSong = musicData =>{
    return new  Song({
        id:musicData.songid,
        mid:musicData.songmid,
        singer:filterSinger(musicData.singer),
        name:musicData.songname,
        album:musicData.albumname,
        duration:musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}/${musicData.songid}.m4a?guid=263427534&fromtag=66`
    })
}

const filterSinger = singger =>{
    let ret = [];
    if(!singger){
        return ''
    }
    singger.forEach(item=>{
        ret.push(item.name)
    })
    return ret.join('/')
};

