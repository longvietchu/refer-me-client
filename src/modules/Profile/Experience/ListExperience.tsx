import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Edit } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import { profileStore } from '../profileStore';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';
import { loginStore } from '../../Login/loginStore';
import { Link } from 'react-router-dom';
import Styles from './Style';

const ListExperience = observer(() => {
    const classes = Styles();
    const renderDate = (item: any) => {
        if (item.left_at) {
            return (
                <span>
                    {numberUtil.renderMonthYearInShort(item.joined_at)} -{' '}
                    {numberUtil.renderMonthYearInShort(item.left_at)}
                </span>
            );
        } else {
            return (
                <span>
                    {numberUtil.renderMonthYearInShort(item.joined_at)} -
                    present
                </span>
            );
        }
    };
    const renderPeriod = (item: any) => {
        if (item.left_at) {
            return (
                <span>
                    {numberUtil.relativeTime(item.joined_at, item.left_at)}
                </span>
            );
        } else {
            let present = new Date().toISOString();
            return (
                <span>{numberUtil.relativeTime(item.joined_at, present)}</span>
            );
        }
    };

    if (profileStore.experienceList) {
        return (
            <div style={{ padding: '0 18px' }}>
                {profileStore.experienceList.map((item, index) => (
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        style={{
                            borderBottom: '1px solid #ebebeb',
                            padding: '12px 0'
                        }}
                        key={item._id}>
                        <Link
                            to={
                                item.organization_info
                                    ? `/organization/${item.organization_info._id}`
                                    : '#'
                            }
                            color="inherit"
                            className={classes.link}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="flex-start"
                                style={{ marginRight: '14px' }}>
                                <div>
                                    {item.organization_info &&
                                    item.organization_info.avatar ? (
                                        <img
                                            style={{
                                                width: '56px'
                                            }}
                                            src={item.organization_info.avatar}
                                        />
                                    ) : (
                                        <img
                                            style={{
                                                width: '56px'
                                            }}
                                            src="/images/no-avatar.png"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h4>{item.job_title}</h4>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            margin: '2px 0px'
                                        }}>
                                        {item.company} &#183;{' '}
                                        {item.employment_type}
                                    </p>
                                    <div
                                        style={{
                                            color: '#00000099',
                                            fontSize: '14px',
                                            margin: '2px 0px'
                                        }}>
                                        {renderDate(item)} &#183;{' '}
                                        {renderPeriod(item)}
                                    </div>
                                    <div
                                        style={{
                                            color: '#00000099',
                                            fontSize: '14px',
                                            margin: '2px 0px'
                                        }}>
                                        <span>{item.location}</span>
                                    </div>
                                    <div
                                        style={{
                                            color: '#333',
                                            fontSize: '14px',
                                            margin: '2px 0px'
                                        }}>
                                        <span>{item.job_description}</span>
                                    </div>
                                </div>
                            </Grid>
                        </Link>
                        {loginStore.userInfo &&
                            profileStore.profile &&
                            loginStore.userInfo.id ===
                                profileStore.profile.user_id && (
                                <Grid item>
                                    <Button
                                        onClick={() => {
                                            profileStore.selectedExperience =
                                                item;
                                            profileStore.modalExperience.edit =
                                                true;
                                        }}>
                                        <Edit style={{ color: '#0000008a' }} />
                                    </Button>
                                </Grid>
                            )}
                    </Grid>
                ))}
            </div>
        );
    } else return <LoadingCard />;
});

export default ListExperience;
