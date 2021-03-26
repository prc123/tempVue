
const serverRoot = `${process.env.NODE_ENV === 'production' ? 'http://www.lybenson.com' : 'http://127.0.0.1'}:9050`
const serverAPi = `${process.env.NODE_ENV === 'production' ? 'http://www.lybenson.com' : 'http://127.0.0.1'}:9050`  /// "https://api.bilibili.com/"


export const banner = serverRoot + '/banner'

export const ranking3 = serverRoot + '/ranking3'


// 推广
export const promote = serverRoot + '/promote'

// 直播
export const live = serverRoot + '/live'

// 具体内容
export const contet = serverRoot + '/ding'

// 三日排行
export const contentrank = serverRoot + '/contentrank'
// 一周排行
export const contentrankweek = serverRoot + '/contentrankweek'
//分区视频
export const  region=serverRoot+'/region'
//分区视频
export const  regionRank=serverRoot+'/regionrank'
export const onlinenum = 'https://api.bilibili.com/x/web-interface/online'

export const videoInfo = serverAPi + '/x/web-interface/view'

export const videorelated = serverAPi + '/x/web-interface/archive/related'

export const videoComment = serverAPi +'/x/v2/reply/main'
export const videotags= serverAPi +'/x/tag/archive/tags'

export const videoFull = serverAPi + '/videoFull'