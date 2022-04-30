function HomePage() {
  return (
    <div>
      <h1>Welcome to the Star Wars encyclopedia</h1>
      <h3>
        Powered by{" "}
        <a
          href="https://swapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="swapi-link"
        >
          The Star Wars API
        </a>{" "}
        and built with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="react-link"
        >
          React
        </a>
      </h3>
    </div>
  );
}

export default HomePage;
