document.getElementById('toggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  

      // Selecionando o botão
      const hireBtn = document.getElementById('hire-me-btn');
    
      // Adicionando um evento de clique ao botão
      hireBtn.addEventListener('click', function() {
          // Endereço de e-mail para onde enviar a mensagem
          const myEmail = 'lucasazrodrigues10@gmail.com';
  
          // Criando o link mailto com o endereço de e-mail preenchido
          const mailtoLink = `mailto:${myEmail}`;
  
          // Redirecionando para o link mailto
          window.location.href = mailtoLink;
      });