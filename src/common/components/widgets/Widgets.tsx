import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeaderInfo from '../../components/util/HeadLine';
import { LinkedInLightBlue } from '../../assets/Colors';
import { LinkedInJobAdd } from '../../assets/images/images';
import Footer from '../../components/footer/Footer';
import Style from './Style';
import { Link } from 'react-router-dom';

const Widgets = () => {
    const classes = Style();
    const [expand, setExpand] = useState(false);

    return (
        <div className={classes.widgets}>
            <Paper className={classes.widgets__top}>
                <div className={classes.heading}>
                    <h4>Refer Me News</h4>
                    <ErrorOutlineSharpIcon />
                </div>
                {top_1.map((title, i) => (
                    <HeaderInfo
                        key={`widgets-top_1_${i}`}
                        Icon={
                            <FiberManualRecordIcon
                                style={{
                                    color: LinkedInLightBlue,
                                    fontSize: 12
                                }}
                            />
                        }
                        title={title}
                        time={true}
                        count={true}
                    />
                ))}
                {expand &&
                    top_2.map((title, i) => (
                        <HeaderInfo
                            key={`widgets-top_2_${i}`}
                            Icon={
                                <FiberManualRecordIcon
                                    style={{
                                        color: LinkedInLightBlue,
                                        fontSize: 12
                                    }}
                                />
                            }
                            title={title}
                            time={true}
                            count={true}
                        />
                    ))}
                <div
                    className={classes.expand}
                    onClick={() => setExpand(!expand)}>
                    <h4>{expand ? 'Show less' : 'Show more'}</h4>
                    <ExpandMoreIcon
                        style={{ transform: expand ? 'rotate(180deg)' : '' }}
                    />
                </div>
            </Paper>
            <Paper className={classes.widgets__top}>
                <div className={classes.heading}>
                    <h4>Expand your network</h4>
                    <Link to="/profile/60844ea42b7e5a0d40ff82a6">Long Chu</Link>
                </div>
            </Paper>
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
};

const top_1 = [
    'Google cracks down on loan apps',
    'Byju’s new acquisition',
    "Lost password? That'll be $220M",
    'Tesla gets an India address',
    'India Inc returns gingerly to office'
];

const top_2 = [
    'To Bitcoin or not to Bitcoin',
    'Infosys, Wipro post robust numbers',
    'Longer hours equal less productivity',
    'Fake commute has real benefits'
];

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
