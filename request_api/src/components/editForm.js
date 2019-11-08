import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: ""
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
      .put("https://reqres.in/api/users", obj)
      .then(response => {
        console.log(response.status);
        var date = response.data.updatedAt
        if(response.status === 200){
            alert(`Success ${date}`)
        }
        
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
        <React.Fragment>
            <div className="m-5">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputname1" className="">name address</label>
                        <input type="name" class="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter name" required name="name" onChange={(e)=>this.handleChange(e)}/>
                        <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputjob1">job</label>
                        <input type="job" class="form-control" id="exampleInputjob1" placeholder="job" required name="job"  placeholder="" onChange={(e)=>this.handleChange(e)}/>
                    </div>
                <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </div>
        </React.Fragment>
            );
        }
    }
export default Login;
