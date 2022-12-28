import React, {Component} from 'react';
import { variables } from './Variables.js';
// import { tsConstructorType } from '@babel/types';
export class User extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            users: [],

            modalTitle: "",
            UserName: "",
            UserEmail: "",
            UserId:0,

            UserIdFilter: "",
            UserNameFilter: "",
            usersWithoutFilter: []
        }
    }

    FilterFn() {
        var userIdFilter = this.state.UserIdFilter;
        var userNameFilter = this.state.UserNameFilter;
        var filteredData = this.state.usersWithoutFilter.filter(
            function(el) {
                return el.UserId.toString().toLowerCase().includes(
                    userIdFilter.toString().trim().toLowerCase()
                )&&
                el.UserName.toString().toLowerCase().includes(
                    userNameFilter.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({ users: filteredData });
    }

    changeUserIdFilter = (e) => {
        // this.setState({UserIdFilter: e.target.value});
        this.state.UserIdFilter = e.target.value;
        this.FilterFn();
    }


    changeUserNameFilter = (e) => {
        // this.setState({UserNameFilter: e.target.value});
        this.state.UserNameFilter = e.target.value;
        this.FilterFn();
    }


    sortResults(prop, asc) {
        var sortedData = this.state.usersWithoutFilter.sort(function(a,b) {
            if (asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            } else {
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })

        this.setState({users: sortedData});
    }
    refreshList() {
        fetch(variables.API_URL+'user')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({users:data, usersWithoutFilter: data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }



    changeUserName = (e) => {
        this.setState({UserName: e.target.value});
    }

    changeUserEmail = (e) => {
        this.setState({UserEmail: e.target.value});
    }

    addClick() {
        this.setState({
            modalTitle: "Add User",
            UserId: 0,
            UserName: "",
            UserEmail: ""
        })
    }

    editClick(user) {
        console.log(user.UserName)
        this.setState({
            modalTitle: "Edit User",
            UserId: user.UserId,
            UserName: user.UserName,
            UserEmail: user.UserEmail
        })
    }
    
    createClick() {
        fetch(variables.API_URL+'user', {
            method: 'POST',
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                UserEmail: this.state.UserEmail
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert(result);
            this.refreshList();
        }, (error) => {
            alert('Failed to create user');
        })
    }

    updateClick() {
        fetch(variables.API_URL+'user', {
            method: 'PUT',
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserId: this.state.UserId,
                UserName: this.state.UserName,
                UserEmail: this.state.UserEmail
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert(result);
            this.refreshList();
        }, (error) => {
            alert('Failed to update user');
        })
    }


    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL+'user/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'appication/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed to delete user');
            })
        }
    }

    render() {
        const { 
            users,
            modalTitle,
            UserId,
            UserName,
            UserEmail 
        }=this.state;

        return (
            <div>

                <button type="button" className='btn btn-primary m-2 float-end' data-toggle="modal" data-target="#userModal" onClick={() => this.addClick()}>
                    Add User
                </button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>
                                <div className="d-flex flex-row">                   
                                    <input className="form-control m-2" onChange={this.changeUserIdFilter} placeholder="Filter"/>
                                    <button type="button" className="btn btn-light" onClick={()=> this.sortResults('UserId', true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>
                                    </button>

                                    <button type="button" className="btn btn-light" onClick={()=> this.sortResults('UserId', false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>
                                    </button>
                                </div>

                                    UserId
                            </th>
                            <th>
                                <div className="d-flex flex-row">  
                                    <input className="form-control m-2" onChange={this.changeUserNameFilter} placeholder="Filter"/>
                                    <button type="button" className="btn btn-light" onClick={()=> this.sortResults('UserName', true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>
                                    </button>

                                    <button type="button" className="btn btn-light" onClick={()=> this.sortResults('UserName', false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>
                                    </button>                                    
                                </div>

                                UserName
                            </th>
                            <th>UserEmail</th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user.UserId}>
                                <td>{user.UserId}</td>
                                <td>{user.UserName}</td>
                                <td>{user.UserEmail}</td>
                                <td>

                                    <button type="button" className="btn btn-light mr-1" data-toggle="modal" data-target="#userModal"  onClick={() => this.editClick(user)}>   
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                                    </button>

                                    <button type="button" className="btn btn-light mr-1"  onClick={() => this.deleteClick(user.UserId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>


                <div className="modal" id="userModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h5 className="modal-title">{modalTitle}</h5>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text">UserName</span>
                            <input type="text" className="form-control" value={UserName} onChange={this.changeUserName}/><br/>
                            <span className="input-group-text">UserEmail</span>
                            <input type="email" className="form-control" value={UserEmail} onChange={this.changeUserEmail}/>
                        </div>
                    
                        {UserId === 0? <button type="button" className="btn btn-primary float-start" onClick={() => this.createClick()}>Create</button>:null}

                        {UserId !== 0? <button type="button" className="btn btn-primary float-start" onClick={() => this.updateClick()}>Update</button>:null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
                </div>

            </div>
        )
    }

       
}