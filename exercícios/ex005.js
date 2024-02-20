let idade = 14 

/* if (idade >= 18) {
    if (idade < 60) {
        console.log ("Você é um adulto")
    }  
} 
*/

if (idade >= 18 && idade < 60) {
    console.log ("Você é um adulto")
}

/* Se usasse o || no lugar do &&, bastaria que uma das variáveis fosse compatíveis com a idade para que o log ativasse. Com o && Tanto o "idade >= 18" quanto o "idade < 69" devem ser compatíveis com a idade, e sendo assim, não ativaria erroneamente a afirmação dentro da log.
*/