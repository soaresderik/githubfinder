import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Repo from "./Repo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "044ecbe0f9cd24459823",
        client_secret: "440f7e976118b387fca6d14d9dbe9b742bf03d05",
        count: 7,
        sort: "created: asc"
      },
      user: [],
      repos: [],
      search: ""
    };
  }

  getUser = e => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;

    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));

    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };

  renderProfile = () => {
    const { user, repos } = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          <Profile user={user} />
        </div>
        <div className="col-md-8">
          {repos.map(repo => (
            <Repo repo={repo} key={repo.name} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { user, repos } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="search card card-body mb-3">
            <h1>Pesquisar Usuários do GitHub</h1>
            <p className="lead">
              Digite um nome para encontrar usuários e repositórios
            </p>
            <input
              onChange={this.getUser}
              className="form-control"
              placeholder="Digite o nome de um usuário..."
              required
            />
          </div>
          {user.length !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}

export default App;
