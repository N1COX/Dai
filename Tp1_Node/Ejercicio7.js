function nombreAMoneda(pais){

    let nombreDeMoneda = Coin.getParamByParam('countryName', pais, 'currency');

    console.log(nombreDeMoneda);

}

nombreAMoneda("Argentina");