import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { homeStore } from '../../../modules/Home/homeStore';
import Loading from '../../assets/images/loading-dots.json';
import Animation from '../animations/Animation';
import PostItem from './post/PostItem';

const Posts = observer(() => {
    const classes = Style();

    if (homeStore.postList) {
        if (homeStore.postList.length > 0) {
            return (
                <div className={classes.posts}>
                    <div style={{ width: '100%' }}>
                        {homeStore.postList.map((post) => (
                            <PostItem
                                key={post._id}
                                user_info={post.user_info}
                                reactions={post.reactions}
                                updated_at={post.updated_at}
                                description={post.description}
                                post_image={post.post_image}
                            />
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
    } else
        return (
            <div style={{ width: 200 }}>
                <Animation src={Loading} />
            </div>
        );
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
