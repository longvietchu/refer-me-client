import React, { useState, useEffect } from 'react';
import JobScreen from './JobScreen';
import { VariantType, useSnackbar } from 'notistack';
import jobs from './jobs';
import { observer } from 'mobx-react-lite';
import { jobStore } from './jobStore';

export interface IJob {
    id: string;
    isSave: boolean;
    src: string;
    title: string;
    company: string;
    location: string;
    time: string;
}

const JobContainer = observer(() => {
    // const [job, setJob] = useState<IJob[]>([]);

    const { enqueueSnackbar } = useSnackbar();

    // useEffect(() => {
    //     setJob(jobs);
    // }, [jobs]);

    useEffect(() => {
        jobStore.getJobs();
    }, []);

    return <JobScreen />;
});

export default JobContainer;
