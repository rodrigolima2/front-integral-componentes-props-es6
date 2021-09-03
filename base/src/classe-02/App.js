function Card({ src, nome, insta, seguidores, seguindo }) {
  return (
    <div className="card">
      <img className="card__foto" src={src} alt="Foto de Perfil" />
      <h1 className="card__nome">{nome}</h1>
      <span className="card__insta">{insta}</span>
      <span className="card__seguidores">{seguidores}</span>
      <span className="card__seguindo">{seguindo}</span>
    </div>
  );
}

function App() {
  const cards = [
    {
      id: '1',
      src: 'assets/kelvin-costa.png',
      nome: 'Kelvin Costa',
      insta: '@costa',
      seguidores: '140 seguidores',
      seguindo: '207 seguindo'
    },
    {
      id: '2',
      src: 'assets/charles-santos.png',
      nome: 'Charles Santos',
      insta: '@charles.santos',
      seguidores: '302 seguidores',
      seguindo: '419 seguindo'
    },
    {
      id: '3',
      src: 'assets/anna-bia.png',
      nome: 'Anna Bia',
      insta: '@anab',
      seguidores: '842 seguidores',
      seguindo: '150 seguindo'
    },
    {
      id: '4',
      src: 'assets/mario-hisashi.png',
      nome: 'Mario Hisashi',
      insta: '@hisashi',
      seguidores: '28 seguidores',
      seguindo: '17 seguindo'
    }
  ];

  return (
    <div className="container">
      {cards.map(card => {
        return <Card key={card.id} src={card.src} nome={card.nome} insta={card.insta} seguidores={card.seguidores} seguindo={card.seguindo} />
      })}
    </div>
  );
}

export default App;
