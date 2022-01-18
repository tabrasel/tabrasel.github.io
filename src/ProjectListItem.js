import styles from './ProjectListItem.module.css';

import { Link } from 'react-router-dom';

import TagList from './TagList';

function ProjectListItem({title, description, tags, context, timeFrame, linkTo}) {
  return (
    <Link className={styles.projectListItem} to={linkTo}>
      <div className={styles.projectListItemHeader}>
        <small>{context}</small>
        <small className={styles.timeFrame}>{timeFrame}</small>
      </div>
      <div className={styles.projectListItemBody}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagList tags={tags} />
      </div>
    </Link>
  );
}

export default ProjectListItem;
