import React, { Component } from "react";
import config from './config.json';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: config,
        };
    }

    // shouldComponentUpdate(nextProps) {
    //     return !deepEquals(render(this.props), render(nextProps))
    // }

    render() {
        console.log(this.props.searchKey);
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>身高</th>
                        <th>体重</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.items.map((item, index)=>{
                            return (this.props.searchKey==""||item.name.indexOf(this.props.searchKey) != -1) ? (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.age}</td>
                                    <td>{item.height}</td>
                                    <td>{item.weight}</td>
                                    <td><a onClick={()=>{this.removeItem(item.id)}}>删除</a></td>
                                </tr>
                            ) : null
                        })
                    }

                </tbody>
            </table>
        )
    }

    removeItem(id){
        let _items =this.state.items.filter((item)=>{
            return item.id!=id;
        })
        this.setState({
            items:_items
        });
    }
}

export default List;