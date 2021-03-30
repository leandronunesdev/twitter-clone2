class BancoLocal {
  buscaUsuario() {
    return fetch("./usuario.json")
  }
  buscaTweets() {
    return fetch("./tweets.json")
  }
  buscaFollowers() {
    return fetch("./follow.json")
  }
}