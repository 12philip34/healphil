import React from 'react';
import "./style.css";
import meditation from "../../images/Fitz - Sitting Meditation.png";
import sleep from "../../images/Women Power - Bonding.png";
import strength from "../../images/Fitz - Sitting Meditation.png";
import posture from "../../images/Open Peeps - Sitting.png";

function Meditation() {
    return (
        <div>
            <section className='gridMeditation'>
                <label className="meditationText">
                    <h3>Healphil</h3>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci at sapiente veniam eos, dolores nulla eveniet accusantium
                        iusto cumque tempora totam ut hic modi accusamus reiciendis quos dolorem blanditiis ullam.
                    </p>
                    <button>SignUp</button>
                </label>
                <label className="meditationImage">
                    <img src={meditation} alt="meditation.png" />
                </label>
            </section>
            <section className="whyYoga">
                <label>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est voluptatum autem?
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis iure, atque voluptatem quidem id cumque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis iure, atque voluptatem quidem id cumque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </p>
                </label>
                <section className='yogaCardBox'>
                    <section className="card">
                        <div className="cardItems">
                            <img src={sleep} alt="sleep.png" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                                  Nobis, vel quia.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                                  Nobis, vel quia.
                            </p>
                        </div>
                       
                        <div className="cardItems">
                            <img src={strength} alt="strength.png" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                                  Nobis, vel quia.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                                  Nobis, vel quia.
                            </p>
                        </div>

                        <div className="cardItems">
                            <img className='imgsposture' src={posture} alt="posture.png" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                                  Nobis, vel quia.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                                  Nobis, vel quia.
                            </p>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Meditation;