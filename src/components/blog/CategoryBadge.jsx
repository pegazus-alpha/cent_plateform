export const CategoryBadge = ({ category, color }) => {
  const style = color ? { background: color } : {};
  return (
    <span className="category-badge" style={style}>
      {category}
    </span>
  );
};