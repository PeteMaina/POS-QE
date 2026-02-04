import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Plus, Edit, Trash2 } from 'lucide-react';
import api from '../../utils/api';
import Modal from '../../components/Modal';

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #0056b3;
  }

  &.danger {
    background: #dc3545;
    &:hover { background: #bd2130; }
  }
  
  &.secondary {
    background: #6c757d;
     &:hover { background: #5a6268; }
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  color: #666;
  &:hover { color: #000; }
  &.delete:hover { color: #dc3545; }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null); // For edit
    const [formData, setFormData] = useState({ username: '', password: '', role: 'cashier', is_active: true });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users/');
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users', error);
            alert('Failed to fetch users. Ensure you are an Admin.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentUser) {
                await api.put(`/users/${currentUser.id}`, formData);
            } else {
                await api.post('/users/', formData);
            }
            setIsModalOpen(false);
            setCurrentUser(null);
            setFormData({ username: '', password: '', role: 'cashier', is_active: true });
            fetchUsers();
        } catch (error) {
            console.error("Error saving user", error)
            alert("Failed to save user. Username might be taken.")
        }
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        setFormData({
            username: user.username,
            password: '', // Don't show password
            role: user.role,
            is_active: user.is_active
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await api.delete(`/users/${id}`);
                fetchUsers();
            } catch (error) {
                console.error("Delete failed", error);
                alert("Delete failed");
            }
        }
    }

    const openNewModal = () => {
        setCurrentUser(null);
        setFormData({ username: '', password: '', role: 'cashier', is_active: true });
        setIsModalOpen(true);
    }

    return (
        <Container>
            <Header>
                <h2>User Management</h2>
                <Button onClick={openNewModal}><Plus size={16} /> Add User</Button>
            </Header>

            <Table>
                <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Username</Th>
                        <Th>Role</Th>
                        <Th>Status</Th>
                        <Th>Actions</Th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <Td>{user.id}</Td>
                            <Td>{user.username}</Td>
                            <Td>{user.role}</Td>
                            <Td>
                                <span style={{
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '4px',
                                    background: user.is_active ? '#d4edda' : '#f8d7da',
                                    color: user.is_active ? '#155724' : '#721c24'
                                }}>
                                    {user.is_active ? 'Active' : 'Inactive'}
                                </span>
                            </Td>
                            <Td>
                                <ActionButton onClick={() => handleEdit(user)}><Edit size={16} /></ActionButton>
                                <ActionButton className="delete" onClick={() => handleDelete(user.id)}><Trash2 size={16} /></ActionButton>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={currentUser ? 'Edit User' : 'Add New User'}
            >
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label>Username</label>
                        <Input
                            type="text"
                            value={formData.username}
                            onChange={e => setFormData({ ...formData, username: e.target.value })}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Password {currentUser && '(Leave blank to keep current)'}</label>
                        <Input
                            type="password"
                            value={formData.password}
                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                            required={!currentUser}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Role</label>
                        <Select
                            value={formData.role}
                            onChange={e => setFormData({ ...formData, role: e.target.value })}
                        >
                            <option value="cashier">Cashier</option>
                            <option value="admin">Admin</option>
                            <option value="owner">Owner</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <label>
                            <input
                                type="checkbox"
                                checked={formData.is_active}
                                onChange={e => setFormData({ ...formData, is_active: e.target.checked })}
                            /> Active
                        </label>
                    </FormGroup>
                    <Button type="submit">{currentUser ? 'Update User' : 'Create User'}</Button>
                </form>
            </Modal>
        </Container>
    );
};

export default UserList;
