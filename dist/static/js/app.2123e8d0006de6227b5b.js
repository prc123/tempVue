webpackJsonp([2,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _promise = __webpack_require__(19);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _vue = __webpack_require__(34);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(401);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _router = __webpack_require__(283);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _vueLazyload = __webpack_require__(400);
	
	var _vueLazyload2 = _interopRequireDefault(_vueLazyload);
	
	var _viewDesign = __webpack_require__(399);
	
	var _viewDesign2 = _interopRequireDefault(_viewDesign);
	
	__webpack_require__(352);
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _store = __webpack_require__(290);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueLazyload2.default);
	_vue2.default.use(_viewDesign2.default);
	
	
	_axios2.default.interceptors.request.use(function (config) {
	  if (localStorage.getItem('token')) {
	    config.headers.common['token'] = localStorage.getItem('token');
	  }
	  return config;
	}, function (error) {
	  return _promise2.default.reject(error);
	});
	
	new _vue2.default({
	  el: '#app',
	  store: _store2.default,
	  router: _router2.default,
	
	  render: function render(h) {
	    return h(_App2.default);
	  }
	});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.recommendApi = exports.regionApi = exports.olinenumApi = exports.contentrankApi = exports.contentApi = exports.liveApi = exports.promoteApi = exports.rankApi = exports.bannerApi = undefined;
	
	var _values = __webpack_require__(37);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _urlConfig = __webpack_require__(36);
	
	var url = _interopRequireWildcard(_urlConfig);
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var bannerApi = exports.bannerApi = {
		list: function list() {
			return _axios2.default.get(url.banner).then(function (response) {
				return response.data;
			});
		}
	};
	
	var rankApi = exports.rankApi = {
		ranking3: function ranking3() {
			return _axios2.default.get(url.ranking3).then(function (response) {
				return response.data;
			});
		}
	};
	
	var promoteApi = exports.promoteApi = {
		promote: function promote() {
			return _axios2.default.get(url.promote).then(function (response) {
				return response.data;
			});
		}
	};
	
	var liveApi = exports.liveApi = {
		live: function live() {
			return _axios2.default.get(url.live).then(function (response) {
				return response.data;
			});
		}
	};
	
	var contentApi = exports.contentApi = {
		content: function content() {
			return _axios2.default.get(url.contet).then(function (response) {
				return response.data;
			});
		}
	};
	
	var contentrankApi = exports.contentrankApi = {
		contentrank: function contentrank(param) {
			param.day = 3;
			return _axios2.default.get(url.regionRank, { params: param }).then(function (response) {
				return response.data;
			});
		},
		contentrankweek: function contentrankweek(param) {
			param.day = 7;
			return _axios2.default.get(url.regionRank, { params: param }).then(function (response) {
				return response.data;
			});
		}
	};
	
	var olinenumApi = exports.olinenumApi = {
		onlinenum: function onlinenum() {
			return _axios2.default.get(url.onlinenum).then(function (response) {
				return response.data;
			});
		}
	};
	
	var regionApi = exports.regionApi = {
		getRegion: function getRegion(ps, rid) {
			var data1 = {
				rid: rid
			};
			if (ps >= 0) data1.ps = ps;
			return _axios2.default.get(url.region, {
				params: data1
			}).then(function (response) {
				return response.data;
			});
		}
	};
	
	var recommendApi = exports.recommendApi = {
		recommend: function recommend() {
			var _this = this;
	
			return _axios2.default.get(url.contet).then(function (response) {
				if (res.data.code === ERR_OK) {
					var tmp = (0, _values2.default)(res.data);
					for (var i = 0; i < 10; i++) {
						for (var j = 0; j < 5; j++) {
							_this.recommendList.push(tmp[i][j]);
						}
					}
				}
			});
		}
	};

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ERR_OK = exports.ERR_OK = 0;
	
	var sliderImage = exports.sliderImage = ['https://i0.hdslb.com/bfs/archive/0877cdd4b401b66d578841ad0cebbf1dec95fe07.jpg@480w_270h', 'https://i0.hdslb.com/bfs/archive/1de7300e9793ee713c8e6515df9439378dd8c790.jpg@480w_270h', 'https://i0.hdslb.com/bfs/archive/9e0ffb1650d9b68ae61bf02a18bf5892f9902890.jpg@480w_270h', 'https://i0.hdslb.com/bfs/archive/68cb764e2a9060623f2678928588fd1d5b3aae75.png@480w_270h'];
	
	var regionTags = exports.regionTags = [{
	  name: '首页',
	  key: 0
	}, {
	  name: '动画',
	  key: 1,
	  sortKeys: 'douga',
	  blocks: [{ name: '推荐', sortKeys: 'douga', key: 1 }, { name: 'MAD·AMV', sortKeys: 'mad', key: 24 }, { name: 'MMD·3D', sortKeys: 'mmd', key: 25 }, { name: '短片·手书·配音', sortKeys: 'voice', key: 47 }, { name: '特摄', sortKeys: 'tokusatsu', key: 86 }, { name: '综合', sortKeys: 'other', key: 27 }]
	}, {
	  name: '番剧',
	  sortKeys: 'anime',
	  key: 13,
	  blocks: [{ name: '推荐', sortKeys: 'anime', key: 13 }, { name: '连载动画', sortKeys: 'serial', key: 33 }, { name: '完结动画', sortKeys: 'finish', key: 32 }, { name: '资讯', sortKeys: 'information', key: 51 }, { name: '官方延伸', sortKeys: 'offical', key: 152 }]
	}, {
	  name: '国创',
	  key: 167,
	  sortKeys: 'guochuang',
	  blocks: [{ name: '推荐', sortKeys: 'guochuang', key: 167 }, { name: '国产动画', sortKeys: 'chinese', key: 153 }, { name: '国产原创相关', sortKeys: 'original', key: 168 }, { name: '布袋戏', sortKeys: 'puppetry', key: 169 }, { name: '动态漫·广播剧', sortKeys: 'motioncomic', key: 195 }, { name: '资讯', sortKeys: 'information', key: 170 }]
	}, {
	  name: '音乐',
	  key: 3,
	  sortKeys: 'music',
	  blocks: [{ name: '推荐', sortKeys: 'music', key: 3 }, { name: '原创音乐', sortKeys: 'original', key: 28 }, { name: '翻唱', sortKeys: 'cover', key: 31 }, { name: 'VOCALOID·UTAU', sortKeys: 'vocaloid', key: 30 }, { name: '电音', sortKeys: 'electronic', key: 194 }, { name: '演奏', sortKeys: 'perform', key: 59 }, { name: 'MV', sortKeys: 'mv', key: 193 }, { name: '音乐现场', sortKeys: 'live', key: 29 }, { name: '音乐综合', sortKeys: 'other', key: 130 }]
	}, {
	  name: '舞蹈',
	  key: 129,
	  sortKeys: 'dance',
	  blocks: [{ name: '推荐', sortKeys: 'dance', key: 129 }, { name: '宅舞', sortKeys: 'otaku', key: 20 }, { name: '街舞', sortKeys: 'hiphop', key: 198 }, { name: '明星舞蹈', sortKeys: 'star', key: 199 }, { name: '中国舞', sortKeys: 'china', key: 200 }, { name: '舞蹈综合', sortKeys: 'three_d', key: 154 }, { name: '舞蹈教程', sortKeys: 'demo', key: 156 }]
	}, {
	  name: '游戏',
	  key: 4,
	  sortKeys: 'game',
	  blocks: [{ name: '推荐', sortKeys: 'game', key: 4 }, { name: '单机游戏', sortKeys: 'stand_alone', key: 17 }, { name: '电子竞技', sortKeys: 'esports', key: 171 }, { name: '手机游戏', sortKeys: 'mobile', key: 172 }, { name: '网络游戏', sortKeys: 'online', key: 65 }, { name: '桌游棋牌', sortKeys: 'board', key: 173 }, { name: 'GMV', sortKeys: 'gmv', key: 121 }, { name: '音游', sortKeys: 'music', key: 136 }, { name: 'Mugen', sortKeys: 'mugen', key: 19 }]
	}, {
	  name: '科技',
	  key: 36,
	  sortKeys: 'technology',
	  blocks: [{ name: '推荐', sortKeys: 'technology', key: 36 }, { name: '科学科普', sortKeys: 'science', key: 201 }, { name: '社科人文', sortKeys: 'fun', key: 124 }, { name: '野生技术协会', sortKeys: 'wild', key: 122 }, { name: '财经', sortKeys: 'finance', key: 207 }, { name: '校园学习', sortKeys: 'campus', key: 208 }, { name: '职业职场', sortKeys: 'career', key: 209 }]
	}, {
	  name: '数码',
	  key: 188,
	  sortKeys: 'digital',
	  blocks: [{ name: '推荐', sortKeys: 'digital', key: 188 }, { name: '手机平板', sortKeys: 'mobile', key: 95 }, { name: '电脑装机', sortKeys: 'pc', key: 189 }, { name: '摄影摄像', sortKeys: 'photography', key: 190 }, { name: '影音智能', sortKeys: 'intelligence_av', key: 191 }]
	}, {
	  name: '生活',
	  key: 160,
	  sortKeys: 'life',
	  blocks: [{ name: '推荐', sortKeys: 'life', key: 160 }, { name: '搞笑', sortKeys: 'funny', key: 138 }, { name: '日常', sortKeys: 'daily', key: 21 }, { name: '手工', sortKeys: 'handmake', key: 161 }, { name: '绘画', sortKeys: 'painting', key: 162 }, { name: '运动', sortKeys: 'sports', key: 163 }, { name: '汽车', sortKeys: 'automobile', key: 176 }, { name: '其他', sortKeys: 'other', key: 174 }]
	}, {
	  name: '鬼畜',
	  key: 119,
	  sortKeys: 'kichiku',
	  blocks: [{ name: '推荐', sortKeys: 'kichiku', key: 119 }, { name: '鬼畜调教', sortKeys: 'guide', key: 22 }, { name: '音MAD', sortKeys: 'mad', key: 26 }, { name: '人力VOCALOID', sortKeys: 'manual_vocaloid', key: 126 }, { name: '教程演示', sortKeys: 'course', key: 127 }]
	}, {
	  name: '时尚',
	  key: 155,
	  sortKeys: 'fashion',
	  blocks: [{ name: '推荐', sortKeys: 'fashion', key: 155 }, { name: '美妆', sortKeys: 'makeup', key: 157 }, { name: '服饰', sortKeys: 'clothing', key: 158 }, { name: '健身', sortKeys: 'aerobics', key: 164 }, { name: 'T台', sortKeys: 'catwalk', key: 159 }, { name: '风尚标', sortKeys: 'trends', key: 192 }]
	}, {
	  name: '娱乐',
	  key: 5,
	  sortKeys: 'ent',
	  blocks: [{ name: '推荐', sortKeys: 'ent', key: 5 }, { name: '综艺', sortKeys: 'variety	', key: 71 }, { name: '明星', sortKeys: 'star', key: 137 }]
	}, {
	  name: '影视',
	  key: 181,
	  sortKeys: 'cinephile',
	  blocks: [{ name: '推荐', sortKeys: 'cinephile', key: 181 }, { name: '影视杂谈', sortKeys: 'cinecism', key: 182 }, { name: '影视剪辑', sortKeys: 'montage', key: 183 }, { name: '短片', sortKeys: 'shortfilm', key: 85 }, { name: '预告·资讯', sortKeys: 'trailer_info', key: 184 }]
	}, {
	  name: '纪录片',
	  key: 177,
	  sortKeys: 'documentary',
	  blocks: [{ name: '推荐', sortKeys: 'documentary', key: 177 }, { name: '人文·历史', sortKeys: 'history', key: 37 }, { name: '科学·探索·自然', sortKeys: 'science', key: 178 }, { name: '军事', sortKeys: 'military', key: 179 }, { name: '社会·美食·旅行', sortKeys: 'travel', key: 180 }]
	}, {
	  name: '电影',
	  key: 23,
	  sortKeys: 'movie',
	  blocks: [{ name: '推荐', sortKeys: 'movie', key: 23 }, { name: '华语电影', sortKeys: 'chinese', key: 147 }, { name: '欧美电影', sortKeys: 'west', key: 145 }, { name: '日本电影', sortKeys: 'japan', key: 146 }, { name: '其他国家', sortKeys: 'movie', key: 83 }]
	}, {
	  name: '电视剧',
	  key: 11,
	  sortKeys: 'tv',
	  blocks: [{ name: '推荐', sortKeys: 'tv', key: 11 }, { name: '国产剧', sortKeys: 'mainland', key: 185 }, { name: '海外剧', sortKeys: 'overseas', key: 187 }]
	}, { name: '直播', key: -1 }, { name: '相簿', key: -2 }];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(19);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.getVideoInfo = getVideoInfo;
	exports.getRecommend = getRecommend;
	exports.getComment = getComment;
	exports.getTags = getTags;
	exports.downloadVideoInfo = downloadVideoInfo;
	exports.getVideoDataInfo = getVideoDataInfo;
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _urlConfig = __webpack_require__(36);
	
	var url1 = _interopRequireWildcard(_urlConfig);
	
	var _jsMd = __webpack_require__(395);
	
	var _jsMd2 = _interopRequireDefault(_jsMd);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getVideoInfo(bvid) {
	  var url = url1.videoInfo;
	  var data = {
	    'bvid': bvid
	  };
	  return _axios2.default.get(url, {
	    params: data
	  }).then(function (res) {
	    return _promise2.default.resolve(res);
	  });
	}
	
	function getRecommend(bvid) {
	  var url = url1.videorelated;
	  var data = {
	    'bvid': bvid
	  };
	
	  return _axios2.default.get(url, {
	    params: data
	  }).then(function (res) {
	    return _promise2.default.resolve(res);
	  });
	}
	
	function getComment(bvid) {
	  var url = url1.videoComment;
	  var data = {
	    'bvid': bvid,
	    'type': 1
	  };
	
	  return _axios2.default.get(url, {
	    params: data
	  }).then(function (res) {
	    return _promise2.default.resolve(res);
	  });
	}
	
	function getTags(bvid) {
	  var url = url1.videotags;
	  var data = {
	    'bvid': bvid
	  };
	
	  return _axios2.default.get(url, {
	    params: data
	  }).then(function (res) {
	    return _promise2.default.resolve(res);
	  });
	}
	
	function downloadVideoInfo(bvid) {
	
	  var url = url1.videoDownload;
	  var data = {
	    'bvid': bvid
	  };
	
	  return _axios2.default.get(url, {
	    params: data
	  }).then(function (res) {
	    return _promise2.default.resolve(res);
	  });
	}
	
	function getVideoDataInfo(bvid, type, oid, date) {
	
	  var url = url1.videoDataInfo;
	  var data = {
	    'bvid': bvid,
	    'type': type,
	    'oid': oid,
	    'date': date
	  };
	
	  return _axios2.default.get(url, {
	    params: data
	  }).then(function (res) {
	    return _promise2.default.resolve(res);
	  });
	}

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var serverRoot = ( true ? 'http://www.lybenson.com' : 'http://127.0.0.1') + ':9050';
	var serverAPi = ( true ? 'http://www.lybenson.com' : 'http://127.0.0.1') + ':9050';var banner = exports.banner = serverRoot + '/banner';
	
	var ranking3 = exports.ranking3 = serverRoot + '/ranking3';
	
	var promote = exports.promote = serverRoot + '/promote';
	
	var live = exports.live = serverRoot + '/live';
	
	var contet = exports.contet = serverRoot + '/ding';
	
	var contentrank = exports.contentrank = serverRoot + '/contentrank';
	var contentrankweek = exports.contentrankweek = serverRoot + '/contentrankweek';
	var region = exports.region = serverRoot + '/region';
	var regionRank = exports.regionRank = serverRoot + '/regionrank';
	var onlinenum = exports.onlinenum = 'https://api.bilibili.com/x/web-interface/online';
	
	var videoInfo = exports.videoInfo = serverAPi + '/x/web-interface/view';
	
	var videorelated = exports.videorelated = serverAPi + '/x/web-interface/archive/related';
	
	var videoComment = exports.videoComment = serverAPi + '/x/v2/reply/main';
	var videotags = exports.videotags = serverAPi + '/x/tag/archive/tags';
	
	var videoFull = exports.videoFull = serverAPi + '/videoFull';
	
	var videoDownload = exports.videoDownload = serverAPi + '/x/videoDownload';
	
	var upcookies = exports.upcookies = serverAPi + '/user/upcookies';
	
	var videoDataInfo = exports.videoDataInfo = serverAPi + '/x/videodatainfo';

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(390)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(250),
	  /* template */
	  __webpack_require__(470),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(363)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(240),
	  /* template */
	  __webpack_require__(444),
	  /* scopeId */
	  "data-v-2f3fd8e8",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(391)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(243),
	  /* template */
	  __webpack_require__(471),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(362)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(252),
	  /* template */
	  __webpack_require__(443),
	  /* scopeId */
	  "data-v-2c1cb6e8",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(354)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(258),
	  /* template */
	  __webpack_require__(435),
	  /* scopeId */
	  "data-v-07938b44",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(365)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(264),
	  /* template */
	  __webpack_require__(446),
	  /* scopeId */
	  "data-v-3458e3be",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(368)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(269),
	  /* template */
	  __webpack_require__(449),
	  /* scopeId */
	  "data-v-3fa17cf7",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(387)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(270),
	  /* template */
	  __webpack_require__(467),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'App'
	};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _BannerItem = __webpack_require__(402);
	
	var _BannerItem2 = _interopRequireDefault(_BannerItem);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				count: 0,
				show: false,
				interval: Function
			};
		},
	
		computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'bannerlist'])),
		mounted: function mounted() {
			this.startInterval();
			this.$store.dispatch('bannerlist');
		},
	
		methods: {
			cutItem: function cutItem(index) {
				this.count = index;
				var distance = -100 * this.count;
				var left = distance + "%";
				this.$refs.banner.style.marginLeft = left;
	
				clearInterval(this.interval);
				this.startInterval();
			},
			startInterval: function startInterval() {
				var _this = this;
	
				this.interval = setInterval(function () {
					_this.count++;
					if (_this.count === 5) {
						_this.count = 0;
					}
					var distance = -100 * _this.count;
					var left = distance + "%";
					if (_this.$refs.banner) {
						_this.$refs.banner.style.marginLeft = left;
					}
				}, 5000);
			}
		},
		components: {
			BannerItem: _BannerItem2.default
		}
	};

