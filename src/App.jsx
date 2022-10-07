import styles from './App.module.css';

const App = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          clas={styles.link}
          href="https://solidjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;