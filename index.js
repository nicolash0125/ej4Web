// Punto 1
console.log('Para el punto uno (funcion secret) utilizar \'encriptar\' para encriptar y cualquier otro texto para desencriptar')
function secret(array, encrypt,key) {
    resp=[]
    if ( encrypt == 'encriptar' ){
        console.log('Encriptando')
        array.forEach(element => {
            resp.push(element+key)
        })
    }
    else{
        console.log('Desencriptando')
        array.forEach(element => {
            resp.push(element-key)
        })
    }

    console.log(resp)
}

//Punto 2

punto2 = (a,b) => a%b==0? b : punto2(b,a%b)