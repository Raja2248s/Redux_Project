// import React, { useEffect } from "react";
// import { FetchUserList } from "../Redux/Action";
// import { connect } from "react-redux";
// import {Link} from
// const Userlisting = (props) => {
//   useEffect(() => {
//     props.loaduser();
//   }, []);

//   return props.user.loading ? (
//     <div>
//       <h2>Loading...</h2>
//     </div>
//   ) : props.user.errmessage ? (
//     <div>
//       <h2>{props.user.errmessage}</h2>
//     </div>
//   ) : (
//     <div>
//       <div className="card">
//         <div className="card-header">
//           {" "}
//           <h2>User Listing</h2>
//         </div>

//         <div className="card-body">
//           <table className="table table-bordered table-striped table-hover">
//             <thead className="bg-dark text-white">
//               <tr>
//                 <td>Code</td>
//                 <td>Name</td>
//                 <td>Email</td>
//                 <td>Phone</td>
//                 <td>Role</td>
//                 <td>Action</td>
//               </tr>
//             </thead>

//             <tbody>
//               {props.user.userlist &&
//                 props.user.userlist.map((item) => (
//                   <tr key={item.id}>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.phone}</td>
//                     <td>{item.role}</td>
//                     <td>
//                       <Link className="btn btn-primary">Edit</Link>
//                       <button className="btn btn-danger">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loaduser: () => dispatch(FetchUserList()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);

import React, { useEffect } from "react";
import { FetchUserList, RemoveUser } from "../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
//import { Toast } from "react-toastify/dist/components";

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);

  const handledelete = (code) => {
    if (window.confirm("Do you want to remove")) {
      props.removeuser(code);
      props.loaduser();
    }
  };
  return props.user.loading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="card-header">
          <Link to={"/user/add"} className="btn btn-success">
            Add User [+]
          </Link>
        </div>

        <div className="card-body">
          <table className="table table-bordered table-striped table-hover">
            <thead className="bg-dark text-white">
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {props.user.userlist &&
                props.user.userlist.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link
                        to={"/user/edit/" + item.id}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          handledelete(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code) => dispatch(RemoveUser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
