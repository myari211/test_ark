import React from 'react';
import { connect } from 'react-redux';

//style MDB
import { 
    MDBTable, 
    MDBTableHead, 
    MDBTableBody,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
} from 'mdb-react-ui-kit';



const List = ({ list }) => {
    return(
        <>
        <MDBContainer>
            <MDBRow>
                <MDBCol size="12">
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th scope="col">userID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">HP/WA</th>
                                <th scope="col">Status</th>
                                <th scope="col">Position</th>
                                <th scope="col">Role</th>
                                <th scope="col">Password</th>
                                <th scope="col">Registered Date</th>
                                <th scope="col">effective Date</th>
                            </tr>
                        </MDBTableHead>
                            <MDBTableBody>
                                {list.map(data => 
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.wa}</td>
                                        <td>{data.role}</td>
                                        <td>
                                            {data.status.map((position) => (
                                                <span className="badge badge-primary p-1 me-2" style={{fontSize: "10px"}}>{position.value}</span>
                                            ))}
                                        </td>
                                        <td>{data.position.label}</td>
                                        <td>{data.password}</td>
                                        <td>{data.registeredDate}</td>
                                        <td>{data.effectiveDate}</td>
                                    </tr>
                                    )
                                }
                            </MDBTableBody>
                    </MDBTable>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
    )
}


const mapStateToProps = state => ({
    list: state.userReducer.list,
});


export default connect(mapStateToProps)(List);