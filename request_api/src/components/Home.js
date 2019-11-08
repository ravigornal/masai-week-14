import React,{Component} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

class Home extends Component{
    state={
        details : []
    }
    componentDidMount(){
        axios.get('https://reqres.in/api/users')
        .then(res=> {
            console.log(res.data.data)
            this.setState({
                details:res.data.data       
            })
        })
    }
    render(){
        return(
            <React.Fragment>
            <div>
                <table class="table" style={{marginLeft:"420px",marginTop:"20px",width:"900px"}}>
                    <thead class="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    {this.state.details.map((ele,i) =>{
                    console.log(ele)
                    return(
                        <tbody key={i}>
                            <tr>
                                <td><Link to={{pathname:`/show/${ele.id}`}}>{ele.id}</Link></td>
                                {/* <Link to={{pathname:`/competitions/${comp.id}`,query:{league:comp.league}}}> {comp.caption} </Link> */}
                                <td>{ele.email}</td>
                                <td>{ele.first_name}</td>
                                <td>{ele.last_name}</td>
                                <td><img src={ele.avatar} alt="img"></img></td>
                                <td><Link to={{pathname:`/edit/${ele.id}`}}><button type="button" class="btn btn-success">Edit</button></Link></td>
                                <td><Link to={{pathname:`/delete/${ele.first_name}`}}><button type="button" class="btn btn-danger">Delete</button></Link></td>
                            </tr>
                        </tbody>
                        )
                    })}
                </table>
                <nav aria-label="Page navigation example" style={{marginLeft:"720px",marginTop:"20px",width:"900px"}}>
                    <ul class="pagination">
                        <Link to="/home"><li class="page-item"><a class="page-link" href="1">Previous</a></li></Link>
                        <Link to="/home"><li class="page-item"><a class="page-link" href="1">1</a></li></Link>
                        <Link to="/home2"> <li class="page-item"><a class="page-link" href="2">2</a></li></Link>
                        <Link to="/home2"><li class="page-item"><a class="page-link" href="2">Next</a></li></Link>
                    </ul>
                </nav>
            </div>
            </React.Fragment>
        )
    }
}

export default Home;