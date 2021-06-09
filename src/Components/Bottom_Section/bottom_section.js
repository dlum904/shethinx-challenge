import './bottom_section.css'
import React, {useState} from 'react';

import { PRODUCTS } from '../../App.js'
// This will be the other products
export default function BottomSection({ids}) {

    // hook to show modal
    const [modal, setModal] = useState(false);

    // toggles the modal on and off
    const toggleModal = (id) => {
        !modal ? setModal(id) : setModal(false);
    }
    return (
        <div className="other-products">
            <div className="top-row">
                <div>
                    <img className="other-img" src={PRODUCTS[ids[0]].img} onClick={() => { toggleModal(ids[0])}} alt="pic" />
                    <p className="other-name">Shop {PRODUCTS[ids[0]].name}</p>
                    <p className="other-desc1">{PRODUCTS[ids[0]].desc1}</p>
                </div>
                <div>
                    <img className="other-img" src={PRODUCTS[ids[1]].img} onClick={() => { toggleModal(ids[1]) }} alt="pic" />
                    <p className="other-name">Shop {PRODUCTS[ids[1]].name}</p>
                    <p className="other-desc1">{PRODUCTS[ids[1]].desc1}</p>
                </div>
            </div>
            <div className="mid-row">
                <div>
                    <img className="other-img" src={PRODUCTS[ids[2]].img} onClick={() => { toggleModal(ids[2]) }} alt="pic" />
                    <p className="other-name">Shop {PRODUCTS[ids[2]].name}</p>
                    <p className="other-desc1">{PRODUCTS[ids[2]].desc1}</p>
                </div>
            </div>
            <div className="bottom-row">
                <div>
                    <img className="other-img" src={PRODUCTS[ids[3]].img} onClick={() => { toggleModal(ids[3]) }} alt="pic" />
                    <p className="other-name">Shop {PRODUCTS[ids[3]].name}</p>
                    <p className="other-desc1">{PRODUCTS[ids[3]].desc1}</p>
                </div>
                <div>
                    <img className="other-img" src={PRODUCTS[ids[4]].img} onClick={() => { toggleModal(ids[4]) }} alt="pic" />
                    <p className="other-name">Shop {PRODUCTS[ids[4]].name}</p>
                    <p className="other-desc1">{PRODUCTS[ids[4]].desc1}</p>
                </div>
            </div>
            {/* MODAL */}
            {modal ? (
                <div className="modal" onClick={() => { toggleModal(modal) }} >
                    <br/>
                    <i id="close"className="fas fa-times"></i>
                    <img className="modal-img" src={PRODUCTS[modal].img} alt="pic" />
                </div>
            ) : 
            null }
        </div>
    )
}