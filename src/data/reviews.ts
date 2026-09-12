import type { Review } from '@/types/content'

export const reviews: Review[] = [
  {
    id: 1,
    content: '脆皮鸡是真的很惊喜，皮薄脆，肉还非常多汁。环境不是那种端着的精致，灯光和音乐都刚好，可以舒服地聊一整晚。',
    name: 'Mia',
    initial: 'M',
    source: '大众点评 · 2026.08',
  },
  {
    id: 2,
    content: '从云南甜豆到桂花舒芙蕾，能吃到季节变化，也能吃到厨师清楚自己想表达什么。服务员对每道菜的介绍认真但不过度。',
    name: '周先生',
    initial: '周',
    source: '小红书 · 2026.07',
    featured: true,
  },
  {
    id: 3,
    content: '带爸妈来过生日，老人喜欢菜里的中式根底，我们也喜欢菜单的轻盈表达。预订时提的生日小惊喜，他们有认真记住。',
    name: 'Lynn',
    initial: 'L',
    source: 'Google Reviews · 2026.06',
  },
]
