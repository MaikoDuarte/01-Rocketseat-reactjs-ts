
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maikoduarte.png',
      name: 'Maiko Duarte',
      role: 'CEO @ Mktechnology'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'jane.design/doctorcare' }

    ],
    publishedAt: new Date('2023-06-08 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'jane.design/doctorcare' }

    ],
    publishedAt: new Date('2023-06-09 20:00:00'),
  }
]

function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
            <Post
            key={post.id}
            post={post}

            />
            )
          })}

        </main>
      </div>
  

    </div>
  )
}

export default App
