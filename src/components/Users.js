import UserContext from "../context/UserContext";
import Navbar from "./Navbar";
import TableItems from "./TableItems";

const Users = () => {
  return (
    <UserContext.Consumer>
      {(value) => {
        const { userList } = value;

        return (
          <>
            <Navbar />
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
              {userList?.map((eachUser) => (
                <TableItems eachUser={eachUser} />
              ))}
            </table>
          </>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Users;
