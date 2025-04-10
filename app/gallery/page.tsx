'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Aurora from '../components/Aurora/Aurora';
import SplitText from '../components/SplitText/SplitText';
import GradientText from '../components/GradientText/GradientText';
import Masonry from '../components/Masonry/Masonry';
import InfiniteMenu from '../components/InfiniteMenu/InfiniteMenu';
import SplashCursor from '../components/SplashCursor/SplashCursor';
import Footer from '../components/Footer/Footer';
import ImageTrail from '../components/ImageTrail/ImageTrail';

const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
    { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
];

const items = [
    {
        image: 'https://picsum.photos/300/300?grayscale',
        link: 'https://google.com/',
        title: 'Item 1',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/400/400?grayscale',
        link: 'https://google.com/',
        title: 'Item 2',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/500/500?grayscale',
        link: 'https://google.com/',
        title: 'Item 3',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/600/600?grayscale',
        link: 'https://google.com/',
        title: 'Item 4',
        description: 'This is pretty cool, right?'
    }
];

export default function Gallery() {

    return (
        <body>
            <Navbar />
            <div className="min-h-screen overflow-x-hidden position-relative">
                <div className="absolute top-0 left-0 w-full h-full">
                    <SplashCursor />
                </div>

                <div className="absolute top-0 left-0 w-full h-full">
                    <Aurora
                        colorStops={['#00171f', '#003459', '#adebff']}
                        amplitude={1.7}
                        blend={0.5}
                        speed={0.9}
                    />
                </div>

                <div className="container mx-auto py-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-24 text-center h-full mt-24"
                    >
                        <SplitText
                            text="Gallery"
                            className="text-5xl font-bold text-[#adebff] section-title"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                        />
                        <GradientText
                            colors={["#40ffaa", "#4079ff"]}
                            animationSpeed={3}
                            className="text-xl mt-4"
                        >
                            A visual journey through my work
                        </GradientText>
                    </motion.div>
                    <Masonry data={data} />
                    <ImageTrail
                        items={[
                            '/image/gallery/gallery-1.jpg',
                            '/image/gallery/gallery-2.jpg',
                            '/image/gallery/gallery-3.jpg',
                            '/image/gallery/gallery-4.jpg',
                            '/image/gallery/gallery-5.jpg',
                            '/image/gallery/gallery-6.jpg',
                            '/image/gallery/gallery-7.jpg',
                            '/image/gallery/gallery-8.jpg',
                            '/image/gallery/gallery-9.jpg',
                            '/image/gallery/gallery-10.jpg',              // ...
                        ]}
                        variant={6}
                    />

                    <div style={{ height: '600px', position: 'relative' }} className='py-10 bg-transparent'>
                        <InfiniteMenu items={items} />
                    </div>
                </div>
                <Footer />
            </div>
        </body>
    );
}