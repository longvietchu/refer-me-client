import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import JobScreen from './JobScreen';
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
    useEffect(() => {
        jobStore.getJobs();
    }, []);

    return <JobScreen />;
});

export default JobContainer;
