import './App.css'
import { FollowCard } from './FollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
        key:1
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false,
        key:2
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true,
        key:3
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false,
        key:4
    },
    {
        userName: 'goncar',
        name: 'Carlos Gonzalez',
        isFollowing: false,
        key:4
    },
]

function App() {
    return (
        <section className="App">
            {
                users.map(({ userName, name, key, isFollowing }) => (
                    <FollowCard 
                        key={key}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </FollowCard>
                ))
            }
        </section>
    )
}

export default App