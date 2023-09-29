import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <a className="navbar__link relative" href="/">
            HOME
          </a>
          <a className="navbar__link relative" href="/about">
            ABOUT
          </a>
          <a className="navbar__link relative" href="/privacy">
            PRIVACY POLICY
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
