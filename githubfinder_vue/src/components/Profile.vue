<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div
          class="card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="user.avatar_url"
            alt="Card image cap"
          >
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Repositórios: <span class="badge badge-success float-right">{{user.public_repos}}</span></li>
            <li class="list-group-item">Seguidores: <span class="badge badge-primary float-right">{{user.followers}}</span></li>
            <li class="list-group-item">Seguindo:<span class="badge badge-info float-right">{{user.following}}</span></li>
          </ul>
          <div class="card-body">
            <a
              :href="user.html_url"
              target="_blank"
              class="btn btn-success btn-block"
            >Ver Perfil</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>
