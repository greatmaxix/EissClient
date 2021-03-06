import React, { Component } from 'react';
import './docs.css';
import { MDBCol, MDBContainer,MDBIcon,MDBModal, MDBRow,MDBBtn, MDBFooter,MDBInput,MDBModalBody,MDBModalHeader,MDBModalFooter } from "mdbreact";
import { FileMarkdownOutlined,DownloadOutlined} from '@ant-design/icons';


export class Fdocs extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <div className="lok">
                    <h4>Перечень документов, необходимых для заключения договора для физических лиц.</h4>
                    <h5>Основные этапы заключения договора энергоснабжения.</h5>
                    <p>1. Сбор необходимых документов (Ссылка на перечень документов);</p>
                    <p>2. Подача заявки в ТОО «ЭИСС» с приложением всех собранных документов;</p>
                    <p>3. Подписание договора.</p>
                    <p>Заявка и документы представляются в офисы клиентского обслуживания ТОО «ЭИСС» либо посредством электронной почты для удобства потребителей.</p>
                    <a style={{color:"blue"}} onClick={()=>{window.open('http://194.4.58.191:5000/a97d16aa-bca7-46d4-bf12-357af3b1bbc5zayavlenie_na_zakluchenie_dogovora.docx')}}>
                <DownloadOutlined />  Заявление на заключение договора</a><br/><br/>
                <a style={{color:"blue"}}onClick={()=>{window.open('http://194.4.58.191:5000/be66cc6f-f0c2-43fa-9778-bcecf3887639tipovoy_dogovor_eiss.docx')}}>
                <DownloadOutlined />  Типовой договор ЭИСС</a><br/><br/>
                
                    <h5>Для бытовых потребителей проживающих в многоквартирных домах.</h5>
                    <p>1. Заявление на заключение договора; </p>
                    <p>2. Документ, подтверждающий право собственности (пользования) на помещение в многоквартирном доме;</p>
                    <p>3. Документ, удостоверяющий личность физического лица (копия удостоверения личности/паспорта);</p>
                    <p>4. В случае заключения договора доверенным лицом предоставляется копии доверенности и удостоверения личности/паспорта доверительного лица.</p>
                    <h5>Для граждан, проживающих в индивидуальных жилых домах (домовладениях).</h5>
                    <p>1. Заявление на заключение договора; </p>
                    <p>2. Документ, подтверждающий право собственности (пользования) на жилой дом (домовладение), гараж;</p>
                    <p>3. Документ, удостоверяющий личность физического лица (копия удостоверения личности/паспорта);</p>
                    <p>4. По вновь вводимым в эксплуатацию жилым домам обязательно наличие технических условий (копия); </p>
                    <p>5. В случае заключения договора доверенным лицом предоставляется копии доверенности и удостоверения личности/паспорта доверительного лица.</p>
                </div>
                    <img src={require('../../img/na_site3.JPG')} className="info"></img>         
            </div>
        )
        
    }
}

export default Fdocs
