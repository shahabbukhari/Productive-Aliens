import React from "react";
import chair from "../../Assets/massage.png";
import biometric from "../../Assets/biometric.png";
import chiropractor from "../../Assets/chiropractor.png";
import nutritionist from "../../Assets/neutritionist.png";
import parapine from "../../Assets/parapine.png";
import reflexology from "../../Assets/reflexology.png";
import yoga from "../../Assets/yoga.png";

function Services() {
  const Services = [
    {
      title: "Chair Massage",
      description:
        "Swedish massage is a western modality designed to treat soft tissue and improve blood supply at a superficial muscular level. Swedish massage improves muscle tone and helps to flush out toxins out of the system. When done correctly, this modality can be a very good and effective way to reduce physiological and psychological stress...",
      img: chair,
    },
    {
      title: "Nutritionist",
      description:
        " Full body massage that is very much like Swedish Massage with an element of modern to deep therapeutic pressure built into it. Unlike Swedish Massage, which can be done as maintenance service, therapeutic massage should be incorporated in a form of a treatment plan, weekly sessions for a period of 8 to 12  weeks, followed by monthly maintenance...",
      img: nutritionist,
    },
    {
      title: "Chiropractor",
      description:
        "This modality is designed to target specific areas of the body that show vulnerability, lack of range of motion, build-up of lactic acid, arthritis, bursitis, and other conditions. This type of massage is extremely beneficial in breaking up scar tissue and reduction of adhesions. The therapist applies relatively deeper pressure since the layers of muscles that are being addressed are far deeper in their proximity to other muscle groups, and deeper pressure is needed to get to them... ",
      img: chiropractor,
    },
    {
      title: "Yoga Instruction",
      description:
        "Both pre - and post-Sports Massage are a great option for those who are actively involved in physical activity and looking to prepare for an event or a training program. Pre Sports Massage involves faster strokes and lots of active and passive stretching and is a great way to prepare the body for a workout and by doing so to prevent an injury. Post Sports massage is designed to bring the body back to its original state... ",
      img: yoga,
    },
    {
      title: "Paraphin Wax Treatment",
      description:
        "This modality is derived from the Swedish massage. A wonderful option and a great choice for women who are in their 2nd or 3rd trimester seeking to get relief from joint pain and muscle aches, as well as those who have difficulty handling their daily routines. Prenatal work helps to keep the body's fluids balanced...",
      img: parapine,
    },
    {
      title: "Reflexology",
      description:
        "Reflexology is an ancient modality believed to arrive in the United States from China. Reflexology is an alternative method of treatment designed to treat the body by targeting nerve endings located on the soles of our feet. Fascinating research has been done on this topic of Reflexology...",
      img: reflexology,
    },
    {
      title: "Biometric Screening",
      description:
        "Myofacial Release by design is very much like deep tissue, with its main focus on trigger point therapy. Targeted sessions are created to minimize or eliminate trigger points in the body. Extremely beneficial to clients who are experiencing muscle fatigue, muscle sourness, muscle pain, stiffness, pain due to build-up lactic acid, and tightly packed or tangled muscle fibers that require separation. ",
      img: biometric,
    },
  ];

  return (
    <section className="services">
      {Services.map((item, index) => (
        <div className={index % 2 ? "service" : "service service-reverse"}>
          <div className="service-info">
            <div className="service-info-text">
              <h1 className="highlight">{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="service-info-buttons">
              <a href="#" className="button">
                read more
              </a>
              <a href="#" className="button">
                add to cart
              </a>
            </div>
          </div>
          <div className="service-img">
            <img src={item.img} alt="chair massage" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Services;
