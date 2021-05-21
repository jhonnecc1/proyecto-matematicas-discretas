console.log('entro');

function main(tamano, g, r) {
  var matriz = llenadoMatriz(tamano, g, r);
  console.log('main M', matriz);
  var is_reflexiva = reflexiva(matriz);
  console.log('main is_reflexiva', is_reflexiva);
  if(!is_reflexiva){
    // Es irreflexiva?
    var is_irreflexiva = irreflexiva(matriz);
    console.log('main is_irreflexiva', is_irreflexiva);
  }
  
}

function validarMatriz(m1) {
  // Es reflexiva?
  var is_reflexiva = reflexiva(m1);
  if(!is_reflexiva){
    // Es irreflexiva?
    var is_irreflexiva = irreflexiva(m1);
  }

}

function equals(m1, m2) {
  if(m1.every(m2)){
    return true;
  }else{
    return false;
  }
}

function llenadoMatriz(tamano, g, r) {
  var matriz = [];
  // descomponer R
  // (1,1),(2,2)
  // 1,1 - 2,2
  var r_divida = r.split('),(');
  // descomponer G
  // 1,2
  // 1 - 2
  var g_divida = g.split(',');
  // descomponer subconjutnos
  // 1 - 1 - 2 -2
  for (var i = 0; i < tamano; i++) {
    var array_j = [];
    for (var j = 0; j < tamano; j++) {
      // console.log('r_divida', r_divida);
      // i = 0;
      // g_divida[i] = 1
      // sub_r[0] = 1
      // j = 1;
      // g_divida[j] = 2
      // sub_r[1] = 1
      for (var k = 0; k < r_divida.length; k++) {
        var sub_r = r_divida[k].split(',');
        // console.log('sub_r', sub_r);
        // console.log('g_divida['+i+']', g_divida[i]);
        // console.log('sub_r[0]', sub_r[0].replace('(',''));
        // console.log('g_divida['+j+']', g_divida[j]);
        // console.log('sub_r[1]', sub_r[1].replace(')',''));
        if(g_divida[i] == sub_r[0].replace('(','') && g_divida[j] == sub_r[1].replace(')','')){
          array_j[j] = 1;
        }else if(array_j[j] != 1){
          array_j[j] = 0;
        }
      }
    }
    matriz[i] = array_j;
  }
  // console.log('matriz', matriz);
  return matriz;
}

function reflexiva(m1) {
  var valor_base = 1;
  var is_reflexiva = true;
  for (var i = 0; i < m1.length; i++) {
    if(valor_base != m1[i][i]){
      is_reflexiva = false;
    }
  }
  // console.log('is_reflexiva', is_reflexiva);
  return is_reflexiva;
}

function irreflexiva(m1) {
  var valor_base = 0;
  var is_irreflexiva = true;
  for (var i = 0; i < m1.length; i++) {
    if(valor_base != m1[i][i]){
      is_irreflexiva = false;
    }
  }
  // console.log('is_irreflexiva', is_irreflexiva);
  return is_irreflexiva;
}
