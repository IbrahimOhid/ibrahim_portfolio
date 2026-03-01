import { motion } from "framer-motion";
import AboutImage from "/image/about_image.jpg";
import { socialIcons } from "../../data/AboutMeData";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutMe = () => {
  return (
    <section className="relative  py-5">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* IMAGE */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <img
              src={AboutImage}
              alt="Mohammad Ibrahim"
              className="w-full  rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold text-teal-400 mb-6">
              About Me
            </h3>

            <p className="text-gray-200 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              I build performant web applications using React.js and modern
              technologies. Focused on clean UI, scalability, and smooth UX.
            </p>

            {/* Glass Morphism Social Buttons */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              {socialIcons.map(({ id, icon: Icon, link }) => (
                <motion.a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    relative
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    backdrop-blur-lg
                    bg-white/10
                    border border-white/20
                    shadow-lg
                    overflow-hidden
                    group
                  "
                >
                  {/* Animated Gradient Hover */}
                  <span className="absolute inset-0 bg-teal-400  opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <Icon className="relative w-6 h-6 text-white z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;