import { Button, Grid } from '@material-ui/core';
import { AddCircleOutline, DeleteForever } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { loginStore } from '../../Login/loginStore';
import { profileStore } from '../profileStore';
import Styles from './Style';

const ListSkill = observer(() => {
    const classes = Styles();

    if (profileStore.skillList) {
        if (profileStore.skillList.length > 0) {
            return (
                <div style={{ padding: '0 18px' }}>
                    {profileStore.skillList.map((item, index) => (
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{
                                borderBottom: '1px solid #ebebeb'
                            }}
                            key={item._id}>
                            <div style={{ padding: '12px 0' }}>
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center">
                                    {loginStore.userInfo &&
                                        profileStore.profile &&
                                        loginStore.userInfo.id !==
                                            profileStore.profile.user_id && (
                                            <AddCircleOutline
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    color: '#0000008a',
                                                    marginRight: 16
                                                }}
                                                onClick={() =>
                                                    profileStore.upvoteSkill(
                                                        item._id
                                                    )
                                                }
                                            />
                                        )}
                                    <p
                                        style={{
                                            fontSize: 18,
                                            fontWeight: 500
                                        }}>
                                        {item.name}{' '}
                                        {item.votes > 0 && (
                                            <span
                                                style={{
                                                    color: '#999',
                                                    fontWeight: 100
                                                }}>
                                                &#183; {item.votes}
                                            </span>
                                        )}
                                    </p>
                                </Grid>
                            </div>
                            {loginStore.userInfo &&
                                profileStore.profile &&
                                loginStore.userInfo.id ===
                                    profileStore.profile.user_id && (
                                    <Grid item>
                                        <Button
                                            onClick={() => {
                                                profileStore.modalSkill.delete =
                                                    true;
                                                profileStore.selectedSkill =
                                                    item;
                                            }}>
                                            <DeleteForever
                                                style={{ color: '#0000008a' }}
                                            />
                                        </Button>
                                    </Grid>
                                )}
                        </Grid>
                    ))}
                </div>
            );
        } else
            return (
                <div className={classes.noItem}>
                    Your skills could impress employers. Please add them here.
                </div>
            );
    } else return <LoadingCard />;
});

export default ListSkill;
