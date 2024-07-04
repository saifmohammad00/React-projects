import React,{useState} from "react";
import "./UserForm.css"
const UserForm = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [namez,setNamez]=useState("");
    const [urlz,setUrlz]=useState("");

    const formHandler = (event) => {
        event.preventDefault();
        if(namez==="" || urlz===""){
            return;
        }
        const newBookmark = {
        name: namez,
        url: urlz
        };
        setBookmarks([...bookmarks, newBookmark]);
        setNamez("");
        setUrlz(""); 
    };
    const handleDelete = (index) => {
        setBookmarks(bookmarks.filter((bookmark, i) => i !== index));
      };
    const handleEdit=(index)=>{
         const x=bookmarks[index];
         setNamez(x.name);
         setUrlz(x.url);
         setBookmarks(bookmarks.filter((bookmark, i) => i !== index));
    }
    return <div>
    <form onSubmit={formHandler}>
        <div >
            <label htmlFor="name">Website Name:</label>
            <input type="text" id="name" name="name" value={namez} onChange={(e)=>setNamez(e.target.value)}/>
        </div>
        <div >
            <label htmlFor="url">Website Url:</label>
            <input type="url" id="url" name="url" value={urlz} onChange={(e)=>setUrlz(e.target.value)}/>
        </div>
        <button type="submit">Add</button>
    </form>
    <div>
        <h2>All BookMarks</h2>
        <ul className="bookmark-list">
        {bookmarks.map((bookmark, index) => (
            <li key={index} className="bookmark-item">
              <label name={bookmark.name}>{bookmark.name} &gt; </label>
              <a href={bookmark.url} target="_blank" name={bookmark.url}>{bookmark.url}</a>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </li>
          ))}
        </ul>
    </div>
    </div>
}
export default UserForm;