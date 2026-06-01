import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


export default function SherifPortfolio() {

  
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

 emailjs.sendForm(
  "service_4ekr2ns",
  "template_9xf6fcg",
  form.current,
  "hvnNYR7UCDmizdzeN"
)
  .then(() => {
    alert("Message sent successfully 🚀");
    form.current.reset();
  })
  .catch((err) => {
    console.log(err);
    alert("Failed to send message ❌");
  });
};


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const skills = [
  "Flutter",
   "Firebase",
   "Hive",
   "Firestore",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C++",
  "Figma",
  "Bootstrap",
  "FlutterFlow",
  "Docker",
  "Linux",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Git",
  "GitHub",
];

const projects = [
  
  {
    title: "Smart Real-Time Attendance System",
    description:
      "Developed a responsive frontend and collaborated on integrating YOLOv11 and FaceNet for real-time facial recognition. Selected among the Best Graduation Projects (2025).",
    tech: [
      "Flutter",
      "YOLOv11",
      "FaceNet",
      "AI",
      "Computer Vision",
    ],

    video: "/projects/attendance.mp4",

    videoSettings: {
      playbackRate: 2,
    },
  },
{
  title: "Medicall – Medical Consultation App",
  description:
    "Developed a medical consultation app using Flutter & Dart with responsive UI, REST API integration, and Firebase authentication & database management.",
  tech: ["Flutter", "Dart", "Firebase", "REST API", "UI/UX"],
  image: "/medicall.jpg",
}

,
  {
    title: "To-Do App",
    description:
      "Built a task management application using Flutter with task tracking, add/edit/delete functionality, and clean responsive UI.",
    tech: [
      "Flutter",
      "Dart",
      "State Management",
      "Responsive UI",
    ],
    image: "/Screenshot 2026-05-22 050255.png",
  },

  {
    title: "BMI Calculator App",
    description:
      "Developed a responsive BMI Calculator application using Flutter with health calculation logic and clean user interface design.",
    tech: [
      "Flutter",
      "Dart",
      "Responsive Design",
      "UI Development",
    ],
    image: "/Screenshot 2026-05-22 045654.png",
  },
];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-black/40 backdrop-blur-xl border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       <a href="#">
  <h1 className="text-2xl font-bold cursor-pointer">
    Sherif<span className="text-cyan-400">.</span>
  </h1>
</a>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-28 relative">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full"></div>

            <img
              src="/profile-pic (18).png"
              alt="Sherif"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl hover:scale-105 transition"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <p className="text-cyan-400 mb-3 tracking-[0.3em] uppercase text-sm">
             Software Devolper
            </p>

            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Sherif Amr Mahmoud Amer
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Junior Flutter & Frontend Developer
            </h2>

            <p className="text-gray-400 max-w-2xl mb-8 leading-relaxed">
             Building scalable, high-performance mobile and web applications with a strong focus on Flutter, Dart, REST APIs, Firebase, and responsive UI/UX design, while continuously expanding expertise in DevOps, Cloud technologies, and modern software engineering practices.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">

              <a
                href="#projects"
                className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-2xl hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/Sherif Amr_CV.pdf"
                className="px-8 py-4 border border-white/20 rounded-2xl hover:border-cyan-400 transition"
              >
                Download CV
              </a>

         <a
  href="#contact"
  className="px-8 py-4 bg-white/5 rounded-2xl hover:bg-white/10"
>
  Contact
</a>

            </div>
          </motion.div>

        </div>
      </section>

      {/* SUMMARY */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
           Summary
        </h2>

        <p className="text-gray-400 max-w-4xl mx-auto leading-8">
          Computer Engineering graduate and Software Developer with strong focus on mobile development (Flutter),
          DevOps engineering, cloud technologies, and scalable systems. Passionate about building real-world production-ready applications.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-28 px-6 bg-white/[0.02]"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
Some of My Skills</h2>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((s, i) => (
            <div
              key={i}
              className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-cyan-400 hover:text-black transition"
            >
              {s}
            </div>
          ))}
        </div>
      </motion.section>
      {/* PROJECTS */}