/***/ }),
/* 241 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			banner: {
				type: Object
			}
		}
	};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _config = __webpack_require__(26);
	
	var _BchennlContent = __webpack_require__(418);
	
	var _BchennlContent2 = _interopRequireDefault(_BchennlContent);
	
	var _BNavSide = __webpack_require__(219);
	
	var _BNavSide2 = _interopRequireDefault(_BNavSide);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'home',
	  components: {
	    BchennlContent: _BchennlContent2.default,
	    BNavSide: _BNavSide2.default
	  },
	  mounted: function mounted() {
	    this.$store.dispatch('getContentRows');
	  },
	  data: function data() {
	    return {
	      indexTab: 0,
	      sindexTab: 0,
	      regionTags: _config.regionTags,
	      regionList: [],
	      showMask: false
	    };
	  },
	
	  watch: {
	    options: function options() {
	      console.log('options 变化了');
	    },
	    items: function items() {
	      console.log('items 变化了');
	    }
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'rows']), {
	    getBlocks: function getBlocks() {
	      return _config.regionTags[this.indexTab].blocks;
	    },
	    options: function options() {
	      var options = {
	        offset: 100,
	        items: this.rows,
	        offsetTop: 0 };
	      return options;
	    }
	  }),
	
	  methods: {
	    isShowMask: function isShowMask() {
	      this.showMask = !this.showMask;
	    },
	    _getIndexTab: function _getIndexTab() {
	      if (isNaN(this.$route.params.index)) {
	        this.indexTab = 0;
	      } else {
	        this.indexTab = this.$route.params.index;
	        this.sindexTab = 0;
	      }
	    }
	  },
	  selectItem: function selectItem(item) {
	    this.$router.push({ name: 'video', params: { bvid: item.bvid } });
	  }
	};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Search = __webpack_require__(409);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	var _BMenu = __webpack_require__(404);
	
	var _BMenu2 = _interopRequireDefault(_BMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    Search: _Search2.default,
	    BMenu: _BMenu2.default
	  }
	};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BMenuItem = __webpack_require__(405);
	
	var _BMenuItem2 = _interopRequireDefault(_BMenuItem);
	
	var _config = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      showMobileLink: false,
	      regionTags: _config.regionTags
	    };
	  },
	
	  components: {
	    BMenuItem: _BMenuItem2.default
	  }
	};

/***/ }),
/* 245 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				classes: {
					home: this.item.home,
					sequare: this.item.sequare,
					live: this.item.live
				}
			};
		},
	
		props: {
			item: {
				type: Object,
				required: true
			},
			index: {}
		},
		computed: {
			showNum: function showNum() {
				if (this.item.home || this.item.sequare || this.item.live) {
					return false;
				}
				return true;
			}
		},
		methods: {
			changeContent: function changeContent(index) {
				if (index === 0) {
					this.$router.push({
						path: '/home'
					});
				} else {
					this.$router.push({
						path: '/channel/' + index
					});
				}
			}
		}
	};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _echarts = __webpack_require__(54);
	
	var echarts = _interopRequireWildcard(_echarts);
	
	var _moment = __webpack_require__(1);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	    props: {
	        dm: {
	            type: Array
	        }
	    },
	    data: function data() {
	        return {
	            myChart: {},
	            date: [],
	            data: [],
	            option: {
	                tooltip: {
	                    trigger: 'axis',
	                    position: function position(pt) {
	                        return [pt[0], '10%'];
	                    }
	                },
	                title: {
	                    left: 'center',
	                    text: '弹幕分布'
	                },
	                toolbox: {
	                    feature: {
	                        dataZoom: {
	                            yAxisIndex: 'none'
	                        },
	                        restore: {},
	                        saveAsImage: {}
	                    }
	                },
	                xAxis: {
	                    type: 'category',
	                    boundaryGap: false,
	                    data: []
	                },
	                yAxis: {
	                    type: 'value',
	                    boundaryGap: [0, '100%']
	                },
	                dataZoom: [{
	                    type: 'inside',
	                    start: 0,
	                    end: 50
	                }, {
	                    start: 0,
	                    end: 50
	                }],
	                series: [{
	                    name: '个数',
	                    type: 'line',
	                    symbol: 'none',
	                    sampling: 'lttb',
	                    itemStyle: {
	                        color: 'rgb(255, 70, 131)'
	                    },
	                    areaStyle: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgb(255, 158, 68)'
	                        }, {
	                            offset: 1,
	                            color: 'rgb(255, 70, 131)'
	                        }])
	                    },
	                    data: []
	                }]
	            }
	        };
	    },
	
	    methods: {
	        chartInit: function chartInit() {
	            this.option.xAxis.data = this.dm[0].dmtime.index.map(function (i) {
	                var duration = _moment2.default.duration(i * 1000);
	                var t = duration.get('hours') + ":" + duration.get("minutes") + ":" + duration.get('seconds');
	                return t;
	            });
	
	            this.myChart = echarts.init(document.getElementById("dmline"));
	        },
	        setcharOption: function setcharOption(option) {
	            this.myChart.setOption(option);
	            return this;
	        },
	        setOption: function setOption() {
	            var series = [];
	            for (var i = 0; i < this.dm.length; i++) {
	                var colormap = this.handleColors(i);
	                var tmp = {
	                    name: this.dm[i].time,
	                    type: 'line',
	                    symbol: 'none',
	                    sampling: 'lttb',
	                    itemStyle: {
	                        color: colormap[0]
	                    },
	                    areaStyle: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: colormap[1]
	                        }, {
	                            offset: 1,
	                            color: colormap[0]
	                        }])
	                    },
	                    data: this.dm[i].dmtime.times
	
	                };
	                series.push(tmp);
	            }
	
	            return series;
	        },
	        handleColors: function handleColors(i) {
	            var color = [];
	
	            var r = Math.floor(255 - 30 * i % 255);
	            var g = Math.floor(70 + 20 * i % 255);
	            var b = Math.floor(131 - 20 * i % 255);
	            color.push("rgb(" + r + "," + g + "," + b + ")");
	            color.push("rgb(" + (r - Math.random() * 10) + "," + (g - Math.random() * 50) + "," + (b - Math.random() * 50) + ")");
	            return color;
	        }
	    },
	    mounted: function mounted() {
	        this.chartInit();
	        this.setcharOption(this.option);
	    },
	
	
	    watch: {
	        dm: {
	            handler: function handler() {
	
	                this.myChart.setOption({
	                    series: this.setOption()
	                });
	            }
	        }
	    }
	
	};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _echarts = __webpack_require__(54);
	
	var echarts = _interopRequireWildcard(_echarts);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	    props: {
	        videoInfo: {
	            type: Object
	        }
	    },
	    data: function data() {
	        return {
	            myChart: {},
	            option: {
	                tooltip: {
	                    trigger: 'axis',
	                    axisPointer: {
	                        type: 'shadow'
	                    }
	                },
	                title: {
	                    left: 'center',
	                    text: '视频数据'
	                },
	                color: ['#65B581', '#FFCE34', '#FD665F'],
	                legend: {
	                    data: ['视频数据']
	                },
	                grid: {
	                    left: '3%',
	                    right: '4%',
	                    bottom: '3%',
	                    containLabel: true
	                },
	                xAxis: {
	                    type: 'value',
	                    boundaryGap: [0, 0.01]
	                },
	                yAxis: {
	                    type: 'category',
	                    data: ['分享', '收藏', '投币', '点赞', '播放']
	                },
	                toolbox: {
	                    feature: {
	                        dataZoom: {
	                            yAxisIndex: 'none'
	                        },
	                        restore: {},
	                        saveAsImage: {}
	                    }
	                },
	                series: [{
	                    type: 'bar',
	                    symbol: 'none',
	
	                    data: []
	                }]
	            }
	        };
	    },
	
	    methods: {
	        chartInit: function chartInit() {
	            this.myChart = echarts.init(document.getElementById("vbar"));
	            return this;
	        },
	        setcharOption: function setcharOption(option) {
	            this.myChart.setOption(option);
	            return this;
	        },
	        setOption: function setOption() {
	            if (!this.videoInfo.stat) {
	                return [];
	            }
	            var option = {
	                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
	                data: [this.videoInfo.stat.reply, this.videoInfo.stat.favorite, this.videoInfo.stat.coin, this.videoInfo.stat.like, this.videoInfo.stat.view]
	            };
	            return option.data;
	        }
	    },
	    mounted: function mounted() {
	        this.chartInit();
	        this.setcharOption(this.option);
	        this.setcharOption(this.setOption());
	    },
	
	
	    watch: {
	        videoInfo: {
	            handler: function handler() {
	
	                this.setcharOption({
	                    series: [{
	                        data: this.setOption()
	                    }]
	                });
	            }
	        }
	    }
	};

/***/ }),
/* 248 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 249 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PostMaterial = __webpack_require__(408);
	
	var _PostMaterial2 = _interopRequireDefault(_PostMaterial);
	
	var _login = __webpack_require__(424);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      isShowPostMenu: false,
	      loginShow: false
	    };
	  },
	
	  components: {
	    PostMaterial: _PostMaterial2.default,
	    login: _login2.default
	  },
	  methods: {
	    showPostMenu: function showPostMenu() {
	      this.isShowPostMenu = !this.isShowPostMenu;
	    },
	    _loginShow: function _loginShow() {
	      if (!this.loginShow) {
	        this.loginShow = true;
	      }
	    },
	    _loginDis: function _loginDis() {
	      if (this.loginShow) {
	        this.loginShow = false;
	      }
	    }
	  }
	};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _echarts = __webpack_require__(54);
	
	var echarts = _interopRequireWildcard(_echarts);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  props: {
	    videoInfo: {
	      type: Object
	    }
	  },
	  data: function data() {
	    return {
	      myChart: {},
	      option: {
	        tooltip: {
	          trigger: "item"
	
	        },
	        legend: {
	          top: "5%",
	          left: "center"
	
	        },
	        series: [{
	
	          type: "pie",
	          radius: ["40%", "70%"],
	          avoidLabelOverlap: false,
	          top: '10%',
	          itemStyle: {
	            borderRadius: 5,
	            borderColor: "#fff",
	            borderWidth: 2
	          },
	          tooltip: {
	            formatter: '{b}: {c} ({d}%)'
	          },
	          label: {
	            show: false,
	            position: "center"
	          },
	          emphasis: {
	            label: {
	              show: true,
	              fontSize: "20",
	              fontWeight: "bold"
	
	            }
	          },
	          labelLine: {
	            show: false
	          },
	          color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	            offset: 0,
	            color: '#FF6600'
	          }, {
	            offset: 1,
	            color: '#FF6633'
	          }]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	            offset: 0,
	            color: '#FF6633'
	          }, {
	            offset: 1,
	            color: '#FF6666'
	          }]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	            offset: 0,
	            color: '#FF6666'
	          }, {
	            offset: 1,
	            color: '#FF6699'
	          }]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	            offset: 0,
	            color: '#FF6699'
	          }, {
	            offset: 1,
	            color: '#FF66CC'
	          }])],
	          data: []
	        }]
	      }
	    };
	  },
	
	  methods: {
	    chartInit: function chartInit() {
	      this.myChart = echarts.init(document.getElementById("epie"));
	      return this;
	    },
	    setcharOption: function setcharOption(option) {
	      this.myChart.setOption(option);
	      return this;
	    },
	    setOption: function setOption() {
	      if (!this.videoInfo.stat) {
	        return [];
	      }
	      var option = {
	        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
	        categories: ['投币', '点赞', '收藏', '转发'],
	        data: [this.videoInfo.stat.coin, this.videoInfo.stat.like, this.videoInfo.stat.favorite, this.videoInfo.stat.reply]
	      };
	      var tmp = [];
	      for (var i = 0; i < option.categories.length; i++) {
	        var k = { value: option.data[i], name: option.categories[i] };
	        tmp.push(k);
	      }
	
	      return tmp;
	    }
	  },
	  mounted: function mounted() {
	    this.chartInit();
	    this.setcharOption(this.option);
	    this.setcharOption(this.setOption());
	  },
	
	
	  watch: {
	    videoInfo: {
	      handler: function handler() {
	
	        this.setcharOption({
	          series: [{
	            data: this.setOption()
	          }]
	        });
	      }
	    }
	  }
	};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _BRowHead = __webpack_require__(412);
	
	var _BRowHead2 = _interopRequireDefault(_BRowHead);
	
	var _BRowBody = __webpack_require__(411);
	
	var _BRowBody2 = _interopRequireDefault(_BRowBody);
	
	var _BRowRank = __webpack_require__(414);
	
	var _BRowRank2 = _interopRequireDefault(_BRowRank);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			category: {
				type: String
			},
			row: {
				type: Array
			},
			categoryId: {
				type: Number
			},
			name: {
				type: String
			},
			index: {
				type: Number
			}
		},
		computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'ranks', 'rank'])),
		mounted: function mounted() {},
	
		components: {
			BRowHead: _BRowHead2.default,
			BRowBody: _BRowBody2.default,
			BRowRank: _BRowRank2.default
		}
	};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _BRowItem = __webpack_require__(413);
	
	var _BRowItem2 = _interopRequireDefault(_BRowItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			row: {
				type: Array
			}
		},
		components: {
			BRowItem: _BRowItem2.default
		}
	};

/***/ }),
/* 254 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			category: {
				type: String
			},
			name: {
				type: String
			},
			index: {
				type: Number
			}
		},
		data: function data() {
			return {
				picClass: ['douga', 'bangumi', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ad', 'ent', 'movie', 'teleplay']
			};
		},
	
		computed: {
			title: function title() {
				var title = '未知标题';
	
				if (this.name) {
					title = this.name;
				}
				return title;
			}
		}
	};

/***/ }),
/* 255 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			item: {
				type: Object
			}
		},
		data: function data() {
			return {
				view: String
			};
		},
		mounted: function mounted() {
			this.view = this.iniView(this.item.stat.view);
		},
	
		methods: {
			selectItem: function selectItem(bvid) {
				this.$router.push({ path: '/video/' + bvid });
			},
			iniView: function iniView(inNum) {
				var str;
	
				if (inNum < 10000) {
					str = inNum.toString();
				} else {
					str = parseFloat(inNum / 10000).toFixed(1).toString();
					str = str + '万';
				}
				return str;
			}
		}
	};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _BRowRankBody = __webpack_require__(415);
	
	var _BRowRankBody2 = _interopRequireDefault(_BRowRankBody);
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			categoryId: {
				type: Number
			}
		},
		data: function data() {
			return {
				isSelected1: true,
				isSelected2: false,
				selectedTitle: '三日',
				isOrigin: false,
				isWeek: false };
		},
	
		components: {
			BRowRankBody: _BRowRankBody2.default
		},
		methods: {
			selectedItem1: function selectedItem1() {
				this.selectedTitle = '三日';
				this.isSelected1 = true;
				this.isSelected2 = false;
				this.isWeek = false;
			},
			selectedItem2: function selectedItem2() {
				this.selectedTitle = '一周';
				this.isSelected1 = false;
				this.isSelected2 = true;
				this.isWeek = true;
			},
			hot: function hot() {
				this.isOrigin = false;
			},
			original: function original() {
				this.isOrigin = true;
			}
		}
	};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(299);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _api = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      threeDayData: {},
	      weekData: {},
	      rank: {}
	    };
	  },
	
	  props: {
	    categoryId: {
	      type: Number
	    },
	    isOrigin: {
	      type: Boolean
	    },
	    isWeek: {
	      type: Boolean
	    }
	  },
	  watch: {
	    isOrigin: function isOrigin(val, oldVal) {
	      console.log(this.isWeek);
	      if (val) {
	        console.log("isOrigin");
	        this.$refs.listWrapper.style.marginLeft = "-100%";
	      } else {
	        this.$refs.listWrapper.style.marginLeft = "0%";
	      }
	    },
	    isWeek: function isWeek(val, oldVal) {
	      console.log("change");
	      this.getrankData();
	    }
	  },
	  mounted: function mounted() {
	    this.getrankData();
	  },
	
	  methods: {
	    getrankData: function getrankData() {
	      var _this = this;
	
	      if (this.isWeek && (0, _stringify2.default)(this.weekData) !== "{}") {
	        this.rank = this.weekData;
	        return;
	      }
	      if (!this.isWeek && (0, _stringify2.default)(this.threeDayData) !== "{}") {
	        this.rank = this.threeDayData;
	        return;
	      }
	
	      var param = {
	        rid: this.categoryId
	      };
	      if (this.isWeek) {
	        _api.contentrankApi.contentrankweek(param).then(function (response) {
	          _this.weekData = response;
	          _this.rank = _this.weekData;
	        });
	      } else {
	        _api.contentrankApi.contentrank(param).then(function (response) {
	          _this.threeDayData = response;
	          _this.rank = _this.threeDayData;
	        });
	      }
	    },
	    selectItem: function selectItem(bvid) {
	      this.$router.push({ path: "/video/" + bvid });
	    }
	  }
	};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _BContentTopItem = __webpack_require__(416);
	
	var _BContentTopItem2 = _interopRequireDefault(_BContentTopItem);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				now: 0,
				pre: '',
				next: ''
			};
		},
	
		computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'ranklist'])),
		mounted: function mounted() {
			this.$store.dispatch('ranklist');
		},
	
		components: {
			BContentTopItem: _BContentTopItem2.default
		}
	};

/***/ }),
/* 259 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			contentTop: {
				type: Object
			}
		}
	};

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Banner = __webpack_require__(214);
	
	var _Banner2 = _interopRequireDefault(_Banner);
	
	var _BContentTop = __webpack_require__(217);
	
	var _BContentTop2 = _interopRequireDefault(_BContentTop);
	
	var _BPromote = __webpack_require__(220);
	
	var _BPromote2 = _interopRequireDefault(_BPromote);
	
	var _BLive = __webpack_require__(218);
	
	var _BLive2 = _interopRequireDefault(_BLive);
	
	var _BContentRow = __webpack_require__(216);
	
	var _BContentRow2 = _interopRequireDefault(_BContentRow);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			rows: {
				type: Array
			}
		},
		components: {
			Banner: _Banner2.default,
			BContentTop: _BContentTop2.default,
			BPromote: _BPromote2.default,
			BLive: _BLive2.default,
			BContentRow: _BContentRow2.default
		}
	};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _values = __webpack_require__(37);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _Banner = __webpack_require__(214);
	
	var _Banner2 = _interopRequireDefault(_Banner);
	
	var _BContentTop = __webpack_require__(217);
	
	var _BContentTop2 = _interopRequireDefault(_BContentTop);
	
	var _BPromote = __webpack_require__(220);
	
	var _BPromote2 = _interopRequireDefault(_BPromote);
	
	var _BLive = __webpack_require__(218);
	
	var _BLive2 = _interopRequireDefault(_BLive);
	
	var _BContentRow = __webpack_require__(216);
	
	var _BContentRow2 = _interopRequireDefault(_BContentRow);
	
	var _index = __webpack_require__(15);
	
	var _config = __webpack_require__(26);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      rows: [],
	      index: 1,
	      regionTags: _config.regionTags,
	      componentKey: 0
	    };
	  },
	  create: function create() {
	    this.getrouterindex();
	
	    this.getrows();
	  },
	  mounted: function mounted() {
	    this.getrouterindex();
	
	    this.getrows();
	  },
	
	  methods: {
	    getrouterindex: function getrouterindex() {
	      this.index = this.$route.params.index;
	    },
	    forceRerender: function forceRerender() {},
	    getrows: function getrows() {
	      var _this = this;
	
	      var rid = _config.regionTags[this.index].key;
	      var blocks = _config.regionTags[this.index].blocks;
	      this.rows = [];
	
	      var _loop = function _loop(i) {
	        var block = blocks[i];
	        var category = block.sortKeys;
	        _index.regionApi.getRegion(15, block.key).then(function (response) {
	          var resp = response.data;
	          var rowItem = {
	            category: category,
	            categoryId: block.key,
	            name: block.name,
	            b_id: "b_" + category,
	            item: (0, _values2.default)(resp["archives"])
	          };
	          _this.rows.push(rowItem);
	        }, function (error) {
	          console.log(error);
	        });
	      };
	
	      for (var i = 1; i < blocks.length; i++) {
	        _loop(i);
	      }
	    }
	  },
	  watch: {
	    '$route': function $route() {
	      var _this2 = this;
	
	      var routeIndex = this.$route.params.index;
	      if (this.indexTab !== index) {
	        this.getrouterindex();
	        this.regionList = [];
	        setTimeout(function () {
	          _this2.getrows();
	          _this2.forceRerender();
	        }, 20);
	      }
	    }
	  },
	  props: {},
	  components: {
	    Banner: _Banner2.default,
	    BContentTop: _BContentTop2.default,
	    BPromote: _BPromote2.default,
	    BLive: _BLive2.default,
	    BContentRow: _BContentRow2.default
	  }
	};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _BContent = __webpack_require__(417);
	
	var _BContent2 = _interopRequireDefault(_BContent);
	
	var _BNavSide = __webpack_require__(219);
	
	var _BNavSide2 = _interopRequireDefault(_BNavSide);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'home',
	  components: {
	    BContent: _BContent2.default,
	    BNavSide: _BNavSide2.default
	  },
	  mounted: function mounted() {
	    this.$store.dispatch('getContentRows');
	  },
	  data: function data() {
	    return {
	      showMask: false
	    };
	  },
	
	  watch: {
	    options: function options() {
	      console.log('options 变化了');
	    },
	    items: function items() {
	      console.log('items 变化了');
	    }
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'rows']), {
	    options: function options() {
	      var options = {
	        offset: 100,
	        items: this.rows,
	        offsetTop: 0 };
	      return options;
	    }
	  }),
	  methods: {
	    isShowMask: function isShowMask() {
	      this.showMask = !this.showMask;
	    }
	  }
	};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _TopContainer = __webpack_require__(55);
	
	var _TopContainer2 = _interopRequireDefault(_TopContainer);
	
	var _BHeader = __webpack_require__(215);
	
	var _BHeader2 = _interopRequireDefault(_BHeader);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'index',
	  components: {
	    TopContainer: _TopContainer2.default,
	    BHeader: _BHeader2.default
	  },
	  watch: {
	    options: function options() {
	      console.log('options 变化了');
	    },
	    items: function items() {
	      console.log('items 变化了');
	    }
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'rows']), {
	    options: function options() {
	      var options = {
	        offset: 100,
	        items: this.rows,
	        offsetTop: 0 };
	      return options;
	    }
	  }),
	  methods: {
	    isShowMask: function isShowMask() {
	      this.showMask = !this.showMask;
	    }
	  }
	};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _BLiveItem = __webpack_require__(421);
	
	var _BLiveItem2 = _interopRequireDefault(_BLiveItem);
	
	var _BLiveRank = __webpack_require__(422);
	
	var _BLiveRank2 = _interopRequireDefault(_BLiveRank);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		components: {
			BLiveItem: _BLiveItem2.default,
			BLiveRank: _BLiveRank2.default
		},
		computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'online_total', 'dynamic', 'recommend', 'ranking', 'preview', 'recommendAnchor'])),
		mounted: function mounted() {
			this.$store.dispatch('live');
		}
	};

/***/ }),
/* 265 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			live: {
				type: Object
			}
		}
	};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _BLiveRankItem = __webpack_require__(423);
	
	var _BLiveRankItem2 = _interopRequireDefault(_BLiveRankItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				interval: Function,
				count: 0,
				tabCount: 0,
				tabTitle: ['直播排行', '关注的主播', '为你推荐']
			};
		},
	
		props: {
			ranklist: {
				type: Array
			},
			preview: {
				type: Array
			},
			recommendAnchor: {
				type: Array
			}
		},
		watch: {
			preview: function preview() {
				if (this.preview) {
					var size = 100 * this.preview.length;
					var width = size + "%";
					this.$refs.miniPreview.style.width = width;
					this.startInterval();
				}
			}
		},
		mounted: function mounted() {},
	
		methods: {
			cutItem: function cutItem(index) {
				this.count = index;
				var distance = -100 * this.count;
				var left = distance + "%";
				this.$refs.miniPreview.style.marginLeft = left;
				clearInterval(this.interval);
				this.startInterval();
			},
			startInterval: function startInterval() {
				var _this = this;
	
				this.interval = setInterval(function () {
					_this.count++;
					if (_this.count === _this.preview.length) {
						_this.count = 0;
					}
					var distance = -100 * _this.count;
					var left = distance + "%";
					if (_this.$refs.miniPreview) {
						_this.$refs.miniPreview.style.marginLeft = left;
					}
				}, 5000);
			},
			cutTab: function cutTab(index) {
				this.tabCount = index;
				var distance = -100 * this.tabCount;
				var left = distance + "%";
				this.$refs.listWrapper.style.marginLeft = left;
			}
		},
		components: {
			BLiveRankItem: _BLiveRankItem2.default
		}
	};

/***/ }),
/* 267 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			rank: {
				type: Object
			},
			index: {}
		},
		computed: {
			online: function online() {
				return (this.rank.online / 10000).toFixed(1);
			}
		}
	};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            value18: "",
	            upStates: null,
	            cookstatus: "",
	            result: ""
	        };
	    },
	
	    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(["login", "logout"]), {
	        getResult: function getResult() {
	            if (this.upStates === "sucess") {
	                return "cokkies上传成功";
	            } else if (this.upStates === null) {
	                return "";
	            } else if (this.upStates === "fail") {
	                return "cokkies上传失败";
	            } else if (this.upStates === "blank") {
	                return "cokkies不能为空";
	            } else {
	                return "";
	            }
	        }
	    }),
	
	    methods: {
	        uploadcook: function uploadcook() {
	            var _this = this;
	
	            if (this.value18 == "") {
	                this.upStates = "blank";
	                return;
	            }
	            this.$store.dispatch('login', this.value18).then(function (res) {
	                _this.upStates = "sucess";
	                _this.cookstatus = res.message;
	            }, function (error) {
	                console.log(error);
	                _this.upStates = "fail";
	                _this.cookstatus = error.message;
	            });
	        },
	        delcook: function delcook() {
	            this.$store.dispatch('logout');
	            this.upStates = null;
	        }
	    }
	};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _from = __webpack_require__(297);
	
	var _from2 = _interopRequireDefault(_from);
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _smoothScroll = __webpack_require__(281);
	
	var _smoothScroll2 = _interopRequireDefault(_smoothScroll);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		mixins: [_smoothScroll2.default],
		data: function data() {
			return {
				current: 0,
				data: [],
				time: 800,
				height: 32,
				isSort: false,
				scrollTop: 0,
				dragId: 0,
				isDrag: false,
				offsetX: 0,
				offsetY: 0,
				x: 0,
				y: 0 };
		},
	
		props: {
			options: {
				type: Object
			}
		},
		watch: {
			options: {
				deep: true,
				handler: function handler(newVal, oldVal) {
					this.initData();
				}
			},
			rows: function rows() {
				console.log('rows 变化');
				if (this.rows && this.rows.length > 0) {
					console.log('rows存在:' + this.rows[0]);
					this.init();
				}
			}
		},
		computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'rows', 'sortKeys', 'sortIds']), {
			offset: function offset() {
				return this.options.offset || 100;
			},
			dragStyles: function dragStyles() {
				return {
					left: this.x + 'px',
					top: this.y + 'px'
				};
			},
			replaceItem: function replaceItem() {
				var id = Math.floor(this.y / this.height);
				if (id > this.data.length - 1) id = this.data.length;
				if (id < 0) id = 0;
				return id;
			}
		}),
		mounted: function mounted() {
			if (!this.rows || this.rows.length === 0) {
				console.log('rows不存在');
				return;
			}
			this.init();
		},
	
		methods: {
			init: function init() {
				this.initData();
				this.bindEvent();
				this._screenHeight = window.screen.availHeight;
				this._left = this.$refs.list.getBoundingClientRect().left;
				this._top = this.$refs.list.getBoundingClientRect().top;
			},
			bindEvent: function bindEvent() {
				document.addEventListener('scroll', this.scroll, false);
				document.addEventListener('mousemove', this.dragMove, false);
				document.addEventListener('mouseup', this.dragEnd, false);
				document.addEventListener('mouseleave', this.dragEnd, false);
			},
			initData: function initData() {
				var _this = this;
	
				this.data = (0, _from2.default)(this.options.items, function (item) {
					var element = document.getElementById(item.b_id);
					if (!element) {
						console.error('can not find element of name is ' + item.b_id);
						return;
					}
					var offsetTop = _this.getOffsetTop(element);
					return {
						name: item.name,
						element: element,
						offsetTop: offsetTop,
						height: element.offsetHeight
					};
				});
			},
			setEnable: function setEnable(index) {
				if (index === this.current) {
					return false;
				}
				this.current = index;
				var target = this.data[index].element;
				this.scrollToElem(target, this.time, this.offset || 0).then(function () {});
			},
			getOffsetTop: function getOffsetTop(element) {
				var top = void 0,
				    clientTop = void 0,
				    clientLeft = void 0,
				    scrollTop = void 0,
				    scrollLeft = void 0,
				    doc = document.documentElement,
				    body = document.body;
				if (typeof element.getBoundingClientRect !== "undefined") {
					top = element.getBoundingClientRect().top;
				} else {
					top = 0;
				}
				clientTop = doc.clientTop || body.clientTop || 0;
				scrollTop = window.pageYOffset || doc.scrollTop;
				return top + scrollTop - clientTop;
			},
			sort: function sort() {
				this.isSort = !this.isSort;
				this.$emit('change');
			},
			getPos: function getPos(e) {
				this.x = e.clientX - this._left - this.offsetX;
				this.y = e.clientY - this._top - this.offsetY;
			},
			scroll: function scroll(e) {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop + document.body.scrollTop;
				if (this.scrollTop >= 300) {
					this.$refs.navSide.style.top = "0px";
					this.init();
				} else {
					this.$refs.navSide.style.top = "240px";
					this.init();
				}
				console.log('距离顶部' + this.scrollTop);
				for (var i = 0; i < this.data.length; i++) {
					if (this.scrollTop >= this.data[i].offsetTop - this.offset) {
						this.current = i;
					}
				}
			},
			dragStart: function dragStart(e, i) {
				if (!this.isSort) return false;
				this.current = i;
				this.isDrag = true;
				this.dragId = i;
				this.offsetX = e.offsetX;
				this.offsetY = e.offsetY;
				this.getPos(e);
			},
			dragMove: function dragMove(e) {
				if (this.isDrag) {
					this.getPos(e);
				}
				e.preventDefault();
			},
			dragEnd: function dragEnd(e) {
				if (this.isDrag) {
					this.isDrag = false;
					if (this.replaceItem !== this.dragId) {
						this.options.items.splice(this.replaceItem, 0, this.options.items.splice(this.dragId, 1)[0]);
					} else {
						this.setEnable(this.dragId, true);
					}
				}
			}
		}
	};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _BPromoteItem = __webpack_require__(425);
	
	var _BPromoteItem2 = _interopRequireDefault(_BPromoteItem);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		components: {
			BPromoteItem: _BPromoteItem2.default
		},
		computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'promotelist', 'promoteAd'])),
		mounted: function mounted() {
			this.$store.dispatch('promote');
		}
	};

/***/ }),
/* 271 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			promoteItem: {
				type: Object
			}
		}
	};

/***/ }),
/* 272 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TopContainer = __webpack_require__(55);
	
	var _TopContainer2 = _interopRequireDefault(_TopContainer);
	
	var _viewbar = __webpack_require__(407);
	
	var _viewbar2 = _interopRequireDefault(_viewbar);
	
	var _dmline = __webpack_require__(406);
	
	var _dmline2 = _interopRequireDefault(_dmline);
	
	var _moment = __webpack_require__(1);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _video = __webpack_require__(27);
	
	var _timselect = __webpack_require__(426);
	
	var _timselect2 = _interopRequireDefault(_timselect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      bvid: {},
	      videoInfo: {},
	      dm: { getFlag: true, dmData: [] },
	      dmcloudimg: "",
	      getdmdate: {},
	      productList: [{ title: "最近一个月", id: 1 }, { title: "最初一个月", id: 3 }, { title: "自定义", id: 4 }],
	      ProductActive: {}
	
	    };
	  },
	
	  components: {
	    TopContainer: _TopContainer2.default,
	    viewbar: _viewbar2.default,
	    moment: _moment2.default,
	    dmline: _dmline2.default
	  },
	  filters: {
	    iniView: function iniView(inNum) {
	      var str;
	      if (inNum == undefined) {
	        return inNum;
	      }
	      if (inNum < 10000) {
	        str = inNum.toString();
	      } else {
	        str = parseFloat(inNum / 10000).toFixed(1).toString();
	        str = str + "万";
	      }
	      return str;
	    }
	  },
	  created: function created() {
	    this.bvid = this.$route.params.bvid;
	    this._getVideoInfo();
	    this.ProductActive = this.productList[0];
	  },
	
	  computed: {
	    reversedMessage: function reversedMessage() {
	      if (this.ProductActive.id == 1) {
	        console.log("11111111111111sdjahgfjaksldhgjkalhfgjdkhakjdhg");
	      }
	    }
	  },
	  watch: {
	    ProductActive: {
	      handler: function handler(item1, item2) {
	        if (item1.id === 4) {}
	      },
	
	      deep: true
	
	    }
	  },
	  methods: {
	    _getVideoInfo: function _getVideoInfo() {
	      var _this = this;
	
	      (0, _video.getVideoInfo)(this.bvid).then(function (res) {
	        {
	          _this.videoInfo = res.data;
	        }
	      }, function (error) {
	        console.log(error);
	      });
	    },
	    getDm: function getDm(startTime, days) {
	      var _this2 = this;
	
	      if (this.getFlag) {
	
	        (0, _video.getVideoDataInfo)(this.bvid, 'dm', this.videoInfo.cid, startTime.format("YYYY-MM-DD")).then(function (res) {
	          {
	            _this2.dm.dmData.push(res.data);
	            startTime = startTime.add(1, "d");
	
	            days = days - 1;
	            _this2.dmcloudimg = _this2.creatDmCloud(_this2.dm.dmData[0].dmtime.dmcloud);
	            if (days <= 0) {
	              _this2.getFlag = false;
	              return;
	            } else _this2.getDm(startTime, days);
	          }
	        }, function (error) {
	          _this2.Flag = false;
	          console.log(error);
	        });
	      }
	    },
	    changeProduct: function changeProduct(ProductActive) {
	      return productList[ProductActive];
	    },
	    changeflag: function changeflag() {},
	    creatdm: function creatdm() {
	      var aData = new Date();
	      this.getFlag = true;
	      var startTime = (0, _moment2.default)(aData).subtract(3, "d");
	      this.getDm(startTime, 2);
	    },
	    cancledm: function cancledm() {
	      this.getFlag = false;
	      console.log('cancledm');
	    },
	    creatDmCloud: function creatDmCloud(res) {
	      var byteString = atob(res);
	      var arrayBuffer = new ArrayBuffer(byteString.length);
	      var intArray = new Uint8Array(arrayBuffer);
	
	      for (var i = 0; i < byteString.length; i++) {
	        intArray[i] = byteString.charCodeAt(i);
	      }
	      var blob = new Blob([intArray]);
	      var url = URL.createObjectURL(blob);
	      return url;
	    }
	  }
	
	};

/***/ }),
/* 274 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			item: {
				type: Object
			}
		},
		data: function data() {
			return {
				view: String
			};
		},
		mounted: function mounted() {
			this.view = this.iniView(this.item.stat.view);
		},
	
		methods: {
			selectItem: function selectItem(bvid) {
				this.$router.push({ path: '/video/' + bvid });
			},
			iniView: function iniView(inNum) {
				var str;
	
				if (inNum < 10000) {
					str = inNum.toString();
				} else {
					str = parseFloat(inNum / 10000).toFixed(1).toString();
					str = str + '万';
				}
				return str;
			}
		},
		computed: {
			hreflink: function hreflink() {
				return 'http://www.bilibili.com/video/av' + this.item.aid;
			}
		}
	};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(282);
	
	exports.default = {
	  props: {
	    list: {
	      type: Array
	    }
	  },
	  data: function data() {
	    return { commentList: this.list.slice(0, 10) };
	  },
	  created: function created() {
	    console.log(this.list);
	  },
	
	  filters: {
	    formatNumber: function formatNumber(num) {
	      return (0, _util.formatNumber)(num);
	    },
	    formatDate: function formatDate(time) {
	      return (0, _util.formatDate)(time, 'MM-dd');
	    }
	  }
	};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _LRowItem = __webpack_require__(428);
	
	var _LRowItem2 = _interopRequireDefault(_LRowItem);
	
	var _epie = __webpack_require__(410);
	
	var _epie2 = _interopRequireDefault(_epie);
	
	var _video = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      mailImg: "src/fonts/mail.svg",
	      downLoadInfo: {}
	    };
	  },
	
	  props: {
	    upInfo: {
	      type: Object
	    },
	    recommendList: {
	      type: Array
	    },
	    videoInfo: {
	      type: Object
	    },
	    bvid: {
	      type: String
	    }
	  },
	  components: {
	    LRowItem: _LRowItem2.default,
	    epie: _epie2.default
	  },
	  methods: {
	    _downloadVideoInfo: function _downloadVideoInfo() {
	      var _this = this;
	
	      (0, _video.downloadVideoInfo)(this.bvid).then(function (res) {
	        _this.downLoadInfo = res.data;
	        console.log(_this.downLoadInfo);
	      });
	    },
	    isEnable: function isEnable(enable) {
	      var str = 'btnEnable';
	      if (!enable) {
	        str = 'btnUnable';
	      }
	      return str;
	    },
	    toVideoInfo: function toVideoInfo() {
	      this.$router.push({
	        path: "/videoinfo/" + this.bvid
	      });
	    }
	  }
	};

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _video = __webpack_require__(27);
	
	var _moment = __webpack_require__(1);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _comment = __webpack_require__(429);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _videoTollBar = __webpack_require__(432);
	
	var _videoTollBar2 = _interopRequireDefault(_videoTollBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    videoInfo: {
	      type: Object
	    },
	    fold: {
	      type: Boolean
	    },
	    bvid: {
	      type: String
	    },
	    commentList: {
	      type: Array
	    },
	    statCount: {
	      type: Object
	    }
	
	  },
	  computed: {
	    playerSrc: function playerSrc() {
	      return "https://player.bilibili.com/player.html?aid=" + this.videoInfo.aid + "&bvid=" + this.bvid + "&cid=" + this.videoInfo.cid + "&page=1";
	    }
	  },
	  created: function created() {
	    this.bounce = false;
	  },
	
	
	  filters: {
	    iniView: function iniView(inNum) {
	      var str;
	      if (inNum == undefined) {
	        return inNum;
	      }
	      if (inNum < 10000) {
	        str = inNum.toString();
	      } else {
	        str = parseFloat(inNum / 10000).toFixed(1).toString();
	        str = str + "万";
	      }
	      return str;
	    }
	  },
	  methods: {
	    back: function back() {
	      this.$router.go(-1);
	    },
	    selectItem: function selectItem(item) {
	      this.$refs.content.scrollTo(0, 0);
	      this.$router.push({ name: "video", params: { bvid: item.bvid } });
	    },
	    dateForma: function dateForma(date) {
	      date = date * 1000;
	      if (date == undefined) {
	        return "";
	      }
	
	      console.log((0, _moment2.default)(date).format("YYYY-MM-DD HH:mm:ss"));
	      return (0, _moment2.default)(date).format("YYYY-MM-DD HH:mm:ss");
	    }
	  },
	  components: {
	    moment: _moment2.default,
	    comment: _comment2.default,
	    videoTollBar: _videoTollBar2.default
	  }
	};

/***/ }),
/* 278 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        statCount: {
	            type: Object
	        }
	    },
	    filters: {
	        iniView: function iniView(inNum) {
	            var str;
	            if (inNum == undefined) {
	                return inNum;
	            }
	            if (inNum < 10000) {
	                str = inNum.toString();
	            } else {
	                str = parseFloat(inNum / 10000).toFixed(1).toString();
	                str = str + "万";
	            }
	            return str;
	        }
	    }
	};

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _TopContainer = __webpack_require__(55);
	
	var _TopContainer2 = _interopRequireDefault(_TopContainer);
	
	var _BHeader = __webpack_require__(215);
	
	var _BHeader2 = _interopRequireDefault(_BHeader);
	
	var _video = __webpack_require__(27);
	
	var _videoL = __webpack_require__(430);
	
	var _videoL2 = _interopRequireDefault(_videoL);
	
	var _videoR = __webpack_require__(431);
	
	var _videoR2 = _interopRequireDefault(_videoR);
	
	var _vuex = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'videopage',
	  data: function data() {
	    return {
	      bvid: {},
	      videoInfo: {},
	      upInfo: {},
	      statCount: {},
	      fold: true,
	      indexTab: 0,
	      switchList: [],
	      recommendList: [],
	      commentList: [],
	      tagsList: []
	    };
	  },
	
	  components: {
	    TopContainer: _TopContainer2.default,
	    BHeader: _BHeader2.default,
	    videoL: _videoL2.default,
	    videoR: _videoR2.default
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['requesting', 'error', 'rows']), {
	    options: function options() {
	      var options = {
	        offset: 100,
	        items: this.rows,
	        offsetTop: 0 };
	      return options;
	    }
	  }),
	  created: function created() {
	    this.bvid = this.$route.params.bvid;
	    this._getVideoInfo();
	  },
	
	  methods: {
	    _getVideoInfo: function _getVideoInfo() {
	      var _this = this;
	
	      (0, _video.getVideoInfo)(this.bvid).then(function (res) {
	        {
	          _this.videoInfo = res.data;
	          _this.upInfo = res.data.owner;
	          _this.statCount = res.data.stat;
	        }
	      }, function (error) {
	        console.log(error);
	      });
	      this._getRecommend();
	      this._getComment();
	      this._getTags();
	    },
	    _getRecommend: function _getRecommend() {
	      var _this2 = this;
	
	      (0, _video.getRecommend)(this.bvid).then(function (res) {
	        _this2.recommendList = res.data;
	      }, function (error) {
	        console.log(error);
	      });
	    },
	    _getComment: function _getComment() {
	      var _this3 = this;
	
	      (0, _video.getComment)(this.bvid).then(function (res) {
	        {
	          _this3.commentList = res.data.replies;
	        }
	      }, function (error) {
	        console.log(error);
	      });
	    },
	    _getTags: function _getTags() {
	      var _this4 = this;
	
	      (0, _video.getTags)(this.bvid).then(function (res) {
	        {
	          _this4.tagsList = res.data;
	        }
	      }, function (error) {
	        console.log(error);
	      });
	    },
	    isShowMask: function isShowMask() {
	      this.showMask = !this.showMask;
	    }
	  },
	  watch: {
	    '$route': function $route(to, from) {
	      if (to.params.bvid !== from.params.bvid) {
	        this.bvid = to.params.bvid;
	        this._getVideoInfo();
	      }
	    },
	    options: function options() {
	      console.log('options 变化了');
	    },
	    items: function items() {
	      console.log('items 变化了');
	    }
	  }
	};

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(19);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.postcookies = postcookies;
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _urlConfig = __webpack_require__(36);
	
	var url1 = _interopRequireWildcard(_urlConfig);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function postcookies(value) {
	  var url = url1.upcookies;
	  var data = {
	    'value': value
	  };
	  return _axios2.default.post(url, data).then(function (res) {
	    return _promise2.default.resolve(res);
	  });
	}

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _promise = __webpack_require__(19);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	
	var Quad_easeIn = function Quad_easeIn(t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	};
	
	var scrollTo = function scrollTo(end) {
		var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
	
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var b = scrollTop;
		var c = end - b;
		var d = time;
		var start = null;
	
		return new _promise2.default(function (resolve, reject) {
			function step(timeStamp) {
				if (start === null) start = timeStamp;
				var progress = timeStamp - start;
				if (progress < time) {
					var st = Quad_easeIn(progress, b, c, d);
					document.body.scrollTop = st;
					document.documentElement.scrollTop = st;
					window.requestAnimationFrame(step);
				} else {
					document.body.scrollTop = end;
					document.documentElement.scrollTop = end;
					resolve(end);
				}
			}
			window.requestAnimationFrame(step);
		});
	};
	
	var scrollToTop = function scrollToTop(time) {
		time = typeof time === 'number' ? time : 800;
		return scrollTo(0, time);
	};
	
	var scrollToElem = function scrollToElem(elem, time, offset) {
		var top = elem.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
		return scrollTo(top - (offset || 0), time);
	};
	
	exports.default = {
		methods: {
			scrollToTop: scrollToTop,
			scrollToElem: scrollToElem,
			scrollTo: scrollTo
		}
	};

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(298);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _set = __webpack_require__(302);
	
	var _set2 = _interopRequireDefault(_set);
	
	exports.formatNumber = formatNumber;
	exports.formatDate = formatDate;
	exports.formatTime = formatTime;
	exports.debounce = debounce;
	exports.setHighlight = setHighlight;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function padLeftZero(str) {
	  str = str + '';
	  return ('00' + str).substr(str.length);
	}
	
	function formatNumber(num) {
	  if (num >= 10000) {
	    num = parseInt(num / 1000);
	    num = parseFloat(num / 10);
	    return num + '万';
	  } else {
	    return num;
	  }
	}
	
	function formatDate(timestamp, fmt) {
	  var date = new Date(timestamp * 1000);
	  var nowYear = new Date().getFullYear();
	
	  if (/(y+)/.test(fmt)) {
	    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	  } else if (date.getFullYear() < nowYear) {
	    fmt = date.getFullYear() + '-' + fmt;
	  }
	
	  var o = {
	    'M+': date.getMonth() + 1,
	    'd+': date.getDate(),
	    'h+': date.getHours(),
	    'm+': date.getMinutes(),
	    's+': date.getSeconds()
	  };
	
	  for (var k in o) {
	    if (new RegExp('(' + k + ')').test(fmt)) {
	      var str = o[k] + '';
	      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
	    }
	  }
	
	  return fmt;
	}
	
	function formatTime(time) {
	  var h = parseInt(time / 3600);
	  var m = parseInt(time % 3600 / 60);
	  var s = time % 60;
	  m = h ? padLeftZero(m) : m;
	  var res = (h ? h + ':' : '') + m + ':' + (padLeftZero(s) || '00');
	  return res;
	}
	
	function debounce(func, delay) {
	  var timer = void 0;
	  return function () {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(function () {
	      func.apply(_this, args);
	    }, delay);
	  };
	}
	
	function setHighlight(keyword, item, className) {
	  var s = new _set2.default();
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)(keyword), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var k = _step.value;
	
	      s.add(k);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  s.forEach(function (value) {
	    item = item.replace(value, function () {
	      return '<em class="' + className + '">' + value + '</em>';
	    });
	  });
	  return item;
	}

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(34);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(475);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _index = __webpack_require__(420);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _home = __webpack_require__(419);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _channelView = __webpack_require__(403);
	
	var _channelView2 = _interopRequireDefault(_channelView);
	
	var _videopage = __webpack_require__(433);
	
	var _videopage2 = _interopRequireDefault(_videopage);
	
	var _videoinfo = __webpack_require__(427);
	
	var _videoinfo2 = _interopRequireDefault(_videoinfo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	
	exports.default = new _vueRouter2.default({
	  routes: [{
	    path: '/',
	    component: _index2.default,
	    redirect: 'Home',
	    children: [{
	      path: 'Home',
	      component: _home2.default
	    }, {
	      path: 'channel/:index',
	      component: _channelView2.default
	    }]
	  }, {
	    name: 'video',
	    path: '/video/:bvid',
	    component: _videopage2.default
	  }, {
	    name: 'videoinfo',
	    path: '/videoinfo/:bvid',
	    component: _videoinfo2.default
	  }]
	});

/***/ }),
/* 284 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BANNER_LIST_REQUEST = exports.BANNER_LIST_REQUEST = 'BANNER_LIST_REQUEST';
	var BANNER_LIST_SUCCESS = exports.BANNER_LIST_SUCCESS = 'BANNER_LIST_SUCCESS';
	var BANNER_LIST_FAILURE = exports.BANNER_LIST_FAILURE = 'BANNER_LIST_FAILURE';

/***/ }),
/* 285 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CONTENT_REQUEST = exports.CONTENT_REQUEST = 'CONTENT_REQUEST';
	var CONTENT_SUCCESS = exports.CONTENT_SUCCESS = 'CONTENT_SUCCESS';
	var CONTENT_FAILURE = exports.CONTENT_FAILURE = 'CONTENT_FAILURE';
	
	var CONTENT_RANK_REQUEST = exports.CONTENT_RANK_REQUEST = 'CONTENT_RANK_REQUEST';
	var CONTENT_RANK_SUCCESS = exports.CONTENT_RANK_SUCCESS = 'CONTENT_RANK_SUCCESS';
	var CONTENT_RANK_FAILURE = exports.CONTENT_RANK_FAILURE = 'CONTENT_RANK_FAILURE';

/***/ }),
/* 286 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LIVE_REQUEST = exports.LIVE_REQUEST = 'LIVE_REQUEST';
	var LIVE_SUCCESS = exports.LIVE_SUCCESS = 'LIVE_SUCCESS';
	var LIVE_FAILURE = exports.LIVE_FAILURE = 'LIVE_FAILURE';

/***/ }),
/* 287 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PROMOTE_LIST_REQUEST = exports.PROMOTE_LIST_REQUEST = 'PROMOTE_LIST_REQUEST';
	var PROMOTE_LIST_SUCCESS = exports.PROMOTE_LIST_SUCCESS = 'PROMOTE_LIST_SUCCESS';
	var PROMOTE_LIST_FAILURE = exports.PROMOTE_LIST_FAILURE = 'PROMOTE_LIST_FAILURE';

/***/ }),
/* 288 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RANK_LIST_REQUEST = exports.RANK_LIST_REQUEST = 'RANK_LIST_REQUEST';
	var RANK_LIST_SUCCESS = exports.RANK_LIST_SUCCESS = 'RANK_LIST_SUCCESS';
	var RANK_LIST_FAILURE = exports.RANK_LIST_FAILURE = 'RANK_LIST_FAILURE';

/***/ }),
/* 289 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USER_LOGIN = exports.USER_LOGIN = 'USER_LOGIN';
	var USER_LOGOUT = exports.USER_LOGOUT = 'USER_LOGOUT';

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vue = __webpack_require__(34);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(4);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _bannerStore = __webpack_require__(291);
	
	var _bannerStore2 = _interopRequireDefault(_bannerStore);
	
	var _rankStore = __webpack_require__(295);
	
	var _rankStore2 = _interopRequireDefault(_rankStore);
	
	var _promoteStore = __webpack_require__(294);
	
	var _promoteStore2 = _interopRequireDefault(_promoteStore);
	
	var _liveStore = __webpack_require__(293);
	
	var _liveStore2 = _interopRequireDefault(_liveStore);
	
	var _contentStore = __webpack_require__(292);
	
	var _contentStore2 = _interopRequireDefault(_contentStore);
	
	var _userStore = __webpack_require__(296);
	
	var _userStore2 = _interopRequireDefault(_userStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	var state = {
		requesting: false,
		error: {}
	};
	
	var getters = {
		requesting: function requesting(state) {
			return state.requesting;
		},
		error: function error(state) {
			return state.error;
		}
	};
	
	exports.default = new _vuex2.default.Store({
		state: state,
		getters: getters,
		modules: {
			bannerStore: _bannerStore2.default,
			rankStore: _rankStore2.default,
			promoteStore: _promoteStore2.default,
			liveStore: _liveStore2.default,
			contentStore: _contentStore2.default,
			userStore: _userStore2.default
		}
	});

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(17);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _api = __webpack_require__(15);
	
	var _bannerType = __webpack_require__(284);
	
	var TYPE = _interopRequireWildcard(_bannerType);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		bannerlist: []
	};
	
	var getters = {
		bannerlist: function bannerlist(state) {
			return state.bannerlist;
		}
	};
	
	var actions = {
		bannerlist: function bannerlist(_ref) {
			var commit = _ref.commit,
			    state = _ref.state,
			    rootState = _ref.rootState;
	
			rootState.requesting = true;
			commit(TYPE.BANNER_LIST_REQUEST);
			_api.bannerApi.list().then(function (response) {
				rootState.requesting = false;
				commit(TYPE.BANNER_LIST_SUCCESS, response);
			}, function (error) {
				rootState.requesting = false;
				commit(TYPE.BANNER_LIST_FAILURE);
			});
		}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, TYPE.BANNER_LIST_REQUEST, function (state) {}), (0, _defineProperty3.default)(_mutations, TYPE.BANNER_LIST_SUCCESS, function (state, bannerlist) {
		state.bannerlist = bannerlist.data;
	}), (0, _defineProperty3.default)(_mutations, TYPE.BANNER_LIST_FAILURE, function (state) {}), _mutations);
	
	exports.default = {
		state: state,
		getters: getters,
		actions: actions,
		mutations: mutations
	};

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(17);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _values = __webpack_require__(37);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _mutations;
	
	var _api = __webpack_require__(15);
	
	var _contentType = __webpack_require__(285);
	
	var TYPE = _interopRequireWildcard(_contentType);
	
	var _config = __webpack_require__(26);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		regionTags: _config.regionTags,
		sortKeys: ['douga', 'bangumi', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ad', 'ent', 'movie', 'teleplay'],
		sortIds: [1, 13, 3, 129, 4, 36, 160, 119, 155, 165, 5, 23, 11],
		sortValues: ['动画', '番剧', '音乐', '舞蹈', '游戏', '科技', '生活', '鬼畜', '时尚', '广告', '娱乐', '电影', 'TV剧'],
		rows: [],
		ranks: [],
		rank: {}
	};
	
	var getters = {
		regionTags: function regionTags(_regionTags) {
			return state.regionTags;
		},
		rows: function rows(state) {
			return state.rows;
		},
		sortKeys: function sortKeys(state) {
			return state.sortKeys;
		},
		sortIds: function sortIds(state) {
			return state.sortIds;
		},
		ranks: function ranks(state) {
			return state.ranks;
		},
		rank: function rank(state) {
			return state.rank;
		},
		sortValues: function sortValues(state) {
			return state.sortValues;
		}
	};
	
	var actions = {
		getContentRows: function getContentRows(_ref) {
			var commit = _ref.commit,
			    state = _ref.state,
			    rootState = _ref.rootState;
	
			rootState.requesting = true;
	
			commit(TYPE.CONTENT_REQUEST);
			_api.contentApi.content().then(function (response) {
				rootState.requesting = false;
				commit(TYPE.CONTENT_SUCCESS, response);
			}, function (error) {
				rootState.requesting = false;
				commit(TYPE.CONTENT_FAILURE);
			});
		},
		getContentRank: function getContentRank(_ref2, categoryId) {
			var commit = _ref2.commit,
			    state = _ref2.state,
			    rootState = _ref2.rootState;
	
	
			rootState.requesting = true;
			commit(TYPE.CONTENT_RANK_REQUEST);
			var param = {
				categoryId: categoryId
			};
			_api.contentrankApi.contentrank(param).then(function (response) {
				rootState.requesting = false;
				commit(TYPE.CONTENT_RANK_SUCCESS, response);
			}, function (error) {
				rootState.requesting = false;
				commit(TYPE.CONTENT_RANK_FAILURE);
			});
		}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, TYPE.CONTENT_REQUEST, function (state) {}), (0, _defineProperty3.default)(_mutations, TYPE.CONTENT_SUCCESS, function (state, response) {
		state.rows = [];
		for (var i = 0; i < state.regionTags.length; i++) {
			var category = state.regionTags[i].sortKeys;
			if (response[category] == undefined) {
				continue;
			}
			var rowItem = {
				category: category,
				categoryId: state.regionTags[i].key,
				name: state.regionTags[i].name,
				b_id: 'b_' + category,
				item: (0, _values2.default)(response[category])
			};
			state.rows.push(rowItem);
		}
	}), (0, _defineProperty3.default)(_mutations, TYPE.CONTENT_FAILURE, function (state) {}), (0, _defineProperty3.default)(_mutations, TYPE.CONTENT_RANK_REQUEST, function (state) {}), (0, _defineProperty3.default)(_mutations, TYPE.CONTENT_RANK_SUCCESS, function (state, response) {
		state.ranks.push(response);
		state.rank = response;
	}), (0, _defineProperty3.default)(_mutations, TYPE.CONTENT_RANK_FAILURE, function (state) {}), _mutations);
	
	exports.default = {
		state: state,
		getters: getters,
		actions: actions,
		mutations: mutations
	};

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(17);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _api = __webpack_require__(15);
	
	var _liveType = __webpack_require__(286);
	
	var TYPE = _interopRequireWildcard(_liveType);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		online_total: 0,
		dynamic: 0,
		recommend: [],
		ranking: [],
		preview: [],
		recommendAnchor: [] };
	
	var getters = {
		online_total: function online_total(state) {
			return state.online_total;
		},
		dynamic: function dynamic(state) {
			return state.dynamic;
		},
		recommend: function recommend(state) {
			return state.recommend;
		},
		ranking: function ranking(state) {
			return state.ranking;
		},
		preview: function preview(state) {
			return state.preview;
		},
		recommendAnchor: function recommendAnchor(state) {
			return state.recommendAnchor;
		}
	};
	
	var actions = {
		live: function live(_ref) {
			var commit = _ref.commit,
			    state = _ref.state,
			    rootState = _ref.rootState;
	
			rootState.requesting = true;
			commit(TYPE.LIVE_REQUEST);
			_api.liveApi.live().then(function (response) {
				rootState.requesting = false;
				commit(TYPE.LIVE_SUCCESS, response.data);
			}, function (error) {
				rootState.requesting = false;
				commit(TYPE.LIVE_FAILURE);
			});
		}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, TYPE.LIVE_REQUEST, function (state) {}), (0, _defineProperty3.default)(_mutations, TYPE.LIVE_SUCCESS, function (state, live) {
		state.online_total = live.online_total;
		state.dynamic = live.dynamic;
		state.recommend = live.recommend_room_list;
		state.ranking = live.ranking_list;
		state.preview = live.preview_banner_list;
		state.recommendAnchor = live.recommendAnchor;
	}), (0, _defineProperty3.default)(_mutations, TYPE.LIVE_FAILURE, function (state) {}), _mutations);
	
	exports.default = {
		state: state,
		getters: getters,
		actions: actions,
		mutations: mutations
	};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(17);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _api = __webpack_require__(15);
	
	var _promoteType = __webpack_require__(287);
	
	var TYPE = _interopRequireWildcard(_promoteType);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		promote: {},
		promotelist: [],
		promoteAd: []
	};
	
	var getters = {
		promote: function promote(state) {
			return state.promote;
		},
		promotelist: function promotelist(state) {
			return state.promotelist;
		},
		promoteAd: function promoteAd(state) {
			return state.promoteAd;
		}
	};
	
	var actions = {
		promote: function promote(_ref) {
			var commit = _ref.commit,
			    state = _ref.state,
			    rootState = _ref.rootState;
	
			rootState.requesting = true;
			commit(TYPE.PROMOTE_LIST_REQUEST);
			_api.promoteApi.promote().then(function (response) {
				rootState.requesting = false;
				commit(TYPE.PROMOTE_LIST_SUCCESS, response);
			}, function (error) {
				rootState.requesting = false;
				commit(TYPE.PROMOTE_LIST_FAILURE);
			});
		}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, TYPE.PROMOTE_LIST_REQUEST, function (state) {}), (0, _defineProperty3.default)(_mutations, TYPE.PROMOTE_LIST_SUCCESS, function (state, response) {
		state.promote = response;
		state.promotelist = response.data;
		state.promoteAd = response.promoteAd;
	}), (0, _defineProperty3.default)(_mutations, TYPE.PROMOTE_LIST_FAILURE, function (state) {}), _mutations);
	
	exports.default = {
		state: state,
		getters: getters,
		actions: actions,
		mutations: mutations
	};

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(17);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _api = __webpack_require__(15);
	
	var _rankType = __webpack_require__(288);
	
	var TYPE = _interopRequireWildcard(_rankType);
	
	var _lodash = __webpack_require__(78);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		ranklist: []
	};
	
	var getters = {
		ranklist: function ranklist(state) {
			return state.ranklist;
		}
	};
	
	var actions = {
		ranklist: function ranklist(_ref) {
			var commit = _ref.commit,
			    state = _ref.state,
			    rootState = _ref.rootState;
	
	
			rootState.requesting = true;
			commit(TYPE.RANK_LIST_REQUEST);
			_api.rankApi.ranking3().then(function (response) {
				rootState.requesting = false;
	
				commit(TYPE.RANK_LIST_SUCCESS, response);
			}, function (error) {
				rootState.requesting = false;
				commit(TYPE.RANK_LIST_FAILURE);
			});
		}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, TYPE.RANK_LIST_REQUEST, function (state) {}), (0, _defineProperty3.default)(_mutations, TYPE.RANK_LIST_SUCCESS, function (state, response) {
	
		state.ranklist = response.list;
	}), (0, _defineProperty3.default)(_mutations, TYPE.RANK_LIST_FAILURE, function (state) {}), _mutations);
	
	exports.default = {
		state: state,
		getters: getters,
		actions: actions,
		mutations: mutations
	};

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(17);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _promise = __webpack_require__(19);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _mutations;
	
	var _utils = __webpack_require__(280);
	
	var _userType = __webpack_require__(289);
	
	var TYPE = _interopRequireWildcard(_userType);
	
	var _lodash = __webpack_require__(78);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    userinfo: {},
	    token: ""
	};
	
	var getters = {
	    userinfo: function userinfo(state) {
	        return state.userinfo;
	    }
	};
	
	var actions = {
	    login: function login(_ref, data) {
	        var commit = _ref.commit,
	            state = _ref.state,
	            rootState = _ref.rootState;
	
	        return new _promise2.default(function (resolve, reject) {
	            rootState.requesting = true;
	            var result = {
	                error: null,
	                message: "fail"
	            };
	            (0, _utils.postcookies)(data).then(function (res) {
	                rootState.requesting = false;
	                if (res.data.code == 0) {
	                    commit(TYPE.USER_LOGIN, res.headers.token);
	                    resolve(res.headers.token);
	                } else {
	                    result.error = res;
	                    result.message = "cookies验证失败";
	                    reject(result);
	                }
	            }, function (error) {
	                rootState.requesting = false;
	                result.error = error;
	                result.message = "cookies上传失败";
	                reject(result);
	            });
	        });
	    },
	    logout: function logout(_ref2) {
	        var commit = _ref2.commit,
	            state = _ref2.state,
	            rootState = _ref2.rootState;
	
	        commit(TYPE.USER_LOGOUT);
	    }
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, TYPE.USER_LOGIN, function (state, data) {
	    console.log(data);
	    localStorage.token = data;
	    state.token = data;
	}), (0, _defineProperty3.default)(_mutations, TYPE.USER_LOGOUT, function (state) {
	    localStorage.removeItem('token');
	    state.token = "";
	}), _mutations);
	
	exports.default = {
	    state: state,
	    getters: getters,
	    actions: actions,
	    mutations: mutations
	};

/***/ }),
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 353 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 354 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 355 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 356 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 357 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 358 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 359 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 360 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 361 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 362 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 363 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 364 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 365 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 366 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 367 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 368 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 369 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 370 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 371 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 372 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 373 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 374 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 375 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 376 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 377 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 378 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 379 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 380 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 381 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 382 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 383 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 384 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 385 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 386 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 387 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 388 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 389 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 390 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 391 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 392 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 393 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 394 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 395 */,
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./af": 79,
		"./af.js": 79,
		"./ar": 86,
		"./ar-dz": 80,
		"./ar-dz.js": 80,
		"./ar-kw": 81,
		"./ar-kw.js": 81,
		"./ar-ly": 82,
		"./ar-ly.js": 82,
		"./ar-ma": 83,
		"./ar-ma.js": 83,
		"./ar-sa": 84,
		"./ar-sa.js": 84,
		"./ar-tn": 85,
		"./ar-tn.js": 85,
		"./ar.js": 86,
		"./az": 87,
		"./az.js": 87,
		"./be": 88,
		"./be.js": 88,
		"./bg": 89,
		"./bg.js": 89,
		"./bm": 90,
		"./bm.js": 90,
		"./bn": 92,
		"./bn-bd": 91,
		"./bn-bd.js": 91,
		"./bn.js": 92,
		"./bo": 93,
		"./bo.js": 93,
		"./br": 94,
		"./br.js": 94,
		"./bs": 95,
		"./bs.js": 95,
		"./ca": 96,
		"./ca.js": 96,
		"./cs": 97,
		"./cs.js": 97,
		"./cv": 98,
		"./cv.js": 98,
		"./cy": 99,
		"./cy.js": 99,
		"./da": 100,
		"./da.js": 100,
		"./de": 103,
		"./de-at": 101,
		"./de-at.js": 101,
		"./de-ch": 102,
		"./de-ch.js": 102,
		"./de.js": 103,
		"./dv": 104,
		"./dv.js": 104,
		"./el": 105,
		"./el.js": 105,
		"./en-au": 106,
		"./en-au.js": 106,
		"./en-ca": 107,
		"./en-ca.js": 107,
		"./en-gb": 108,
		"./en-gb.js": 108,
		"./en-ie": 109,
		"./en-ie.js": 109,
		"./en-il": 110,
		"./en-il.js": 110,
		"./en-in": 111,
		"./en-in.js": 111,
		"./en-nz": 112,
		"./en-nz.js": 112,
		"./en-sg": 113,
		"./en-sg.js": 113,
		"./eo": 114,
		"./eo.js": 114,
		"./es": 118,
		"./es-do": 115,
		"./es-do.js": 115,
		"./es-mx": 116,
		"./es-mx.js": 116,
		"./es-us": 117,
		"./es-us.js": 117,
		"./es.js": 118,
		"./et": 119,
		"./et.js": 119,
		"./eu": 120,
		"./eu.js": 120,
		"./fa": 121,
		"./fa.js": 121,
		"./fi": 122,
		"./fi.js": 122,
		"./fil": 123,
		"./fil.js": 123,
		"./fo": 124,
		"./fo.js": 124,
		"./fr": 127,
		"./fr-ca": 125,
		"./fr-ca.js": 125,
		"./fr-ch": 126,
		"./fr-ch.js": 126,
		"./fr.js": 127,
		"./fy": 128,
		"./fy.js": 128,
		"./ga": 129,
		"./ga.js": 129,
		"./gd": 130,
		"./gd.js": 130,
		"./gl": 131,
		"./gl.js": 131,
		"./gom-deva": 132,
		"./gom-deva.js": 132,
		"./gom-latn": 133,
		"./gom-latn.js": 133,
		"./gu": 134,
		"./gu.js": 134,
		"./he": 135,
		"./he.js": 135,
		"./hi": 136,
		"./hi.js": 136,
		"./hr": 137,
		"./hr.js": 137,
		"./hu": 138,
		"./hu.js": 138,
		"./hy-am": 139,
		"./hy-am.js": 139,
		"./id": 140,
		"./id.js": 140,
		"./is": 141,
		"./is.js": 141,
		"./it": 143,
		"./it-ch": 142,
		"./it-ch.js": 142,
		"./it.js": 143,
		"./ja": 144,
		"./ja.js": 144,
		"./jv": 145,
		"./jv.js": 145,
		"./ka": 146,
		"./ka.js": 146,
		"./kk": 147,
		"./kk.js": 147,
		"./km": 148,
		"./km.js": 148,
		"./kn": 149,
		"./kn.js": 149,
		"./ko": 150,
		"./ko.js": 150,
		"./ku": 151,
		"./ku.js": 151,
		"./ky": 152,
		"./ky.js": 152,
		"./lb": 153,
		"./lb.js": 153,
		"./lo": 154,
		"./lo.js": 154,
		"./lt": 155,
		"./lt.js": 155,
		"./lv": 156,
		"./lv.js": 156,
		"./me": 157,
		"./me.js": 157,
		"./mi": 158,
		"./mi.js": 158,
		"./mk": 159,
		"./mk.js": 159,
		"./ml": 160,
		"./ml.js": 160,
		"./mn": 161,
		"./mn.js": 161,
		"./mr": 162,
		"./mr.js": 162,
		"./ms": 164,
		"./ms-my": 163,
		"./ms-my.js": 163,
		"./ms.js": 164,
		"./mt": 165,
		"./mt.js": 165,
		"./my": 166,
		"./my.js": 166,
		"./nb": 167,
		"./nb.js": 167,
		"./ne": 168,
		"./ne.js": 168,
		"./nl": 170,
		"./nl-be": 169,
		"./nl-be.js": 169,
		"./nl.js": 170,
		"./nn": 171,
		"./nn.js": 171,
		"./oc-lnc": 172,
		"./oc-lnc.js": 172,
		"./pa-in": 173,
		"./pa-in.js": 173,
		"./pl": 174,
		"./pl.js": 174,
		"./pt": 176,
		"./pt-br": 175,
		"./pt-br.js": 175,
		"./pt.js": 176,
		"./ro": 177,
		"./ro.js": 177,
		"./ru": 178,
		"./ru.js": 178,
		"./sd": 179,
		"./sd.js": 179,
		"./se": 180,
		"./se.js": 180,
		"./si": 181,
		"./si.js": 181,
		"./sk": 182,
		"./sk.js": 182,
		"./sl": 183,
		"./sl.js": 183,
		"./sq": 184,
		"./sq.js": 184,
		"./sr": 186,
		"./sr-cyrl": 185,
		"./sr-cyrl.js": 185,
		"./sr.js": 186,
		"./ss": 187,
		"./ss.js": 187,
		"./sv": 188,
		"./sv.js": 188,
		"./sw": 189,
		"./sw.js": 189,
		"./ta": 190,
		"./ta.js": 190,
		"./te": 191,
		"./te.js": 191,
		"./tet": 192,
		"./tet.js": 192,
		"./tg": 193,
		"./tg.js": 193,
		"./th": 194,
		"./th.js": 194,
		"./tk": 195,
		"./tk.js": 195,
		"./tl-ph": 196,
		"./tl-ph.js": 196,
		"./tlh": 197,
		"./tlh.js": 197,
		"./tr": 198,
		"./tr.js": 198,
		"./tzl": 199,
		"./tzl.js": 199,
		"./tzm": 201,
		"./tzm-latn": 200,
		"./tzm-latn.js": 200,
		"./tzm.js": 201,
		"./ug-cn": 202,
		"./ug-cn.js": 202,
		"./uk": 203,
		"./uk.js": 203,
		"./ur": 204,
		"./ur.js": 204,
		"./uz": 206,
		"./uz-latn": 205,
		"./uz-latn.js": 205,
		"./uz.js": 206,
		"./vi": 207,
		"./vi.js": 207,
		"./x-pseudo": 208,
		"./x-pseudo.js": 208,
		"./yo": 209,
		"./yo.js": 209,
		"./zh-cn": 210,
		"./zh-cn.js": 210,
		"./zh-hk": 211,
		"./zh-hk.js": 211,
		"./zh-mo": 212,
		"./zh-mo.js": 212,
		"./zh-tw": 213,
		"./zh-tw.js": 213
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 396;


