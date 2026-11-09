import cards from './cards.js'

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>AI 接力网页</h1>
        <p className="subtitle">
          这个页面由 Claude、ChatGPT Codex、Cursor 三个 AI 接力完成
        </p>
      </header>

      <section className="grid">
        {cards.map((card) => (
          <article className="card" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
