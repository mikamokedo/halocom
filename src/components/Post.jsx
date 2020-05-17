import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Link
} from "react-router-dom";
dayjs.extend(relativeTime);
const Post = (props) => {
    return (
        <div className="postList">
            <p className="story_title"><Link to={`/item=${props.uuid}`}>{props.title}</Link></p>
            <p className="story_meta"><span>{props.points} points</span>|&nbsp;<span>{props.author}</span>|&nbsp;<span>{dayjs(props.time).fromNow()}</span>|&nbsp;<span>{props.comment && props.comment.length} comments</span></p>
        </div>
    );
};

export default Post;