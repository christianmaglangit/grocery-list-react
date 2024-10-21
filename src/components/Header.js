function Header() {
  return (
    <>
      <div>
        <header>
          <span onclick="openNav()">
            {" "}
            <img src="./menu.png" alt="menu" />
          </span>
          <h2>Home</h2>
          <a href="">
            <img src="./cart.png" alt="Logo" />
          </a>
        </header>
      </div>
    </>
  );
}

export default Header;
