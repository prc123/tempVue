import axios from 'axios'
import * as url1 from './urlConfig'
import md5 from 'js-md5'
// 视频信息
export function getVideoInfo (bvid) {
  const url = url1.videoInfo
  const data = {
    'bvid': bvid
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}

// 单个视频推荐信息
export function getRecommend (bvid) {
  const url = url1.videorelated
  const data = {
    'bvid': bvid
  }

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}

// 视频评论
export function getComment (bvid) {
  const url = url1.videoComment
  const data = {
    'bvid': bvid,
    'type': 1
  }

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}

// 视频标签
export function getTags (bvid) {
  const url = url1.videotags
  const data = {
    'bvid': bvid
  }

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}


export function downloadVideoInfo (bvid) {

    const url = url1.videoDownload
    const data = {
      'bvid': bvid
    }
  
    return axios.get(url, {
      params: data
    }).then(res => {
      return Promise.resolve(res)
    })
  }

//获取弹幕或评论
export function getVideoDataInfo (bvid,type,oid,date) {

  const url = url1.videoDataInfo
  const data = {
    'bvid': bvid,
    'type':type,
    'oid':oid,
    'date':date
  }

  return axios.get(url, {
    params: data,
    // responseType: 'blob',
  }).then(res => {
    return Promise.resolve(res)
  })
}