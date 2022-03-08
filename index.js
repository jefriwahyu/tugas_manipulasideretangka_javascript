function deretAngka1(n){
  var hasilDeretAngka = ''
  for(i = 1; i <= n; i++) {
    if(i % 15 === 0) {
      hasilDeretAngka += 'NIOMIC '
    }else if (i % 3 === 0) {
      hasilDeretAngka += 'NIO '
    }else if(i % 5 === 0) {
      hasilDeretAngka += 'MIC '
    }else {
      hasilDeretAngka += i+' '
    }
  }
    return hasilDeretAngka
}

console.log(deretAngka1(10));
console.log(deretAngka1(20));
console.log(deretAngka1(30));
