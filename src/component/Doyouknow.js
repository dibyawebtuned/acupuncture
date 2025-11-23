"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

const WEBFLOW_JS =
    "https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/js/webflow.da86215c7.js";

export default function DoYouKnowSection() {
    useEffect(() => {
        const elements = document.querySelectorAll(".header80_image-wrapper");

        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    elements.forEach((el, index) => {
                        const speed = 0.05 + index * 0.02;
                        el.style.transform = `translateY(${-scrollY * speed}px)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="section_header80 background-color-whitesmoke"
            style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <Script src={WEBFLOW_JS} strategy="afterInteractive" />

            <div className="header80_component" style={{ height: "100%", position: "relative" }}>
                <div className="header80_content-wrapper" style={{ height: "100%" }}>

                    <div className="header80_images-wrapper" style={{ position: "absolute", left: 0, top: 0, height: "100%" }}>
                        <div className="header80_image-list">
                            <div className="header80_image-wrapper is-image-1">
                                <img src="/assets/img/469209709_17879239428197064_3445656581431711502_n.jpg" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-2">
                                <img src="/assets/img/469245827_17879239419197064_4235272167280555836_n.jpg" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-3">
                                <img src="/assets/img/7515-1-Tuning-Forks.jpg" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-4">
                                <img src="/assets/img/clarity.jpg" className="header80_image" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="header80_images-wrapper images-wrapper-right" style={{ position: "absolute", right: 0, top: 0, height: "100%" }}>
                        <div className="header80_image-list image-list-right">
                            <div className="header80_image-wrapper is-image-5">
                                <img src="/assets/img/facial+acu+copy+3.webp" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-6">
                                <img src="/assets/img/GettyImages-146788068 (1).jpg" className="header80_image" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="header80_images-wrapper images-wrapper-right" style={{ position: "absolute", right: "10%", top: 0, height: "100%" }}>
                        <div className="header80_image-list image-list-left">
                            <div className="header80_image-wrapper is-image-7">
                                <img src="/assets/img/trauma-informed-therapist,-somatic-trauma-coaching-and-speaker-abi-blake-9.webp" className="header80_image" alt="" />
                            </div>
                            <div className="header80_image-wrapper is-image-8">
                                <img src="/assets/img/Traditional-Chinese-Medicine-is-diagnosing-women's-pulse-.webp" className="header80_image" alt="" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="header80_content"
                        style={{
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <div className="text-align-center max-width-small align-center">
                            <div className="section_gallery6-content">
                                <p className="heading-style-h3">Did You Know?</p>
                                <h2 className="heading-style-h5">
                                    Cupping marks are temporary and usually fade over several days.
                                </h2>
                                <Link
                                    href="/book"
                                    className="button is-tertiary is-icon w-inline-block make-an-appointment"
                                >
                                    <div>Make an Appointment</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        data-w-id="c1e95d59-826e-5b17-4b4a-0e5bccac428f"
                        className="header80_ix-trigger"
                    ></div>
                </div>
            </div>
        </header>
    );
}

// "use client";

// export default function DoYouKnowSection() {
//     return (
//         <div
//             dangerouslySetInnerHTML={{
//                 __html: `

// <div class="page-wrapper">
//       <!--  -->
//       <main class="main-wrapper">
//         <div class="animation-wrapper-top">
//           <!-- Do You Know Section -->
//           <header class="section_header80 background-color-whitesmoke">
//             <div>
//               <div class="header80_component">
//                 <div class="header80_content-wrapper">
//                   <div class="header80_images-wrapper">
//                     <div class="header80_image-list">
//                       <div class="header80_image-wrapper is-image-1">
//                         <img
//                           src="assets/img/Did you know/445924522_1622363088324010_4634835349362051632_n.jpeg"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac426f-58294b32"
//                           sizes="(max-width: 767px) 30vw, (max-width: 991px) 28vw, 22vw"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                       <div class="header80_image-wrapper is-image-2">
//                         <img
//                           src="assets/img/Did you know/446102539_849171883697846_635424378600788041_n.jpeg"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4271-58294b32"
//                           sizes="(max-width: 767px) 30vw, (max-width: 991px) 28vw, 22vw"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                       <div class="header80_image-wrapper is-image-3">
//                         <img
//                           src="assets/img/Did you know/458718998_17866329201197064_5882197061821357098_n.jpeg"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4273-58294b32"
//                           sizes="(max-width: 767px) 28vw, (max-width: 991px) 26vw, 20vw"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                       <div class="header80_image-wrapper is-image-4">
//                         <img
//                           src="assets/img/Did you know/601af11b01504a00197fb72d-1024x768.webp"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4275-58294b32"
//                           sizes="(max-width: 767px) 26vw, (max-width: 991px) 24vw, 18vw"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div class="header80_images-wrapper images-wrapper-right">
//                     <div class="header80_image-list image-list-right">
//                       <div class="header80_image-wrapper is-image-5">
//                         <img
//                           src="assets/img/Did you know/94b91f7b-3522-4c12-86c4-1762f321d087.jpg"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4279-58294b32"
//                           sizes="(max-width: 767px) 28vw, (max-width: 991px) 26vw, 20vw"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                       <div class="header80_image-wrapper is-image-6">
//                         <img
//                           src="assets/img/Did you know/acupuncture-needle-depth.webp"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac427b-58294b32"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div class="header80_images-wrapper images-wrapper-right">
//                     <div class="header80_image-list image-list-left">
//                       <div class="header80_image-wrapper is-image-7">
//                         <img
//                           src="assets/img/Did you know/ACUPUNCTURE-optimized.jpg"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac427f-58294b32"
//                           sizes="(max-width: 767px) 28vw, (max-width: 991px) 26vw, 20vw"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                       <div class="header80_image-wrapper is-image-8">
//                         <img
//                           src="assets/img/Did you know/ttf-128-l-meinl-sonic-energy-sound-therapy-tuning-forks-973356_1067x1600.webp"
//                           loading="lazy"
//                           id="w-node-c1e95d59-826e-5b17-4b4a-0e5bccac4281-58294b32"
//                           alt=""
//                           class="header80_image"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div class="header80_content">
//                     <div class="text-align-center max-width-small align-center">
//                       <div class="section_gallery6-content">
//                         <p class="heading-style-h3">Did You Know?</p>
//                         <h2 class="heading-style-h5">
//                           Cupping marks are temporary and usually fade over
//                           several days.
//                         </h2>
//                         <a
//                           href="/courses"
//                           class="button is-tertiary is-icon w-inline-block make-an-appointment"
//                         >
//                           <div>Make an Appointment</div>
//                           <div class="icon-embed-xsmall w-embed">
//                             <svg
//                               width="14"
//                               height="5"
//                               viewBox="0 0 14 5"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M10.192 4.49004C10.372 4.10604 10.546 3.77004 10.714 3.48204C10.894 3.19404 11.068 2.95404 11.236 2.76204H0.742001V2.00604H11.236C11.068 1.80204 10.894 1.55604 10.714 1.26804C10.546 0.980039 10.372 0.650039 10.192 0.278039H10.822C11.578 1.15404 12.37 1.80204 13.198 2.22204V2.54604C12.37 2.95404 11.578 3.60204 10.822 4.49004H10.192Z"
//                                 fill="currentColor"
//                               />
//                             </svg>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   data-w-id="c1e95d59-826e-5b17-4b4a-0e5bccac428f"
//                   class="header80_ix-trigger"
//                 ></div>
//               </div>
//             </div>
//           </header>
//           <!-- Do You Know Section Ends -->
//         </div>
//       </main>
//     </div>


//           <script
//       src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6508af1b0b60370d434c9417"
//       type="text/javascript"
//       integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdn.prod.website-files.com/6508af1b0b60370d434c9417/js/webflow.da86215c7.js"
//       type="text/javascript"
//     ></script>

//                 `,
//             }}
//         />
//     );
// }