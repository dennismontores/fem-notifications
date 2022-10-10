import styles from './NotificationItem.module.css';

const NotificationItem = ({ item }) => (
  <div
    class={
      !!item.avatarCommentedBy ? styles.commented : styles.notificationContainer
    }>
    <div class={styles.avatarContainer}>
      <img src={item.personAvatarURL} alt='avatar' class={styles.avatar} />
    </div>
    <div class={styles.content}>
      <p class={styles.description}>
        <span class={styles.personName}>{item.personName}</span>&nbsp;
        <span class={styles.text}>{item.text}</span>
        {item.postName && (
          <span class={styles.postName}>&nbsp; {item.postName}</span>
        )}
        {item.groupName && (
          <span class={styles.groupName}>&nbsp; {item.groupName}</span>
        )}
        {item.isUnread && <span class={styles.circle}></span>}
      </p>
      <span class={styles.time}>{item.timestamp}</span>
      {item.message && <div class={styles.message}>{item.message}</div>}
    </div>
    {item.avatarCommentedBy && (
      <img
        src={item.avatarCommentedBy}
        alt='avatar'
        class={styles.commentedImg}
      />
    )}
  </div>
);

export default NotificationItem;
