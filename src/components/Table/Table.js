import React from "react";
import styled from "styled-components";

const TH = styled.th`
  padding: 10px;
  background: #269faf66;
`;
const TD = styled.td`
  padding: 8px;
`;

const Table = ({ userObj }) => {
  console.log(userObj, "functional component");
  return (
    <table border="1" className="table">
      <thead>
        <TH>First Name</TH>
        <TH>Last Name</TH>
        <TH>Email</TH>
        <TH>Profile</TH>
      </thead>
      <tbody>
        {userObj.data &&
          userObj.data.data.map((x, i) => (
            <tr key={i}>
              <TD>{x.first_name}</TD>
              <TD>{x.last_name}</TD>
              <TD>{x.email}</TD>
              <TD>
                <img src={x.avatar} width="40" height="40" alt="profile" />
              </TD>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
