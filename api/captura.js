const video = document.getElementById("cameraFeed")
const canvas = document.getElementById("capturedImage")
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

// Solicitar permissão para acessar a câmera 
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });

//atribuir uma função ao botão de captura

botao.addEventListener("click", () => {
    // Desenhar o quadro atual do vídeo na area do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Obter a imagem como um URL de dados3
    const imageDataURL = canvas.toDataURL("image/png");

    // Enviar a imagem para um servidor
    enviarImagemParaServidor(imageDataURL);
});

// Função para enviar imagem para um servidor
function enviarImagemParaServidor(){}

    console.log("Enviando imagem para o servidor...");

    fetch("/", {
        method: "POST",
        body: JSON.stringify({image: imageDataURL}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then( resposta => resposta.json())
        .then( dados => {
            console.log("Resposta do servidor: ", dados);
        })
        .catch( erro => {
            console.error("Erro ao enviar a imagem: ", erro);
        })