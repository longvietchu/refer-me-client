import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { profileStore } from '../profileStore';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';
import { loginStore } from '../../Login/loginStore';
import Styles from './Style';

const ListEducation = observer(() => {
    const classes = Styles();

    if (profileStore.educationList) {
        return (
            <div style={{ padding: '0 18px' }}>
                {profileStore.educationList.map((item, index) => (
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
                                    <h4>{item.title}</h4>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            margin: '2px 0px'
                                        }}>
                                        {item.description}
                                    </p>
                                    <div
                                        style={{
                                            color: '#00000099',
                                            fontSize: '14px',
                                            margin: '2px 0px'
                                        }}>
                                        <span>
                                            {numberUtil.convertUtcToYear(
                                                item.joined_at
                                            )}{' '}
                                            -{' '}
                                            {numberUtil.convertUtcToYear(
                                                item.graduated_at
                                            )}
                                        </span>
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
                                            profileStore.selectedEducation =
                                                item;
                                            profileStore.modalEducation.edit =
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

export default ListEducation;