/***/ }),
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(373)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(239),
	  /* template */
	  __webpack_require__(453),
	  /* scopeId */
	  "data-v-503fd48a",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(366)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(241),
	  /* template */
	  __webpack_require__(447),
	  /* scopeId */
	  "data-v-3c00973f",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(381)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(242),
	  /* template */
	  __webpack_require__(461),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(367)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(244),
	  /* template */
	  __webpack_require__(448),
	  /* scopeId */
	  "data-v-3ceffa30",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(380)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(245),
	  /* template */
	  __webpack_require__(460),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(360)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(246),
	  /* template */
	  __webpack_require__(441),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(385)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(247),
	  /* template */
	  __webpack_require__(465),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(384)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(248),
	  /* template */
	  __webpack_require__(464),
	  /* scopeId */
	  "data-v-a8265430",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(388)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(249),
	  /* template */
	  __webpack_require__(468),
	  /* scopeId */
	  "data-v-ce70582e",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(379)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(251),
	  /* template */
	  __webpack_require__(459),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(359)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(253),
	  /* template */
	  __webpack_require__(440),
	  /* scopeId */
	  "data-v-26b88765",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(383)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(254),
	  /* template */
	  __webpack_require__(463),
	  /* scopeId */
	  "data-v-7ebacca3",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(353)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(255),
	  /* template */
	  __webpack_require__(434),
	  /* scopeId */
	  "data-v-076ba856",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(377)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(256),
	  /* template */
	  __webpack_require__(457),
	  /* scopeId */
	  "data-v-5f017622",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(376)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(257),
	  /* template */
	  __webpack_require__(456),
	  /* scopeId */
	  "data-v-5841839e",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(389)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(259),
	  /* template */
	  __webpack_require__(469),
	  /* scopeId */
	  "data-v-d039f5de",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(358)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(260),
	  /* template */
	  __webpack_require__(439),
	  /* scopeId */
	  "data-v-237ad880",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(386)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(261),
	  /* template */
	  __webpack_require__(466),
	  /* scopeId */
	  "data-v-c3e99218",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(361)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(262),
	  /* template */
	  __webpack_require__(442),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(378)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(263),
	  /* template */
	  __webpack_require__(458),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(369)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(265),
	  /* template */
	  __webpack_require__(450),
	  /* scopeId */
	  "data-v-41d1fe71",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(356)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(266),
	  /* template */
	  __webpack_require__(437),
	  /* scopeId */
	  "data-v-0ae59b0a",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(355)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(267),
	  /* template */
	  __webpack_require__(436),
	  /* scopeId */
	  "data-v-095a2fbd",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(364)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(268),
	  /* template */
	  __webpack_require__(445),
	  /* scopeId */
	  "data-v-32741c80",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(393)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(271),
	  /* template */
	  __webpack_require__(473),
	  /* scopeId */
	  "data-v-e962855a",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(382)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(272),
	  /* template */
	  __webpack_require__(462),
	  /* scopeId */
	  "data-v-698f1cea",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(394)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(273),
	  /* template */
	  __webpack_require__(474),
	  /* scopeId */
	  "data-v-f7ae01c0",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(357)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(274),
	  /* template */
	  __webpack_require__(438),
	  /* scopeId */
	  "data-v-0cc5fab9",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(392)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(275),
	  /* template */
	  __webpack_require__(472),
	  /* scopeId */
	  "data-v-e54c4212",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(371)
	__webpack_require__(370)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(276),
	  /* template */
	  __webpack_require__(451),
	  /* scopeId */
	  "data-v-4c55f7c9",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(372)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(277),
	  /* template */
	  __webpack_require__(452),
	  /* scopeId */
	  "data-v-4caa84cf",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(374)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(278),
	  /* template */
	  __webpack_require__(454),
	  /* scopeId */
	  "data-v-5122c675",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(375)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(279),
	  /* template */
	  __webpack_require__(455),
	  /* scopeId */
	  "data-v-5324c4a2",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 434 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "item-li"
	  }, [_c('div', {
	    staticClass: "v m300"
	  }, [_c('a', {
	    staticClass: "preview cover-preview",
	    attrs: {
	      "target": "_blank"
	    },
	    on: {
	      "click": function($event) {
	        _vm.selectItem(_vm.item.bvid)
	      }
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (false),
	      expression: "false"
	    }],
	    staticClass: "medal"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "original"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "border"
	  }), _vm._v(" "), _c('img', {
	    directives: [{
	      name: "lazy",
	      rawName: "v-lazy",
	      value: (_vm.item.pic),
	      expression: "item.pic"
	    }]
	  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "x"
	  }, [_c('b', {
	    staticClass: "x2"
	  }, [_vm._v(_vm._s(_vm.item.duration))])])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "target": "_blank"
	    },
	    on: {
	      "click": function($event) {
	        _vm.selectItem(_vm.item.bvid)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "t"
	  }, [_vm._v(_vm._s(_vm.item.title))]), _vm._v(" "), _c('div', {
	    staticClass: "i"
	  }, [_c('span', [_c('i', {
	    staticClass: "b-icon b-icon-v-play"
	  }), _vm._v(_vm._s(_vm.view) + "\n\t\t\t\t\t")]), _c('span', [_c('i', {
	    staticClass: "b-icon b-icon-v-dm"
	  }), _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.item.stat.reply) + "\n\t\t\t\t")])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "back"
	  }, [_c('div')])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "fore"
	  }, [_c('span', {
	    attrs: {
	      "data-loading": "false"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "bar"
	  }, [_c('div')])])
	}]}

