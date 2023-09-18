import { React, useState }  from 'react';
import { v4 as uuid } from 'uuid';
import { addUser } from '../../store/actions/userAction';
import { connect } from 'react-redux';
import bcrypt from 'bcryptjs';

//style MDB
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
    MDBBtn
} from 'mdb-react-ui-kit';

import Select  from 'react-select';

const role = [
    { value: 'Administrator', label: 'Administrator' },
    { value: 'User', label: 'User' }
];

const position = [
    { value: 'IT Network', label: 'IT Network'},
    { value: 'IT Developer', label: 'IT Developer'},
    { value: 'IT FA', label: 'IT FA'},
    { value: 'IT Operation', label: 'IT Operation'},
    { value: 'Finance', label: 'Finance'},
    { value: 'Accounting', label: 'Accounting'},
    { value: 'Sales & Marketing', label: 'Sales & Marketing' },
];


const Registration = ({addUser}) => {
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ phone, setPhone ] = useState();
    const [ roleSelect, setRoleSelect ] = useState();
    const [ status, setStatus ] = useState();
    const [ password, setPassword ] = useState();
    const [ effectiveDate, setEffectiveDate ] = useState();
    const [ positionSelect, setPositionSelect ] = useState();

    const handleAddUser = (e) => {
        e.preventDefault();
        const data = 
            {
                id: uuid(),
                name: name,
                wa: phone,
                email: email,
                role: roleSelect,
                position: positionSelect,
                status: status,
                password: bcrypt.hashSync(password),
                registeredDate: new Date().toLocaleDateString(),
                effectiveDate: effectiveDate,
            }

        console.log(data);
        addUser(data);
        alert("Data Berhasil ditambahkan silahkan check di list");
        
    }
    
    return(
        <>
            <MDBContainer>
                <MDBRow className="me-3">
                    <MDBCol size="12" className="d-flex justify-content-center">
                        <h3>Registration Users</h3>
                    </MDBCol>
                </MDBRow>
                <form onSubmit={handleAddUser}>
                    <MDBRow className="mt-3 d-flex justify-content-center">
                        <MDBCol size="6">
                            <MDBInput label="Name" id="name" type="text" onChange={(event) => {setName(event.target.value)}} required/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-3 d-flex justify-content-center">
                        <MDBCol size="3">
                            <MDBInput label="Email" id="email" type="email" onChange={(event) =>  {setEmail(event.target.value)}} required/>
                        </MDBCol>
                        <MDBCol size="3">
                            <MDBInput label="Phone/WA" maxLength="15" id="phone" type="text" onChange={(event) => {setPhone(event.target.value)}} required  />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="d-flex justify-content-center mt-3">
                        <MDBCol size="3">
                            <Select 
                                options={role} 
                                placeholder="Account Level"
                                onChange={(choice) => setPositionSelect(choice)}
                                required
                            />
                        </MDBCol>
                        <MDBCol size="3">
                            <Select
                                placeholder="Role"
                                options={position}
                                isSearchable={true}
                                isMulti
                                onChange={(choice) => setStatus(choice)}
                                required
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="d-flex justify-content-center mt-3">
                        <MDBCol size="3">
                            <span>Role: </span>
                        </MDBCol>
                        <MDBCol size="3 d-flex align-items-center">
                            <MDBRadio className="mr-4" name='status' id='active' label='Active' value="Active" onChange={(event) => setRoleSelect(event.target.value)}/>
                            <MDBRadio name='status' id='off' label='Off' value="Off" onChange={(event) => setRoleSelect(event.target.value)}/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-3 d-flex justify-content-center">
                        <MDBCol size="6">
                            <MDBInput type="password" label="Password" onChange={(event) =>  {setPassword(event.target.value)}} required/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-3 d-flex justify-content-center">
                        <MDBCol size="6">
                            <MDBInput type="date" label="Effective Date" onChange={(event) =>  {setEffectiveDate(event.target.value)}} required/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="d-flex justify-content-center mt-4">
                        <MDBCol size="6 d-flex justify-content-center">
                            <MDBBtn color="primary" type="submit" className="btn-lg shadow-0 rounded text-capitalize">Save</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </MDBContainer>
        </>
    );
}

const mapStateToProps = state => ({
    list: state.userReducer.list
  })

export default connect(mapStateToProps, { addUser })(Registration);