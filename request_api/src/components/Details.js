import React from 'react';
import axios from "axios";
export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: {},
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://reqres.in/api/users',
            params: {
                id: this.props.match.params.id
            }
        })  
            .then((response) => {
                var ob = response.data.data;
                console.log(ob.avatar)
                this.setState({
                    array: response.data.data,
                });
            })
            .catch((err) => alert(err))
    }
   
    render() {
        //console.log(this.state.array.id)
        return (
            <React.Fragment>
                <div class="container  justify-content-center">
                <div class="card m-5" style={{width: "21rem"}}>
                    <img src={this.state.array.avatar} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h3 class="card-title">Id : {this.state.array.id}</h3>
                        <h3 class="card-title">Name : {this.state.array.first_name} {this.state.array.last_name}</h3>
                        <h5 class="card-text">Email : {this.state.array.email}</h5>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}