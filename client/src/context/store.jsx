import { createContext, useState } from "react";

export const Globalcontext = createContext(null);
export default function Globalstate({ children }) {
  const [formdata, setformdata] = useState({
    title: "",
    description: "",
  });
  const [bloglist, setbloglist] = useState([]);
  const [pending, setpending] = useState(false);
  const [isedit, setisedit] = useState(false);
  return (
    <Globalcontext.Provider
      value={{
        formdata,
        setformdata,
        bloglist,
        setbloglist,
        pending,
        setpending,
        isedit,
        setisedit,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
}
