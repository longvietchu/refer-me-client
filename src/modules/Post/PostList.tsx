import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import React from 'react';
import LoadingCard from '../../common/components/util/LoadingCard';
import { homeStore } from '../Home/homeStore';
import PostItem from './PostItem';

const Posts = observer(() => {
    const classes = Style();

    if (homeStore.postList) {
        if (homeStore.postList.length > 0) {
            return (
                <div className={classes.posts}>
                    <div style={{ width: '100%' }}>
                        {homeStore.postList.map((post) => (
                            <PostItem post={post} />
                        ))}
                    </div>
                </div>
            );
        } else
            return (
                <div className={classes.noFeedContainer}>
                    <img
                        src="/images/no-feed.svg"
                        alt="No News Feed"
                        className={classes.noFeedImage}
                    />
                    <p className={classes.noFeedText}>
                        No News Feed!
                        <br />
                        Let's Expand Your Network To get more news
                    </p>
                </div>
            );
    } else return <LoadingCard />;
});

const Style = makeStyles(() => ({
    posts: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    noFeedContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px 50px'
    },
    noFeedImage: {
        borderRadius: 10,
        marginBottom: 10,
        width: '70%'
    },
    noFeedText: {
        textTransform: 'capitalize',
        color: '#00000099',
        textAlign: 'center',
        fontWeight: 'bold'
    }
}));

export default Posts;
