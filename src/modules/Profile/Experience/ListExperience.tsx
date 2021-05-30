import { Button, Divider, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Edit, FiberManualRecordOutlined } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';

import { profileStore } from '../profileStore';
import { experienceStore } from './experienceStore';
import { loginStore } from '../../Login/loginStore';

import { formatMMMYYYY } from '../../../common/config/Function';

const ListExperience = observer(() => {
    if (experienceStore.userExp) {
        const data = experienceStore.userExp.slice();
        return (
            <div>
                {data.map((item, index) => (
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
                                                {formatMMMYYYY(item.joined_at)}{' '}
                                                {'-'}
                                                {formatMMMYYYY(item.left_at)}
                                            </span>
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
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </Grid>
                            </Link>

                            {item.user_id === profileStore.profile.user_id ? (
                                <Grid item style={{ margin: '20px 10px 0' }}>
                                    <Button>
                                        <Edit style={{ color: '#0a66c2' }} />
                                    </Button>
                                </Grid>
                            ) : null}
                        </Grid>

                        {data.length > 1 && index != data.length - 1 ? (
                            <Divider style={{ marginLeft: '94px' }} />
                        ) : null}
                    </div>
                ))}
            </div>
        );
    } else return null;
});

export default ListExperience;
