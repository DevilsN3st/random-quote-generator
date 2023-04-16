import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    const locate = useLocation();
    const location = locate.pathname.split('/')[1];
    console.log(locate)

  return (
    <Container>
      <NavWrapper>
        <StyledLink to="/" className="nav-link">
          {(location === '') ? (<strong>Home</strong>) : (<p>Home</p>)}
        </StyledLink>
        <StyledLink to="/bookmarks" className="nav-link">
          {(location === 'bookmarks') ? (<strong>Bookmarks</strong>) : (<p>Bookmarks</p>)}
        </StyledLink>
      </NavWrapper>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(to right,#4c56b7, #875dc5 );
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default Navbar;