import React from 'react';
import styles from './boxSlider.module.scss';

const boxSlider =()=>(
<div className={styles.boxSlider}>
            <div className={styles.pageSlider}>
                <ul className={styles.slider}>
                    <li>
                      <div className={styles.imgSlider}></div>
                      <div className={styles.description}>
                          <p>
                        Dzięki nam odkryjesz nowy swiat pełen wspaniałych kaw oraz herbat. Doświadczysz prawdziwej rozkoszy delektując się naszymi towarami.Posiadamy staranie wyselekcjonowane towary i dostarczamy je w ciągu 48h bys jak najszybciej mógł cieszyć się swoim wymarzonym produktem. Nie wierzysz ? Sprawdz sam.
                          </p>
                      </div>
                    </li>
                    
                </ul>
            </div>
            </div>

);
export default boxSlider;