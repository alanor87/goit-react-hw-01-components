import styles from '../friendList/FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <section className="friends">
        <ul className={styles['friend-list']}>
            {friends.map(friend => {
                return (
                    <li className={styles.item} key={friend.id}>
                        <span className={friend.isOnline ? styles['status-on'] : styles['status-off']}></span>
                        <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                        <p className={styles.name}>{friend.name}</p>
                    </li>)
            })}

        </ul>
        </section>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
  }))
};

export default FriendList;