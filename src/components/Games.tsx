interface GameItem {
  name: string
  description: string
  icon: string
  image?: string
  category: 'softplay' | 'arcade'
}

const softPlayGames: GameItem[] = [
  { name: 'Ball House', description: 'A colorful ball pit filled with soft balls for endless fun!', icon: '🟡', category: 'softplay', image: 'https://images.pexels.com/photos/27175469/pexels-photo-27175469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Car Sliding', description: 'Ride and slide in fun toy cars designed for little racers!', icon: '🚗', category: 'softplay' },
  { name: 'Sand Pit', description: 'Dig, build, and create in our safe indoor sand play area.', icon: '🏖️', category: 'softplay' },
  { name: 'Doctor Set Game', description: 'Pretend play as a doctor with our fun medical kit games!', icon: '🩺', category: 'softplay' },
  { name: 'Kitchen Set Game', description: 'Little chefs can cook up imaginary meals in our kitchen play set.', icon: '🍳', category: 'softplay' },
  { name: 'Sliding Game', description: 'Whoosh down our bright and safe slides again and again!', icon: '🛝', category: 'softplay', image: 'https://images.pexels.com/photos/5488878/pexels-photo-5488878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Trampoline', description: 'Jump high and bounce with joy on our safe trampoline!', icon: '🤸', category: 'softplay', image: 'https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'More Fun Games', description: 'Plus many more exciting soft play activities to discover!', icon: '✨', category: 'softplay' },
]

const arcadeGames: GameItem[] = [
  { name: 'Car Racing', description: 'Zoom past the finish line in our thrilling car racing arcade game!', icon: '🏎️', category: 'arcade', image: 'https://images.pexels.com/photos/4005325/pexels-photo-4005325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Air Hockey', description: 'Fast-paced table hockey action for kids and friends!', icon: '🏒', category: 'arcade' },
  { name: 'Small Car Game', description: 'A mini car adventure designed just for the little ones.', icon: '🚙', category: 'arcade' },
  { name: 'Frog Hitting Game', description: 'Whack the frogs as they pop up - quick reflexes win!', icon: '🐸', category: 'arcade' },
  { name: 'More Arcade Games', description: 'Even more exciting arcade games waiting for you!', icon: '🎮', category: 'arcade' },
]

function GameCard({ game }: { game: GameItem }) {
  return (
    <div className="game-card">
      {game.image ? (
        <img src={game.image} alt={game.name} className="game-card-image" />
      ) : (
        <div className="game-card-image-fallback">{game.icon}</div>
      )}
      <div className="game-card-body">
        <h3>{game.name}</h3>
        <p>{game.description}</p>
        <span className={`game-card-badge ${game.category === 'arcade' ? 'arcade' : ''}`}>
          {game.category === 'arcade' ? 'Arcade Game' : 'Soft Play Zone'}
        </span>
      </div>
    </div>
  )
}

export default function Games() {
  return (
    <section className="section games" id="games">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Games & Activities</span>
          <h2 className="section-title">
            Endless <span className="highlight">Fun</span> Awaits!
          </h2>
          <p className="section-subtitle">
            From soft play adventures to exciting arcade games, there's something for every child at Kutties Kingdom.
          </p>
        </div>

        <h3 className="games-category-title">🎪 Soft Play Zone</h3>
        <div className="games-grid">
          {softPlayGames.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>

        <h3 className="games-category-title">🕹️ Arcade Games</h3>
        <div className="games-grid">
          {arcadeGames.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}
