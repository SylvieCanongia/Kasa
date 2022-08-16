import './tags.scss';

const Tags = (props) => {

  return (
    
    <div className='tags'>
      { props.tags.map(tag => (
          <div className="tag" key={tag}>{tag}</div>
        ))
      }
    </div>
  );
};

export default Tags;