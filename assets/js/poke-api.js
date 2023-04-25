//pegando a requisiçao da url - api
const url = `https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`

//usando o fetch
//metodp then ,processa o sucesso de uma promise
//metodo catch, processo o erro de uma promise
//finally, processa a requisiçao, idenpendente do sucesso ou do fracasso da requisiçao
fetch(url)
.then(function (response){
   console.log(response);
})
.catch(function (error){
    console.log(error);
  })
  .finally(function (finaly){
    console.log(finaly);
  });

