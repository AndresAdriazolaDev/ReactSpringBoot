import React from "react";

export const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button type="button" className="btn btn-secondary btn-sm">
          update
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-warning btn-sm">
          delete
        </button>
      </td>
    </tr>
  );
};
