import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {

    onDeleteComment(content);

  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });

  }
  return(
    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://github.com/maikoduarte.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maiko Duarte</strong>
              <time title="07 de junho 2023">Cerca de 1 hora atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>

        </div>

        <footer>
         <button onClick={handleLikeComment}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
         </button>
        </footer>

      </div>

    </div>
  );
}