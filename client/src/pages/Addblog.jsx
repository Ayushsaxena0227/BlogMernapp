import { useContext, useEffect } from "react";
import { Globalcontext } from "../context/store";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Addblog.module.css";

export default function Addblog() {
  const { formdata, setformdata, isedit, setisedit } =
    useContext(Globalcontext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(formdata);
  const handlesaveblogtodb = async () => {
    const response = isedit
      ? await axios.put(
          `http://localhost:5000/api/blogs/update/${location.state.getcurrentblogitem._id}`,
          {
            title: formdata.title,
            description: formdata.description,
          }
        )
      : await axios.post("http://localhost:5000/api/blogs/add", {
          title: formdata.title,
          description: formdata.description,
        });

    const result = await response.data;
    console.log(result);
    if (result) {
      setisedit(false);
      setformdata({
        title: "",
        description: "",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    if (location.state) {
      const { getcurrentblogitem } = location.state;
      setisedit(true);
      setformdata({
        title: getcurrentblogitem.title,
        description: getcurrentblogitem.description,
      });
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{isedit ? "Edit Blog" : "Add Blog"}</h1>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Enter Blog Title"
          id="title"
          value={formdata.title}
          onChange={(e) =>
            setformdata({
              ...formdata,
              title: e.target.value,
            })
          }
          className={styles.input}
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          value={formdata.description}
          onChange={(event) =>
            setformdata({
              ...formdata,
              description: event.target.value,
            })
          }
          className={styles.textarea}
        ></textarea>
        <button onClick={handlesaveblogtodb} className={styles.button}>
          {isedit ? "EDIT BLOG" : "ADD BLOG"}
        </button>
      </div>
    </div>
  );
}
