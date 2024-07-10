async function fetchEnderecos() {
  const url = 'http://localhost:5041/endereco'; // Substitua pelo endpoint da sua API
  const token = localStorage.getItem('token'); // Pegando o token do localStorage

  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}` // Adiciona o cabeçalho de autenticação
          }
      });

      if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.statusText);
      }

      const enderecos = await response.json(); // Obtendo a lista de endereços como JSON
      populateTable(enderecos); // Chama a função para adicionar as linhas à tabela
  } catch (error) {
      console.error('Erro:', error);
  }
}

function populateTable(enderecos) {
  const tableBody = document.querySelector('table');

  enderecos.forEach((endereco, index) => {
      const newRow = tableBody.insertRow();

      newRow.setAttribute('idEndereco', endereco.id); // Adiciona o atributo idEndereco com o id do endereço
      newRow.insertCell().textContent = endereco.id;
      newRow.insertCell().textContent = endereco.cep;
      newRow.insertCell().textContent = endereco.logradouro;
      newRow.insertCell().textContent = endereco.complemento || ''; // Use '' se complemento for undefined
      newRow.insertCell().textContent = endereco.bairro;
      newRow.insertCell().textContent = endereco.cidade;
      newRow.insertCell().textContent = endereco.uf;
      newRow.insertCell().textContent = endereco.numero || ''; // Use '' se numero for undefined
  });

  buscarPorLinhaSelecionada();
}

function buscarPorLinhaSelecionada(){
  let linhas = document.querySelectorAll('.table tbody tr');

    linhas.forEach(linha => {
        linha.addEventListener('click', function() {
            let idLinha = this.getAttribute('idEndereco');
            console.log(idLinha)
        });
    });
}

window.addEventListener('load', fetchEnderecos);
