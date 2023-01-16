import './profile.scss';

const Profile = (props) => {
  
  return (
    <div className='profile'>
      <h2 className="profileName">
        {props.profileName}
      </h2>
      <div className="profilePicture">
      <img src={props.profilePicture} alt="Profil" />
      </div>
    </div>
  );
};

export default Profile;