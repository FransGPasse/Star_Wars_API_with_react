function HomePage() {
  return (
    <div className="page home-page">
      <h1>Welcome to the Star Wars encyclopedia</h1>
      <h4>
        Powered by{" "}
        <a
          href="https://swapi.dev/"
          target="_blank"
          rel="noreferrer"
          className="swapi-link"
        >
          The Star Wars API
        </a>{" "}
        and built with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="react-link"
        >
          React
        </a>
      </h4>
    </div>
  );
}

export default HomePage;
