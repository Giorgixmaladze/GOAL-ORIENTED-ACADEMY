import { useContext, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage";
import { AuthContext } from "../context/Context";
import { deleteInfo } from "../utils/info";

const AdminPanel = () => {
  const [info, setInfo] = useState(getLocal("accounts") || []);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    setLocal("accounts", info);
  }, [info]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(info[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedInfo = [...info];
    updatedInfo[editIndex] = editData;
    setInfo(updatedInfo);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const { logOut } = useContext(AuthContext);

  return (
    <>
      <h1>Admin Panel</h1>
      <button onClick={logOut}>Log out</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {info.map((user, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="password"
                    name="password"
                    value={editData.password || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.password
                )}
              </td>
              <td>
                <button onClick={() => setInfo(() => deleteInfo(info, index))}>
                  Delete
                </button>
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminPanel;