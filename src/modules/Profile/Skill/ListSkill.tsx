import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { DeleteForever, AddCircleOutline } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { profileStore } from '../profileStore';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';

const ListSkill = observer(() => {
    if (profileStore.skillList) {
        return (
            <div>
                {profileStore.skillList.map((item, index) => (
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        key={item._id}>
                        <div style={{ padding: 12 }}>
                            <Grid container direction="row" alignItems="center">
                                <AddCircleOutline
                                    style={{
                                        width: 30,
                                        height: 30,
                                        color: '#0000008a',
                                        marginRight: 16
                                    }}
                                />
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
                        <Grid item>
                            <Button
                                onClick={() => {
                                    profileStore.modalSkill.delete = true;
                                    profileStore.selectedSkill = item;
                                }}>
                                <DeleteForever style={{ color: '#0000008a' }} />
                            </Button>
                        </Grid>
                    </Grid>
                ))}
            </div>
        );
    } else return <LoadingCard />;
});

export default ListSkill;
