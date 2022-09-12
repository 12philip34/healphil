import React from 'react';
import "./style.css";
import meditation from "../../images/Fitz - Sitting Meditation.png";
import sleep from "../../images/Women Power - Bonding.png";
import strength from "../../images/Fitz - Sitting Meditation.png";
import posture from "../../images/Open Peeps - Sitting.png";
import one from "../../images/hand-drawn-nft-style-ape-illustration_23-2149612191.jpg";
import two from "../../images/hand-drawn-nft-style-ape-illustration_23-2149612194.jpg";
import three from "../../images/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg";
import four from "../../images/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg";

const Meditation = () => {
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
            <section className='gridMeditation'>
                <label className="meditationImage">
                    <img src={meditation} alt="meditation.png" />
                </label>
                <label className="meditationText textPadding">
                    <h3>Healphil</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci at sapiente veniam eos, dolores nulla eveniet accusantium
                        iusto cumque tempora totam ut hic modi accusamus reiciendis quos dolorem blanditiis ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci at sapiente veniam eos, dolores nulla eveniet accusantium
                        iusto cumque tempora totam ut hic modi accusamus reiciendis quos dolorem blanditiis ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, non?
                    </p>
                </label>
            </section>
            <section className='practices'>
                <label>
                    <h1>our<span>practices</span></h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        m id officia tempore sequi praesentium perspiciatis!
                        Quod ratione odit velit nemo haru
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quod ratione odit velit nemo harum id officia tempore sequi praesentium perspiciatis!
                    </p>
                </label>
            </section>
            <section className='yogaCardBox'>
                <section className="cardNextSection">
                    <div className="cardItems">
                        {/* <img src={sleep} alt="sleep.png" /> */}
                        <h3>Lorem ipsum dolor</h3>
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
                        {/* <img src={strength} alt="strength.png" /> */}
                        <h3>Lorem ipsum .</h3>
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
                        {/* <img className='imgsposture' src={posture} alt="posture.png" /> */}
                        <h3>Lorem  sit amet.</h3>
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
                        {/* <img className='imgsposture' src={posture} alt="posture.png" /> */}
                        <h3>Lorem  sit amet.</h3>
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
            <section className='gridMeditation'>

                <label className="meditationText textPadding">
                    <h3>Healphil</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci at sapiente veniam eos, dolores nulla eveniet accusantium
                        iusto cumque tempora totam ut hic modi accusamus reiciendis quos dolorem blanditiis ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci at sapiente veniam eos, dolores nulla eveniet accusantium
                        iusto cumque tempora totam ut hic modi accusamus reiciendis quos dolorem blanditiis ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, non?
                    </p>
                </label>
                <label className="meditationImage">
                    <img src={meditation} alt="meditation.png" />
                </label>
            </section>
            <section className='practices' id='teachers'>
                <label>
                    <h1>our<span>teachers</span></h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        m id officia tempore sequi praesentium perspiciatis!
                        Quod ratione odit velit nemo haru
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quod ratione odit velit nemo harum id officia tempore sequi praesentium perspiciatis!
                    </p>
                </label>
            </section>
            <section className="cardNextSection">
                <div className="cardItems" id='teachersItems'>
                    <img src={one} alt="teachers.png" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                        Nobis, vel quia.
                    </p>
                   
                </div>

                <div className="cardItems" id='teachersItems'>
                    <img src={two} alt="teachers.png" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                        Nobis, vel quia.
                    </p>
                   
                </div>

                <div className="cardItems" id='teachersItems'>
                    <img src={three} alt="teachers.png" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                        Nobis, vel quia.
                    </p>
                   
                </div>
                <div className="cardItems" id='teachersItems'>
                    <img src={four} alt="teachers.png" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quaerat voluptatibus libero commodi saepe ad id debitis pariatur?
                        Nobis, vel quia.
                    </p>
                   
                </div>
            </section>
        </div>
    )
}

export default Meditation;