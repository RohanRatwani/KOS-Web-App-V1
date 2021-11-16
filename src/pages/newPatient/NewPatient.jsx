import "./newPatient.css";
import {Link} from 'react-router-dom';
 import Navbar from '../../components/navbar/Navbar.js';

import ManAvatar from '../../images/man-avatar.jpg';
import Button from 'react-bootstrap/Button';

export default function NewUser() {
  return (

    <div>
      <Navbar />  
    <container fluid="md">
     <br />
    <div className="form-div">
      <div>
        <img 
        className="avatar" 
        alt="avator" 
        src={ManAvatar} 
        style={{height: '90px', width: '110px'}}/> 
      </div>
      <br />
      <div className="form-group">
        
        <label className="control-label" htmlFor="name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
           />
      </div>
      <br />

      <div className="form-group">
        <label className="control-label" htmlFor="name">Middlle Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
           />
      </div>
      {/* value={middlename} */}
          {/* onChange={e => setMiddlename(e.target.value)} */}
      <br />


      <div className="form-group">
        <label className="control-label" htmlFor="name">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
           />
      </div>
      {/* value={lastname}
          onChange={e => setLastname(e.target.value)} */}
      <br />

      <div className="form-group">
        <label className="control-label" htmlFor="name">Date of Birth</label>
        <input
          type="text"
          className="form-control"
          id="name"
           />
      </div>
      {/* value={birthdate}
          onChange={e => setBirthdate(e.target.value)} */}
      <br />

      <div className="form-group">
        <label className="control-label" htmlFor="name">Gender</label>
        <input
          type="text"
          className="form-control"
          id="name"
          />
      </div>
      {/* value={gender}
          onChange={e => setGender(e.target.value)}  */}
      <br />
      <div className="form-group">
        <label className="control-label" htmlFor="name">Height</label>
        <input
          type="text"
          size="10"
          className="form-control"
          id="name"
          />
      </div>
      {/* value={height}
          onChange={e => setHeight(e.target.value)} */}
      <br />

      <div className="form-group">
        <label className="control-label" htmlFor="name">Weight</label>
        <input
          type="text"
          size="10"
          className="form-control"
          id="name"
          />
      </div>
      {/* value={weight}
          onChange={e => setWeight(e.target.value)} */}
      <br />

      <div className="form-group">
        <label className="control-label" htmlFor="name">Blood Group</label>
        <input
          type="text"
          size="10"
          className="form-control"
          id="name"
         />
      </div>
      {/* value={bloodgroup}
          onChange={e => setBloodgroup(e.target.value)} */}
      <br />

      <div className="form-group">
        <label className="control-label" htmlFor="name">Pateints Id</label>
        <input
          type="text"
          className="form-control"
          id="name"
           />
      </div>
      {/* value={patientid}
          onChange={e => setPatientid(e.target.value)} */}
      <br />
        {/* {isError && <small className="mt-4 d-inline-block text-danger">Something went wrong. Please try again later.</small>} */}
        <Link to="/records" className="m">
          <Button
            type="submit"
            className="btn mt-4">
          </Button>
          {/* onClick={handleSubmit}
            disabled={loading}>
            {loading ? 'Loading...' : 'Submit'} */}
        </Link>

        <Link to="/records" className="n">
          <Button
            type="submit"
            className="btn mt-4">
              Go Back
          </Button>
        </Link>
        {/* {data && <div className="mt-4"></div>}  */}
      </div>
    </container>
  </div>

    // <div className="newUser">
    //   <h1 className="newUserTitle">New User</h1>
    //   <form className="newUserForm">
    //     <div className="newUserItem">
    //       <label>Username</label>
    //       <input type="text" placeholder="john" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Full Name</label>
    //       <input type="text" placeholder="John Smith" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Email</label>
    //       <input type="email" placeholder="john@gmail.com" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Password</label>
    //       <input type="password" placeholder="password" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Phone</label>
    //       <input type="text" placeholder="+1 123 456 78" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Address</label>
    //       <input type="text" placeholder="New York | USA" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Gender</label>
    //       <div className="newUserGender">
    //         <input type="radio" name="gender" id="male" value="male" />
    //         <label for="male">Male</label>
    //         <input type="radio" name="gender" id="female" value="female" />
    //         <label for="female">Female</label>
    //         <input type="radio" name="gender" id="other" value="other" />
    //         <label for="other">Other</label>
    //       </div>
    //     </div>
    //     <div className="newUserItem">
    //       <label>Active</label>
    //       <select className="newUserSelect" name="active" id="active">
    //         <option value="yes">Yes</option>
    //         <option value="no">No</option>
    //       </select>
    //     </div>
    //     <button className="newUserButton">Create</button>
    //   </form>
    // </div>
  );
}
