import styles from './TagList.module.css';

function TagList({tags}) {
  return (
    <div className={styles.tagList}>
      {
        tags.map((tag) => {
          return (
            <div key={tag} className={styles.tagListItem}>
              <small>{tag}</small>
            </div>
          );
        })
      }
    </div>
  );
}

export default TagList;
