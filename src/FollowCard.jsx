import { useState } from "react"

export function FollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'followCard-button isFollowing'
        : 'followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="followCard">
            <header className="followCard-header">
                <img
                    className="followCard-avatar"
                    alt="Avatar" src={`https://unavatar.io/${userName}`}
                />
                <div className='followCard-info'>
                    <strong>{children}</strong>
                    <span className="followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="followCard-text">{text}</span>
                    <span className="followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}