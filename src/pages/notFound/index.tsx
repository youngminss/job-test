import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      Oops ! {window.location.href} not founded 😥
      <button onClick={() => navigate('/')}>Back To Home</button>
    </div>
  );
};

export default NotFound;
