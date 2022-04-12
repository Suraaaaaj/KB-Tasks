function createSecretHolder(secret) {
    var mySecret = secret;
  
    return{
      setSecret: function(secret){
        mySecret = secret;
      },
      getSecret: function(){
        return mySecret;
      }
    }
      
}