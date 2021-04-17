import styles from '../profile/Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ( {name, tag, location, avatar, stats} ) => {
    
    return (
        <section className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{'@' + tag }</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers </span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views </span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes </span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </section>
    );
};

Profile.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};

export default Profile;