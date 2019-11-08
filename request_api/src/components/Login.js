// import React from 'react';

// class Login extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             id:'',
//             password:'',
            
//          }
//        }
//        handleChange=(event)=>{
//            event.preventDefault();
//             this.setState({
//                 [event.target.name]:event.target.value
//                });
//         }
        
//         handleSubmit=(event)=>{
//            event.preventDefault();
//            var obj={
//                  id:this.state,
//                  password:this.state.capital,
                
//         }

//         // componentDidMount() {
//         //     axios.get('https://reqres.in/api/users?page=1')
//         //     .then(res=> {
//         //         console.log(res)
//         //         // this.setState({
//         //         //     details:res.data.slice(0,20)    
//         //         // })
//         //     })
//         // }
//         // // render(){
//         // //     return(<ol>
//         // //         {this.state.details.map(country =><Link to={`/${country.name}`}><li key={country.name}>{country.name}</li></Link>)}
//         // //     </ol>)
//         // // }
    
//     }
//     render(){
//         return(
//             <div className="m-5">
//                 <form onSubmit={this.handleSubmit}>
//                     <div class="form-group">
//                         <label for="exampleInputEmail1" className="">Email address</label>
//                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required name="id" value={this.state.id} onChange={(e)=>this.handleChange(e)}/>
//                         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <div class="form-group">
//                         <label for="exampleInputPassword1">Password</label>
//                         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required name="password" value={this.state.password} placeholder="" onChange={(e)=>this.handleChange(e)}/>
//                     </div>
//                 <button type="submit" class="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Login;


import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("https://reqres.in/api/login", obj)
      .then(response => {
        console.log(response.data.token);
        this.props.history.push("/home");
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
                        <label for="exampleInputEmail1" className="">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required name="email" onChange={(e)=>this.handleChange(e)}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required name="password"  placeholder="" onChange={(e)=>this.handleChange(e)}/>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </React.Fragment>
            );
        }
    }
export default Login;