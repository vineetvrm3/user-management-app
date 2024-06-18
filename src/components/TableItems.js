import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const TableItems = ({ eachUser }) => {
  const { id, name, email, phone } = eachUser;
  return (
    <UserContext.Consumer>
      {(value) => {
        const { onDeleteUser, onEditUser } = value;

        return (
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
              <Link to="/edit-user" className="link">
                <button
                  onClick={() => {
                    onEditUser(eachUser);
                  }}
                >
                  Edit
                </button>
              </Link>
              <button
                onClick={() => {
                  onDeleteUser(id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      }}
    </UserContext.Consumer>
  );
};

export default TableItems;
