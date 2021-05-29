import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FlipMove from 'react-flip-move';
import Post from './post/Post';
import Animation from '../animations/Animation';
import Loading from '../../assets/images/loading-dots.json';

const postData: any = [
    {
        id: '0',
        data: {
            description: 'jahsfajkhfs ',
            fileData: '',
            fileName: '',
            fileType: '',
            profile:
                'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140',
            timestamp: '',
            username: 'tung nguyen'
        }
    },
    {
        id: '1',
        data: {
            description: 'asjfl ',
            fileData: '',
            fileName: '',
            fileType: '',
            profile:
                'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140',
            timestamp: '',
            username: 'tung nguyen'
        }
    },
    {
        id: '2',
        data: {
            description: 'abc',
            fileData: '',
            fileName: '',
            fileType: '',
            profile:
                'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140',
            timestamp: '',
            username: 'tung nguyen'
        }
    },
    {
        id: '3',
        data: {
            description: '123',
            fileData: '',
            fileName: '',
            fileType: '',
            profile:
                'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140',
            timestamp: '',
            username: 'tung nguyen'
        }
    }
];

const Posts = () => {
    const classes = Style();
    return (
        <div className={classes.posts}>
            {postData.length === 0 ? (
                <Animation src={Loading} />
            ) : (
                <div style={{ width: '100%' }}>
                    {postData.map((post: any) => {
                        return (
                            <Post
                                key={post.id}
                                profile={post.data.profile}
                                username={post.data.username}
                                timestamp={post.data.timestamp}
                                description={post.data.description}
                                fileType={post.data.fileType}
                                fileData={post.data.fileData}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

const Style = makeStyles(() => ({
    posts: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export default Posts;
