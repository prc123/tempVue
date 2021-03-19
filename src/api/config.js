// 请求状态标识
export const ERR_OK = 0

// 轮播图图片资源
export const sliderImage = [
  'https://i0.hdslb.com/bfs/archive/0877cdd4b401b66d578841ad0cebbf1dec95fe07.jpg@480w_270h',
  'https://i0.hdslb.com/bfs/archive/1de7300e9793ee713c8e6515df9439378dd8c790.jpg@480w_270h',
  'https://i0.hdslb.com/bfs/archive/9e0ffb1650d9b68ae61bf02a18bf5892f9902890.jpg@480w_270h',
  'https://i0.hdslb.com/bfs/archive/68cb764e2a9060623f2678928588fd1d5b3aae75.png@480w_270h'
]

// 所有分区视频对应的tid或rid
export const regionTags = [
  {
    name: '首页',
    key: 0
  },
  {
    name: '动画',
    key: 1,
    sortKeys:'douga',
    blocks: [
      { name: '推荐', sortKeys:'douga',key: 1 },
      { name: 'MAD·AMV',sortKeys:'mad', key: 24 },
      { name: 'MMD·3D', sortKeys:'mmd',key: 25 },
      { name: '短片·手书·配音',sortKeys:'voice', key: 47 },
      { name: '特摄', sortKeys:'tokusatsu',key: 86 },
      { name: '综合', sortKeys:'other',key: 27 }
    ]
  },
  {
    name: '番剧',
    sortKeys:'anime',
    key: 13,
    blocks: [
      { name: '推荐', sortKeys:'anime',key: 13 },
      { name: '连载动画', sortKeys:'serial',key: 33 },
      { name: '完结动画', sortKeys:'finish',key: 32 },
      { name: '资讯', sortKeys:'information',key: 51 },
      { name: '官方延伸',sortKeys:'offical', key: 152 }
    ]
  },
  {
    name: '国创',
    key: 167,
    sortKeys:'guochuang',
    blocks: [
      { name: '推荐', sortKeys:'guochuang',key: 167 },
      { name: '国产动画',sortKeys:'chinese', key: 153 },
      { name: '国产原创相关',sortKeys:'original', key: 168 },
      { name: '布袋戏', sortKeys:'puppetry',key: 169 },
      { name: '动态漫·广播剧', sortKeys:'motioncomic',key: 195 },
      { name: '资讯', sortKeys:'information',key: 170 }
    ]
  },
  {
    name: '音乐',
    key: 3,
    sortKeys:'music',
    blocks: [
      { name: '推荐',sortKeys:'music', key: 3 },
      { name: '原创音乐',sortKeys:'original', key: 28 },
      { name: '翻唱',sortKeys:'cover', key: 31 },
      { name: 'VOCALOID·UTAU', sortKeys:'vocaloid',key: 30 },
      { name: '电音',sortKeys:'electronic', key: 194 },
      { name: '演奏',sortKeys:'perform', key: 59 },
      { name: 'MV', sortKeys:'mv',key: 193 },
      { name: '音乐现场', sortKeys:'live',key: 29 },
      { name: '音乐综合',sortKeys:'other', key: 130 }
    ]
  },
  {
    name: '舞蹈',
    key: 129,
    sortKeys:'dance',
    blocks: [
      { name: '推荐', sortKeys:'dance',key: 129 },
      { name: '宅舞', sortKeys:'otaku',key: 20 },
      { name: '街舞', sortKeys:'hiphop',key: 198 },
      { name: '明星舞蹈', sortKeys:'star',key: 199 },
      { name: '中国舞', sortKeys:'china',key: 200 },
      { name: '舞蹈综合', sortKeys:'three_d',key: 154 },
      { name: '舞蹈教程', sortKeys:'demo',key: 156 }
    ]
  },
  {
    name: '游戏',
    key: 4,
    sortKeys:'game',
    blocks: [
      { name: '推荐', sortKeys:'game',key: 4 },
      { name: '单机游戏', sortKeys:'stand_alone',key: 17 },
      { name: '电子竞技', sortKeys:'esports',key: 171 },
      { name: '手机游戏', sortKeys:'mobile',key: 172 },
      { name: '网络游戏', sortKeys:'online',key: 65 },
      { name: '桌游棋牌', sortKeys:'board',key: 173 },
      { name: 'GMV', sortKeys:'gmv',key: 121 },
      { name: '音游', sortKeys:'music',key: 136 },
      { name: 'Mugen', sortKeys:'mugen',key: 19 }
    ]
  },
  {
    name: '科技',
    key: 36,
    sortKeys:'technology',
    blocks: [
      { name: '推荐', sortKeys:'technology',key: 36 },
      { name: '科学科普', sortKeys:'science',key: 201 },
      { name: '社科人文', sortKeys:'fun',key: 124 },
      { name: '野生技术协会', sortKeys:'wild',key: 122 },
      { name: '财经', sortKeys:'finance',key: 207 },
      { name: '校园学习', sortKeys:'campus',key: 208 },
      { name: '职业职场', sortKeys:'career',key: 209 },
    ]
  },
  {
    name: '数码',
    key: 188,
    sortKeys:'digital',
    blocks: [
      { name: '推荐', sortKeys:'digital',key: 188 },
      { name: '手机平板', sortKeys:'mobile',key: 95 },
      { name: '电脑装机', sortKeys:'pc',key: 189 },
      { name: '摄影摄像', sortKeys:'photography',key: 190 },
      { name: '影音智能', sortKeys:'intelligence_av',key: 191 }
    ]
  },
  {
    name: '生活',
    key: 160,
    sortKeys:'life',
    blocks: [
      { name: '推荐', sortKeys:'life',key: 160 },
      { name: '搞笑', sortKeys:'funny',key: 138 },
      { name: '日常', sortKeys:'daily',key: 21 },
      { name: '手工', sortKeys:'handmake',key: 161 },
      { name: '绘画', sortKeys:'painting',key: 162 },
      { name: '运动', sortKeys:'sports',key: 163 },
      { name: '汽车', sortKeys:'automobile',key: 176 },
      { name: '其他', sortKeys:'other',key: 174 }
    ]
  },
  {
    name: '鬼畜',
    key: 119,
    sortKeys:'kichiku',
    blocks: [
      { name: '推荐', sortKeys:'kichiku',key: 119 },
      { name: '鬼畜调教', sortKeys:'guide',key: 22 },
      { name: '音MAD', sortKeys:'mad',key: 26 },
      { name: '人力VOCALOID', sortKeys:'manual_vocaloid',key: 126 },
      { name: '教程演示', sortKeys:'course',key: 127 }
    ]
  },
  {
    name: '时尚',
    key: 155,
    sortKeys:'fashion',
    blocks: [
      { name: '推荐', sortKeys:'fashion',key: 155 },
      { name: '美妆', sortKeys:'makeup',key: 157 },
      { name: '服饰', sortKeys:'clothing',key: 158 },
      { name: '健身', sortKeys:'aerobics',key: 164 },
      { name: 'T台', sortKeys:'catwalk',key: 159 },
      { name: '风尚标', sortKeys:'trends',key: 192 }
    ]
  },
  {
    name: '娱乐',
    key: 5,
    sortKeys:'ent',
    blocks: [
      { name: '推荐', sortKeys:'ent',key: 5 },
      { name: '综艺', sortKeys:'variety	',key: 71 },
      { name: '明星', sortKeys:'star',key: 137 },
    ]
  },
  {
    name: '影视',
    key: 181,
    sortKeys:'cinephile',
    blocks: [
      { name: '推荐', sortKeys:'cinephile',key: 181 },
      { name: '影视杂谈', sortKeys:'cinecism',key: 182 },
      { name: '影视剪辑', sortKeys:'montage',key: 183 },
      { name: '短片', sortKeys:'shortfilm',key: 85 },
      { name: '预告·资讯', sortKeys:'trailer_info',key: 184 }
    ]
  },
  // {
  //   name: '广告',
  //   sortKeys:'douga',key: 165,
  //   sortKeys:'douga',
  //   blocks: [
  //     { name: '推荐', sortKeys:'douga',key: 165 }
  //   ]
  // },
  {
    name: '纪录片',
    key: 177,
    sortKeys:'documentary',
    blocks: [
      { name: '推荐', sortKeys:'documentary',key: 177 },
      { name: '人文·历史', sortKeys:'history',key: 37 },
      { name: '科学·探索·自然', sortKeys:'science',key: 178 },
      { name: '军事', sortKeys:'military',key: 179 },
      { name: '社会·美食·旅行', sortKeys:'travel',key: 180 }
    ]
  },
  {
    name: '电影',
    key: 23,
    sortKeys:'movie',
    blocks: [
      { name: '推荐', sortKeys:'movie',key: 23 },
      { name: '华语电影', sortKeys:'chinese',key: 147 },
      { name: '欧美电影', sortKeys:'west',key: 145 },
      { name: '日本电影', sortKeys:'japan',key: 146 },
      { name: '其他国家', sortKeys:'movie',key: 83 }
    ]
  },
  {
    name: '电视剧',
    key: 11,
    sortKeys:'tv',
    blocks: [
      { name: '推荐', sortKeys:'tv',key: 11 },
      { name: '国产剧', sortKeys:'mainland',key: 185 },
      { name: '海外剧', sortKeys:'overseas',key: 187 }
    ]
  },
  { name: '直播', key: -1 },
  { name: '相簿', key: -2 }
]
