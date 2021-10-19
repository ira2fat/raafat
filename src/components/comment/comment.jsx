import React from "react";
import './comment.css'
import { Input, Button, Container, Grid, Card, Typography, CardContent, IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

export default function Comment() {
    let [save, setSave] = React.useState("");
    let [commentList, setCommentList] = React.useState(
        localStorage.getItem('CommentListStorage') !== null ? JSON.parse(localStorage.getItem('CommentListStorage')) : []
    );

    const handlechange = (event) => {
        setSave(event.target.value)
    }
    const comments = () => {
        if (save != "") {
            let timestamp = new Date();
            let date = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
            var arraylist = [];
            commentList.forEach(item => { arraylist.push(item) });
            arraylist.push(
                {
                    content: save,
                    dateValue: date
                }
            );
            setCommentList(arraylist);
            localStorage.setItem('CommentListStorage', JSON.stringify(setCommentList))
           
        }
    }
    const handleDelete = (dateValue) => {

        const deletlist = commentList.filter(x => x.dateValue != dateValue);
        setCommentList(deletlist);
        localStorage.setItem('CommentListStorage', JSON.stringify(setCommentList))
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') { comments(); }
    }
    return (
        <div >
            <div className='commentmap'  >
                <Container>
                    <Grid container style={{ display: 'block ' }}>
                        {commentList.map((newcomment) => (
                            <Card style={{ padding: '8px', margin: '5px', borderRadius: '25px' }} >
                                <CardContent style={{ padding: '0px' }} className='cardcontent' >
                                    <Typography style={{ padding: '0px', textAlign: 'initial' }} >
                                        {newcomment.content}
                                    </Typography>
                                    <Typography style={{ padding: '0px', fontSize: 'x-small' }} variant="body2" color="text.secondary" className='date'>
                                        {newcomment.dateValue}
                                        <IconButton style={{ padding: '0px' }}>
                                            <DeleteOutlined onClick={() => handleDelete(newcomment.dateValue)} />
                                        </IconButton>
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                        )
                        }
                    </Grid>
                </Container>
            </div>
            <Input type="text" placeholder="Add a comment..." onChange={handlechange} onKeyPress={handleKeyPress} />
            <Button variant="contained" color="primary" style={{hover:'red'}} size="small" onClick={comments}>Comment</Button>
        </div>
    )
}