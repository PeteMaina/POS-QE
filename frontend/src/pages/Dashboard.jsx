import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <Container>
            <Header>
                <h1>Welcome, {user?.username} ({user?.role})</h1>
                <Button onClick={logout}>Logout</Button>
            </Header>
            <div>
                <p>This is the protected dashboard.</p>
            </div>
        </Container>
    );
};

export default Dashboard;
