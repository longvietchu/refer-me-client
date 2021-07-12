import React, { useState } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeaderInfo from '../../components/util/HeadLine';
import { LinkedInLightBlue } from '../../assets/Colors';
import { LinkedInJobAdd } from '../../assets/images/images';
import Footer from '../../components/footer/Footer';
import Style from './Style';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { organizationStore } from '../../../modules/Organization/organizationStore';
import LoadingCard from '../util/LoadingCard';

const Widgets = observer(() => {
    const classes = Style();
    const [expand, setExpand] = useState(false);

    return (
        <div className={classes.widgets}>
            <Paper className={classes.widgets__top}>
                <div className={classes.heading}>
                    <h4>Organizations you may know</h4>
                    <ErrorOutlineSharpIcon />
                </div>
                {organizationStore.organizationList ? (
                    organizationStore.organizationList.map((organization) => (
                        <Link to={`/organization/profile/${organization._id}`}>
                            <div className={classes.organizationContainer}>
                                <Box className={classes.box}>
                                    {organization.avatar ? (
                                        <img
                                            alt="Organizations"
                                            src={organization.avatar}
                                            style={{ width: 32 }}
                                        />
                                    ) : (
                                        <img
                                            alt="Jobs"
                                            src="/images/no-avatar.png"
                                            style={{ width: 32 }}
                                        />
                                    )}
                                </Box>
                                <div className="organization-info">
                                    <Typography
                                        color="textPrimary"
                                        className={classes.company}>
                                        {organization.name}
                                    </Typography>
                                    <Typography className={classes.industry}>
                                        Industry: {organization.industry}
                                    </Typography>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <LoadingCard />
                )}
                <div
                    className={classes.expand}
                    onClick={() => setExpand(!expand)}>
                    <h4>{expand ? 'Show less' : 'Show more'}</h4>
                    <ExpandMoreIcon
                        style={{ transform: expand ? 'rotate(180deg)' : '' }}
                    />
                </div>
            </Paper>
            {/* <Paper className={classes.widgets__top}>
                <div className={classes.heading}>
                    <h4>Expand your network</h4>
                    <Link to="/profile/60844ea42b7e5a0d40ff82a6">Long Chu</Link>
                </div>
            </Paper> */}
            <div className={classes.widgets__bottom}>
                <div className={classes.about}>
                    <h4>Author Info</h4>
                    <div>
                        {author.map(({ src, url }, i) => (
                            <a
                                href={`${url}`}
                                key={`author-link-${i}`}
                                rel="noreferrer nofollow"
                                target="_blank">
                                {src}
                            </a>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
});

const author = [
    {
        src: <i className="fab fa-github"></i>,
        url: 'https://github.com/longvietchu'
    },
    {
        src: <i className="fab fa-linkedin"></i>,
        url: 'https://www.linkedin.com/in/longcv'
    },
    {
        src: <i className="fas fa-envelope"></i>,
        url: 'mailto:vietlong5200@gmail.com'
    }
];

export default Widgets;
