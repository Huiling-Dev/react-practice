export const TabButton = ({ children, onSelect, isSelected }) => {
  console.log('TAB BUTTON ECECUTING');

  return (
    <div>
      <li>
        <button className={isSelected ? 'active' : ''} onClick={onSelect}>
          {children}
        </button>
      </li>
    </div>
  );
};
