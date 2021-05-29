import { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import lottie from 'lottie-web';

const styles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 10000
    }
}));

const Animation = (src: any) => {
    const classes = styles();

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (element.current) {
            lottie.loadAnimation({
                container: element.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                // animationData: require("../../assets/images/relaxing.json"),
                animationData: src.src
            });
        }
    }, [src, element]);

    return <div className={classes.root} ref={element}></div>;
};

export default Animation;
