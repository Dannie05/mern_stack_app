export default function Blogger({blogs, handleDelete, title}) {
   
  return (
    <div>
      <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map((item) => (
          <div className="preview" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.snippet}</p>
            <p>written by <b>{item.author}</b></p>
            <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