/***/ }),
/* 435 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "top-list-wrapper"
	  }, [_c('ul', {
	    staticClass: "top-list",
	    attrs: {
	      "clearfix": ""
	    }
	  }, _vm._l((_vm.ranklist), function(item, index) {
	    return _c('BContentTopItem', {
	      key: index,
	      attrs: {
	        "contentTop": item
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    staticClass: "prev",
	    on: {
	      "click": function($event) {
	        _vm.now = _vm.now > 0 ? _vm.now -= 1 : _vm.now = 2
	      }
	    }
	  }, [_vm._v(_vm._s(this.pre = this.now === 0 ? '昨日' : this.now === 1 ? '三日' : '一周'))]), _vm._v(" "), _c('div', {
	    staticClass: "next",
	    on: {
	      "click": function($event) {
	        _vm.now = _vm.now < 2 ? _vm.now += 1 : _vm.now = 0
	      }
	    }
	  }, [_vm._v(_vm._s(this.next = this.now === 0 ? '一周' : this.now === 1 ? '昨日' : '三日'))])])
	},staticRenderFns: []}

/***/ }),
/* 436 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "live-item"
	  }, [_c('div', {
	    staticClass: "r-item r-ranking"
	  }, [_c('div', {
	    staticClass: "lv-num",
	    class: {
	      n: _vm.index === 0 || _vm.index === 1 || _vm.index === 2
	    }
	  }, [_vm._v(_vm._s(_vm.index + 1))]), _vm._v(" "), _c('a', {
	    staticClass: "preview",
	    attrs: {
	      "href": "",
	      "target": "_blank",
	      "title": _vm.rank.uname
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.rank.face,
	      "alt": _vm.rank.uname
	    }
	  })]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "",
	      "target": "_blank",
	      "title": _vm.rank.uname
	    }
	  }, [_c('div', {
	    staticClass: "r-i"
	  }, [_c('p', {
	    staticClass: "r-i-t"
	  }, [_c('span', {
	    staticClass: "u-name"
	  }, [_vm._v(_vm._s(_vm.rank.uname))]), _vm._v(" "), _c('span', {
	    staticClass: "u-online"
	  }, [_c('i', {
	    staticClass: "b-icon b-icon-live-online"
	  }), _c('em', [_vm._v(_vm._s(_vm.online) + "万")])])]), _c('div', {
	    staticClass: "r-i-st"
	  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.rank.title) + "\n\t\t\t\t\t")]), _vm._v(" "), _c('p')])])])])
	},staticRenderFns: []}

/***/ }),
/* 437 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "rank"
	  }, [_c('div', {
	    staticClass: "b-head"
	  }, [_c('ul', {
	    staticClass: "b-slt-tab",
	    attrs: {
	      "data-initialized": "true"
	    }
	  }, _vm._l((_vm.tabTitle), function(item, index) {
	    return _c('li', {
	      class: {
	        on: _vm.tabCount == index
	      },
	      on: {
	        "click": function($event) {
	          _vm.cutTab(index)
	        }
	      }
	    }, [_c('span', {
	      staticClass: "b-tab-text"
	    }, [_vm._v(_vm._s(item))])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "b-body"
	  }, [_c('div', {
	    staticClass: "r-list-body"
	  }, [_c('div', {
	    ref: "listWrapper",
	    staticClass: "r-list-wrapper"
	  }, [_c('ul', {
	    staticClass: "r-list-live"
	  }, _vm._l((_vm.ranklist), function(item, index) {
	    return _c('BLiveRankItem', {
	      attrs: {
	        "rank": item,
	        "index": index
	      }
	    })
	  })), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('ul', {
	    staticClass: "r-list-live"
	  }, [_c('div', {
	    staticClass: "mini-preview-wrapper"
	  }, [_c('div', {
	    staticClass: "mini-preview-list-wrapper"
	  }, [_c('ul', {
	    ref: "miniPreview",
	    staticClass: "mini-preview"
	  }, _vm._l((_vm.preview), function(pre) {
	    return _c('li', {
	      staticClass: "preview"
	    }, [_c('a', {
	      attrs: {
	        "href": "",
	        "target": "_blank"
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": pre.pic
	      }
	    })])])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "s-bottom"
	  }, [_c('div', {
	    staticClass: "info"
	  }, _vm._l((_vm.preview), function(pre, index) {
	    return _c('div', {
	      staticClass: "info-item",
	      class: {
	        show: _vm.count == index, hide: _vm.count !== index
	      }
	    }, [_c('a', {
	      staticClass: "t",
	      attrs: {
	        "href": pre.url,
	        "title": pre.title,
	        "target": "_blank"
	      }
	    }, [_vm._v(_vm._s(pre.title))])])
	  })), _vm._v(" "), _c('ul', {
	    staticClass: "slider-bar"
	  }, _vm._l((_vm.preview), function(item, index) {
	    return _c('li', {
	      class: {
	        on: _vm.count == index
	      },
	      attrs: {
	        "bar": ""
	      },
	      on: {
	        "mouseover": function($event) {
	          _vm.cutItem(index)
	        }
	      }
	    }, [_c('a')])
	  }))])]), _vm._v(" "), _c('div', {
	    staticClass: "live-pmt-live"
	  }, _vm._l((_vm.recommendAnchor), function(anchor) {
	    return _c('li', [_c('div', {
	      staticClass: "pmt-item"
	    }, [_c('a', {
	      staticClass: "preview",
	      attrs: {
	        "href": anchor.link,
	        "target": "_blank",
	        "title": anchor.title
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": anchor.face,
	        "alt": anchor.link
	      }
	    }), _c('p', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(anchor.uname))])])])])
	  }))])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "r-list-live"
	  }, [_c('li', {
	    staticClass: "no-data"
	  }, [_c('span', [_vm._v("没有数据")])])])
	}]}

/***/ }),
/* 438 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "item-li"
	  }, [_c('div', {
	    staticClass: "v m300"
	  }, [_c('a', {
	    staticClass: "preview cover-preview",
	    attrs: {
	      "target": "_blank"
	    },
	    on: {
	      "click": function($event) {
	        _vm.selectItem(_vm.item.bvid)
	      }
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (false),
	      expression: "false"
	    }],
	    staticClass: "medal"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "original"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "border"
	  }), _vm._v(" "), _c('img', {
	    directives: [{
	      name: "lazy",
	      rawName: "v-lazy",
	      value: (_vm.item.pic),
	      expression: "item.pic"
	    }]
	  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "x"
	  }, [_c('b', {
	    staticClass: "x2"
	  }, [_vm._v(_vm._s(_vm.item.duration))])])]), _vm._v(" "), _c('div', {
	    staticClass: "info"
	  }, [_c('a', {
	    attrs: {
	      "target": "_blank"
	    },
	    on: {
	      "click": function($event) {
	        _vm.selectItem(_vm.item.bvid)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "t"
	  }, [_vm._v(_vm._s(_vm.item.title))]), _vm._v(" "), _c('div', {
	    staticClass: "name",
	    staticStyle: {
	      "margin-bottom": "6px"
	    }
	  }, [_vm._v(_vm._s(_vm.item.owner.name))]), _vm._v(" "), _c('div', {
	    staticClass: "i"
	  }, [_c('span', [_c('i', {
	    staticClass: "b-icon b-icon-v-play"
	  }), _vm._v(_vm._s(_vm.view) + "播放 · \n\t\t\t\t\t")]), _vm._v(" "), _c('span', [_c('i', {
	    staticClass: "b-icon b-icon-v-dm"
	  }), _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.item.stat.reply) + "弹幕\n\t\t\t\t")])])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "back"
	  }, [_c('div')])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "fore"
	  }, [_c('span', {
	    attrs: {
	      "data-loading": "false"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "bar"
	  }, [_c('div')])])
	}]}

/***/ }),
/* 439 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "content"
	  }, [_c('div', {
	    staticClass: "container-top-wrapper"
	  }, [_c('div', {
	    staticClass: "container-top"
	  }, [_c('div', {
	    staticClass: "b-l"
	  }, [_c('Banner')], 1), _vm._v(" "), _c('div', {
	    staticClass: "b-r"
	  }, [_c('BContentTop')], 1)])]), _vm._v(" "), _c('div', {
	    staticClass: "container-row"
	  }, [_c('BPromote')], 1), _vm._v(" "), _c('div', {
	    staticClass: "container-row"
	  }, [_c('BLive')], 1), _vm._v(" "), _vm._l((_vm.rows), function(row, index) {
	    return _c('div', {
	      key: index,
	      staticClass: "container-row",
	      attrs: {
	        "id": row.b_id,
	        "v-if": _vm.rows
	      }
	    }, [_c('BContentRow', {
	      attrs: {
	        "category": row.category,
	        "categoryId": row.categoryId,
	        "row": row.item,
	        "name": row.name
	      }
	    })], 1)
	  })], 2)
	},staticRenderFns: []}

/***/ }),
/* 440 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-body"
	  }, [_c('ul', {
	    staticClass: "vidbox v-list"
	  }, _vm._l((_vm.row), function(item, index) {
	    return _c('BRowItem', {
	      key: index,
	      attrs: {
	        "item": item
	      }
	    })
	  }))])
	},staticRenderFns: []}

/***/ }),
/* 441 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "width": "100%",
	      "height": "100%"
	    },
	    attrs: {
	      "id": "dmline"
	    }
	  })
	},staticRenderFns: []}

/***/ }),
/* 442 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "home"
	  }, [_c('BContent', {
	    attrs: {
	      "rows": _vm.rows
	    }
	  }), _vm._v(" "), _c('BNavSide', {
	    attrs: {
	      "options": _vm.options
	    },
	    on: {
	      "change": _vm.isShowMask
	    }
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showMask),
	      expression: "showMask"
	    }],
	    ref: "mask",
	    staticClass: "wnd-mask"
	  })], 1)
	},staticRenderFns: []}

/***/ }),
/* 443 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-section-body"
	  }, [_c('div', {
	    staticClass: "b-l"
	  }, [_c('BRowHead', {
	    attrs: {
	      "category": _vm.category,
	      "name": _vm.name,
	      "index": _vm.index
	    }
	  }), _vm._v(" "), _c('BRowBody', {
	    attrs: {
	      "row": _vm.row
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "b-r"
	  }, [_c('BRowRank', {
	    attrs: {
	      "category": _vm.category,
	      "categoryId": _vm.categoryId
	    }
	  })], 1)])
	},staticRenderFns: []}

/***/ }),
/* 444 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "banner",
	    on: {
	      "mouseover": function($event) {
	        _vm.show = true
	      },
	      "mouseout": function($event) {
	        _vm.show = false
	      }
	    }
	  }, [_c('div', {
	    staticClass: "topic-preview-wrapper"
	  }, [_c('div', {
	    staticClass: "topic-preview-list-wrapper"
	  }, [_c('ul', {
	    ref: "banner",
	    staticClass: "topic-preview",
	    staticStyle: {
	      "width": "500%"
	    }
	  }, _vm._l((_vm.bannerlist), function(item, index) {
	    return _c('BannerItem', {
	      key: index,
	      attrs: {
	        "banner": item
	      }
	    })
	  }))]), _vm._v(" "), _c('a', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "more-topic",
	    attrs: {
	      "href": "/topic/integrated-1.html",
	      "target": "_blank"
	    }
	  }, [_vm._v("更多\n\t\t\t"), _c('i', {
	    staticClass: "b-icon"
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "s-bottom"
	  }, [(_vm.bannerlist[_vm.count]) ? _c('div', {
	    staticClass: "title"
	  }, [_c('span', {}, [(_vm.bannerlist[_vm.count].is_ad) ? _c('img', {
	    staticStyle: {
	      "width": "32px",
	      "height": "20px: margin-left: 5px",
	      "vertical-align": "middle"
	    },
	    attrs: {
	      "src": "//static.hdslb.com/images/base/ad.png"
	    }
	  }) : _vm._e(), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": _vm.bannerlist[_vm.count].url,
	      "target": "_blank"
	    }
	  }, [_vm._v(_vm._s(_vm.bannerlist[_vm.count].name))])])]) : _vm._e(), _vm._v(" "), _c('ul', {
	    staticClass: "slide-bar"
	  }, _vm._l((_vm.bannerlist), function(item, index) {
	    return _c('li', {
	      key: index,
	      class: {
	        on: _vm.count == index
	      },
	      on: {
	        "click": function($event) {
	          _vm.cutItem(index)
	        }
	      }
	    })
	  }))])])])
	},staticRenderFns: []}

/***/ }),
/* 445 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "loginblock"
	  }, [_c('form', {
	    staticClass: "loginform",
	    attrs: {
	      "action": ""
	    }
	  }, [_c('span', [_vm._v("请输入账户cokkies:")]), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.value18),
	      expression: "value18"
	    }],
	    staticClass: "logininput",
	    domProps: {
	      "value": (_vm.value18)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.value18 = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "inputresult"
	  }, [_c('span', {
	    staticClass: "result"
	  }, [_vm._v(" " + _vm._s(_vm.getResult))]), _vm._v(" "), _c('div', {
	    staticClass: "inputbnt"
	  }, [_c('button', {
	    staticClass: "upcok",
	    on: {
	      "click": _vm.uploadcook
	    }
	  }, [_vm._v("确认")]), _vm._v(" "), _c('button', {
	    staticClass: "clcok",
	    on: {
	      "click": _vm.delcook
	    }
	  }, [_vm._v("清除")])])])])])
	},staticRenderFns: []}

/***/ }),
/* 446 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-live"
	  }, [_c('div', {
	    staticClass: "b-l"
	  }, [_c('div', {
	    staticClass: "b-head"
	  }, [_c('div', {
	    staticClass: "left"
	  }, [_c('span', {
	    staticClass: "b-head-i"
	  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('span', {
	    staticClass: "b-head-s"
	  }, [_vm._v("\n\t\t\t\t\t当前共有"), _c('em', [_vm._v(_vm._s(_vm.online_total))]), _vm._v("个在线直播\n\t\t\t\t")])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "read-push"
	  }, [_c('span', {
	    staticClass: "icon-refresh"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "info"
	  }, [_c('b', [_vm._v(_vm._s(_vm.dynamic))]), _vm._v(" "), _c('em', [_vm._v("条新动态")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "b-body"
	  }, [(_vm.recommend) ? _c('ul', {
	    staticClass: "v-list-live"
	  }, _vm._l((_vm.recommend), function(item, index) {
	    return _c('li', {
	      key: index
	    }, [_c('BLiveItem', {
	      attrs: {
	        "live": item
	      }
	    })], 1)
	  })) : _vm._e()])]), _vm._v(" "), _c('div', {
	    staticClass: "b-r"
	  }, [_c('BLiveRank', {
	    attrs: {
	      "ranklist": _vm.ranking,
	      "preview": _vm.preview,
	      "recommendAnchor": _vm.recommendAnchor
	    }
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "b-head-t"
	  }, [_c('a', {
	    attrs: {
	      "href": "//live.bilibili.com/",
	      "target": "_blank"
	    }
	  }, [_c('h2', [_vm._v("正在直播")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "right"
	  }, [_c('div', {
	    staticClass: "b-link-more"
	  }, [_c('a', {
	    attrs: {
	      "href": "//live.bilibili.com",
	      "target": "_blank"
	    }
	  }, [_vm._v("更多"), _c('i', {
	    staticClass: "b-icon b-icon-arrow-r"
	  })])])])
	}]}

/***/ }),
/* 447 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.banner) ? _c('li', {
	    staticClass: "banner-item"
	  }, [_c('a', {
	    staticClass: "b-link",
	    attrs: {
	      "href": _vm.banner.url,
	      "target": "_blank"
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.banner.pic
	    }
	  })])]) : _vm._e()
	},staticRenderFns: []}

/***/ }),
/* 448 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "menu"
	  }, [_c('div', {
	    staticClass: "menu-wrapper"
	  }, [_c('ul', {
	    staticClass: "nav-menu"
	  }, _vm._l((_vm.regionTags), function(i, index) {
	    return _c('BMenuItem', {
	      key: index,
	      attrs: {
	        "item": i,
	        "index": index
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    staticClass: "menu-r"
	  }, [_vm._m(0), _vm._v(" "), _c('a', {
	    staticClass: "mobile-p",
	    attrs: {
	      "id": "mobile_p",
	      "href": "//app.bilibili.com",
	      "target": "_blank"
	    },
	    on: {
	      "mouseover": function($event) {
	        _vm.showMobileLink = true
	      },
	      "mouseout": function($event) {
	        _vm.showMobileLink = false
	      }
	    }
	  }, [_c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showMobileLink),
	      expression: "showMobileLink"
	    }],
	    staticClass: "mobile-p-box"
	  }, [_c('div', {
	    staticClass: "mobile-p-qrcode"
	  })])])], 1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "random-p",
	    attrs: {
	      "href": "",
	      "target": "_blank",
	      "href": "http://search.bilibili.com/all?keyword=%E8%B9%A6%E8%BF%AA",
	      "title": "蹦迪"
	    }
	  }, [_c('div', {
	    staticClass: "random-p-movie"
	  }, [_c('img', {
	    attrs: {
	      "src": "//i2.hdslb.com/bfs/active/84f323e3a77a6eafee656f832847603751f3857d.gif",
	      "alt": "蹦迪"
	    }
	  })])])
	}]}

/***/ }),
/* 449 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "navSide",
	    staticClass: "nav-side",
	    class: {
	      customizing: _vm.isSort
	    }
	  }, [_c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [(_vm.isSort) ? _c('div', [_c('div', {
	    staticClass: "tip"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "custom-bg"
	  })]) : _vm._e()]), _vm._v(" "), _c('div', {
	    ref: "list",
	    staticClass: "nav-list"
	  }, [_vm._l((_vm.data), function(item, index) {
	    return [(_vm.isDrag && index === _vm.replaceItem && _vm.replaceItem <= _vm.dragId) ? _c('div', {
	      key: index,
	      staticClass: "n-i sotrable"
	    }, [_c('div', {
	      staticClass: "name"
	    })]) : _vm._e(), _vm._v(" "), _c('div', {
	      key: index,
	      staticClass: "n-i sotrable",
	      class: [{
	        'on': _vm.current === index && !_vm.isSort
	      }, {
	        'drag': _vm.isDrag && _vm.current === index
	      }],
	      style: (_vm.dragStyles),
	      on: {
	        "click": function($event) {
	          _vm.setEnable(index)
	        },
	        "mousedown": function($event) {
	          _vm.dragStart($event, index)
	        }
	      }
	    }, [_c('div', {
	      staticClass: "name"
	    }, [_vm._v(_vm._s(item.name))])]), _vm._v(" "), (_vm.isDrag && index === _vm.replaceItem && _vm.replaceItem > _vm.dragId) ? _c('div', {
	      key: index,
	      staticClass: "n-i sotrable"
	    }, [_c('div', {
	      staticClass: "name"
	    })]) : _vm._e()]
	  }), _vm._v(" "), (_vm.isDrag && _vm.replaceItem === _vm.data.length) ? _c('li', {
	    class: ['sortable-item']
	  }, [_c('div', {
	    staticClass: "sortable-item-name"
	  })]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "n-i customize",
	    on: {
	      "click": _vm.sort
	    }
	  }, [_c('i', {
	    staticClass: "n-icon-sort"
	  }), _vm._v(" "), _c('p', [_vm._v("排序")])])], 2), _vm._v(" "), _c('div', {
	    staticClass: "n-i gotop"
	  }, [_c('div', {
	    staticClass: "s-line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "btn_gotop",
	    on: {
	      "click": function($event) {
	        _vm.scrollToTop(_vm.time)
	      }
	    }
	  })])], 1)
	},staticRenderFns: []}

/***/ }),
/* 450 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lv-item"
	  }, [_c('a', {
	    staticClass: "lv-preview"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.live.cover
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "lv-mask"
	  }, [_c('div', {
	    staticClass: "lv-face"
	  }, [_c('img', {
	    staticStyle: {
	      "opacity": "1"
	    },
	    attrs: {
	      "src": _vm.live.face
	    }
	  })]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('span', {
	    staticClass: "b-tag"
	  }, [_vm._v(_vm._s(_vm.live.areaName))])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": 'https://live.bilibili.com' + _vm.live.link,
	      "target": "_blank"
	    }
	  }, [_c('div', {
	    staticClass: "lv-room"
	  }, [_c('div', {
	    staticClass: "lv-t",
	    attrs: {
	      "title": _vm.live.title
	    }
	  }, [_vm._v(_vm._s(_vm.live.title))])]), _vm._v(" "), _c('div', {
	    staticClass: "lv-info"
	  }, [_c('div', {
	    staticClass: "lv-host"
	  }, [_c('i', {
	    staticClass: "b-icon b-icon-live-host"
	  }), _vm._v(_vm._s(_vm.live.uname) + "\n\t\t\t")]), _vm._v(" "), _c('div', {
	    staticClass: "lv-online"
	  }, [_c('i', {
	    staticClass: "b-icon b-icon-live-online"
	  }), _vm._v(_vm._s(_vm.live.online) + "\n\t\t\t")])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "lv-onair-txt"
	  }, [_c('i', {
	    staticClass: "lv-onair-icon"
	  }), _vm._v("Live\n\t\t\t")])
	}]}

/***/ }),
/* 451 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "videoL"
	  }, [_c('div', {
	    staticClass: "LeftHead"
	  }, [_c('div', {
	    staticClass: "upinfo"
	  }, [_c('div', {
	    staticClass: "face"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    staticClass: "imgface",
	    attrs: {
	      "src": _vm.upInfo.face
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "upinfo-right"
	  }, [_c('div', {
	    staticClass: "upname"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v(_vm._s(_vm.upInfo.name))]), _vm._v(" "), _c('span', {
	    staticClass: "upmail"
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "title"
	  }, [_vm._v("sdhfjgashjdfgajksdf")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "btn"
	  }, [_c('div', {
	    staticClass: "downloadVideo"
	  }, [_vm._v("视频下载")]), _vm._v(" "), _c('button', {
	    staticClass: "downloadbtn",
	    class: _vm.isEnable(false),
	    on: {
	      "click": _vm._downloadVideoInfo
	    }
	  }, [_vm._v("1080p")]), _vm._v(" "), _c('button', {
	    staticClass: "downloadbtn",
	    class: _vm.isEnable(true),
	    on: {
	      "click": _vm._downloadVideoInfo
	    }
	  }, [_vm._v("720p")]), _vm._v(" "), _c('button', {
	    staticClass: "downloadbtn",
	    class: _vm.isEnable(true),
	    on: {
	      "click": _vm._downloadVideoInfo
	    }
	  }, [_vm._v("360p")])]), _vm._v(" "), _c('div', {
	    staticClass: "danmuchart"
	  }, [_c('epie', {
	    attrs: {
	      "videoInfo": _vm.videoInfo
	    }
	  }), _vm._v(" "), _c('button', {
	    staticClass: "videoInfobtn",
	    attrs: {
	      "target": "_blank"
	    },
	    on: {
	      "click": _vm.toVideoInfo
	    }
	  }, [_vm._v("查看详情")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "LRowItem"
	  }, [_c('div', {
	    staticClass: "split-line"
	  }), _vm._v(" "), _vm._l((_vm.recommendList.slice(0, 20)), function(item, index) {
	    return _c('LRowItem', {
	      key: index,
	      attrs: {
	        "item": item
	      }
	    })
	  })], 2)])
	},staticRenderFns: []}

/***/ }),
/* 452 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "layout_1"
	  }, [_c('div', {
	    staticClass: "video-info"
	  }, [_c('div', {
	    staticClass: "title"
	  }, [_c('div', {
	    staticClass: "left"
	  }, [_c('h1', {
	    class: {
	      spread: _vm.fold
	    }
	  }, [_vm._v(_vm._s(_vm.videoInfo.title))])]), _vm._v(" "), _c('div', {
	    staticClass: "right",
	    class: {
	      spread: _vm.fold
	    }
	  }, [_c('i', {
	    staticClass: "icon-top"
	  })])]), _vm._v(" "), (_vm.videoInfo.stat) ? _c('div', {
	    staticClass: "video-data"
	  }, [_c('span', {
	    staticClass: "view",
	    attrs: {
	      "title": "总播放数"
	    }
	  }, [_vm._v(_vm._s(_vm._f("iniView")(_vm.videoInfo.stat.view)) + "播放 · ")]), _vm._v(" "), _c('span', {
	    staticClass: "dm",
	    attrs: {
	      "title": "历史累计弹幕数"
	    }
	  }, [_vm._v(_vm._s(_vm._f("iniView")(_vm.videoInfo.stat.danmaku)) + "弹幕")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.dateForma(_vm.videoInfo.pubdate)))]), _vm._v(" "), _c('span', {
	    staticClass: "rank",
	    attrs: {
	      "title": "本日日排行数据过期后，再纳入本稿件的历史排行数据进行对比得出"
	    }
	  }, [_vm._v("  全站排行榜最高第2名")])]) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "video-player"
	  }, [_c('img', {
	    staticClass: "cover",
	    attrs: {
	      "v-lazy": _vm.videoInfo.pic
	    }
	  }), _vm._v(" "), _c('iframe', {
	    staticClass: "player-wrapper",
	    attrs: {
	      "src": _vm.playerSrc,
	      "scrolling": "no",
	      "border": "0",
	      "frameborder": "no",
	      "framespacing": "0",
	      "allowfullscreen": "true"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "TollBar"
	  }, [_c('videoTollBar', {
	    key: "videoTollBar",
	    attrs: {
	      "statCount": _vm.statCount
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    key: "comment",
	    staticClass: "comment-wrapper"
	  }, [_c('comment', {
	    attrs: {
	      "list": _vm.commentList
	    }
	  })], 1)])
	},staticRenderFns: []}

/***/ }),
/* 453 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('router-view')], 1)
	},staticRenderFns: []}

/***/ }),
/* 454 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.statCount) ? _c('div', {
	    staticClass: "video-toolbar border-bottom"
	  }, [_c('span', {
	    staticClass: "toolbar-item"
	  }, [_c('i', {
	    staticClass: "icon-dianzan"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "infont"
	  }, [_vm._v(_vm._s(_vm._f("iniView")(_vm.statCount.like)))])]), _vm._v(" "), _c('span', {
	    staticClass: "toolbar-item"
	  }, [_c('i', {
	    staticClass: "icon-qianbi1"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "infont"
	  }, [_vm._v(_vm._s(_vm._f("iniView")(_vm.statCount.coin)))])]), _vm._v(" "), _c('span', {
	    staticClass: "toolbar-item"
	  }, [_c('i', {
	    staticClass: "icon-shoucang"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "infont"
	  }, [_vm._v(_vm._s(_vm._f("iniView")(_vm.statCount.favorite)))])]), _vm._v(" "), _c('span', {
	    staticClass: "toolbar-item"
	  }, [_c('i', {
	    staticClass: "icon-zhuanfa"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "infont"
	  }, [_vm._v(_vm._s(_vm._f("iniView")(_vm.statCount.share)))])])]) : _vm._e()
	},staticRenderFns: []}

/***/ }),
/* 455 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "videopage"
	    }
	  }, [_c('TopContainer'), _vm._v(" "), _c('div', {
	    staticClass: "v-warp"
	  }, [_c('div', {
	    staticClass: "v-R"
	  }, [_c('videoR', {
	    attrs: {
	      "bvid": _vm.bvid,
	      "videoInfo": _vm.videoInfo,
	      "fold": _vm.fold,
	      "commentList": _vm.commentList,
	      "statCount": _vm.statCount
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "v-L"
	  }, [_c('videoL', {
	    attrs: {
	      "bvid": _vm.bvid,
	      "videoInfo": _vm.videoInfo,
	      "recommendList": _vm.recommendList,
	      "upInfo": _vm.upInfo
	    }
	  })], 1)])], 1)
	},staticRenderFns: []}

/***/ }),
/* 456 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-body"
	  }, [_c('div', {
	    staticClass: "r-list-body"
	  }, [_c('div', {
	    ref: "listWrapper",
	    staticClass: "r-list-wrapper"
	  }, [_c('ul', {
	    staticClass: "rlist"
	  }, _vm._l((_vm.rank.data), function(item, index) {
	    return _c('li', {
	      key: index,
	      class: {
	        on: index === 0
	      }
	    }, [_c('i', {
	      staticClass: "number",
	      class: {
	        n: index === 0 || index === 1 || index === 2
	      }
	    }, [_vm._v("\n            " + _vm._s(index + 1) + "\n          ")]), _vm._v(" "), _c('div', {
	      staticClass: "preview"
	    }, [_c('router-link', {
	      attrs: {
	        "to": {
	          name: 'video',
	          params: {
	            bvid: item.bvid
	          }
	        },
	        "title": item.title,
	        "target": "_blank"
	      }
	    }, [_c('img', {
	      staticStyle: {
	        "opacity": "1"
	      },
	      attrs: {
	        "data-img": "",
	        "src": item.pic,
	        "loaded": "loaded"
	      }
	    })])], 1), _vm._v(" "), _c('router-link', {
	      staticClass: "rl-info",
	      attrs: {
	        "to": {
	          name: 'video',
	          params: {
	            bvid: item.bvid
	          }
	        },
	        "title": item.title + item.pts,
	        "target": "_blank"
	      }
	    }, [_c('div', {
	      staticClass: "title t"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
	      staticClass: "i"
	    }, [_c('b', {
	      staticClass: "pts",
	      attrs: {
	        "title": item.pts
	      }
	    }, [_vm._v("综合评分：" + _vm._s(item.pts) + " ")])])])], 1)
	  })), _vm._v(" "), (_vm.rank.hot_original) ? _c('ul', {
	    staticClass: "rlist"
	  }, _vm._l((_vm.rank.data), function(item, index) {
	    return _c('li', {
	      key: index,
	      class: {
	        on: index === 0
	      }
	    }, [_c('i', {
	      staticClass: "number",
	      class: {
	        n: index === 0 || index === 1 || index === 2
	      }
	    }, [_vm._v("\n            " + _vm._s(index + 1) + "\n          ")]), _vm._v(" "), _c('div', {
	      staticClass: "preview"
	    }, [_c('a', {
	      attrs: {
	        "href": "/video/av9211860/",
	        "title": item.title,
	        "target": "_blank"
	      }
	    }, [_c('img', {
	      staticStyle: {
	        "opacity": "1"
	      },
	      attrs: {
	        "data-img": "",
	        "src": item.pic,
	        "loaded": "loaded"
	      }
	    })])]), _vm._v(" "), _c('a', {
	      staticClass: "rl-info",
	      attrs: {
	        "href": "/video/av9211860/",
	        "title": item.title + item.pts,
	        "target": "_blank"
	      }
	    }, [_c('div', {
	      staticClass: "title t"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
	      staticClass: "i"
	    }, [_c('b', {
	      staticClass: "pts",
	      attrs: {
	        "title": item.pts
	      }
	    }, [_vm._v("综合评分：" + _vm._s(item.pts) + " ")])])])])
	  })) : _vm._e()])]), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "more-link"
	  }, [_c('a', {
	    attrs: {
	      "href": "/ranking#!/all/1/1/7/",
	      "target": "_blank"
	    }
	  }, [_vm._v("查看更多")])])
	}]}

/***/ }),
/* 457 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "rank"
	  }, [_c('div', {
	    staticClass: "b-head"
	  }, [_c('div', {
	    staticClass: "left"
	  }, [_vm._m(0), _vm._v(" "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.categoryId !== 13),
	      expression: "categoryId !== 13"
	    }],
	    staticClass: "b-slt-tab"
	  }, [_c('li', {
	    class: {
	      on: !_vm.isOrigin
	    },
	    attrs: {
	      "type": "hot"
	    },
	    on: {
	      "mouseover": _vm.hot
	    }
	  }, [_c('span', {
	    staticClass: "b-tab-text"
	  }, [_vm._v("全部")])]), _vm._v(" "), _c('li', {
	    staticClass: "hot_original",
	    class: {
	      on: _vm.isOrigin
	    },
	    on: {
	      "mouseover": _vm.original
	    }
	  }, [_c('span', {
	    staticClass: "b-tab-text"
	  }, [_vm._v("原创")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "right"
	  }, [_c('div', {
	    staticClass: "b-slt"
	  }, [_c('span', {
	    staticClass: "txt"
	  }, [_vm._v(_vm._s(_vm.selectedTitle))]), _c('div', {
	    staticClass: "b-slt-arrow"
	  }), _vm._v(" "), _c('ul', {
	    staticClass: "list"
	  }, [_c('li', {
	    class: {
	      selected: _vm.isSelected1
	    },
	    attrs: {
	      "data-value": "3",
	      "data-source": "/index/catalogy/1-3day.json"
	    },
	    on: {
	      "click": _vm.selectedItem1
	    }
	  }, [_vm._v("三日")]), _vm._v(" "), _c('li', {
	    class: {
	      selected: _vm.isSelected2
	    },
	    attrs: {
	      "data-value": "7",
	      "data-source": "/index/catalogy/1-week.json"
	    },
	    on: {
	      "click": _vm.selectedItem2
	    }
	  }, [_vm._v("一周")])])])])]), _vm._v(" "), _c('BRowRankBody', {
	    attrs: {
	      "categoryId": _vm.categoryId,
	      "isOrigin": _vm.isOrigin,
	      "isWeek": _vm.isWeek
	    }
	  })], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "b-head-t"
	  }, [_c('h3', [_vm._v("排行")])])
	}]}

/***/ }),
/* 458 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "index"
	    }
	  }, [_c('TopContainer'), _vm._v(" "), _c('BHeader'), _vm._v(" "), _c('router-view')], 1)
	},staticRenderFns: []}

/***/ }),
/* 459 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "width": "100%",
	      "height": "100%"
	    },
	    attrs: {
	      "id": "epie"
	    }
	  })
	},staticRenderFns: []}

/***/ }),
/* 460 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "m-i",
	    class: _vm.classes,
	    on: {
	      "click": function($event) {
	        _vm.changeContent(_vm.index)
	      }
	    }
	  }, [_c('a', {
	    staticClass: "i-link"
	  }, [_c('em', [_vm._v(_vm._s(_vm.item.name))]), _vm._v(" "), (_vm.showNum) ? _c('div', {
	    staticClass: "v-num"
	  }, [_c('span', {
	    staticClass: "addnew_1"
	  }, [_vm._v(_vm._s(_vm.item.key))])]) : _vm._e()]), _vm._v(" "), _c('ul')])
	},staticRenderFns: []}

/***/ }),
/* 461 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "home"
	  }, [_c('BchennlContent', {
	    attrs: {
	      "rows": _vm.rows
	    }
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showMask),
	      expression: "showMask"
	    }],
	    ref: "mask",
	    staticClass: "wnd-mask"
	  })], 1)
	},staticRenderFns: []}

/***/ }),
/* 462 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div')
	},staticRenderFns: []}

/***/ }),
/* 463 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-head"
	  }, [_c('span', {
	    staticClass: "b-head-i",
	    class: [_vm.category, _vm.picClass[_vm.index]]
	  }), _vm._v(" "), _c('span', {
	    staticClass: "b-head-t"
	  }, [_c('a', {
	    attrs: {
	      "href": "",
	      "title": _vm.title
	    }
	  }, [_c('h2', [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "b-slt-tab"
	  }, [_c('li', {
	    staticClass: "on",
	    attrs: {
	      "data-source": "/index/ding.json",
	      "data-type-jsonp": "json",
	      "push": ""
	    }
	  }, [_c('span', {
	    staticClass: "b-tab-text"
	  }, [_vm._v("有新动态")])]), _vm._v(" "), _c('li', {
	    attrs: {
	      "data-source": "/index/ranking.json",
	      "data-type-jsonp": "json"
	    }
	  }, [_c('span', {
	    staticClass: "b-tab-text"
	  }, [_vm._v("最新投稿")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-link-more"
	  }, [_c('a', {
	    attrs: {
	      "href": "/video/music.html"
	    }
	  }, [_vm._v("\n\t\t\t更多"), _c('i', {
	    staticClass: "b-icon b-icon-arrow-r"
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "read-push",
	    staticStyle: {
	      "display": "block"
	    }
	  }, [_c('span', {
	    staticClass: "icon-refresh"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "info"
	  }, [_c('b', [_vm._v("4865")]), _vm._v(" "), _c('em', [_vm._v("条新动态")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "pmt-list pmt-inline"
	  }, [_c('i', {
	    staticClass: "pmt-icon"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "pmt-link"
	  }, [_c('a', {
	    attrs: {
	      "href": "//www.bilibili.com/video/av8977179/",
	      "target": "_blank",
	      "data-loc-id": "1558"
	    }
	  }, [_vm._v("一个人的恋爱循环\n\t\t\t")]), _vm._v(" "), _c('a')])])
	}]}

/***/ }),
/* 464 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "s-menu"
	  }, [_c('li', [_c('a', {
	    attrs: {
	      "href": "http://member.bilibili.com/v/video/submit.html",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "b-icon b-icon-vp"
	  }), _vm._v(" "), _c('em', [_vm._v("视频投稿")])])]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://member.bilibili.com/v/#!/article",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "b-icon b-icon-vm"
	  }), _vm._v(" "), _c('em', [_vm._v("投稿管理")])])]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": "http://member.bilibili.com/v/",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "b-icon b-icon-vc"
	  }), _vm._v(" "), _c('em', [_vm._v("创作中心")])])])])
	}]}

/***/ }),
/* 465 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "width": "100%",
	      "height": "100%"
	    },
	    attrs: {
	      "id": "vbar"
	    }
	  })
	},staticRenderFns: []}

/***/ }),
/* 466 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "content"
	  }, [_c('div', {
	    staticClass: "container-top-wrapper"
	  }, [_c('div', {
	    staticClass: "container-top"
	  }, [_c('div', {
	    staticClass: "b-l"
	  }, [_c('Banner')], 1), _vm._v(" "), _c('div', {
	    staticClass: "b-r"
	  }, [_c('BContentTop')], 1)])]), _vm._v(" "), _c('div', {
	    staticClass: "container-row"
	  }, [_c('BLive')], 1), _vm._v(" "), _vm._l((_vm.rows), function(row, index) {
	    return _c('div', {
	      key: index,
	      staticClass: "container-row",
	      attrs: {
	        "id": row.b_id,
	        "v-if": _vm.rows
	      }
	    }, [_c('BContentRow', {
	      key: _vm.componentKey,
	      attrs: {
	        "category": row.category,
	        "categoryId": row.categoryId,
	        "row": row.item,
	        "name": row.name,
	        "index": index
	      }
	    })], 1)
	  })], 2)
	},staticRenderFns: []}

/***/ }),
/* 467 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b_promote"
	  }, [_c('div', {
	    staticClass: "b-l"
	  }, [_vm._m(0), _vm._v(" "), (_vm.promotelist) ? _c('div', {
	    staticClass: "b-body"
	  }, [_c('ul', {
	    staticClass: "rm-list"
	  }, [_c('div', _vm._l((_vm.promotelist), function(item) {
	    return _c('BPromoteItem', {
	      attrs: {
	        "promoteItem": item
	      }
	    })
	  }))])]) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "b-r"
	  }, [_vm._m(1), _vm._v(" "), (_vm.promoteAd.length > 0) ? _c('div', {
	    staticClass: "b-body"
	  }, [_c('div', {
	    staticClass: "index-promote"
	  }, [_c('div', {
	    staticClass: "pmt-item pmt-mid"
	  }, [_c('a', {
	    attrs: {
	      "href": _vm.promoteAd[0].url,
	      "data-target-url": "",
	      "target": "_blank"
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.promoteAd[0].pic
	    }
	  })])])])]) : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-head"
	  }, [_c('span', {
	    staticClass: "b-head-i"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "b-head-t"
	  }, [_c('h2', [_vm._v("推广")])]), _vm._v(" "), _c('div', {
	    staticClass: "pmt-list"
	  }, [_c('div', {
	    staticClass: "pmt-link"
	  }, [_c('a', {
	    attrs: {
	      "href": "//www.bilibili.com/blackboard/activity-sharks.html",
	      "target": "_blank",
	      "data-loc-id": "1550"
	    }
	  }, [_vm._v("最光荣的时刻，就是现在")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-head"
	  }, [_c('div', {
	    staticClass: "index-online"
	  }, [_c('span', {
	    staticClass: "web-online"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("\n\t\t\t\t\t\t在线人数:\n\t\t\t\t\t\t"), _c('em', [_vm._v("12123")])])]), _vm._v(" "), _c('i', {
	    staticClass: "s-line"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "new-video"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("\n\t\t\t\t\t\t最新投稿:\n\t\t\t\t\t\t"), _c('em', [_vm._v("10086")])])])])])
	}]}

/***/ }),
/* 468 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "search"
	  }, [_c('form', {
	    attrs: {
	      "action": "//search.bilibili.com/all",
	      "id": "searchform"
	    }
	  }, [_c('input', {
	    staticClass: "search-keyword",
	    attrs: {
	      "name": "keyword",
	      "type": "text",
	      "id": "search-keyword",
	      "autocomplete": "off",
	      "accesskey": "s",
	      "x-webkit-speech": "",
	      "x-webkit-grammar": "builtin:translate",
	      "placeholder": "这样的历史剧才靠谱！",
	      "data-recommend": "av8509845"
	    }
	  }), _vm._v(" "), _c('button', {
	    staticClass: "search-submit",
	    attrs: {
	      "type": "submit"
	    }
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "link-ranking",
	    attrs: {
	      "href": "//www.bilibili.com/ranking",
	      "target": "_blank"
	    }
	  }, [_c('span', [_vm._v("排行榜")])])])
	}]}

/***/ }),
/* 469 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "top-item"
	  }, [_c('div', {
	    staticClass: "v-item"
	  }, [_c('a', {
	    attrs: {
	      "href": "/video/av8815046/",
	      "target": "_blank",
	      "title": _vm.contentTop.title
	    }
	  }, [_c('div', {
	    staticClass: "preview"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.contentTop.pic,
	      "alt": _vm.contentTop.title
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "mask"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "info"
	  }, [_c('div', {
	    staticClass: "t"
	  }, [_vm._v(_vm._s(_vm.contentTop.title))]), _vm._v(" "), _c('p', {
	    staticClass: "up"
	  }, [_vm._v("up主：" + _vm._s(_vm.contentTop.author))]), _vm._v(" "), _c('p', {
	    staticClass: "play"
	  }, [_vm._v("播放：" + _vm._s(_vm.contentTop.play))])])])])])
	},staticRenderFns: []}

/***/ }),
/* 470 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "top_container"
	  }, [_c('div', {
	    staticClass: "z_top b-header-blur b-header-blur-black"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "z_header"
	  }, [_c('div', {
	    staticClass: "z_top_nav"
	  }, [_c('ul', [_c('li', {
	    staticClass: "home"
	  }, [_c('router-link', {
	    attrs: {
	      "to": {
	        path: '/Home'
	      }
	    }
	  }, [_c('a', {
	    staticClass: "i-link"
	  }, [_c('span', [_vm._v("主站")])])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('li')])]), _vm._v(" "), _c('div', {
	    staticClass: "uns_box"
	  }, [_c('ul', {
	    staticClass: "menu"
	  }, [_c('li', {
	    staticClass: "u-i",
	    staticStyle: {
	      "display": "list-item"
	    },
	    attrs: {
	      "id": "i_menu_login_reg",
	      "guest": "yes"
	    }
	  }, [_c('a', {
	    staticClass: "i-link login",
	    attrs: {
	      "id": "i_menu_login_btn"
	    },
	    on: {
	      "click": _vm._loginShow
	    }
	  }, [_c('span', [_vm._v("登录")])]), _vm._v(" "), _c('i', {
	    staticClass: "s-line"
	  }), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _c('li', {
	    staticClass: "u-i b-post"
	  }, [_c('a', {
	    staticClass: "i-link",
	    attrs: {
	      "href": "http://member.bilibili.com/v/video/submit.html",
	      "target": "_blank"
	    },
	    on: {
	      "mouseenter": function($event) {
	        _vm.isShowPostMenu = !_vm.isShowPostMenu
	      },
	      "mouseleave": function($event) {
	        _vm.isShowPostMenu = !_vm.isShowPostMenu
	      }
	    }
	  }, [_vm._v("投稿")]), _vm._v(" "), _c('PostMaterial', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShowPostMenu),
	      expression: "isShowPostMenu"
	    }]
	  })], 1)])]), _vm._v(" "), (_vm.loginShow) ? _c('div', {
	    staticClass: "i_login"
	  }, [_c('login', {
	    ref: "logindiv"
	  })], 1) : _vm._e()])]), _vm._v(" "), (_vm.loginShow) ? _c('div', {
	    staticClass: "popContainer",
	    on: {
	      "click": _vm._loginDis
	    }
	  }) : _vm._e()])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "b-header-mask-wrp"
	  }, [_c('div', {
	    staticClass: "b-header-mask-bg",
	    staticStyle: {
	      "background-image": "url(//i0.hdslb.com/bfs/feed-admin/edaa5977e1e9d1807b4b608074dac3076bc07ca1.png)"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "b-header-mask"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "hbili"
	  }, [_c('a', {
	    staticClass: "i-link",
	    attrs: {
	      "href": "//www.bilibili.com/anime//",
	      "title": "番剧"
	    }
	  }, [_vm._v("番剧")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "b-gc",
	    attrs: {
	      "hasframe": "true"
	    }
	  }, [_c('a', {
	    staticClass: "i-link",
	    attrs: {
	      "href": "//game.bilibili.com/",
	      "title": "游戏中心"
	    }
	  }, [_vm._v("游戏中心")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "live",
	    attrs: {
	      "hasframe": "true"
	    }
	  }, [_c('a', {
	    staticClass: "i-link",
	    attrs: {
	      "target": "_blank",
	      "href": "//live.bilibili.com/",
	      "title": "直播"
	    }
	  }, [_vm._v("直播")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "b-zb"
	  }, [_c('a', {
	    staticClass: "i-link",
	    attrs: {
	      "target": "_blank",
	      "href": "//zb.bilibili.com/",
	      "title": "周边"
	    }
	  }, [_vm._v("周边")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "i-link reg",
	    attrs: {
	      "id": "i_menu_register_btn",
	      "href": "https://www.bilibili.com/register"
	    }
	  }, [_c('span', [_vm._v("注册")])])
	}]}

/***/ }),
/* 471 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header",
	    staticStyle: {
	      "background-image": "url(//i0.hdslb.com/bfs/feed-admin/edaa5977e1e9d1807b4b608074dac3076bc07ca1.png)"
	    }
	  }, [_c('div', {
	    staticClass: "header-layer"
	  }), _vm._v(" "), _c('a', {
	    staticClass: "header-link",
	    attrs: {
	      "target": "_blank",
	      "href": "http://www.bilibili.com",
	      "data-loc-id": "142"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "h-center"
	  }, [_c('a', {
	    staticClass: "logo",
	    staticStyle: {
	      "background-image": "url('//i0.hdslb.com/bfs/feed-admin/9a30607625e6c07da570bb2eb07ebdcc4b23c759.png')"
	    },
	    attrs: {
	      "href": "/"
	    }
	  }), _vm._v(" "), _c('search', {
	    staticClass: "msearch"
	  })], 1), _vm._v(" "), _c('BMenu')], 1)
	},staticRenderFns: []}

/***/ }),
/* 472 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "comment"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('ul', _vm._l((_vm.list), function(item, index) {
	    return _c('li', {
	      key: index,
	      staticClass: "comment-item border-bottom"
	    }, [_c('div', {
	      staticClass: "head"
	    }, [_c('img', {
	      staticClass: "img-head",
	      attrs: {
	        "src": item.member.avatar
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "detail"
	    }, [_c('div', {
	      staticClass: "user"
	    }, [_c('span', {
	      staticClass: "name"
	    }, [_vm._v(_vm._s(item.member.uname))]), _vm._v(" "), _c('span', {
	      staticClass: "like"
	    }, [_c('i', {
	      staticClass: "icon-dianzan1"
	    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm._f("formatNumber")(item.like)))])])]), _vm._v(" "), _c('div', {
	      staticClass: "time"
	    }, [_vm._v(_vm._s(_vm._f("formatDate")(item.ctime)))]), _vm._v(" "), _c('div', {
	      staticClass: "content"
	    }, [_vm._v(_vm._s(item.content.message))])]), _vm._v(" "), (item.replies) ? _c('div', {
	      staticClass: "reply-preview"
	    }, [_vm._l((item.replies), function(reply, key) {
	      return _c('p', {
	        key: key,
	        staticClass: "preview-item"
	      }, [_c('span', {
	        staticClass: "name"
	      }, [_vm._v(_vm._s(reply.member.uname + '：'))]), _vm._v(" "), _c('span', {
	        staticClass: "content"
	      }, [_vm._v(_vm._s(reply.content.message))])])
	    }), _vm._v(" "), (item.rcount > 3) ? _c('div', {
	      staticClass: "show-more"
	    }, [_c('span', [_vm._v(_vm._s('共' + item.rcount + '条回复'))]), _vm._v(" "), _c('i', {
	      staticClass: "icon-youjiantou"
	    })]) : _vm._e()], 2) : _vm._e()])
	  }))]), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "comment-more"
	  }, [_c('button', {
	    staticClass: "more-wrapper"
	  }, [_c('span', {
	    staticClass: "text"
	  }, [_vm._v("查看更多评论")]), _vm._v(" "), _c('i', {
	    staticClass: "icon-youjiantou"
	  })])])
	}]}

/***/ }),
/* 473 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('div', {
	    staticClass: "v"
	  }, [_c('a', {
	    staticClass: "preview cover-preview",
	    attrs: {
	      "href": _vm.promoteItem.url,
	      "target": "_blank"
	    }
	  }, [_c('div', {
	    staticClass: "border"
	  }), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": _vm.promoteItem.pic
	    }
	  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
	    staticClass: "fake_danmu_gen_shared"
	  }, [_vm._v("弹幕")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "",
	      "target": "_blank",
	      "title": "[帝国的黎明]"
	    }
	  }, [_c('div', {
	    staticClass: "t"
	  }, [_vm._v(_vm._s(_vm.promoteItem.name))])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "back"
	  }, [_c('div', {})])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "fore"
	  }, [_c('span', {
	    attrs: {
	      "data-loading": "false"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "bar"
	  }, [_c('div', {
	    staticStyle: {
	      "width": "50%"
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "x"
	  }, [_c('b', {
	    staticClass: "x2"
	  }, [_vm._v("70.41")])])
	}]}

/***/ }),
/* 474 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "videopage"
	    }
	  }, [_c('TopContainer'), _vm._v(" "), _c('div', {
	    staticClass: "main-info"
	  }, [_c('div', {
	    staticClass: "video-info"
	  }, [_c('div', {
	    staticClass: "rowitem"
	  }, [_c('div', {
	    staticClass: "palynum "
	  }, [(_vm.videoInfo.stat) ? _c('ul', {
	    staticClass: "playul"
	  }, [_c('li', {
	    staticClass: "pitem"
	  }, [_c('div', [_c('img', {
	    directives: [{
	      name: "lazy",
	      rawName: "v-lazy",
	      value: (_vm.videoInfo.pic),
	      expression: "videoInfo.pic"
	    }],
	    staticClass: "pic"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "split-line"
	  }), _vm._v(" "), _c('li', {
	    staticClass: "videotitle"
	  }, [_vm._v(_vm._s(_vm.videoInfo.title))]), _vm._v(" "), _c('li', [_vm._v("BV号：" + _vm._s(_vm.videoInfo.bvid))]), _vm._v(" "), _c('li', [_vm._v("播放数：" + _vm._s(_vm._f("iniView")(_vm.videoInfo.stat.view)))]), _vm._v(" "), _c('li', [_vm._v("弹幕数：" + _vm._s(_vm._f("iniView")(_vm.videoInfo.stat.danmaku)))]), _vm._v(" "), _c('li', [_vm._v("点赞数：" + _vm._s(_vm._f("iniView")(_vm.videoInfo.stat.like)))]), _vm._v(" "), _c('li', [_vm._v("硬币数：" + _vm._s(_vm._f("iniView")(_vm.videoInfo.stat.coin)))]), _vm._v(" "), _c('li', [_vm._v("收藏数：" + _vm._s(_vm._f("iniView")(_vm.videoInfo.stat.favorite)))]), _vm._v(" "), _c('li', [_vm._v("转发数：" + _vm._s(_vm._f("iniView")(_vm.videoInfo.stat.share)))])]) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "videochart"
	  }, [_c('viewbar', {
	    attrs: {
	      "videoInfo": _vm.videoInfo
	    }
	  })], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "danmuinfo rowitem"
	  }, [_c('div', {
	    staticClass: "dmselect palynum"
	  }, [_c('p', [_vm._v("历史弹幕")]), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ProductActive),
	      expression: "ProductActive"
	    }],
	    staticClass: "fl",
	    on: {
	      "change": function($event) {
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.ProductActive = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
	      }
	    }
	  }, _vm._l((_vm.productList), function(item, index) {
	    return _c('option', {
	      key: index,
	      domProps: {
	        "value": item
	      }
	    }, [_vm._v(_vm._s(item.title))])
	  })), _vm._v(" "), _c('button', {
	    staticClass: "dmbtn",
	    on: {
	      "click": _vm.creatdm
	    }
	  }, [_vm._v("生成")]), _vm._v(" "), _c('button', {
	    staticClass: "dmbtn",
	    on: {
	      "click": _vm.cancledm
	    }
	  }, [_vm._v("取消")]), _vm._v(" "), (_vm.dm.dmData[0]) ? _c('img', {
	    staticClass: "dmcloud",
	    attrs: {
	      "src": _vm.dmcloudimg,
	      "alt": ""
	    }
	  }) : _vm._e()]), _vm._v(" "), (_vm.dm.dmData[0]) ? _c('div', {
	    staticClass: "dmline"
	  }, [_c('dmline', {
	    attrs: {
	      "dm": _vm.dm.dmData
	    }
	  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "commentinfo"
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "up-info"
	  })])], 1)
	},staticRenderFns: []}

/***/ })
]);
//# sourceMappingURL=app.2123e8d0006de6227b5b.js.map