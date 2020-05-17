import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const Comment = (props) => {
    return (
        <div className="postList">
            <p className="story_meta"><span>{props.points} points</span>|&nbsp;<span>{props.author}</span>|&nbsp;<span>{dayjs(props.time).fromNow()}</span>|&nbsp;</p>
            <p className="story_title">{props.content}</p>
        </div>
    );
};

export default Comment;