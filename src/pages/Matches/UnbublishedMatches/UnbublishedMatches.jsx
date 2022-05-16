import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useActions } from '../../../hooks/UseActions';

import MatchesItemAdmin from '../../../pageComponents/Macthes/MatchesItemAdmin/MatchesItemAdmin';

import styles from './UnbublishedMatches.module.scss';

const UnbublishedMatches = () => {
    const {matches} = useSelector(state => state.matches)
    const {matchesFetch} = useActions()
    useEffect(() => {
        matchesFetch()
    }, [])

    return (
        <div className={styles.Container}>
            <Link to='createMatch' className={styles.Btn}>Добавить матч</Link>
            { 
                matches.map(i => (
                    <MatchesItemAdmin 
                        key={i.id}
                        id={i.id}
                        title={i.title}
                        team1={i.team1}
                        team2={i.team2}
                        check={i.check}
                        time={i.time}
                        tournament={i.tournament}
                        timeLeft={i.timeLeft}
                        type={i.type}
                        />
                ))
            }
        </div>
    )
}

export default UnbublishedMatches;