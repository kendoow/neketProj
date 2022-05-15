import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './GamesInfo.module.scss';


const GamesInfo = () => {
  const {selectedGame} = useSelector(state => state.games)
  useEffect(() => {
    console.log(selectedGame)
  }, [])
  return (
    <div className={styles.Container}>
        <div className={styles.Block}>
            <div className={styles.Title}>Counter-Strike: Global Offensive (CS:GO) </div>
            <div className={styles.Date}><span>Дата выхода:</span> 21 авг. 2012</div>
            <div className={styles.Category}><span>Жанр:</span> шутер, соревновательная.</div>
            <div className={styles.Description}>
                <span>Описание:</span> Counter-Strike: Global Offensive (CS:GO) расширяет 
                границы ураганной командной игры, 
                представленной ещё 19 лет назад.
                CS:GO включает в себя новые карты, 
                персонажей, оружие и режимы игры, 
                а также улучшает классическую 
                составляющую CS (de_dust2 и т. п.).
                Counter-Strike удивила всю игровую 
                индустрию, когда ничем не примечательная 
                модификация стала одним из самых 
                популярных шутеров в мире 
                почти сразу после 
                выпуска в августе 1999 года,
                — говорит Даг Ломбарди из Valve.
                — Уже на протяжении 12 лет она продолжает
                быть одной из самых популярных игр в мире
                и возглавляет киберспортивные соревнования, 
                а по всему миру продано более 25 миллионов
                игр этой серии. CS:GO обещает расширить
                границы заслужившего известность игрового 
                процесса и предложить его игрокам не только 
                на ПК, но и на консолях следующего поколения и
                компьютерах Mac».
            </div>
        </div>
        <div className={styles.ContainerRequirements}>
            <div className={styles.Title}>Системные требования CS:GO</div>
            <div className={styles.BlockRequirements}>
                <div className={styles.Text}>
                    <span>ОС:</span> Windows® 7/Vista/XP
                </div>
                <div className={styles.Text}>
                    <span>Процессор:</span> Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750
                </div>
                <div className={styles.Text}>
                    <span>Оперативная память:</span> 2 GB ОЗУ
                </div>
                <div className={styles.Text}>
                    <span>Видеокарта:</span> Минимальный объем памяти 256 MB или больше, поддержка DirectX 9с и Шейдеры 3.0
                </div>
                <div className={styles.Text}>
                    <span>Место на диске:</span> 15 GB
                </div>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.BlockRequirements}>
                <div className={styles.Text}>
                    <span>ОС:</span> Windows® 7/Vista/XP
                </div>
                <div className={styles.Text}>
                    <span>Процессор:</span> Intel Core i3 3,6 GHz
                </div>
                <div className={styles.Text}>
                    <span>Оперативная память:</span> 8 ГБ
                </div>
                <div className={styles.Text}>
                    <span>Видеокарта:</span> AMD Radeon R7 260X или NVIDIA GeForce GTX 950
                </div>
                <div className={styles.Text}>
                    <span>Место на диске:</span> 20 GB
                </div>
            </div>
        </div>
    </div>
  )
}

export default GamesInfo;
