import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <div>
                <h3>按名字筛选</h3>
                <input type="text" ref="username" className="form-control" id="name" placeholder="请输入名称" 
                onChange={()=>{this.search()}}/>
            </div>
        )
    }
    search(){
        // console.log(this.refs.username.value);
        this.props.searchStu(this.refs.username.value);
    }
}

export default Search;