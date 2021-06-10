import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Edit, AddCircleOutline } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { profileStore } from '../profileStore';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';

const ListSkill = observer(() => {
    if (profileStore.educationList) {
        return (
            <div>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        key={index}>
                        <div>
                            <Grid container direction="row" alignItems="center">
                                <AddCircleOutline />
                                <div>
                                    <h4>{item}</h4>
                                </div>
                            </Grid>
                        </div>
                        <Grid item>
                            <Button onClick={() => {}}>
                                <Edit style={{ color: '#0a66c2' }} />
                            </Button>
                        </Grid>
                    </Grid>
                ))}
            </div>
        );
    } else return <LoadingCard />;
});

export default ListSkill;
