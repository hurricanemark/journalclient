import React, {Component} from 'react';
import { variables } from './Variables';

export class Employment extends Component {

    
    render() {
        const Titles = [
            {"EmployeeTitle": "CTO"},
            {"EmployeeTitle": "CFO"},
            {"EmployeeTitle": "COO"},
            {"EmployeeTitle": "VP Engineering"},
            {"EmployeeTitle": "Sr. Engineer"},
            {"EmployeeTitle": "Staff Engineer"},
            {"EmployeeTitle": "Tech support"},
            {"EmployeeTitle": "QA Engineer"},
            {"EmployeeTitle": "Lead Project Manager"},
            {"EmployeeTitle": "Sale Manager"},
            {"EmployeeTitle": "HR Manager"},
            {"EmployeeTitle": "Finance Manager"},
            {"EmployeeTitle": "PR Manager"},
            {"EmployeeTitle": "Sale Engineer"},
            {"EmployeeTitle": "Maintenance"},
            {"EmployeeTitle": "HR Staff"}
        ];
        const { 
            users,
            employees,
            modalTitle,
            EmployeeId,
            EmployeeName,
            EmployeeTitle,
            DateOfJoining,
            PhotoFileName,
            PhotoPath
        }=this.state;



        return (
            <div>

                <button type="button" className='btn btn-primary m-2 float-end' data-toggle="modal" data-target="#employModal" onClick={() => this.addClick()}>
                    Add Employee
                </button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>EmployeeTitle</th>
                            <th>DateOfJoining</th>
                            <th>PhotoFileName</th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee =>
                            <tr key={employee.EmployeeId}>
                                <td>{employee.EmployeeId}</td>
                                <td>{employee.EmployeeName}</td>
                                <td>{employee.EmployeeTitle}</td>
                                <td>{employee.DateOfJoining}</td>
                                <td>{employee.PhotoFileName}</td>
                                <td>

                                    <button type="button" className="btn btn-light mr-1" data-toggle="modal" data-target="#employModal"  onClick={() => this.editClick(employee)}>   
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                                    </button>

                                    <button type="button" className="btn btn-light mr-1" data-toggle="modal" data-target="#employModal"  onClick={() => this.deleteClick(employee.EmployeeId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>


                <div className="modal" id="employModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h5 className="modal-title">{modalTitle}</h5>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-row bd-highlight mb-3>">
                            <div className="p-2 w-50 bd-highlight">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">EmployeeName</span>
                                    <input type="text" className="form-control" value={EmployeeName} onChange={this.changeEmployeeName}/><br/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">EmployeeTitle</span>
                                    <select className="form-select" onChange={this.changeEmployeeTitle} value={variables.Titles}>
                                        {variables.Titles.map(title => <option key={EmployeeTitle}> {title.EmployeeTitle}
                                        </option>)}
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">DateOfJoining</span>
                                    <input type="date" className="form-control" value={DateOfJoining} onChange={this.changeDateOfJoining}/>
                                </div>                                
                            </div>
                            <div className="p-2 w-50 bd-highlight">
                                <img width="250px" height="250px" src={PhotoPath + PhotoFileName} />

                                <input className="m-2" type="file" onChange={this.imageUpload}/>
                            </div>


                        </div>
                        {EmployeeId === 0? <button type="button" className="btn btn-primary float-start" onClick={() => this.createClick()}>Create</button>:null}

                        {EmployeeId !== 0? <button type="button" className="btn btn-primary float-start" onClick={() => this.updateClick()}>Update</button>:null}   
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

    constructor(props) {
        super(props);
    
        this.state = {
            users: [],
            employees: [],
            modalTitle: "",

            EmployeeName: "",
            EmployeeId:0,
            EmployeeTitle: variables.Titles,
            DateOfJoining: "",
            PhotoFileName: "anonymous.png",
            PhotsPath: variables.PHOTO_URL

         
        }
    }

    refreshList() {
        fetch(variables.API_URL+'employee')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({employees:data});
        });

        fetch(variables.API_URL+'user')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({users:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    changeEmployeeName = (e) => {
        this.setState({EmployeeName: e.target.value});
    }

    changeEmployeeTitle = (e) => {
        this.setState({EmployeeTitle: e.target.value});
    }

    changeDateOfJoining = (e) => {
        this.setState({DateOfJoining: e.target.value});
    }    

    addClick() {
        this.setState({
            modalTitle: "Add Employee",
            EmployeeId: 0,
            EmployeeName: "",
            EmployeeTitle: "",
            PhotoFileName: "anonymous.png",
            DateOfJoining: ""
        })
    }

    editClick(employee) {
        console.log(employee.EmployeeName)
        this.setState({
            modalTitle: "Edit Employee",
            EmployeeId: employee.EmployeeId,
            EmployeeName: employee.EmployeeName,
            EmployeeTitle: employee.EmployeeTitle,
            DateOfJoining: employee.DateOfJoining,
            PhotoFileName: employee.PhotoFileName
        })
    }
    
    createClick() {
        fetch(variables.API_URL+'employee', {
            method: 'POST',
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EmployeeName: this.state.EmployeeName,
                EmployeeTitle: this.state.EmployeeTitle,
                PhotoFileName: this.state.PhotoFileName,
                DateOfJoining: this.state.DateOfJoining
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert(result);
            this.refreshList();
        }, (error) => {
            alert('Failed to create employee record');
        })
    }

    updateClick() {
        fetch(variables.API_URL+'employee', {
            method: 'PUT',
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EmployeeId: this.state.EmployeeId,
                EmployeeName: this.state.EmployeeName,
                EmployeeTitle: this.state.EmployeeTitle,
                PhotoFileName: this.state.PhotoFileName,
                DateOfJoining: this.state.DateOfJoining
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert(result);
            this.refreshList();
        }, (error) => {
            alert('Failed to update employee record');
        })
    }


    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL+'employee/' + id, {
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
                alert('Failed to delete employment record');
            })
        }
    } 

    imageUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", e.target.files[0], e.target.files[0].name);

        fetch(variables.API_URL + 'employee/safefile', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            this.setState({PhotoFileName: data});
        })
    }

}