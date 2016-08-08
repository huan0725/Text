'use strict';
import React from "react";
class ClickTwo extends React.Component {
	 constructor(props) {
          super(props);
          this.state = {data: []};
          this.state = {loading: true};
          
         
  }
   
     componentDidMount() {
     	 const self =this;
fetch('mock/showHomework.json').then(function(res) {

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
       var k = this.props.data5;
    	console.log(k);
        if(this.state.loading) {
        	
            return <p className="tc">loading...</p>;
        }

        var data = this.state.data || {},
          
        reposList = data.map(function(item, index, arr) {
           
                   if(k==0){
                   		return (
                <tr key={index}>
                               <td>{item.menuid}</td>
                               <td>{item.menuname}</td>
                               <td>{item.icon}</td>
                               <td><a href="pagechild.html">查看详情</a></td>
</tr>)}

                   if(k==1){
                   	return (
                <tr key={index}>
                               <td>{item.category}</td>
                               <td>{item.picture}</td>
                               <td>{item.id}</td>
                               
                               <td><a href="pagechild.html">查看详情</a></td>
</tr>)}
                   else{	return (
                <tr key={index}>
                               <td>{item.menuid}</td>
                               <td>{item.menuname}</td>
                               <td>{item.icon}</td>
                               <td><a href="pagechild.html">查看详情</a></td>
</tr>)}
                   })

            

        

        return (
          <table id="main">
                	 <tbody>
                	 	<tr>
                	 		<th>数据</th>
                	 		<th>类型</th>
                	 		<th>编号</th>
                	 		<th>详情</th>
                	 	</tr>
                	 	{reposList}
                	 </tbody>
                </table>
           
        );
    }
	
}
export {ClickTwo as default};
