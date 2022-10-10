import { For, createSignal } from 'solid-js';
import styles from './App.module.css';
import NOTIFICATION_ITEMS from './notification-items';
import NotificationItem from './NotificationItem';

const [notiItems, setNotiItems] = createSignal(NOTIFICATION_ITEMS);
const [allMarkedAsRead, setAllMarkedAsRead] = createSignal(false);

const App = () => {
  const handleMarkAll = () => {
    const items = notiItems().map((item) => ({
      ...item,
      isUnread: allMarkedAsRead() ? false : true,
    }));
    setNotiItems(items);
    setAllMarkedAsRead(!allMarkedAsRead());
  };

  return (
    <main class={styles.mainContainer}>
      <header class={styles.header}>
        <div class={styles.titleContainer}>
          <h1>Notifications</h1>
          <span class={styles.countUnread}>3</span>
        </div>
        <button class={styles.markReadBtn} onclick={handleMarkAll}>
          Mark all as {allMarkedAsRead() ? 'read' : 'unread'}
        </button>
      </header>
      <section class={styles.notificationsContainer}>
        <For each={notiItems()}>
          {(item) => <NotificationItem item={item} />}
        </For>
      </section>
    </main>
  );
};

export { notiItems, setNotiItems };

export default App;
