import React from 'react';
import { Button, Divider, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Edit } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import { profileStore } from '../profileStore';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';

const ListExperience = observer(() => {
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
            <div>
                {profileStore.experienceList.map((item, index) => (
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        style={{ padding: '0 0 24px' }}
                        key={item._id}>
                        <Link
                            href="#"
                            color="inherit"
                            style={{ padding: '20px 5px 0px 24px' }}>
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
                                                height: '56px',
                                                width: '56px'
                                            }}
                                            src={item.organization_info.avatar}
                                        />
                                    ) : (
                                        <img
                                            style={{
                                                height: '56px',
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

                        <Grid item style={{ margin: '20px 10px 0' }}>
                            <Button
                                onClick={() => {
                                    profileStore.selectedExperience = item;
                                    profileStore.modalExperience.edit = true;
                                }}>
                                <Edit style={{ color: '#0a66c2' }} />
                            </Button>
                        </Grid>
                    </Grid>
                ))}
                <Divider style={{ marginLeft: '94px' }} />
            </div>
        );
    } else return <LoadingCard />;
});

export default ListExperience;
