import avatar1 from './assets/images/avatar-mark-webber.webp';
import avatar2 from './assets/images/avatar-angela-gray.webp';
import avatar7 from './assets/images/avatar-anna-kim.webp';
import avatar3 from './assets/images/avatar-jacob-thompson.webp';
import avatar4 from './assets/images/avatar-rizky-hasanuddin.webp';
import avatar5 from './assets/images/avatar-kimberly-smith.webp';
import avatar6 from './assets/images/avatar-nathan-peterson.webp';
import avatarCommentedBy from './assets/images/image-chess.webp';

export default [
  {
    id: 'notification-item-1',
    personName: 'Mark Webber',
    personAvatarURL: avatar1,
    text: 'reacted to your recent post',
    postName: 'My first tournament today!',
    isUnread: true,
    timestamp: '1m ago',
  },
  {
    id: 'notification-item-2',
    personName: 'Angela Gray',
    text: 'followed you',
    isUnread: true,
    timestamp: '5m ago',
    personAvatarURL: avatar2,
  },
  {
    id: 'notification-item-3',
    personName: 'Jacob Thompson',
    text: 'has joined your group',
    groupName: 'Chess Club',
    isUnread: true,
    timestamp: '1 day ago',
    personAvatarURL: avatar3,
  },
  {
    id: 'notification-item-4',
    personName: 'Rizky Hasanuddin',
    text: 'sent you a private message',
    isUnread: false,
    timestamp: '5 days ago',
    personAvatarURL: avatar4,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 'notification-item-5',
    personName: 'Kimberly Smith',
    text: 'commented on your picture',
    isUnread: false,
    personAvatarURL: avatar5,
    timestamp: '1 week ago',
    avatarCommentedBy,
  },
  {
    id: 'notification-item-6',
    personName: 'Nathan Peterson',
    text: 'reacted to your recent post',
    postName: '5 end-game strategies to increase your win rate',
    isUnread: false,
    personAvatarURL: avatar6,
    timestamp: '2 weeks ago',
  },
  {
    id: 'notification-item-7',
    personName: 'Anna Kim',
    text: 'left the group',
    groupName: 'Chess Club',
    isUnread: false,
    timestamp: '2 weeks ago',
    personAvatarURL: avatar7,
  },
];
