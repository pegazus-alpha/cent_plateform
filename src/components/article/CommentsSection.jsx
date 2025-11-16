import { useState } from 'react';
import { formatRelativeTime, getInitials } from '../../utils/helpers';
import Button from '../common/Button';

export const CommentsSection = ({ articleId, comments, onAddComment }) => {
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setLoading(true);
    try {
      await onAddComment(articleId, { content: commentText });
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Erreur lors de l\'ajout du commentaire');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comments-section container">
      <h2 style={{ marginBottom: '2rem' }}>
        💬 Commentaires ({comments?.length || 0})
      </h2>

      {/* Comment Form */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: '1rem' }}>Partage ton avis</h3>
        <textarea
          placeholder="Qu'as-tu pensé de cet article ?"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" loading={loading}>
          Publier le commentaire
        </Button>
      </form>

      {/* Comments List */}
      {comments && comments.length > 0 ? (
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <div className="author-avatar">{getInitials(comment.author)}</div>
                <div>
                  <h4>{comment.author}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}>
                    {formatRelativeTime(comment.createdAt)}
                  </p>
                </div>
              </div>
              <p>{comment.content}</p>
              <div className="comment-actions">
                <a>❤️ {comment.likes || 0} J'aime</a>
                <a>💬 Répondre</a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: 'var(--gray-medium)', padding: '2rem' }}>
          Aucun commentaire pour le moment. Sois le premier à commenter !
        </p>
      )}
    </div>
  );
};
