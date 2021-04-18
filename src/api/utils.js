import axios from 'axios'
import * as url1 from './urlConfig'

export function postcookies (value) {
    const url = url1.upcookies
    const data ={
        'value': value
      }
    return axios.post(url, 
      data,
).then(res => {
      return Promise.resolve(res)
    })
  }