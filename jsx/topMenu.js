'use strict';
import React from "react";
import ReactDOM from 'react-dom';
import ClickNav from './navclicknum2';
import ClickTwo from './clickmain';

 
	
	class TopMenu extends React.Component {
		constructor(props) {
          super(props);
          this.state = {data: []};
 }
		handleClick(i){
       	console.log(i);
       	  this.setState({
             data: i
             });
           console.log(i);
          
 
}
    render() {
    	var data = this.state.data;
    	 console.log(data);
    	  
        var newArry=[];
        for(var i=0;i<5;i++){
           
             newArry.push(<button onClick={this.handleClick.bind(this,i)} key={i}>{i}</button>)
        }

        return (
            <div className="repos-list">

                {newArry}
                 <ClickNav  data1={this.state.data}/>
          
              </div>
             
            
        );
    }

  }
 export {TopMenu as default};
    
