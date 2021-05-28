import React from 'react';

import {
    Tab,
    Tabs,
    Button,
    Paper,
    Avatar,
    Box,
    Hidden,
    Divider,
    Card,
    Link
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
    Edit,
    FiberManualRecordOutlined,
    Add,
    NavigateBefore,
    NavigateNext
} from '@material-ui/icons';

import { IExperience } from '../ProfileContainer';

import { formatMonthMMM } from '../../../config/Function';

import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

interface IProps {
    listExp: IExperience[];
}

const ListExperience = (props: IProps) => {
    const { listExp } = props;
    const moment = extendMoment(Moment);

    return (
        <div>
            {listExp.map((item: IExperience) => {
                return (
                    <div>
                        <Grid
                            container
                            key={item._id}
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
                                        <h3>{item.employment_type}</h3>
                                        <p
                                            style={{
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            {item.company}
                                        </p>
                                        <div
                                            style={{
                                                color: '#00000099',
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            <span>
                                                {formatMonthMMM(item.joined_at)}{' '}
                                                - {formatMonthMMM(item.left_at)}
                                            </span>
                                            <FiberManualRecordOutlined
                                                style={{
                                                    fontSize: '0.5rem',
                                                    margin: '0px 4px'
                                                }}
                                            />
                                            <span>
                                                {/* {moment.range(
                                                    formatMonthMMM(
                                                        item.joined_at
                                                    ),
                                                    formatMonthMMM(item.left_at)
                                                )} */}
                                                4 mos
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                color: '#00000099',
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            <span>{item.location}</span>
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
                    </div>
                );
            })}
        </div>
    );
};

export default ListExperience;
