function apagaItem(id) {
  axios
    .delete("/" + id)
    .then(response => window.location.assign("/"))
    .catch(error => console.log(error));
}

// function atualizar(id) {
//   // const item = {
//   //   prov: 
//   //   local:
//   //   tit: 
//   //   musico:
//   //   duracao:
//   // }

//   axios.put("/" + id, item)
//     .then(response => window.location.assign("/arq/" + id))
//     .catch(error => console.log(error))

// }