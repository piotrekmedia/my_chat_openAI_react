const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
          <button>+ New chat</button>
          <ul className="history"></ul>
          <nav>
              <p>Made by Pioter</p>
          </nav>
      </section>
      <section className="main">
          <h1>Pioter tell you proof</h1>
          <ul className="feed">

          </ul>
          <div className="bottom-section">
            <div className="input-container">
                <input/>
                <div id="submit">
                    ➢
                </div>
                <p className="info">Because I'm creating my own project, I wanted it to look and work similar to chatGPT. Hope you like it and have fun!</p>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
