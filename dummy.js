wallpaper

import React from 'react';
import axios from 'axios';
class Wallpapers extends React.Component {

// constructor(){
// super();
// this.state={
// restaurants:[],
// inputText:'',
// suggestions:[]
// }
// }

// handleLocation=(event)=>{
//     const locationId = event.target.value;
    
//     axios({
//     method:'GET',
//     url:`/restaurants/${locationId}`,
//     header :{'Content-Type':'application/json'}
//     })
//     .then(response=>{
//     this.setState({restaurants: response.data.restaurants})
//     })
//     .catch(err => console.log(err));
//     }
    

 
// handleSearch=(event)=>{
//         let inputText=event.target.value;
        
//         const{restaurants} = this.state;
        
//         const suggestions = restaurants.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
        
//         this.setState({ suggestions, inputText});
//         }

//         showSuggestion =()=>{
//             const {suggestions,inputText} = this.state;
        
//         if (suggestions.length === 0 && inputText === undefined){
//         return null;
//         }
        
//         if (suggestions.length >  0 && inputText === ''){
//         return null;
//         }
        
//         if (suggestions.length ===  0 && inputText){
//         return <ul>
//         <li>No search Results found</li>
//         </ul>
//         }
//         return(
//             <ul>
//             {
//             suggestions.map((item,index) => (<li key={index} onClick={() => this.selectingRestaurant(item)}>
//                 {`${item.name}-${item.locality},${item.city}`}</li>))
//             }
//             </ul>
            
//             )
//             }

render() {

// const { locationData } = this.props;
return (
<div>
<div className="top">
<img src="./Assets/ani.jpg" alt="image not found"height="150px" width="150px" />
<h1>Zomato is here</h1>
<div className='Searchoption'>
<span>
<select className='locationbox'>
<option value="0">select</option>
{
locationData.map((item) => {
return <option value="1">{`${item.name},${item.city}`}</option>
})
}
</select>
</span>
</div>

{/* <span className='glyphicon glyhicon-search search'></span>
<div id="notebook">
<input id ="query" classNmame= "restaurantinputs" type="text" className="searchbox" 
placeholder="Search for restaurant" onChange={this.handleSearch}/>
{this.showSuggestion()}   
</div> */}
</div>



</div>
)
}
}

export default Wallpapers;

// onChange={this.handleLocation}>




quick search

import React from 'react';

import QuickSearchitems from './QuickSearchitems';

class QuickSearch extends React.Component {
render() {
    const {quicksearchData}=this.props;
return (
<div>

<div className="textdiv">
<div className="text"> Quick search</div>
<h6>Discover restaurant by type of meals</h6>
</div>


<div className="subcontainer">

<div className='row row-cols-2 row-cols-lg-3 g-2 g-lg-3'>
{
//     quicksearchData.map((item)=>{
//         const {name,content,image}=item;
//         return<QuickSearchitems quicksearchitemDate ={item}/>
//     })
// }

<QuickSearchitems/>
}



</div>




</div> </div>


)
}
}

export default QuickSearch;


quicksearchitem

import React from 'react';

class QuickSearchitems extends React.Component {
render() {
    const{name,content,image}=this.props.quicksearchitemData;
return (
<div>


<div className="col">
<div className="p-3 border bg-light">

<img src={`./${image}`} className="img"/>
<div className="box">
<div className="Head">{name}</div>
<div className="desp">{content}</div>
</div>
</div>
</div>



</div>


)
}
}

export default QuickSearchitems;


home
constructor(){
    //          super();
    //          this.state={
    //              location:[]
                 
    //         }
    //      }
    // componentDidMount(){
    //     axios({
    //         method:'GET',
    //         url:'http://localhost:4700/location',
    //         headers:{'Content-Type':'application/json'}
    //     })
    //     .then(response=>{
    
    //         this.setState({location:response.data.location})
    //     })
    //     .catch(err=>console.log(err));
    
    
    // //     axios({
    // //         method:'GET',
    // //         url:'http://localhost:4700/mealtypes',
    // //         headers:{'Content-Type':'application/json'}
    // //     })
    // //     .then(response=>{
    
    // //         this.setState({location:response.data.mealtype})
    // //     })
    // //     .catch(err=>console.log(err));
    //  }
    