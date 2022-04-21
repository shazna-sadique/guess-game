//to create a guess game ,the user is first required to enter the maximum number 
//then a random guess is generated and we have to guess that number
// if the number i guessed is less than or higher than the generted random number it will show a message 
//and allows to guess number again.
//when typed q ,we will exit the prompt


let maximum = parseInt(prompt("enter the maximum number"));
while (!maximum){
    maximum = parseInt(prompt("enter a valid number"));
}
//prompt always returns a string ,parseInt makes it an integer,if its not an integer it will return NaN
//math.random returns a number btw 0 and 1 including 0 and excluding 1.
//so when math.random multiplies by 100 , it will be like 37.223448669874, 
//math.floor returns an integer ,thus 37 comes . 
//if multiplying by 100 only then math.floor returns an integer btw 0 and 99 (both included).
//thus  we add 1 .thus it returns an integer btw 0 and 100 (both included)
//another way for generating random number,in result min included and max excluded
//function getRndInteger(min, max) {
//    return Math.floor(Math.random() * (max - min)) + min;}
let targetnum = Math.floor(Math.random() * maximum) + 1; 
console.log(targetnum);
