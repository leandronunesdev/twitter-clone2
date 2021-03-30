class CardUsuario {
  constructor() {
    this.usuario = document.querySelector("#usuario")
    this.usuarioStatus = document.querySelector("#usuario-status")
  }  
  
  mostraUsuario(dados) {
    let card = ''
    let cardStatus = ''

    dados.map(function(item) {
      localStorage.setItem("user-name", item.nome)

      card = `
      <div class="profile-header">
        <!-- Header information -->
        <h3 class="profile-fullname"><a>${localStorage.getItem("user-name")}<a></h3>
        <h2 class="profile-element"><a>@${item.usuario}</a></h2>
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-link"></i>&nbsp;${item.site}</a>
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-location"></i>&nbsp;${item.local}</a>
        <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${item.cadastro}</h2>
        <button class="btn btn-search-bar tweet-to-btn">Tweet to ${item.nome}</button>
      </div>      
      `
      cardStatus = `
      <div class="container">
        <div class="row">
          <div class="col">

          </div>
          <div class="col-6">
            <ul>
              <li class="profile-stats-item-active">
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                  <span class="profile-stats-item profile-stats-item-number">${item.quantidade_tweets}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Following</span>
                  <span class="profile-stats-item profile-stats-item-number">${item.seguidores}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Followers</span>
                  <span class="profile-stats-item profile-stats-item-number">${item.seguindo}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Likes</span>
                  <span class="profile-stats-item profile-stats-item-number">${item.likes}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col">

          </div>
        </div>
      </div>
      `
    })
    this.usuario.innerHTML = card
    this.usuarioStatus.innerHTML = cardStatus
  }
}

class CardTweet {
  constructor() {
    this.tweets = document.querySelector("#tweets")
  }

  mostraTweets(dados) {
    let card = ''
    dados.tweets.map(function(item) {
      card += `
      <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${item.nome}</strong>
                  </span>
                  <span class="username">${item.usuario}</span>
                  <span class="tweet-time">- ${item.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">${item.mensagem}
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span> ${item.comentarios}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${item.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${item.likes}</span>
                  </a>
                </div>
              </div>
            </li>
      `
    })
    this.tweets.innerHTML = card
  }
}

class cardFollower {
  constructor() {
    this.followers = document.querySelector("#followers")
  }

  mostraFollowers(dados) {
    let card = ''
    dados.followers.map(function(item) {
      card += `
      <li class="tweet-card">
      <div class="tweet-content">
        <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
        <div class="tweet-header">
          <span class="fullname">
            <strong>${item.nome}</strong>
          </span>
          <span class="username">${item.usuario}</span>
        </div>

        <button class="btn btn-follow">Follow</button>
      </div>
    </li>
      `
    })
    this.followers.innerHTML = card
  }
}