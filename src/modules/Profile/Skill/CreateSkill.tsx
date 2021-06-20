import React from 'react';
import {
    Button,
    Divider,
    Fab,
    Grid,
    IconButton,
    TextField,
    Typography
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { profileStore } from '../profileStore';
import Styles from './Style';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '70%',
        width: '50%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 8
    }
};

const CreateSkill = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={profileStore.modalSkill.create}
                onRequestClose={() => (profileStore.modalSkill.create = false)}
                style={customStyles}
                contentLabel="Create Education Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add skill</Typography>
                            <IconButton
                                onClick={() =>
                                    (profileStore.modalSkill.create = false)
                                }>
                                <Close />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Grid item>
                        <TextField
                            label="Skills"
                            required
                            fullWidth
                            placeholder="your skills(ex: Hardware Design)"
                            onChange={(e) => {
                                profileStore.inputSkillName = e.target.value;
                            }}
                            value={profileStore.inputSkillName}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    profileStore.inputSkillList.push(
                                        profileStore.inputSkillName.trim()
                                    );
                                    profileStore.inputSkillName = '';
                                }
                            }}
                        />
                        <p className={classes.helperText}>
                            Press enter to add more skill
                        </p>
                    </Grid>

                    <Grid item>
                        {profileStore.inputSkillList.map((item, index) => (
                            <span className={classes.skillItem} key={index}>
                                {item}
                                <IconButton
                                    style={{ padding: 0, marginLeft: 4 }}
                                    onClick={() => {
                                        profileStore.inputSkillList =
                                            profileStore.inputSkillList.filter(
                                                (s) => s !== item
                                            );
                                    }}>
                                    <Close className={classes.closeIcon} />
                                </IconButton>
                            </span>
                        ))}
                    </Grid>

                    <Grid>
                        <Button
                            disabled={
                                profileStore.inputSkillList.length > 0
                                    ? false
                                    : true
                            }
                            className={classes.btn_post}
                            onClick={(e) => profileStore.createSkill()}>
                            {profileStore.isLoading ? 'Saving...' : 'Save'}
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreateSkill;
