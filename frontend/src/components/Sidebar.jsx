import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutDashboard, Users, Package, ShoppingCart, FileText, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SidebarContainer = styled.div`
  width: 250px;
  background: #343a40;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.div`
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid #495057;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Menu = styled.div`
  flex: 1;
  padding: 1rem 0;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #adb5bd;
  text-decoration: none;
  transition: all 0.2s;
  gap: 0.75rem;

  &:hover {
    background: #495057;
    color: white;
  }

  &.active {
    background: #007bff;
    color: white;
  }
`;

const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid #495057;
`;

const Sidebar = () => {
    const location = useLocation();
    const { logout, user } = useAuth();

    return (
        <SidebarContainer>
            <Logo>POS System</Logo>
            <Menu>
                <MenuItem to="/" className={location.pathname === '/' ? 'active' : ''}>
                    <LayoutDashboard size={20} /> Dashboard
                </MenuItem>
                <MenuItem to="/pos" className={location.pathname === '/pos' ? 'active' : ''}>
                    <ShoppingCart size={20} /> POS
                </MenuItem>

                {['admin', 'owner'].includes(user?.role) && (
                    <>
                        <MenuItem to="/inventory" className={location.pathname.startsWith('/inventory') ? 'active' : ''}>
                            <Package size={20} /> Inventory
                        </MenuItem>
                        <MenuItem to="/users" className={location.pathname.startsWith('/users') ? 'active' : ''}>
                            <Users size={20} /> Users
                        </MenuItem>
                        <MenuItem to="/reports" className={location.pathname.startsWith('/reports') ? 'active' : ''}>
                            <FileText size={20} /> Reports
                        </MenuItem>
                    </>
                )}

                <MenuItem to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
                    <Settings size={20} /> Settings
                </MenuItem>
            </Menu>
            <Footer>
                <MenuItem as="button" onClick={logout} style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}>
                    <LogOut size={20} /> Logout
                </MenuItem>
            </Footer>
        </SidebarContainer>
    );
};

export default Sidebar;
