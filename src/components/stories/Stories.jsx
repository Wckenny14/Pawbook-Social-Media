import './stories.scss'
import { useContext } from 'react';
import {AuthContext} from "../../context/authContext"



const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    // Temporary Dummie Data
    const stories = [
        {
            id: 1,
            name: "Comedy Special",
            img: "https://i.imgur.com/j17JQzt.png"
        },
        {
            id: 2,
            name: "Princess Fluffy Pants",
            img: "https://i.imgur.com/D9WO68y.jpg"
        },
        {
            id: 3,
            name: "Charlie",
            img: "https://i.imgur.com/JWA85Fd.jpg"
        },
        {
            id: 4,
            name: "Charlie and Princess",
            img: "https://i.imgur.com/HC1UhDx.jpg"
        },
    ];

    return ( 
        <div className='stories'>
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Stories;
