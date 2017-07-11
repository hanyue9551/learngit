import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
/*tabbar跳转*/
import Home from '../pages/home/home'
import Audio from '../pages/audio/audio'
import Broadcast from '../pages/broadcast/broadcast'
import Group from '../pages/group/group'
import Mine from '../pages/mine/mine'
/*聊天框跳转*/
import Chat from '../pages/chat'
/*书影音跳转*/
import Film from '../components/audio/audio_film'
import Read from '../components/audio/audio_read'
import Tv from '../components/audio/audio_tv'
import City from '../components/audio/audio_city'
import Music from '../components/audio/audio_music'
/*我的跳转*/
import ToRemain from '../pages/mine/mine_toRemain'
import Likes from '../pages/mine/mine_likes'
import Note from '../pages/mine/mine_note'
import Album from '../pages/mine/mine_album'
import Status from '../pages/mine/mine_status'
import Movies_TV from '../pages/mine/mine_movies_tvs'
import Books from '../pages/mine/mine_books'
import MyMusic from '../pages/mine/mine_music'
import Events from '../pages/mine/mine_events'
import Time from '../pages/mine/mine_time'
import Doulist from '../pages/mine/mine_doulist'
import Orders from '../pages/mine/mine_orders'
import Wallet from '../pages/mine/mine_wallet'
/*我的区域十二宫格二级路由*/
/*电影电视区*/
import MovieTvWant from '../components/mine/mine_movietv_want'
import MovieTvWatching from '../components/mine/mine_movietv_watching'
import MovieTvWatched from '../components/mine/mine_movietv_watched'
import MovieTvFilmReview from '../components/mine/mine_movietv_filmreview'
import MovieTvFilm from '../components/mine/mine_movietv_film'
/*读书区*/
import BooksWant from '../components/mine/mine_books_want'
import BooksReading from '../components/mine/mine_books_reading'
import BooksReaded from '../components/mine/mine_books_readed'
import BooksNote from '../components/mine/mine_books_note'
import BooksReview from '../components/mine/mine_books_booksreview'
import BooksReader from '../components/mine/mine_books_reader'
/*音乐区*/
import MusicWant from '../components/mine/mine_music_want'
import MusicListening from '../components/mine/mine_music_listening'
import MusicListened from '../components/mine/mine_music_listened'
import MusicReview from '../components/mine/mine_music_musicreview'
/*同城区*/
import EventsCity from '../components/mine/mine_events_city'
import EventsWatching from '../components/mine/mine_events_watching'
/*豆瓣时间区*/
import DouTime from '../components/mine/mine_time_doutime'
import DownLoad from '../components/mine/mine_time_download'
/*搜索框区*/
import Search from '../pages/search'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/chat',
      name:'Chat',
      component:Chat
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children: [
      	{
      		path: 'audio_film',
      		component: Film
      	},
      	{
      		path: 'audio_read',
      		component: Read
      	},
        {
          path: 'audio_tv',
          component: Tv
        },
        {
          path: 'audio_city',
          component: City
        },
        {
          path: 'audio_music',
          component: Music
        }
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path:'/mine_toRemain',
      name:'ToRemain',
      component:ToRemain
    },
    {
      path:'/mine_likes',
      name:'Likes',
      component:Likes
    },
    {
      path:'/mine_note',
      name:'Note',
      component:Note
    },
    {
      path:'/mine_album',
      name:'Album',
      component:Album
    },
    {
      path:'/mine_status',
      name:'Status',
      component:Status
    },
    {
      path:'/mine_movies_tvs',
      name:'Movies_TV',
      component:Movies_TV,
      children:[
        {
          path:'mine_movietv_want',
          component:MovieTvWant
        },
        {
          path:'mine_movietv_watching',
          component:MovieTvWatching
        },
        {
          path:'mine_movietv_watched',
          component:MovieTvWatched
        },
        {
          path:'mine_movietv_filmreview',
          component:MovieTvFilmReview
        },
        {
          path:'mine_movietv_film',
          component:MovieTvFilm
        }
      ]
    },
    {
      path:'/mine_books',
      name:'Books',
      component:Books,
      children:[
        {
          path:'mine_books_want',
          component:BooksWant
        },
        {
          path:'mine_books_reading',
          component:BooksReading
        },
        {
          path:'mine_books_readed',
          component:BooksReaded
        },
        {
          path:'mine_books_booksreview',
          component:BooksReview
        },
        {
          path:'mine_books_note',
          component:BooksNote
        },
        {
          path:'mine_books_reader',
          component:BooksReader
        }
      ]
    },
    {
      path:'/mine_music',
      name:'MyMusic',
      component:MyMusic,
      children:[
        {
          path:'mine_music_want',
          component:MusicWant
        },
        {
          path:'mine_music_listening',
          component:MusicListening
        },
        {
          path:'mine_music_listened',
          component:MusicListened
        },
        {
          path:'mine_music_musicreview',
          component:MusicReview
        }
      ]
    },
    {
      path:'/mine_events',
      name:'Events',
      component:Events,
      children:[
        {
          path: 'mine_events_city',
          component: EventsCity
        },
        {
          path: 'mine_events_watching',
          component: EventsWatching
        }
      ]
    },
    {
      path:'/mine_time',
      name:'Time',
      component:Time,
      children:[
        {
          path: 'mine_time_doutime',
          component:DouTime
        },
        {
          path: 'mine_time_download',
          component: DownLoad
        }
      ]
    },
    {
      path:'/mine_doulist',
      name:'Doulist',
      component:Doulist
    },
    {
      path:'/mine_orders',
      name:'Orders',
      component:Orders
    },
    {
      path:'/mine_wallet',
      name:'Wallet',
      component:Wallet
    }

  ]
})
