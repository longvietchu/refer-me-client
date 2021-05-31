import { Button, Divider, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Edit, FiberManualRecordOutlined } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';

import { profileStore } from '../profileStore';
import { experienceStore } from './experienceStore';
import { loginStore } from '../../Login/loginStore';

import { formatMMMYYYY } from '../../../common/config/Function';

const ListExperience = observer(() => {
    const renderPeriod = (joined_at: string, left_at: string) => {
        if (left_at) {
            return (
                <span>
                    {formatMMMYYYY(joined_at)} {'-'} {formatMMMYYYY(left_at)}
                </span>
            );
        } else {
            return (
                <span>
                    {formatMMMYYYY(joined_at)} {'-'} present
                </span>
            );
        }
    };
    const renderDistance = (joined_at: string, left_at: string) => {
        let join = new Date(joined_at);
        let left;
        let months;
        if (left_at) {
            left = new Date(left_at);
        } else {
            left = new Date();
        }
        months = (left.getFullYear() - join.getFullYear()) * 12;
        months -= join.getMonth();
        months += left.getMonth();
        if (months === 0) {
            months = 1;
        }
        return months + ' mos';
    };

    if (experienceStore.userExp) {
        return (
            <div>
                {experienceStore.userExp.map((item, index) => (
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
                                            {renderPeriod(
                                                item.joined_at,
                                                item.left_at
                                            )}
                                            <FiberManualRecordOutlined
                                                style={{
                                                    fontSize: '0.5rem',
                                                    margin: '0px 4px'
                                                }}
                                            />
                                            <span>
                                                {renderDistance(
                                                    item.joined_at,
                                                    item.left_at
                                                )}
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

                            {profileStore.profile && item.user_id === profileStore.profile.user_id ? (
                                <Grid item style={{ margin: '20px 10px 0' }}>
                                    <Button
                                        onClick={() => {
                                            experienceStore.modalEditExperience =
                                            true
                                            experienceStore.selectedExperience = item
                                        }
                                        }>
                                        <Edit style={{ color: '#0a66c2' }} />
                                    </Button>
                                </Grid>
                            ) : null}
                        </Grid>
                        <Divider style={{ marginLeft: '94px' }} />
                    </div>
                ))}
            </div>
        );
    } else return null;
});

export default ListExperience;
