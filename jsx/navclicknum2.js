'use strict';
import React from "react";
import ReactDOM from 'react-dom';
import ClickTwo from './clickmain';


   class ClickNav extends React.Component {

    constructor(props) {
          super(props);
          this.state = {data: []};
          this.state = {loading: true};
         
         
  }
    handleClick(i) {
    		console.log(i);
       	  this.setState({
            num: i
             });
          }
   componentDidMount() {
   	  const self =this;
fetch('mock/tree.json').then(function(res) {

    if (res.ok) {

        res.json().then(function(obj) {
        	self.setState({
                loading: false,
                data: obj,
                });
})

    }

}.bind(self), function(ex) {
	
console.log(ex)

}.bind(self))
    }
    render() {
    	//接收上级参数
    	var j = this.props.data1;
    	console.log(j);
    	//传到下级参数
		var num = this.state.num;
		console.log(num);
        
   var data = this.state.data || {};
         
        var newArry1=[];
        for(var i=0;i<data.length;i++){
        	if(j==0){
        	var item=data[i].text;
        	}
        	if(j==1){
        	var item=data[i].id;
        	}
        	else{
        		var item=data[i].text;
        	}
        	newArry1.push(<li onClick={this.handleClick.bind(this,i)} key={i}>{item}</li>)
         }

        return (
        <div >
            <ul id="leftlist">
               {newArry1}
             </ul>
             <ClickTwo  data5={this.state.num}/>
        </div>
          );
    }
}

export {ClickNav as default};
 