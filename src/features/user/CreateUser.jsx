import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
function CreateUser() {
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log('the user name in the CreateUser component is -- ', username);
  function handleSubmit(e) {
    e.preventDefault();
    //console.log('1-the user name in the CreateUser component is -- ', username);
    if (!username) return;
    //console.log('2-the user name in the CreateUser component is -- ', username);
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          {/* <Button to="./order/new" type="primary">
            Start ordering
          </Button> */}
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
