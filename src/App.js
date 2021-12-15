import Hero from './components/Hero';
import './App.css';



const heroes = [
  {
      heroName: 'Бэтмен',
      universe: "DC Comics",
      alterEgo: "Брюс Уэйн",
      activity: "борец с преступностью, филантроп, миллиардер",
      friends: "Робин, Бэтгерл",
      superPower: "интеллект, обширные познания, знания боевых искусств, ловкость",
      src: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
      
  },

  {
      heroName: "Супермен",
      universe: "DC Comics",
      alterEgo: "Кларк Кент",
      activity: "борец за справедливость",
      friends: "собака Крипто",
      superPower: "интеллект, обширные познания, знания боевых искусств, ловкость",
      src: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
       
  },

  {
      heroName: "Железный человек",
      universe: "Marvel Comics",
      alterEgo: "Тони Старк",
      activity: "гений, миллиардер, плейбой, филантроп",
      friends: "Мстители",
      superPower: "интеллект, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
      src: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
      
  },

  {
      heroName: "Тор",
      universe: "Marvel Comics",
      alterEgo: "нет; полное имя — Тор Одинсон",
      activity: "борец за справедливость, скандинавский бог",
      friends: "Мстители",
      superPower: "все, что может бог, плюс молот Мьелнир",
      src: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
      
  },

  {
      heroName: "Черная вдова",
      universe: "Marvel Comics",
      alterEgo: "Наташа Романофф",
      activity: "супергероиня, шпионка",
      friends: "Мстители",
      superPower: "пик человеческого физического потенциала, замедленное старение, знание многих языков",
      src: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
      
  },
  {
    heroName: "Халк",
    universe: "Marvel Comics",
    alterEgo: "Брюс Беннер",
    activity: "супергерой, борец за справедливость, ученый-биохимик",
    friends: "Мстители",
    superPower: " сверхчеловеческая сила и скорость, выносливость, полет",
    src: "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
    
}
];

function App() {
  return (
    <div className="App">
      <h1 className="heading">Вселенная супергероев</h1>
      {
       heroes.map((hero)=>
       <Hero name={hero.heroName} universe={hero.universe} alterEgo={hero.alterEgo} activity={hero.activity} friends={hero.friends} superPower={hero.superPower} src={hero.src}></Hero>
       )
      }
    </div>
  );
}

export default App;