import * as url from './urlConfig'
import axios from 'axios'

//获取轮播图
export const bannerApi = {
	list() {
		return axios.get(url.banner).then((response) => {
			return response.data
		})
	}
}

// 排行榜
export const rankApi = {
	ranking3() {
		return axios.get(url.ranking3).then((response) => {
			return response.data
		})
	}
}

// 推广
export const promoteApi = {
	promote() {
		return axios.get(url.promote).then((response) => {
			return response.data
		})
	}
}

// 直播
export const liveApi = {
	live() {
		return axios.get(url.live).then((response) => {
			return response.data
		})
	}
}

// 具体内容
export const contentApi = {
	content() {
		return axios.get(url.contet).then((response) => {
			return response.data
		})
	}
}

// 具体内容的三日排行榜信息
export const contentrankApi = {
	contentrank(param) {
		param.day=3
		return axios.get(url.regionRank, {params:param}).then((response) => {
			return response.data
		})
	},
	contentrankweek(param) {
		param.day=7
		return axios.get(url.regionRank, {params:param}).then((response) => {
			return response.data
		})
	}
}

export const olinenumApi={
	onlinenum(){
		return axios.get(url.onlinenum).then((response) => {
			return response.data
	    })
   }
}



export const regionApi={
	getRegion (ps, rid) {
		const data1 = {
		  rid
		}
		if (ps >= 0) data1.ps = ps
		return axios.get(url.region, {
		  params: data1
		}).then((response) => {
			return response.data
	    })
	  }
}


export const recommendApi={
	recommend(){
		return axios.get(url.contet).then((response) => {
			if (res.data.code === ERR_OK) {
				let tmp = Object.values(res.data)
				for (let i = 0; i < 10; i++) {
				  for (let j = 0; j < 5; j++) {
					this.recommendList.push(tmp[i][j])
				  }
				}
			  }
	    })
   }
}