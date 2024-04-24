import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  // function handleLikeComment() {
  //   setLikeCount(likeCount + 1);
  // }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/victtor-777.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victtor Guilherme</strong>
              <time title="11 de Maio as 08:13" dateTime="">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp size={24} />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
