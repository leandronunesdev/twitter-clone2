const objetoBancoLocal = new BancoLocal()
const objetoCardUsuario = new CardUsuario()
const objetoTweets = new CardTweet()
const objetoFollowers = new cardFollower()

objetoBancoLocal.buscaUsuario()
  .then(function(resposta) {
    resposta.json()
    .then(function(dados) {
      objetoCardUsuario.mostraUsuario(dados)
    })
  })

objetoBancoLocal.buscaTweets()
  .then(function(resposta) {
    resposta.json()
    .then(function(dados) {
      objetoTweets.mostraTweets(dados)
    })
  })

objetoBancoLocal.buscaFollowers()
  .then(function(resposta) {
    resposta.json()
    .then(function(dados){
      objetoFollowers.mostraFollowers(dados)
    })
  })
