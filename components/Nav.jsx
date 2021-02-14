import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <div className="logo">
        <img src="/headphones.png" alt="headphones" />
        <h1>React Music</h1>
      </div>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library{" "}
        <FontAwesomeIcon className="library-toggle" icon={faMusic} size="2x" />
      </button>
    </nav>
  );
};

export default Nav;
