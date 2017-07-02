import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: ""
        };
    }
    render() {
        return (
            <div>
                <h2>学员信息表</h2>
                <Search searchStu={(key) => { this.handleSearch(key) }} />
                <List searchKey={this.state.searchKey} />
            </div>
        )
    }

    handleSearch(key) {
        this.setState({
            searchKey: key
        });
    }
}

export default StudentInfo;