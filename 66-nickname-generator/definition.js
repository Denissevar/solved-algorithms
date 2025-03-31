// URL problema: https://www.codewars.com/kata/593b1909e68ff627c9000186

function nicknameGenerator(name){
    /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí.  */

//* - Comprobar la longitud del nickname
//* Si tiene menos de 4 letras, saldra error
//* - Si tiene +4 letras y:
// 1. la tercera (indice [2]) es una vocal, se devuelven 4 letras
// 2. la tercera letra es consonante, se devuelven 3 letras  
// Necesito un array or string = string porque son letras 
// Necesito devolver un resultado? Si (error, 3 letras o 4 letras) 
// Necesito comparar : longitud del nickname y si la letra en posicion [2] es vocal
// Nickname muy corto = error
// Nickname +4 letras = ver la letra 3 posicion [2]
// Es vocal? = si devuelvo 4 letras *//  

}

console.log(nicknameGenerator("Robert")); // "Rob"
console.log(nicknameGenerator("Kimberly")); // "Kim"
console.log(nicknameGenerator("Samantha")); // "Sam"
console.log(nicknameGenerator("Jeannie")); // "Jean"
console.log(nicknameGenerator("Douglas")); // "Doug"
console.log(nicknameGenerator("Gregory")); // "Greg"
console.log(nicknameGenerator("Al")); // "Error: Name too short"
console.log(nicknameGenerator("Tom")); // "Error: Name too short"
console.log(nicknameGenerator("Alex")); // "Alex" (porque 'e' es vocal)
console.log(nicknameGenerator("Chris")); // "Chr" (porque 'r' es consonante)
console.log(nicknameGenerator("Emma")); // "Emma" (porque 'm' es consonante)
console.log(nicknameGenerator("Ian")); // "Error: Name too short"
