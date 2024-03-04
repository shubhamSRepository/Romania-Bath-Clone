import Styles from "../Styles/Content.module.css"


function Content() {
    return (

        <div className={Styles.contentContainer}>

            <div className={Styles.contentBox1}>

                <h1>Romania Bathtubs</h1>

                <p>
                    A plush and luxurious bathroom is an integral part of every dream home. Here at Romania Bathtubs, we understand your need for class and comfort. That’s why we provide luxury range of products for those with an eye for detail, all the while keeping your budget in mind.
                </p>

                <p>
                    With over 20 years of experience in manufacturing bathtubs, we are an established and respected name in the industry and amongst designers. Our amassed experience has given us an edge over others, when it comes to understanding the needs of the customers. We customize our bathtubs as per the requirement of the customer, which makes every product and the experience it carries, unique. Our bathtub designs stand out for their beautiful and innovative designs and are sold all over India.
                </p>

                <h3>“ROMANIA BATHTUBS – THE SYMBOL OF SUPERIORITY, TRUST & WELL BEING”</h3>

            </div>


            <div className={Styles.contentBox2}>

                <div className={Styles.contentBox2Heading}>
                    <h2>PRODUCT
                        CATEGORIES</h2>
                </div>
                <div className={Styles.contentBox2Tabs}>
                    <div>
                        <img src="https://www.romaniabathtubs.com/wp-content/uploads/2019/02/catimg11lg.jpg" />
                    </div>
                    <div>
                        <img src="https://www.romaniabathtubs.com/wp-content/uploads/2019/04/banner2-2.jpg" />
                    </div>
                    <div>
                        <img src="https://www.romaniabathtubs.com/wp-content/uploads/2019/04/banner3-2.jpg" />
                    </div>
                </div>

            </div>


            <div className={Styles.contentBox3}>

                <div className={Styles.contentBox3TranslucentBox}>

                    <div className={Styles.contentBox3Heading}>
                        <h3>CREATE YOUR OWN</h3>
                        <h2>CUSTOMISED BATHTUB</h2>
                        <p>
                            Get a Custom made Bathtub according to your requirements like shape & size, features, and
                            get it delivered at your doorstep
                        </p>
                    </div>

                    <div className={Styles.contentBox3CustomiseBtn}>
                        <button >
                            Customise Now
                        </button>
                    </div>

                </div>

            </div>


            <div className={Styles.contentBox4}>

                <div className={Styles.contentBox4Heading}>
                    <h2>Best Sellers</h2>
                </div>

                <div className={Styles.contentBox4Blocks}>

                    <div>

                        <div className={Styles.contentBox4ProductImage}>
                            <img src="https://www.romaniabathtubs.com/wp-content/uploads/2019/02/Santino3.png" />
                        </div>

                        <div className={Styles.contentBox4CustomiseBtn}>
                            <button >
                                Customise Now
                            </button>
                        </div>

                    </div>

                    <div>

                        <div className={Styles.contentBox4ProductImage}>
                            <img src="https://www.romaniabathtubs.com/wp-content/uploads/2019/02/Santino3.png" />
                        </div>

                        <div className={Styles.contentBox4CustomiseBtn}>
                            <button >
                                Customise Now
                            </button>
                        </div>

                    </div>

                    <div>

                        <div className={Styles.contentBox4ProductImage}>
                            <img src="https://www.romaniabathtubs.com/wp-content/uploads/2019/02/serena4.png" />
                        </div>

                        <div className={Styles.contentBox4CustomiseBtn}>
                            <button >
                                Customise Now
                            </button>
                        </div>

                    </div>

                    <div>

                        <div className={Styles.contentBox4ProductImage}>
                            <img src="https://www.romaniabathtubs.com/wp-content/uploads/2019/02/serena4.png" />
                        </div>

                        <div className={Styles.contentBox4CustomiseBtn}>
                            <button >
                                Customise Now
                            </button>
                        </div>

                    </div>


                </div>

            </div>


            <div className={Styles.contentBox5}>

                <div className={Styles.contentBox5Heading}>
                    <h3>HAPPY CLIENTS TESTIMONIALS</h3>
                </div>

                {/* <TestimonialHorizontalScroll /> */}

                <div className={Styles.contentBox5Testimonial}>

                    <div className={Styles.contentBox5TestimonialBlocks}>

                        <div className={Styles.testimonialText}>
                            <p>
                                Sometimes testimonials don't have to come from customers. In this example, a Los Angeles-based restaurant was given a wonderful review by a critic from the LA Times.
                                Sometimes testimonials don't have to come from customers. In this example, a Los Angeles-based restaurant was given a wonderful review by a critic from the LA Times.
                            </p>
                        </div>
                        <div className={Styles.testimonialText}>
                            <h3>
                                Jack William
                            </h3>
                        </div>

                    </div>

                    <div className={Styles.contentBox5TestimonialBlocks}>

                        <div className={Styles.testimonialText}>
                            <p>
                                Sometimes testimonials don't have to come from customers. In this example, a Los Angeles-based restaurant was given a wonderful review by a critic from the LA Times.
                                Sometimes testimonials don't have to come from customers. In this example, a Los Angeles-based restaurant was given a wonderful review by a critic from the LA Times.
                            </p>
                        </div>
                        <div className={Styles.testimonialText}>
                            <h3>
                                Jack William
                            </h3>
                        </div>

                    </div>

                    <div className={Styles.contentBox5TestimonialBlocks}>

                        <div className={Styles.testimonialText}>
                            <p>
                                Sometimes testimonials don't have to come from customers. In this example, a Los Angeles-based restaurant was given a wonderful review by a critic from the LA Times.
                                Sometimes testimonials don't have to come from customers. In this example, a Los Angeles-based restaurant was given a wonderful review by a critic from the LA Times.
                            </p>
                        </div>
                        <div className={Styles.testimonialText}>
                            <h3>
                                Jack William
                            </h3>
                        </div>

                    </div>

                    {/* <div className={Styles.contentBox5TestimonialBlocks}>

                        <div className={Styles.testimonialText}></div>
                        <div className={Styles.testimonialText}></div>

                    </div>

                    <div className={Styles.contentBox5TestimonialBlocks}>

                        <div className={Styles.testimonialText}></div>
                        <div className={Styles.testimonialText}></div>

                    </div> */}

                </div>

            </div>


        </div>
    )
}

export default Content;