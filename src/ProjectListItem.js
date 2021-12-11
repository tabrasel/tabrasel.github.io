import styles from './ProjectListItem.module.css';

import TagList from './TagList';

function ProjectListItem({title, description, tags, context, timeFrame}) {
  return (
    <div className={styles.projectListItem}>
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
    </div>
  );
}

export default ProjectListItem;
