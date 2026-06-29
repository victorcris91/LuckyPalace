
//1.gerar um numero aleatório de 1 a 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
//2.definir o numero máximo de tentativas
const guessLimit = 8;
//3.inicializar contador de tentativas
let guessCounter = 1;

//5. validar se o valor está entre 1 e 100.
function guessCheck() {
    const guesses = document.getElementById('chute');
    const guessValue = parseInt(guesses.value);
    const attemptsLeft = guessLimit - guessCounter;

    const validateValue = (guessValue) => guessValue >= 1 && guessValue <= 100;

    //6. comparar com o numero selecionado e exibir uma mensagem
    if (!validateValue(guessValue)) {
        document.getElementById("tip").textContent = "O número precisa ser de 1 a 100, seu bobinho!";
    } else {
        if (guessCounter > guessLimit) {
            alert("Suas tentivas acabaram, fofinho! AGORA CAI FORA!");
            return;
        }
    }

    guessCounter++;

    if (guessValue === secretNumber){
        alert("WOOHOO! BRAVO! Você acertou o meu número!");
    } else {
        if (guessCounter > guessLimit){
            document.getElementById("tip").textContent = "FIM DE JOGO! Você chegou no limite de tentativas, mais sorte da próxima vez, caçador.";
        } else {
        if (guessValue >= secretNumber) {
            document.getElementById("tip").textContent = `'BOO! ERRADO! O número é menor, você tem mais ${attemptsLeft} chances!`;
            } else {
                document.getElementById("tip").textContent = `BOO! VOCÊ ERROU! O número é maior, agora você tem mais ${attemptsLeft} tentativas!`;
            }
        }
    }
}
