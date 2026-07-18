const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items to your packing list! 🚀
      </footer>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percItems = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percItems === 100
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percItems}%)`}
      </em>
    </footer>
  );
};

export default Stats;
