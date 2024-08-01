import { useContext, useEffect } from "react";
import { Globalcontext } from "../context/store";
import axios from "axios";
import styles from "./Home.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { bloglist, setbloglist, pending, setpending } =
    useContext(Globalcontext);
  const navigate = useNavigate();
  const fetchlistofblogs = async () => {
    setpending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;
    console.log(result);

    if (result && result.bloglist && result.bloglist.length) {
      setbloglist(result.bloglist);
      setpending(false);
    } else {
      setpending(false);
      setbloglist([]);
    }
  };

  const handledeleteblog = async (getcurrentid) => {
    console.log(getcurrentid);
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getcurrentid}`
    );
    const result = await response.data;
    if (result?.message) {
      fetchlistofblogs();
    }
  };

  const handleupdateblog = async (getcurrentblogitem) => {
    console.log(getcurrentblogitem);
    navigate("/add-blog", { state: { getcurrentblogitem } });
  };
  useEffect(() => {
    fetchlistofblogs();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Bloglist</h1>
      {pending ? (
        <h1 className={styles.loading}>Loading!! Please Wait</h1>
      ) : (
        <div className={styles.bloglist}>
          {bloglist && bloglist.length ? (
            bloglist.map((blogitem) => (
              <div key={blogitem._id} className={styles.blogItem}>
                <p className={styles.title}>{blogitem.title}</p>
                <p className={styles.description}>{blogitem.description}</p>
                <FaEdit onClick={() => handleupdateblog(blogitem)} />
                <FaTrash onClick={() => handledeleteblog(blogitem._id)} />
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
}
