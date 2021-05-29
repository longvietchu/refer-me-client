import React from "react";
import JobScreen from "./JobScreen";
import { VariantType, useSnackbar } from "notistack";
import jobs from "./jobs";

export interface IJob {
  id: string;
  isSave: boolean;
  src: string;
  title: string;
  company: string;
  location: string;
  time: string;
}

const JobContainer = () => {
  const [job, setJob] = React.useState<IJob[]>([]);

  // const [isSave, setIsSave] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    setJob(jobs);
  }, [jobs]);

  const onSave = (
    e: { stopPropagation: () => void },
    variant: VariantType,
    id: string
  ) => {
    e.stopPropagation();
    console.log("b", id);
    enqueueSnackbar("This is a success message!", { variant });
    let newArr = job.map((item) => {
      if (item.id == id) {
        item.isSave = !item.isSave;
      }
      return item;
    });
    console.log("newArr", newArr);

    setJob(newArr);
  };

  return <JobScreen onSave={onSave} job={job} />;
};

export default JobContainer;
