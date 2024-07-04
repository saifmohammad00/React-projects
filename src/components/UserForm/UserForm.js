import React,{useState} from "react";
import "./UserForm.css"
const UserForm = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [formData, setFormData]=useState([{name:"",url:""}]);

    const formHandler = (event) => {
        if(formData.name==="" || formData.url===""){
            return;
        }
        event.preventDefault();
        const newBookmark = {
        name: formData.name,
        url: formData.url
        };
        setBookmarks([...bookmarks, newBookmark]);
        setFormData({ name: "", url: "" });
    };
    const handleDelete = (index) => {
        setBookmarks(bookmarks.filter((bookmark, i) => i !== index));
      };
    const handleEdit=(index)=>{
        const selectedBookmark = bookmarks[index];
    setFormData({
      name: selectedBookmark.name,
      url: selectedBookmark.url
    });    
    }
    const handleChange=(event)=>{
        const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }

    return <div>
    <form onSubmit={formHandler}>
        <div >
            <label htmlFor="name">Website Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div >
            <label htmlFor="url">Website Url:</label>
            <input type="url" id="url" name="url" value={formData.url} onChange={handleChange}/>
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