import Image from 'next/image'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'

const About = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Header />
                </Container>
                <div className="bg-sky-50 pt-16 pb-16">
                    <Container>
                        <div className="grid grid-cols-3 gap-16">
                            <div>
                                <Image title={"Gregory Sanon"} src={"/assets/about/greg.png"} height={295} width={293} alt="Gregory Sanon" />
                            </div>
                            <div className="md:pr-8 col-span-2">
                                <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-12">
                                    About Gregory Sanon
                                </h1>
                                <p className="text-lg block text-slate-500 mb-4">
                                    I am a dedicated Product Manager with a proven track record of transforming user needs into actionable development plans that improve the products and services offered by technology-driven companies. My approach combines technical expertise, creative problem-solving, and strong leadership to deliver exceptional results.
                                </p>
                                <p className="text-lg block text-slate-500 mb-4">
                                    Throughout my career, I have focused on creating seamless user experiences and efficient backend operations through meticulous research, strategic planning, and cross-functional team collaboration. I pride myself on my ability to analyze market trends and integrate customer feedback into meaningful product enhancements.
                                </p>
                                <p className="text-lg block text-slate-500 mb-4">
                                    Outside of work, I engage in community-building activities within the tech industry, sharing knowledge and mentoring emerging talent. I believe in the power of technology to solve real-world problems and strive to ensure that the products I manage not only meet market demands but also exceed user expectations.
                                </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </Layout>
        </>
    );
}

export default About;

    );
}

export default About;
