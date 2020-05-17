import React from 'react';
import db from '../db.json';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const PostDetail = (props) => {
    const printcomment = (comment) =>{
        let result = null;
        result = comment.map((ele,key) =>{
            return (
            <div className="comment" key={key}>
                <p className="time"><span>{ele.author}</span>&nbsp;|&nbsp;<span>{dayjs(ele.time).fromNow()}</span></p>
                <p>{ele.content}</p>
            </div>
            )
        })
        return result;
    }
    const printPostDetail = () =>{
        const param = props.match.params.uuid;
        let result = null;
        db.forEach(item =>{
            if(item.uuid === param){
                result = (
                    <div className="post_detail">
                <h3>{item.title}</h3>
                <p className="story_meta"><span>{item.points} points</span>|&nbsp;<span>{item.author}</span>|&nbsp;<span>{dayjs(item.time).fromNow()}</span></p>   
                <p className="content">{item.content}</p> 
                    <div className="wrap_comment">
                    {printcomment(item.comment)}
                    </div>
                   
                </div>
                )   
            }
        })

        return result;

    }
    return (
        <div>
            {printPostDetail()}
        </div>
    );
};

export default PostDetail;