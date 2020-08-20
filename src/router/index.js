import Discover from '@/pages/discover/Discover'
import Mine from '@/pages/mine/Mine'
import Friends from '@/pages/friends/Friends'

const routes = [
  {
    path: '/',
    exact: true,
    component: Discover
  },
  {
    path: '/mine', 
    component: Mine
  },
  {
    path: '/friends', 
    component: Friends
  }
];

export default routes