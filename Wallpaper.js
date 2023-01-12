import React from 'react'


class Wallpaper extends React.Component {

    render() {
        return (
            <div>

                <div className="cont">
                    {/* <div className="Top">
                        <button className="b1"> Login </button>
                        <button className="b2">Create an account</button>
                    </div> */}

                    <div className="top">
                        <img src="./Assets/ani.jpg" height="150px" width="150px" />
                        <h1>Zomato is here</h1>
                                                <span>
                            <select class="locationBox">
                                <option selected disabled>Select you location</option>
                                <option>Chennai</option>
                                <option>Madurai</option>
                                <option>Coimbatore</option>
                                <option>Trichy</option>
                                <option>Kanyakumaari</option>
                                </select>
                        </span>
                        <span>
                            <input type="text" className="searchbox" placeholder="Search for restaurant" />
                        </span>
                    </div>
                </div>

                <div className="textdiv">
                    <div className="text"> Quick search</div>
                    <h6>Discover restaurant by type of meals</h6>
                </div>


                



                    </div>
                
                    )
    }

}

export default Wallpaper;