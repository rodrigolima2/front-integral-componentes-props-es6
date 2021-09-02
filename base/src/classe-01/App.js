function Card({ src, texto, textoBtn, corBtn }) {
  const btnFechar = 'assets/close.svg';

  return (
    <div className="card">
      <img className="card__btn-fechar" src={btnFechar} alt="fechar" />
      <img className="card__img" src={src} alt="Imagem" />
      <p className="card__texto">{texto}</p>
      <button className="card__btn" style={{ background: corBtn }}>{textoBtn}</button>
    </div>
  );
}

function App() {
  const cards = [
    {
      id: '1',
      src: 'assets/cookie.svg',
      texto: 'Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.',
      btn: {
        texto: 'Tudo bem!',
        cor: '#ED6755'
      }
    },
    {
      id: '2',
      src: 'assets/alert.svg',
      texto: 'Você será deslogado imediatamente!',
      btn: {
        texto: 'Extender login',
        cor: '#1C1B5E'
      }
    }
  ];

  return (
    <div className="container">
      {cards.map((card) => {
        return <Card key={card.id} src={card.src} texto={card.texto} textoBtn={card.btn.texto} corBtn={card.btn.cor} />
      })};
    </div>
  );
}

export default App;
