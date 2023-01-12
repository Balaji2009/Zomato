import React from "react";
import '../Styles/filter.css'


class Filter extends React.Component{
    render(){
        return(
            <div>
<nav className="navbar navbar-light bg-danger">
       <div className="container-fluid">
        {/* <img src="./Assets/zomato.png" height="60px" width="80px" className="img"/> */}
        <div className="d-flex">
        <button className="b1"> Login </button>
        <button className="b2">Create an account</button>
        </div>
        </div>
    </nav>
    <div className="body">
    <div className="container">
        <div className="row heading">
         <h1 className="cap"> Breakfast Places in Chennai </h1> 
        </div>
    

  <div className="row">
     <div className="col-3 col-sm-12 col-md-4 col-lg-3">
     <div className="filterPanel">
        <div className="filterPanelHeading">
     <h5>Filters</h5>
     
     </div>
     <div className="filterPanelSubHeading">
     <h6>Select Location</h6>
     </div>

     <input type="text" list="cities" placeholder="select your Location"/>
     <datalist id="cities">
            <option>Chennai</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Delhi</option>
            <option>Hydrebad</option>
        </datalist>
    
        
        
          <div className="filterPanelSubHeading">
        <h5>Cuisine</h5>
          </div>
        
        <input type="checkbox" className="cuisineOption"/>
        <label>North Indian</label>
    <br/>
        <input type="checkbox" className="cuisineOption"/>
        <label>South Indian</label>
        <br/>
        <input type="checkbox" className="cuisineOption"/>
        <label>Chinese</label>
        <br/>
        <input type="checkbox" className="cuisineOption"/>
        <label>Fast food</label>
        <br/>
        <input type="checkbox" className="cuisineOption"/>
        <label>Street food</label>
        
        
          

        <div className="filterPanelSubHeading">
          <h5>Cost for two</h5>
        </div>
        <input type="checkbox" className="cuisineOption"/>
         <label>less than  &#8377;500</label>
         <br/>
         <input type="checkbox" className="cuisineOption"/>
         <label>&#8377;500 to &#8377;1,000</label>
         <br/>
         <input type="checkbox" className="cuisineOption"/>
         <label>&#8377;1,500 to &#8377;2,000</label>
         <br/>
         <input type="checkbox" className="cuisineOption"/>
         <label>More than &#8377;2,000</label>
        
         <div className="filterPanelSubHeading">
         sort
         <br/>
        <input type="checkbox" className="cuisineOption"/>
        <label>price low to high</label>
        <br/>
        <input type="checkbox" className="cuisineOption"/>
         <label>price high to low</label>
        

    
     

     </div>


    </div>

</div>


<div className="col-9 col-sm-12 col-md-8 col-lg-9">
    <div className="resultsPanel">
        <div className="row upperSection">
            <div className="col-2">
                <img src="./Assets/cake1.jpg" className="resultsImage"/>
            </div>
            <div className="col-10">
                <div className="resultsHeading">The Big Chill cake</div>
                <div className="resultsSubHeading">FORT</div>
                <div className="resultsAdress">Shop 1, Plot D, Samruddhi complex, shinsholi.</div>
            </div>
        </div>
        
        <div className="row lowerSection">
              <div className="col-2">
                <div className="resultsAddress">CUISINES:</div>
                <div className="resultsAddress">COST FOR TWO:</div>
             </div>
        <div className="col-10">
             <div className="resultsSubHeading">Bakery:</div>
             <div className="resultsSubheading">&#8377;700</div>

         </div>
        </div>
    </div>
    
    <div className="resultsPanel">
        <div className="row upperSection">
            <div className="col-2">
                <img src="./Assets/cake1.jpg" className="resultsImage"/>
            </div>
            <div className="col-10">
                <div className="resultsHeading">The Big Chill cake</div>
                <div className="resultsSubHeading">FORT</div>
                <div className="resultsAdress">Shop 1, Plot D, Samruddhi complex, shinsholi.</div>
            </div>
        </div>
        
        <div className="row lowerSection">
              <div className="col-2">
                <div className="resultsAddress">CUISINES:</div>
                <div className="resultsAddress">COST FOR TWO:</div>
             </div>
        <div className="col-10">
             <div className="resultsSubHeading">Bakery:</div>
             <div className="resultsSubheading">&#8377;700</div>

        </div>
        </div>
    </div>   


<div className="pagination">
    
    <div className="paginationButton">1</div>
    <div className="paginationButton">2</div>
    <div className="paginationButton">3</div>
    <div className="paginationButton">4</div>
    <div className="paginationButton">5</div>
   
</div>
</div>
</div>
</div>
</div>
</div>

            
            
        )
    }
}
export default Filter;