"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const FramerPlayGround = () => {
  const rotateControls = useAnimationControls();

  const ref = useRef(null);

  const isInView = useInView(ref, {});

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.75, 1],
    ["blue", "green", "pink", "red"]
  );

  const [isVisible, setIsVisible] = useState(true);

  // Transform values are applied in a specific order: translate, scale, rotate, skew. However, you can customize this default order using the transormTemplate prop
  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`;
  }

  const handleClickRotate = () => {
    console.log(rotateControls);
    rotateControls.start("rotateDiv");
  };

  return (
    // <div className="min-h-screen bg-red-200 flex justify-center items-center flex-col gap-8 py-8">
    <>
      {/* Basic of motion and AnimatePresence */}
      {/* <motion.button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Toggle Box
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            className="bg-blue-400 mx-auto w-80 aspect-square rounded-lg"
            initial={{ y: 0 }}
            animate={{ y: [0, 150, 200, 200, 10] }}
            exit={{ scale: 1.1 }}
            transition={{
              duration: 2,
              ease: "easeIn",
              times: [0, 0.25, 0.5, 1],
            }}
          />
        )}
      </AnimatePresence> */}
      {/* useAnimationControls */}
      {/* <motion.button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={handleClickRotate}
      >
        Rotate
      </motion.button>

      <motion.div
        className="bg-blue-400 mx-auto w-80 aspect-square rounded-lg"
        variants={{
          initial: {
            rotate: 0,
          },
          rotateDiv: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={rotateControls}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      /> */}
      {/* View based animations */}
      {/* <div className="min-h-[150vh] bg-red-400"></div>
      <motion.div
        className="min-h-screen bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        className={`min-h-screen ${
          isInView ? "bg-blue-600" : "bg-red-600"
        } transition-colors duration-100`}

      /> */}

      {/* Scroll Animation */}
      <div className="min-h-screen">
        <motion.div
          className="origin-left sticky top-0 w-full p-2"
          style={{ scaleX, background }}
        />
        <div className="m-auto p-8 flex flex-col text-lg justify-center items-center gap-8 text-justify">
          <p>
            Veniam laborum occaecat id sit anim anim. Ullamco et laboris aute do
            ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit. Veniam
            laborum occaecat id sit anim anim. Ullamco et laboris aute do ad
            magna laboris excepteur nostrud non proident mollit ipsum eiusmod.
            Id eiusmod incididunt irure consequat deserunt laboris dolore
            cupidatat non incididunt. Ad amet sit reprehenderit ullamco et velit
            et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu quis
            magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit. laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu qulaborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.is magna culpa officia eiusmod
            non eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit
            labore in cillum elit. laborum occaecat id sit anim anim. Ullamco et
            laboris aute do ad magna laboris excepteur nostrud non proident
            mollit ipsum eiusmod. Id eiusmod incididunt irure consequat deserunt
            laboris dolore cupidatat non incididunt. Ad amet sit reprehenderit
            ullamco et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa
            enim eu quis magna culpa officia eiusmod non eu. Duis velit nulla
            sunt reprehenderit veniam qui ipsum sit labore in cillum elit.
            laborum occaecat id sit anim anim. Ullamco et laboris aute do ad
            magna laboris excepteur nostrud non proident mollit ipsum eiusmod.
            Id eiusmod incididunt irure consequat deserunt laboris dolore
            cupidatat non incididunt. Ad amet sit reprehenderit ullamco et velit
            et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu quis
            magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit. laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit. laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit. laborum occaecat id sit anim anim. Ullamco et
            laboris aute do ad magna laboris excepteur nostrud non proident
            mollit ipsum eiusmod. Id eiusmod incididunt irure consequat deserunt
            laboris dolore cupidatat non incididunt. Ad amet sit reprehenderit
            ullamco et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa
            enim eu quis magna culpa officia eiusmod non eu. Duis velit nulla
            sunt reprehenderit veniam qui ipsum sit labore in cillum elit.
          </p>

          <p>
            Veniam laborum occaecat id sit anim anim. Ullamco et laboris aute do
            ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit. Veniam
            laborum occaecat id sit anim anim. Ullamco et laboris aute do ad
            magna laboris excepteur nostrud non proident mollit ipsum eiusmod.
            Id eiusmod incididunt irure consequat deserunt laboris dolore
            cupidatat non incididunt. Ad amet sit reprehenderit ullamco et velit
            et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu quis
            magna culpa officia eiusmod non eu. Duis velit nulla suntlaborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit. laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit. reprehenderit veniam qui ipsum
            sit labore in cillum elit. laborum occaecat id sit anim anim.
            Ullamco et laboris aute do ad magna laboris excepteur nostrud non
            proident mollit ipsum eiusmod. Id eiusmod incididunt irure consequat
            deserunt laboris dolore cupidatat non incididunt. Ad amet sit
            reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.
          </p>

          <p>
            Veniam laborum occaecat id sit anim anim. Ullamco et laboris aute do
            ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit. laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.Veniam
            laborum occaecat id sit anim anim. Ullamco et laboris aute do ad
            magna laboris excepteur nostrud non proident mollit ipsum eiusmod.
            Id eiusmod incididunt irure consequat deserunt laboris dolore
            cupidatat non incididunt. Ad amet sit reprehenderit ullamco et velit
            et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu quis
            magna culpa officia eiusmod non eu. Duis velit nulla suntlaborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit. reprehenderit veniam qui ipsum
            sit labore in cillum elit.
          </p>

          <p>
            Veniam laborum occaecat id sit anim anim. Ullamco et laboris aute do
            ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit. Veniam
            laborum occaecat id sit anim anim. Ullamco et laboris aute do ad
            magna laboris excepteur nostrud non proident mollit ipsum eiusmod.
            Id eiusmod incididunt irure consequat deserunt laboris dolore
            cupidatat non incididunt. Ad amet sit reprehenderit ullamco et
            vellaborum occaecat id sit anim anim. Ullamco et laboris aute do ad
            magna laboris excepteur nostrud non proident mollit ipsum eiusmod.
            Id eiusmod incididunt irure consequat deserunt laboris dolore
            cupidatat non incididunt. Ad amet sit reprehenderit ullamco et velit
            et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu quis
            magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.laborum
            occaecat id sit anim anim. Ullamco et laboris aute do ad magna
            laboris excepteur nostrud non proident mollit ipsum eiusmod. Id
            eiusmod incididunt irure consequat deserunt laboris dolore cupidatat
            non incididunt. Ad amet sit reprehenderit ullamco et velit et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.laborum occaecat id sit anim
            anim. Ullamco et laboris aute do ad magna laboris excepteur nostrud
            non proident mollit ipsum eiusmod. Id eiusmod incididunt irure
            consequat deserunt laboris dolore cupidatat non incididunt. Ad amet
            sit reprehenderit ullamco et velit et Lorem nisi. Eu irure veniam
            laborum dolor. Culpa enim eu quis magna culpa officia eiusmod non
            eu. Duis velit nulla sunt reprehenderit veniam qui ipsum sit labore
            in cillum elit.laborum occaecat id sit anim anim. Ullamco et laboris
            aute do ad magna laboris excepteur nostrud non proident mollit ipsum
            eiusmod. Id eiusmod incididunt irure consequat deserunt laboris
            dolore cupidatat non incididunt. Ad amet sit reprehenderit ullamco
            et velit et Lorem nisi. Eu irure veniam laborum dolor. Culpa enim eu
            quis magna culpa officia eiusmod non eu. Duis velit nulla sunt
            reprehenderit veniam qui ipsum sit labore in cillum elit.it et Lorem
            nisi. Eu irure veniam laborum dolor. Culpa enim eu quis magna culpa
            officia eiusmod non eu. Duis velit nulla sunt reprehenderit veniam
            qui ipsum sit labore in cillum elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default FramerPlayGround;
