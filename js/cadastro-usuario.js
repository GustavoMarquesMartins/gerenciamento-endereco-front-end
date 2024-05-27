async function cadastroUsuario(event) {
    event.preventDefault();

    var url = "http://localhost:5041/usuario/";

    const dados = {
        nomeCompleto: document.getElementById('nomeCompleto').value,
        nomeUsuario: document.getElementById('nomeUsuario').value,
        senha: document.getElementById('senha').value
    };

    var avisoErro = document.getElementById("alerta-erro");
    var avisoSucesso = document.getElementById("alerta-sucesso");

    console.log(dados);

    // Fazendo a requisição POST com fetch
    fetch(url, {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo
        },
        body: JSON.stringify(dados) // Corpo da requisição como uma string JSON
    })
    .then(response => {
        if (response.ok) {
            // Se a resposta for bem-sucedida, retorna os dados da resposta
            return response.json();
        } else {
            // Se a resposta não for bem-sucedida, lança um erro com a mensagem da resposta
            throw new Error('Erro ao enviar os dados: ' + response.statusText);
        }
    })
    .then(data => {
        avisoErro.style.display = 'none';
        avisoSucesso.textContent = "Dados enviados com sucesso.";
        avisoSucesso.style.display = 'block';
        avisoSucesso.classList.remove("d-none");
        setTimeout(() => {
            window.location.href = "cadastro-finalizado.html";
        }, 1000); // 5000 milissegundos = 5 segundos
    })
    .catch(error => {
        // Trata o erro retornado pela API
        console.error('Error:', error);
        // Exibe a mensagem de erro no aviso de erro
        avisoErro.textContent = error.message; // Define a mensagem de erro como texto do erro retornado
        avisoErro.style.display = 'block';
        avisoErro.classList.remove("d-none");
    });
}
