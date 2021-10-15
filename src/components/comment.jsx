import React from "react";
import '../cssfiles/comment.css'
import Button from '@material-ui/core/Button';
export default function Comment() {
    let [save, setSave] = React.useState("");
    let [commentList, setCommentList] = React.useState([]);

    const handlechange = (event) => {
        setSave(event.target.value)
    }
    const comments = () => {
        let timestamp = new Date();
        let date = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
        var arraylist = [];
        commentList.forEach(item => { arraylist.push(item) });
        arraylist.push(save, date);
        setCommentList(arraylist);
    }
    return (
        <><div  >
            {commentList.map((newcomment) => (
                <div className='comment' >
                    {newcomment}
                </div>))}
        </div>
            <input type="text" placeholder="Add a comment..." onChange={handlechange} />
            <Button variant="contained" color="primary" size ="small" onClick={comments}>Comment</Button>
        

        </>
    )
}