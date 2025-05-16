// Faz uma requisição HTTP GET para a API pública do projeto Gutendex
fetch('https://gutendex.com/books/')
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    const lista = document.getElementById('lista-livros'); // Seleciona a UL do HTML

    // Itera sobre os 5 primeiros livros retornados
    data.results.slice(0, 5).forEach(livro => {
      const item = document.createElement('li'); // Cria um item de lista

      // Exibe o título e o nome do autor (ou 'Autor desconhecido')
      item.textContent = `${livro.title} - ${livro.authors[0]?.name ?? 'Autor desconhecido'}`;

      lista.appendChild(item); // Adiciona o item à lista na tela
    });
  })
  .catch(error => console.error('Erro ao buscar livros:', error)); // Trata erros