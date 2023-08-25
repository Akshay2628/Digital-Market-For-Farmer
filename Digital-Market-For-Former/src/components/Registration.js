import styles from './Reg.css'
import { Fragment, useState } from "react"
import { useNavigate } from 'react-router-dom';

import EmployeeService from "../service/EmployeeService";

function Registration() {

    let [formdetails, setformdetails] = useState({ fullName: "", email: "", password: "", contact_no: "", gender: "", country: "", city: "", pinCode: "" })

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();   // stops default action of submit 
        if (formdetails.fullName =="" || formdetails.email == "" || formdetails.password == "" || formdetails.contact_no == "") {
            alert("Please fill all fields");
            return;
        }
        else {
            console.log("adding data using axios")
            EmployeeService.addNewEmployee(formdetails)
                .then(() => {
                    navigate("/customers")
                }).catch((error) => {
                    console.log(error);
                })
        }

    }



    return (
        <div>
            <Fragment>
                <h2 className="text-center">Registration Form</h2>
                <form className="form">
                    <div className="input-box">
                        <label for>Full Name</label>
                        <input type="text" placeholder="Enter full name" id="cstname" name="cstname" value={formdetails.fullName} onChange={(event) => { setformdetails({ ...formdetails, fullName: event.target.value }) }} required />
                    </div>

                    <div className="input-box">
                        <label for>Email Address</label>
                        <input type="text" placeholder="Enter email address" id="email" name="email" value={formdetails.email} onChange={(event) => { setformdetails({ ...formdetails, email: event.target.value }) }} required />
                    </div>

                    <div className="input-box">
                        <label for>Password</label>
                        <input type="current-password" placeholder="Enter Password" id="pass" name="pass" value={formdetails.password} onChange={(event) => { setformdetails({ ...formdetails, password: event.target.value }) }} required />
                    </div>

                    <div className="column">
                        <div className="input-box">
                            <label for>Phone Number</label>
                            <input type="number" placeholder="Enter phone number" value={formdetails.contact_no} onChange={(event) => { setformdetails({ ...formdetails, contact_no: event.target.value }) }} required />
                        </div>
                        {/*                     <div className="input-box">
                        <label>Birth Date</label>
                        <input type="date" placeholder="Enter birth date"  value={formdetails.dob} onChange={(event)=>{setformdetails({...formdetails,dob:event.target.value})}} required />
                    </div> */}
                    </div>
                    <div className="gender-box">
                        <h3>Gender</h3>

                        <div className="gender-option">
                            <div className="gender">
                                <input type="radio" id="check-male" name="gender" value="Male" checked={formdetails.gender === 'Male'} onChange={(event) => { setformdetails({ ...formdetails, gender: event.target.value }) }} />
                                <label for="check-male">male</label>
                            </div>
                            <div className="gender">
                                <input type="radio" id="check-female" name="gender" value="Female" checked={formdetails.gender === 'Female'} onChange={(event) => { setformdetails({ ...formdetails, gender: event.target.value }) }} />
                                <label for="check-female">Female</label>
                            </div>
                            {/*                             <div className="gender">
                            <input type="radio" id="check-other" name="gender" value={formdetails.gender} onChange={(event)=>{setformdetails({...formdetails,gender:event.target.value})}}/>
                            <label for="check-other">prefer not to say</label>
                            </div> */}
                        </div>
                    </div>
                    <div className="input-box address">
                        {/*                     <label>Address</label>
                    <input type="text" placeholder="Enter street address" required />
                    <input type="text" placeholder="Enter street address line 2" required /> */}
                        <div className="column">
                            <div className="select-box">
                                <select value={formdetails.country} onChange={(event) => { setformdetails({ ...formdetails, country: event.target.value }) }}>
                                    <option hidden>Country</option>
                                    <option>America</option>
                                    <option>Japan</option>
                                    <option>India</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Enter your city" value={formdetails.city} onChange={(event) => { setformdetails({ ...formdetails, city: event.target.value }) }} required />
                        </div><br />
                        <div className="column">
                            <br />
                            <input type="text" placeholder="Enter your PIN Code " value={formdetails.pinCode} onChange={(event) => { setformdetails({ ...formdetails, pinCode: event.target.value }) }} required />

                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </Fragment>

        </div>
    );
}

export default Registration;