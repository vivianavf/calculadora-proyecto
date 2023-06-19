funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        valorPorHora = parseInt(document.getElementById("valorPorHora").value)

        interfaz = parseInt(document.getElementById("interfazHoras").value)
        front = parseInt(document.getElementById("front").value)
        back = parseInt(document.getElementById("back").value)
        testing = parseInt(document.getElementById("testing").value)

        total = valorPorHora*(interfaz+front+back+testing);       
        
        document.getElementById("valorTotal").value = "USD$ " + total;

        
    })
}    

funcionPredeterminada()