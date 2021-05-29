import { Button, Divider, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Edit, FiberManualRecordOutlined } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { experienceStore } from './experienceStore';

const ListExperience = observer(() => {
    if (experienceStore.userExp) {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ padding: '0 0 24px' }}>
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
                                <img
                                    style={{
                                        height: '56px',
                                        width: '56px'
                                    }}
                                    src="https://dcv.vn/wp-content/uploads/2021/01/logo-dcv-2021-1.png"
                                />
                            </div>
                            <div>
                                <h3>
                                    {experienceStore.userExp.employment_type}
                                    Iternship trainee
                                </h3>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        margin: '2px 0px'
                                    }}>
                                    Data Communication of Vietnam
                                </p>
                                <div
                                    style={{
                                        color: '#00000099',
                                        fontSize: '14px',
                                        margin: '2px 0px'
                                    }}>
                                    <span>Dec 2020 - Mar 2021</span>
                                    <FiberManualRecordOutlined
                                        style={{
                                            fontSize: '0.5rem',
                                            margin: '0px 4px'
                                        }}
                                    />
                                    <span>4 mos</span>
                                </div>
                                <div
                                    style={{
                                        color: '#00000099',
                                        fontSize: '14px',
                                        margin: '2px 0px'
                                    }}>
                                    <span>Hanoi, Hanoi, Vietnam</span>
                                </div>
                            </div>
                        </Grid>
                    </Link>

                    <Grid item style={{ margin: '20px 10px 0' }}>
                        <Button>
                            <Edit style={{ color: '#0a66c2' }} />
                        </Button>
                    </Grid>
                </Grid>
                <Divider style={{ marginLeft: '94px' }} />
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ padding: '0 0 24px' }}>
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
                                <img
                                    style={{
                                        height: '56px',
                                        width: '56px'
                                    }}
                                    src="https://dcv.vn/wp-content/uploads/2021/01/logo-dcv-2021-1.png"
                                />
                            </div>
                            <div>
                                <h3>Iternship trainee</h3>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        margin: '2px 0px'
                                    }}>
                                    Data Communication of Vietnam
                                </p>
                                <div
                                    style={{
                                        color: '#00000099',
                                        fontSize: '14px',
                                        margin: '2px 0px'
                                    }}>
                                    <span>Dec 2020 - Mar 2021</span>
                                    <FiberManualRecordOutlined
                                        style={{
                                            fontSize: '0.5rem',
                                            margin: '0px 4px'
                                        }}
                                    />
                                    <span>4 mos</span>
                                </div>
                                <div
                                    style={{
                                        color: '#00000099',
                                        fontSize: '14px',
                                        margin: '2px 0px'
                                    }}>
                                    <span>Hanoi, Hanoi, Vietnam</span>
                                </div>
                            </div>
                        </Grid>
                    </Link>

                    <Grid item style={{ margin: '20px 10px 0' }}>
                        <Button>
                            <Edit style={{ color: '#0a66c2' }} />
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    } else return null;
});

export default ListExperience;
