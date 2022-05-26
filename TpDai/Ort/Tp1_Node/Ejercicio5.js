function parsearUrl(adr){

  try{

      var q = Url.parse(adr, true);
      console.log(q.host); 
      console.log(q.pathname); 
      console.log(q.search);

  }catch(err){


      console.log(err);

  }



}

parsearUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1789569/tp-node-01");