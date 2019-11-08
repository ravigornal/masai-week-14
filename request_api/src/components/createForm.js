import React from 'react'
import axios from "axios";

class Create extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            job:""
        }
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state);
      };
    
      handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        let obj = {
          name: this.state.name,
          job: this.state.job
        };
        axios
          .post("https://reqres.in/api/users", obj)
          .then(response => {
            console.log(response.status);
            if(response.status === 201){
                alert(`Successfully Created`)
            }
            // this.props.history.push("/home");
          })
          .catch(error => {
            console.log(error);
          });
      }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div class="form justify-content">
                        <div class="form-group col-md-6">
                            <label for="inputname4">First name</label>
                            <input type="emtextail" class="form-control"  placeholder="name" required name="name" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Job</label>
                            <input type="text" class="form-control"  placeholder="job" required name="job" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Create User</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Create;