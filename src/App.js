import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserList } from "./asyncActions/userAsyncActions";
import styled from "styled-components";
import Table from "./components/Table/Table";
import "./App.css";

const Header = styled.div`
  padding: 20px;
  text-align: center;
  background: #269faf;
  color: white;
  font-size: 18px;
  font-wight: 500;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUserList();
  }
  render() {
    const { userObj } = this.props;
    return (
      <div>
        <Header>React Redux Demo</Header>
        <Table userObj={userObj} />

        {userObj.data &&
          userObj.data.total_pages &&
          Array.from(Array(userObj.data.total_pages).keys())
            .map((x) => x + 1)
            .map((x) => (
              <input
                key={x}
                type="button"
                style={{ marginRight: 5 }}
                className={`btn${x === userObj.data.page ? " active" : ""}`}
                value={x}
                onClick={() => this.props.fetchUserList(x)}
              />
            ))}
        <br />
        {userObj.loading && (
          <div style={{ marginTop: 10 }}>Fetching user details...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userObj: state.user,
  };
};

const mapDispatchToProps = {
  fetchUserList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