<motion.section
  id="projects"
  className="py-32 px-6 relative"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px]" />
  </div>

  {/* TITLE */}
  <div className="text-center mb-20 relative z-10">
    <h2 className="text-5xl md:text-6xl font-black leading-tight">
      Explore My <span className="text-cyan-400">Experience</span>
    </h2>

    <p className="text-gray-400 mt-5 text-lg">
      A journey through projects I've built and contributed to
    </p>
  </div>

  {/* TIMELINE */}
  <div className="relative max-w-6xl mx-auto">

    {/* CENTER LINE */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

    <div className="space-y-20">

      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`relative flex items-center ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >

          {/* GLOW DOT */}
          <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_30px_#22d3ee]" />

          {/* CARD */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
              w-[48%]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              shadow-2xl
              hover:border-cyan-400
              hover:shadow-[0_0_70px_rgba(34,211,238,0.22)]
              transition-all
              duration-500
            "
          >

   {/* MEDIA */}
<div className="h-72 w-full overflow-hidden relative flex items-center justify-center bg-black">

  {p.video ? (
    <video
      src={p.video}
      autoPlay
      muted
      loop
      playsInline
      onLoadedMetadata={(e) => {
        e.currentTarget.playbackRate =
          p.videoSettings?.playbackRate || 1;
      }}
      className="w-full h-full object-cover"
    />
  ) : (
    <img
      src={p.image}
      alt={p.title}
      className="
        w-full
        h-full
        object-contain
        p-4
        hover:scale-105
        transition duration-700
      "
    />
  )}

  {/* OVERLAY (video only look nicer) */}
  {p.video && (
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
  )}

</div>

            {/* CONTENT */}
            <div className="p-8">

              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {p.title}
              </h3>

              <p className="text-gray-300 leading-8 mb-6">
                {p.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      px-4 py-2
                      text-sm
                      rounded-full
                      bg-black/40
                      border
                      border-white/10
                      hover:border-cyan-400
                      hover:bg-cyan-400/10
                      transition
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>

          </motion.div>

        </motion.div>
      ))}

    </div>
  </div>
</motion.section>


{/* USER OPINIONS */}
<motion.section
  id="testimonials"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative py-28 px-6"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px]" />
  </div>

  <div className="relative max-w-6xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black">
        User <span className="text-cyan-400">Opinions</span>
      </h2>
      <p className="text-gray-400 mt-4">
        What people say about my work and collaboration
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          name: "Ahmed Mohamed",
          role: "Frontend Developer",
          text:
            "Working with Sherif was amazing. The UI quality and attention to detail are next level.",
        },
        {
          name: "Sara Ali",
          role: "UI/UX Designer",
          text:
            "Clean code, great communication, and very fast delivery. Highly recommended.",
        },
        {
          name: "Omar Khaled",
          role: "Team Lead",
          text:
            "He delivered a production-ready feature with perfect performance and structure.",
        },
      ].map((t, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="
            relative p-6 rounded-3xl
            border border-white/10
            bg-white/5 backdrop-blur-xl
            shadow-2xl
            hover:border-cyan-400
            hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]
          "
        >

          {/* QUOTE */}
          <div className="text-cyan-400 text-5xl mb-4">“</div>

          <p className="text-gray-300 leading-7 mb-6">
            {t.text}
          </p>

          <div>
            <h4 className="font-bold text-white">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.role}</p>
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</motion.section>


<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="py-28 px-6 relative"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px]" />
  </div>

  <div className="relative max-w-4xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-black leading-tight">
      Ready to collaborate on{" "}
      <span className="text-cyan-400">Next Project?</span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-400 mt-6 text-lg leading-8">
   Whether you need a modern mobile application, a cross-platform Flutter app, or a complete product from concept to deployment, I can help you build, optimize, and launch it with performance, scalability, and user experience in mind.
    </p>

    {/* BUTTON */}
   {/* <div className="mt-10 flex justify-center">
     <a
  href="https://wa.me/201023225772"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-10 py-4
    rounded-2xl
    bg-green-500
    text-white
    font-semibold
    hover:scale-105
    hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]
    transition
    duration-300
  "
>
  Get in Touch
</a>
    </div> */}

  </div>
</motion.section>





{/* CONTACT - DRIBBBLE LEVEL */}
<motion.section
  id="contact"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative py-24 px-6 border-t border-white/10 bg-black overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />
    <div className="absolute bottom-[-120px] right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-20 text-center">
      <h2 className="text-5xl font-bold tracking-tight">
        Let’s <span className="text-cyan-400">Connect</span>
      </h2>
      <p className="text-gray-400 mt-4">
        Have an idea? Let’s turn it into reality 🚀
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-14">
<form
  ref={form}
  onSubmit={sendEmail}
  className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
>

  <input
    name="from_name"
    type="text"
    placeholder="Your Name"
    className="w-full mb-4 px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none transition"
  />

  <input
    name="from_email"
    type="email"
    placeholder="Your Email"
    className="w-full mb-4 px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none transition"
  />

  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    className="w-full mb-6 px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none transition"
  />

  <motion.button
    type="submit"

    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="w-full py-4 rounded-xl bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/20"
  >
    Send Message ✨
  </motion.button>

</form>
   
   {/* RIGHT - CONTACT LINKS */}
<div className="flex flex-col justify-center gap-4">

  {[
  {
    label: "Email",
    value: "sherifamer072@gmail.com",
    icon: "📧",
    link: "mailto:sherifamer072@gmail.com",
    color: "#fffc3b", // strong red
  },
  {
    label: "GitHub",
    value: "github.com/sherifamer",
    icon: "🐙",
    link: "https://github.com/sherifamer",
    color: "#e5e7eb50", // bright white
  },
  {
    label: "LinkedIn",
    value: "Profile",
    icon: "💼",
    link: "https://www.linkedin.com/in/your-profile",
    color: "#0a64ff", // stronger blue
  },
  {
    label: "WhatsApp",
    value: "+20 10 23225772",
    icon: "📱",
    link: "https://wa.me/201023225772",
    color: "#00ff1e", // neon green (stronger than default)
  },
].map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
     className="
  relative
  overflow-hidden
  group
  flex
  items-center
  justify-between
  p-5
  rounded-2xl
  border border-white/10
  bg-white/5
  transition-all duration-300
"
      style={{
        "--hover-color": item.color,
      }}
    >

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <span
          className="text-xl transition-transform group-hover:scale-125"
          style={{ color: item.color }}
        >
          {item.icon}
        </span>

        <span className="text-white font-medium">
          {item.label}
        </span>
      </div>

      {/* RIGHT */}
      <span className="text-gray-400 text-sm">
        {item.value}
      </span>

      {/* HOVER BACKGROUND EFFECT */}
      <div
        className="
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition
        "
        style={{ backgroundColor: item.color }}
      />

    </motion.a>
  ))}

</div>

    </div>

    {/* FOOTER */}
    <div className="mt-20 text-center text-gray-500 text-sm">
      © 2026 Sherif Amer
    </div>

  </div>
</motion.section>
    </div>
  );
}