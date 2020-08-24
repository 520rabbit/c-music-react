import React from 'react'

import Discover from '@/pages/discover/Discover'
import Recommend from '@/pages/discover/children/recommend/Recommend'
import Album from '@/pages/discover/children/album/Album'
import Artist from '@/pages/discover/children/artist/Artist'
import DjRadio from '@/pages/discover/children/djradio/DjRadio'
import Ranking from '@/pages/discover/children/ranking/Ranking' 
import Songs from '@/pages/discover/children/songs/Songs' 


import Mine from '@/pages/mine/Mine'
import Friends from '@/pages/friends/Friends'
import { Redirect } from 'react-router-dom';
 

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover' />
    )
  },
  {
    path: '/discover', 
    component: Discover,
    children: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend' />
        )
      },
      {
        path: '/discover/recommend', 
        component: Recommend
      },
      {
        path: '/discover/album', 
        component: Album
      },
      {
        path: '/discover/artist', 
        component: Artist
      },
      {
        path: '/discover/djradio', 
        component: DjRadio
      },
      {
        path: '/discover/ranking', 
        component: Ranking
      },
      {
        path: '/discover/songs', 
        component: Songs
      }
    ]
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