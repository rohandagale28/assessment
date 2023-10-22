import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { useState } from "react";


const DialogCust = ({ open, item, setOpen }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmitEdit = async (e, user) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/register/${user}`, input)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(!open)}>
                <div style={{ margin: "1rem 0rem 1rem 1rem" }}>Edit Info</div>
                <DialogContent style={{ height: "24rem", width: "28rem" }}>
                    <DialogContentText style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <form onSubmit={(e) => handleSubmitEdit(e, item._id)} className='d-flex flex-column gap-3'>
                            <div>
                                <input type="text" placeholder={item.name} value={name} onChange={(e) => setName(e.target.value)} style={{ backgroundColor: "#e5e5e5", border: "none", outline: "none", height: "2rem", paddingLeft: "1rem", borderRadius: "8px", color: "#000" }} />
                            </div>
                            <div>
                                <input type="text" placeholder={item.email} value={email} onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: "#e5e5e5", border: "none", outline: "none", height: "2rem", paddingLeft: "1rem", borderRadius: "8px", color: "#000" }} />
                            </div>
                            <div>
                                <input type="password" placeholder={item.email} value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: "#e5e5e5", border: "none", outline: "none", height: "2rem", paddingLeft: "1rem", borderRadius: "8px", color: "#000" }} />
                            </div>
                            <button onClick={(e) => handleSubmitEdit(e, item._id)}>Save</button>
                        </form>
                    </DialogContentText>
                </DialogContent>
                <button onClick={() => setOpen(!open)} style={{ margin: "2rem", width: "6rem" }}>Close</button>
            </Dialog>
        </>
    )
}

export default DialogCust