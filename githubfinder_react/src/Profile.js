import React, { Fragment } from "react";

const Profile = ({ user }) => (
  <Fragment>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={user.avatar_url}
            alt="Card image cap"
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Repositórios:{" "}
              <span className="badge badge-success float-right">
                {user.public_repos}
              </span>
            </li>
            <li className="list-group-item">
              Seguidores:{" "}
              <span className="badge badge-primary float-right">
                {user.followers}
              </span>
            </li>
            <li className="list-group-item">
              Seguindo:
              <span className="badge badge-info float-right">
                {user.following}
              </span>
            </li>
          </ul>
          <div className="card-body">
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-info btn-block">
              Ver Perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Profile;
