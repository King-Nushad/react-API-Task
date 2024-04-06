
import './style.css'

import useFetch from "react-fetch-hook";

const UseFetch = () => {
  const { data: posts, isLoading, error } = useFetch('https://fakestoreapi.com/products');

  if (isLoading) {
    return <h2>Loading...</h2>;
  }


  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <div>
      <h1 className='title'>API Results</h1>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2>{post.id}</h2> <br></br>
          <h2 className='users'>{post.title}</h2>
          <p> $ = {post.price} </p>
          <p>{post.description}</p> 
          <p> category {post.category}</p>
          <img src = {post.image} /> 
       
        </div>
      ))}
    </div>
  );
};

export default UseFetch