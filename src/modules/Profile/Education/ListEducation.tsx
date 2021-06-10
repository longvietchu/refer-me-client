import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { profileStore } from '../profileStore';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';

const ListEducation = observer(() => {
    if (profileStore.educationList) {
        return (
            <div>
                {profileStore.educationList.map((item, index) => (
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        style={{ padding: '0 0 24px' }}
                        key={item._id}>
                        <Link
                            to="#"
                            color="inherit"
                            style={{
                                padding: '20px 5px 0px 24px',
                                textDecoration: 'none',
                                color: '#333'
                            }}>
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

                        <Grid item style={{ margin: '20px 10px 0' }}>
                            <Button
                                onClick={() => {
                                    profileStore.selectedEducation = item;
                                    profileStore.modalEducation.edit = true;
                                }}>
                                <Edit style={{ color: '#0a66c2' }} />
                            </Button>
                        </Grid>
                    </Grid>
                ))}
            </div>
        );
    } else return <LoadingCard />;
});

export default ListEducation;
