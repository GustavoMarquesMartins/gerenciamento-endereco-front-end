function verificaTokenJWT() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = './login.html';
    }

    var url = "http://localhost:5041/endereco/"; //Url usada para verificar se quando a requisição for feita será retornado erro 401 nao autorizado
    
    fetch(url, {
        method: 'GET', // Método HTTP
        headers: {
            'Content-Type': 'application/json', //tipo do conteudo
            'Authorization': `Bearer ${token}` // Envia o token no cabeçalho Authorization
        },
    }).then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                window.location.href = "./login.html";
            }
        }
    })
}

window.addEventListener('load', function() {
    verificaTokenJWT();
});