import React from 'react';
import '../Styles/header.css'

class Header extends React.Component{



// constructor(){
// super();
// this.state={
// backgroundColor:'',
// display:'none'
// }
// }
// componentDidMount(){
// const path =this.props.history.location.pathname;
// this.setAttributes(path);
// }

// setAttributes =(path)=>{
// let bg,display;
// if(path === '/'){
// bg='black';
// display='none'
// }
// else{
// bg='red';
// display='inline-block'
// }
// this.setState({backgroundColor:bg , display:display});

// }
render(){

// const {backgroundColor,display}=this.state;
return(

<div className='header'style={{backgroundColor:'black'}}>
<div className='header-logo' >
<div className='user-account'>
<div className='logo-z'><h1>Z</h1></div> 
<div className='login-box'>
<span><button className='login'>Login</button></span>
<span><button className='signup'>Create an account</button></span>
</div>
</div>





</div>


</div>

)
}
}

export default Header;