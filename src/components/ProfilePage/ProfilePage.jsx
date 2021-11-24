import React, { useState, useEffect, useRef } from "react";

import classNames from "classnames";
import styles from './ProfilePage.module.scss'
import Api from "../../utils/api"
import ToggleButton from './parts/ToggleButton';
import * as Images from './images'


const ProfilePage = () => {
    const [userData, setUserData] = useState([]);
    const [copied, setCopied] = useState(false)

    const linkRef = useRef(null)

    const copyText = () => {
        setCopied(!copied)
        navigator.clipboard.writeText(linkRef.current.innerText)
    }
    
    useEffect(() => {
        Api.getUserData()
            .then((data) => {
                JSON.stringify(data)
                setUserData(data)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            {/* desktop */}
            <div className={classNames(styles.main, styles.desktop)}>
                
                <div className={styles.container}>
                    <div className={classNames(styles.profileInfo, styles.profileInfo_d)}>

                        <div className={styles.personInfo}>
                            <div>
                                <div className={styles.title_d}>Профиль</div> 
                                <div className={classNames(styles.ava, styles.ava_d)}>
                                    <i className={styles.iconAva}><Images.IcAva/></i>
                                    <i className={classNames(styles.iconEdit, styles.iconEdit_d)}><Images.IcEdit/></i>
                                </div>
                            </div>
                            

                            <div className={styles.fc}>
                                <div className={classNames(styles.info, styles.info_d)}>
                                    <div className={classNames(styles.infoUp, styles.infoUp_d)}>Никнейм</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_d)}>{userData.nickname}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_d)}>Статус</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_d)}>{userData.status}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_d)}>Следующий статус</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_d)}>{userData.joinedBy}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_d)}>Электронная почта</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_d)}>{userData.email}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_d)}>Telegram</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_d)}>{userData.telegram}</div>
                                </div> 

                                <div className={classNames(styles.notif, styles.notif_d)}>Отправка уведомлений
                                    <div className={classNames(styles.notifPar, styles.notifPar_d)}>
                                        <ToggleButton defaultChecked={true}></ToggleButton>
                                        <div className={classNames(styles.notifChild, styles.notifChild_d)}>Разрешить отправку уведомлений на E-Mail</div>
                                    </div>
                                    <div className={classNames(styles.notifPar, styles.notifPar_d)}>
                                        <ToggleButton defaultChecked={false}></ToggleButton>
                                        <div className={classNames(styles.notifChild, styles.notifChild_d)}>Отправлять уведомления о входе с нового IP адреса</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className={classNames(styles.other, styles.other_d)}>
                            <div className={classNames(styles.otherUp, styles.otherUp_d)}>Адрес кошелька</div>
                            <div className={styles.otherDown_d}>{userData.wallet}</div>
                            <div className={classNames(styles.otherUp, styles.otherUp_d)}>Пригласительная ссылка</div>
                            <div className={styles.otherDown_d} ref={linkRef}>https://infinity.network.io/j/vitalist
                                <i className={classNames(styles.iconCopy, styles.iconCopy_d)}
                                onClick={copyText}><Images.IcCopy/></i>
                                <div className={copied ? `${classNames(styles.сopyBox, styles.сopyBox_d)}` : `${styles.vh}`}></div>
                            </div>
                            <div className={classNames(styles.editButton, styles.editButton_d)}>
                                <div className={classNames(styles.editButtonText, styles.editButtonText_d)}>Редактировать</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className={classNames(styles.main, styles.mobile)}>
         
                <div className={classNames(styles.container, styles.container_m)}>
                    <div className={classNames(styles.profileInfo, styles.profileInfo_m)}>
                    
                        <div className={styles.personInfo}>
                            
                            <div>
                                <div className={styles.title_m}>Профиль</div> 
                                <div className={classNames(styles.ava, styles.ava_m)}>
                                    <i className={styles.iconAva}><Images.IcAvaM/></i>
                                    <i className={classNames(styles.iconEdit, styles.iconEdit_m)}><Images.IcEditM/></i>
                                </div>
                                <div className={styles.send}>Отправка уведомлений</div>
                            </div>
                            

                            <div className={styles.fc}>
                                <div className={classNames(styles.info, styles.info_m)}>
                                    <div className={classNames(styles.infoUp, styles.infoUp_m)}>Никнейм</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_m)}>{userData.nickname}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_m)}>Статус</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_m)}>{userData.status}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_m)}>Следующий статус</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_m)}>{userData.joinedBy}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_m)}>Электронная почта</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_m)}>{userData.email}</div>
                                    <div className={classNames(styles.infoUp, styles.infoUp_m)}>Telegram</div>
                                    <div className={classNames(styles.infoDown, styles.infoDown_m)}>{userData.telegram}</div>
                                </div> 
                            </div>
                            
                        </div>
                        
                        <div className={classNames(styles.other, styles.other_m)}>
                            <div className={classNames(styles.notif, styles.notif_m)}>
                                <div className={classNames(styles.notifPar, styles.notifPar_m)}>
                                    <ToggleButton defaultChecked={true}></ToggleButton>
                                    <div className={classNames(styles.notifChild, styles.notifChild_m)}>Разрешить отправку уведомлений на E-Mail</div>
                                </div>
                                <div className={classNames(styles.notifPar, styles.notifPar_m)}>
                                    <ToggleButton defaultChecked={false}></ToggleButton>
                                    <div className={classNames(styles.notifChild, styles.notifChild_m)}>Отправлять уведомления о входе с нового IP адреса</div>
                                </div>
                            </div>

                            <div className={classNames(styles.otherUp, styles.otherUp_m)}>Адрес кошелька</div>
                            <div className={styles.otherDown_m}>{userData.wallet}</div>
                            <div className={classNames(styles.otherUp, styles.otherUp_m)}>Пригласительная ссылка</div>
                            <div className={styles.otherDown_m} ref={linkRef}>https://infinity.network.io/j/vitalist
                                <i className={classNames(styles.iconCopy, styles.iconCopy_m)} onClick={copyText} ><Images.IcCopyM/></i>
                                <div className={copied ? `${classNames(styles.сopyBox, styles.сopyBox_m)}` : `${styles.vh}`}></div>
                            </div>
                            <div className={classNames(styles.editButton, styles.editButton_m)}>
                                <div className={classNames(styles.editButtonText, styles.editButtonText_m)}>Редактировать</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage