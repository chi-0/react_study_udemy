import "./Header.css";

export const Header = ({ headerImg }) => {
  return (
    <header>
      <img src={headerImg} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};
