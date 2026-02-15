import { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('adminToken');
      try {
        const response = await fetch('http://localhost:5000/api/users', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          const data = await response.json();
          setError(data.message || 'Failed to fetch users');
        }
      } catch (err) {
        setError('Error connecting to the server');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setUsers(users.filter(u => u.id !== userId));
      } else {
        alert('Failed to delete user');
      }
    } catch (err) {
      alert('Error deleting user');
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`http://localhost:5000/api/users/${editUser.id}`, {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: editUser.username,
          email: editUser.email,
          role: editUser.role
        })
      });

      if (response.ok) {
        setUsers(users.map(u => u.id === editUser.id ? editUser : u));
        setEditUser(null);
      } else {
        alert('Failed to update user');
      }
    } catch (err) {
      alert('Error updating user');
    }
  };

  if (loading) return <div className="dashboard"><p>Loading...</p></div>;
  if (error) return <div className="dashboard"><p className="error">{error}</p></div>;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </header>
      <div className="users-section">
        <h2>Users Management</h2>
        {editUser && (
          <div className="edit-modal">
            <form onSubmit={handleUpdate} className="edit-form">
              <h3>Edit User</h3>
              <input value={editUser.username} onChange={(e) => setEditUser({...editUser, username: e.target.value})} placeholder="Username" required />
              <input value={editUser.email} onChange={(e) => setEditUser({...editUser, email: e.target.value})} placeholder="Email" required />
              <select value={editUser.role} onChange={(e) => setEditUser({...editUser, role: e.target.value})}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <div className="form-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditUser(null)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleEdit(user)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
