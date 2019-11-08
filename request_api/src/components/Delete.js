import React from 'react';
import axios from "axios";
class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: {},
        }
    }
    componentDidMount() {
        axios({
            method: 'delete',
            url: 'https://reqres.in/api/users',
            params: {
                id: this.props.match.params.id
            }
        })  
            .then((response) => {
                
                console.log(response.status)
                this.setState({
                    array:response     
                })
            })
            .catch((err) => alert(err))
    }
   
    render() {
        //console.log(this.state.array.id)
        return (
            <React.Fragment>
                <div class="container  justify-content-center">
                <div class="card m-5" style={{width: "21rem"}}>
                    <div class="card-body text-center">
                        <h3 class="card-title">Status : Deletion Successfull({this.state.array.status})</h3>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Delete;