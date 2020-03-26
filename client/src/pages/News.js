import React, { Component } from "react";
// import Typography from '@material-ui/core/Typography'
// import TextField from '@material-ui/core/TextField'
import API from "../utils/API";
// import 'typeface-roboto';
import {Paper, Typography, TextField, Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { ListItemSecondaryAction,  IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SaveBtn from"../components/SaveBtn";

const styles = {  root: { margin: 20, padding: 20, maxWidth: 400 },
form: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-evenly' }};

export default withStyles(styles)( class News extends Component {

    state = {
        articles: [],
        savedArticles: [],
        title: "",
        summary: "",
        images: "",
        articleLink: ""
    }

    componentDidMount() {
        API.getNews()
        .then(res => this.setState({ articles: res.data}))
        console.log(this.state.articles)
    }

    // handleChange = (
    //     { target: { name, value } }
    //     ) => this.setState({ [name]: value }
    //         )


    // handleCreate = e => {
    //      e.preventDefault();
    //      if (this.state.title) 
    //      { this.setState(({ exercises, title }) => (
    //          { exercises: [ ...exercises, { title, id: Date.now() }],title: '' }
    //          ))}
    // }

    // handleDelete = id => this.setState(
    //     ({ exercises }) => ({ exercises: exercises.filter(ex => ex.id !== id)})
    //     )


    render(){
        
        // const { title, exercises } = this.state 
        // const { classes } = this.props
        return(
            // <Paper className={classes.root}>
            // <Typography variant='h3' align='center' gutterBottom>        Exercises      </Typography>
            // <form><TextField name="title" label="Exercise" value={title} onChange={this.handleChange} margin='normal' />
            // <Button type="submit" color="primary" variant="raised">Create</Button>
            // </form>
            // <List>{this.state.exercises.map(({ id, title }) => <ListItem key={id}>            <ListItemText primary={title} /> <ListItemSecondaryAction><IconButton color='primary' onClick={() => this.handleDelete(id)}>
            //  <SaveBtn></SaveBtn>   
            //       <Delete /> </IconButton> </ListItemSecondaryAction> </ListItem>)}
           
            // </List>
            // </Paper>
            <div>Hello</div>
        )}

})

// export default News;

