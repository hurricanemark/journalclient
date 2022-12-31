import React, {Component} from 'react';
import { User } from './User';
import { variables } from './Variables';


export class Employment extends Component {

    
    render() {

        const { 
            users,
            employees,
            modalTitle,
            EmployeeId,
            EmployeeName,
            EmployeeTitle,
            DateOfJoining,
            EmployeeStatus,
            PhotoFileName,
            PhotoPath
        }=this.state;



        return (
            <div>

                <button type="button" className='btn btn-primary m-2 float-end' data-toggle="modal" data-target="#employModal" onClick={() => this.addClick()}>
                    Add Employee
                </button>
                <table className='table table-responsive-sm table-striped table-hover table-sm caption-top'>
                    <caption className='fs-5'>Tracking Personel Progress</caption>
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>EmployeeTitle</th>
                            <th>DateOfJoining</th>
                            <th>Status</th>
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
                                <td>{employee.EmployeeStatus}</td>
                                <td>{employee.PhotoFileName}</td>
                                <td>

                                    <button type="button" className="btn btn-light mr-1" 
                                        data-toggle="modal" 
                                        data-target="#employModal"
                                        data-mdb-toggle="tooltip" 
                                        data-mdb-placement="top" 
                                        title="Edit - Change record in place" 
                                        onClick={() => this.editClick(employee)}>   
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                                    </button>

                                    <button type="button" className="btn btn-light mr-1" 
                                        data-toggle="modal" 
                                         
                                        data-mdb-toggle="tooltip" 
                                        data-mdb-placement="top" 
                                        title="Deactivate record" 
                                        onClick={() => this.deleteClick(employee.EmployeeId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>
                                    </button>

                                    <button type="button" className="btn btn-light mr-1" 
                                        data-toggle="modal" 
                                        data-target="#exportModal" 
                                        data-mdb-toggle="tooltip" 
                                        data-mdb-placement="top" 
                                        title="Export record into PDF file"  
                                        onClick={() => this.exportPdfClick(employee.EmployeeId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                        </svg>
                                    </button>

                                    <button type="button" className="btn btn-light mr-1" 
                                        data-toggle="modal" 
                                        data-target="#confidentialModal" 
                                        data-mdb-toggle="tooltip" 
                                        data-mdb-placement="top" 
                                        title="Confidential entry"  
                                        onClick={() => this.confidentialEntryClick(employee.EmployeeId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-pulse" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Zm6.979 3.856a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.895-.133L4.232 10H3.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .416-.223l1.41-2.115 1.195 3.982a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h1.5a.5.5 0 0 0 0-1h-1.128L9.979 5.356Z"/>
                                        </svg>
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
                                    <input type="text" className="form-control" value={EmployeeName} onChange={this.changeEmployeeName}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">UserEmail</span>
                                    <input type="text" className="form-control" value={users.UserEmail} onChange={this.changeUserEmail}/>
                                </div>  


                                <div className="input-group mb-3">
                                    <span className="input-group-text">EmployeeTitle</span>
                                    <select className="form-select" onChange={this.changeEmployeeTitle}>
                                        {variables.Titles.map(title => <option key={EmployeeTitle}> {title.EmployeeTitle}
                                        </option>)}
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">DateOfJoining</span>
                                    <input type="date" className="form-control" value={DateOfJoining} onChange={this.changeDateOfJoining}/>
                                </div>         

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Status</span>
                                    <input type="text" className="form-control" value={EmployeeStatus} onChange={this.changeEmploymentStatus}/>
                                </div>      
                            </div>
                            <div className="p-2 w-50 bd-highlight">
                                <img width="250px" height="250px" src={PhotoPath + PhotoFileName} alt="profilephoto"/>

                                <input className="m-2" type="file" onChange={this.imageUpload}/>
                            </div>


                        </div>
                        {EmployeeId === 0? <button type="button" className="btn btn-primary float-start" data-dismiss="modal" onClick={() => this.createClick()}>Create</button>:null}

                        {EmployeeId !== 0? <button type="button" className="btn btn-primary float-start" data-dismiss="modal" onClick={() => this.updateClick()}>Update</button>:null}   
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
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
            EmployeeStatus:"",
            PhotoFileName: "",
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

    changeEmploymentStatus = (e) => {
        this.setState({EmployeeStatus: e.target.value});
    }

    addClick() {
        this.setState({
            modalTitle: "Add Employee",
            EmployeeId: 0,
            EmployeeName: "",
            EmployeeTitle: "",
            PhotoFileName: "Photos/BadAss.JPG",
            DateOfJoining: "",
            EmployeeStatus: ""
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
            EmployeeStatus: employee.EmployeeStatus,
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
                DateOfJoining: this.state.DateOfJoining,
                EmployeeStatus: this.state.EmployeeStatus
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
                DateOfJoining: this.state.DateOfJoining,
                EmployeeStatus: this.state.EmployeeStatus
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
        /* TODO: move record to inactive table instead of permanent deletion */
         

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

    exportPdfClick(id) {
        fetch(variables.API_URL+'employee/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((result) => {
            alert(JSON.stringify(result));
            // this.refreshList();
        }, (error) => {
            alert('Failed to export employment record to PDF file');
        })
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