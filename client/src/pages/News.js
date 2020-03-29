import React, { Component } from "react";
// import Typography from '@material-ui/core/Typography'
// import TextField from '@material-ui/core/TextField'
import API from "../utils/API";
// import 'typeface-roboto';
import {Paper, Typography, TextField, Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Delete, ContactsOutlined } from '@material-ui/icons';
import { ListItemSecondaryAction,  IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SaveBtn from"../components/SaveBtn";
import New from "../components/News/New"

const styles = {  root: { margin: 20, padding: 20, maxWidth: 400 },
form: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-evenly' }};

export default withStyles(styles)( class News extends Component {
    // class News extends Component {
    state = {
        news: [],
        savedArticles: [],
        title: "",
        // summary: "",
        // images: "",
        newsLink: ""
    }

    componentDidMount() {
        API.getNews()
        .then(res => this.setState({ news: res.data}))
        console.log(this.state.articles)
        .then(news => {
        this.setState({
            news: [...this.setState.news, ...news]
        });
        }).catch(err => console.log(err))
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


    handleSaveSubmit = id => {
        const newArt = this.state.news.find(newArt => newArt.id ===id)
        API.saveNews({
            title: this.state.title,
            newsLink: this.state.newsLink
        })
    }

    render(){
        
        // const { title, newsLink } = this.state 
        const { classes } = this.props
        return(
            <Paper className={classes.root}>
            <News>
                {this.state.news.map(newArt => {
                    return (
                        <New 
                        title={this.state.title}


                        />
                    )
                })}
            </News>
            </Paper>
        )}

}

)

// export default News;

