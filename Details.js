import React from 'react';

import '../Styles/details.css';

class Details extends React.Component{
    render(){
        return(
            <div>

<div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./Assets/cakebg2.png" class="d-block w-100" alt="This is a cake" height="500px" width="100%"/>
          </div>
          <div class="carousel-item">
            <img src="./Assets/multi2.jpg" class="d-block w-100" alt="This is a cake 2" height="500px" width="100%"/>
          </div>
          <div class="carousel-item">
            <img src="./Assets/bffcake.png" class="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
          </div>
          <div class="carousel-item">
            <img src="./Assets/cake.png" class="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
          </div>
          <div class="carousel-item">
            <img src="./Assets/ck5.jpg" class="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
          </div>
          <div class="carousel-item">
            <img src="./Assets/ck7.jpg" class="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
<div class="bottomsection"> 
    <div class="heading">The big chill Cakery</div>
    <button class="btn-order">Order Online </button>

    <div class="tabs">
        <div class="tab">
            <input type="radio" id="tab-1" name="tab-group-1" checked/>
            <label for="tab-1">Overview</label>

            <div class="content">
                <div class="about">About this place</div>
                <br/>
                <div class="head">Cuisine</div>
                <div class="value">Bakery, Fast-food</div>
                <br/>
                <div class="head">Average Cost</div>
                <div class="value">&#8377; 700 doe two people(approx)</div>
            </div>
        </div>
        <div class="tab">
            <input type="radio" id="tab-2" name="tab-group-1"/>
            <label for="tab-2">Contact</label>

            <div class="content">
                <div class="head">Phone Number</div>
                <div class="value">+9111004725435</div><br/>
                <div class="head">The Big Chill Cakery</div>
                <div class="value">Shop !, Plot D, Samruddhi complex, Chincholi,
                    Mumbai-400002,Maharashtra</div>
            </div>
        </div>
    </div>
  </div>
            </div>
        )
    }
}
export default Details;