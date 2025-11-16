export const ArticleBody = ({ content }) => {
  return (
    <article className="article-body container">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};