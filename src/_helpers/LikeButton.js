import React, {useEffect, useState} from 'react'
import {SetLikeArticle} from "./apiFetch";
import Cookies from 'universal-cookie';

class  LikeButton  extends React.Component{

    state = {
        like  : 0,
        cookies : new Cookies(),
        name : 'like-'+this.props.slug
    }

    componentDidMount(){
        this.setState({like : this.props.like});
    }

      AddLike = () => {
        this.setState({like : this.state.like + 1})
        SetLikeArticle(this.props.slug)
       this.state.cookies.set(this.state.name, '/blog/'+this.state.name);
    }



   render(){
       if (this.state.cookies.get(this.state.name) != '/blog/'+this.state.name){
           return(
               <div className="likeBlogIcon"  onClick={this.AddLike}><div className='iconContent'><i className="fa fa-heart"></i></div> <b>{this.state.like}</b></div>
           )
       }
       else{
           return(
               <div className="likeBlogIcon like"><div className='iconContent'><i className="fa fa-heart"></i></div> {this.state.like}</div>
           )

       }
   }
    }


export  default LikeButton