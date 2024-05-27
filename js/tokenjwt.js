function getTokenJWT() {
    // Buscar o token do localStorage
    const token = localStorage.getItem('token');

    var span = document.getElementById("token");
    span.textContent = token;

    // Verificar se o token foi encontrado
    if (token) {
        // Se o token foi encontrado, faça algo com ele
        console.log('Token encontrado:', token);
    } else {
        // Se o token não foi encontrado, trate esse caso
        console.log('Nenhum token encontrado no localStorage.');
    }
}

window.addEventListener('load', function() {
    // Chama a função getTokenJWT() quando a página estiver completamente carregada
    getTokenJWT();
});