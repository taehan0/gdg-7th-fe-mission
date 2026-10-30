function Navbar() {
  return (
    <header className="navbar">
      <img src="/gdg-logo.svg" alt="GDG 로고" className="navbar-logo" />

      <nav className="navbar-menu">
        <button onClick={() => console.log("카테고리 필터링 클릭")}>
          카테고리 필터링
        </button>
        <button onClick={() => console.log("가격 범위 필터링 클릭")}>
          가격 범위 필터링
        </button>
        <button onClick={() => console.log("상품 정렬 클릭")}>
          상품 정렬
        </button>
      </nav>

      <button className="navbar-admin">관리자</button>
    </header>
  );
}

export default Navbar;