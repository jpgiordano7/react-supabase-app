import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data }) => {
      if (!data.session) navigate('/');
      else setUser(data.session.user);
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user && <p>Bienvenido, {user.email}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;