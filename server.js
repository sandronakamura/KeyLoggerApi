const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para aceitar JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('API receptora está ativa 🚀');
});

// Rota para receber dados de um host via POST
app.post('/receber-dados', (req, res) => {
  const dadosRecebidos = req.body;
  console.log('📥 Dados recebidos:', dadosRecebidos);

  // Você pode salvar isso em banco, arquivo, etc — aqui só vamos responder
  res.status(200).json({
    mensagem: 'Dados recebidos com sucesso!',
    dados: dadosRecebidos
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`✅ API rodando na porta ${PORT}`);
});
