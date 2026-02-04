import styled from 'styled-components';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  margin-left: 250px;
  width: calc(100% - 250px);
  min-height: 100vh;
  background: #f8f9fa;
`;

const Layout = () => {
    return (
        <Wrapper>
            <Sidebar />
            <MainContent>
                <Outlet />
            </MainContent>
        </Wrapper>
    );
};

export default Layout;
