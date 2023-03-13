import './rightBar.scss'

const RightBar = () => {
    return ( 
        <div className="rightBar">
            <div className="container">
                {/* <div className="item">
                    <span>Suggestions for furry friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/UFdRX42t.jpg" alt="princess" />
                            <span>Princess</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/AykC0est.jpg" alt="charlie" />
                            <span>Charlie Boy</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div> */}
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/AykC0est.jpg" alt="" />
                            <p>
                                <span>Charlie</span> posted a comment
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/UFdRX42t.jpg" alt="" />
                            <p>
                                <span>Princess</span> updated cover picture
                            </p>
                        </div>
                        <span>10 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/oSNTrVi.jpg" alt="" />
                            <p>
                                <span>Wayne</span> removed picture
                            </p>
                        </div>
                        <span>15 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/UFdRX42t.jpg" alt="" />
                            <p>
                                <span>Princess</span> added a story
                            </p>
                        </div>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Following</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/UFdRX42t.jpg" alt="princess" />
                            <div className="online" />
                            <span>Princess</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/D9WO68y.jpg" alt="princess" />
                            <div className="online" />
                            <span>Tinky</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.imgur.com/oSNTrVi.jpg" alt="princess" />
                            <div className="online" />
                            <span>Wayne</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;