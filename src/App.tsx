import { 
  Envelope, 
  Phone, 
  MapPin, 
  LinkedinLogo, 
  GithubLogo,
  Briefcase,
  GraduationCap,
  Certificate,
  Code,
  Database,
  Cloud,
  Brain,
  Terminal,
  Wrench
} from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">
          {level >= 80 ? "Avanzado" : level >= 50 ? "Intermedio Alto" : "Intermedio"}
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ 
  title, 
  icon: Icon, 
  skills 
}: { 
  title: string; 
  icon: React.ElementType; 
  skills: string[] 
}) {
  return (
    <motion.div variants={fadeInUp} className="space-y-3">
      <div className="flex items-center gap-2 text-accent">
        <Icon size={20} weight="duotone" />
        <h4 className="font-semibold text-sm uppercase tracking-wider">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className="font-mono text-xs bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}

function TimelineItem({ 
  date, 
  title, 
  company, 
  location,
  description 
}: { 
  date: string; 
  title: string; 
  company: string; 
  location: string;
  description: string[];
}) {
  return (
    <motion.div variants={fadeInUp} className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
      <div className="absolute left-[5px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent last:hidden" />
      
      <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
        <CardContent className="p-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h4 className="font-semibold text-lg text-foreground">{title}</h4>
              <p className="text-accent font-medium">{company}</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            <Badge variant="outline" className="font-mono text-xs w-fit shrink-0 border-primary/30 text-primary">
              {date}
            </Badge>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {description.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-primary shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function App() {
  const technicalSkills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "CoffeeScript", "PHP", "HTML"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    frameworks: ["Angular", "React", "Node.js", "Django", "TensorFlow", "scikit-learn", "Pandas"],
    cloud: ["Google Cloud Platform", "AWS", "Oracle Cloud"],
    tools: ["Git", "GitHub", "JIRA", "VS Code", "Jupyter Notebook", "Linux"],
    ai: ["Deep Learning", "Machine Learning", "Data Mining", "NLP", "Redes Neuronales", "Prompt Engineering"],
    scripting: ["Batch Script (.bat)", "Shell Script (.sh)"]
  }

  const competencyLevels = [
    { name: "Data Analysis", level: 75 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Science", level: 75 },
    { name: "Desarrollo de Software", level: 85 },
    { name: "Cloud Computing", level: 45 },
    { name: "Ingeniería de Prompt", level: 80 },
    { name: "Trabajo en Equipo", level: 70 },
    { name: "Resolución de Problemas", level: 75 },
  ]

  const workHistory = [
    {
      date: "Oct 2023 - Ago 2024",
      title: "System Engineer Junior",
      company: "Indra Minsait",
      location: "Santiago, CEN",
      description: [
        "Mantenimiento y soporte técnico de aplicaciones: Operación Real, Medidas WEB, IFC 2/3, Infotécnica Web y Contable",
        "Gestión de tickets correctivos (nivel 2-4) y evolutivos, implementando mejoras continuas",
        "Migración de infraestructura on-premise de servidores Linux con documentación de manuales de entrega",
        "Desarrollo de scripts Python para soluciones paliativas y extracción de datos PostgreSQL",
        "Stack: JavaScript, Python, TypeScript, CoffeeScript, PHP, Angular, Node.js, Django, MongoDB, MySQL, PostgreSQL",
        "Participación en proyectos de inteligencia artificial para mejorar UX de aplicativos"
      ]
    },
    {
      date: "Abr 2023 - Jun 2023",
      title: "ATLAS Higgs Boson ML Challenge",
      company: "Coding Dojo",
      location: "Santiago",
      description: [
        "Proyecto final de curso intensivo de ciencia de datos",
        "Análisis del ATLAS Higgs Boson Dataset del CERN Open Data Portal",
        "Implementación de modelo de clasificación en Python para identificar eventos de descomposición del bosón de Higgs",
        "Manejo de desafíos de big data: variabilidad de escalas y desequilibrio de clases"
      ]
    },
    {
      date: "Ago 2022 - Sep 2023",
      title: "Data Engineer Internship",
      company: "CMPC",
      location: "Santiago",
      description: [
        "Gestión y optimización de bases de datos PostgreSQL",
        "Liderazgo de iniciativas para estructuración eficiente de datos",
        "Documentación técnica y planificación de nuevas prácticas de seguridad",
        "Automatización de gestión de contraseñas y replicación dinámica de entornos con Python"
      ]
    },
    {
      date: "Jul 2022 - Nov 2022",
      title: "Desktop Process S.A. - Proyecto de Titulación",
      company: "Duoc UC",
      location: "Santiago",
      description: [
        "Diseño y desarrollo de software de administración para holding empresarial",
        "Implementación de sistema CRUD para gestión de usuarios",
        "Herramienta de análisis y reporte de contrataciones de filiales",
        "Stack: Java con Maven para desarrollo robusto y escalable"
      ]
    }
  ]

  const certifications = [
    { year: "2025", name: "Oracle Cloud Infrastructure AI Foundations", issuer: "Oracle" },
    { year: "2025", name: "Deep Learning con Python y Keras - Redes Neuronales", issuer: "Udemy" },
    { year: "2025", name: "Máster en NLP con Python", issuer: "Udemy" },
    { year: "2023", name: "Certificado en Ciencia de Datos", issuer: "Coding Dojo" },
    { year: "2023", name: "Certificado de Inglés C1", issuer: "" },
    { year: "2022", name: "Google Cloud Professional Architect", issuer: "Udemy" },
    { year: "2022", name: "Certificado de Python", issuer: "Udemy" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/10 via-transparent to-transparent animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative">
        <header className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.div 
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-primary/20 text-primary border-primary/30 font-mono text-xs">
                    &lt;/&gt; Systems Engineer
                  </Badge>
                </motion.div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                    Álvaro Becker
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    Ruiz
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Ingeniero en Informática con experiencia en{" "}
                  <span className="text-accent">desarrollo backend</span>,{" "}
                  <span className="text-primary">procesamiento de datos</span> y{" "}
                  <span className="text-accent">automatización</span>. 
                  Apasionado por la inteligencia artificial y ciencia de datos.
                </p>
              </div>

              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="mailto:alvarobeckerruiz@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-sm group"
                >
                  <Envelope size={16} weight="duotone" className="text-primary" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">alvarobeckerruiz@gmail.com</span>
                </a>
                <a 
                  href="tel:+56963576927"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-sm group"
                >
                  <Phone size={16} weight="duotone" className="text-primary" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">+56 9 6357 6927</span>
                </a>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm">
                  <MapPin size={16} weight="duotone" className="text-accent" />
                  <span className="text-muted-foreground">Santiago, Chile</span>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a 
                  href="https://www.linkedin.com/in/alvaro-becker-1335391b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all"
                >
                  <LinkedinLogo size={24} weight="duotone" className="text-primary" />
                </a>
                <a 
                  href="https://github.com/AlvaroBecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all"
                >
                  <GithubLogo size={24} weight="duotone" className="text-accent" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </header>

        <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <Code size={28} weight="duotone" className="text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold">Perfil Técnico</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <SkillCategory title="Lenguajes" icon={Code} skills={technicalSkills.languages} />
                <SkillCategory title="Bases de Datos" icon={Database} skills={technicalSkills.databases} />
                <SkillCategory title="Frameworks & Librerías" icon={Wrench} skills={technicalSkills.frameworks} />
                <SkillCategory title="Cloud & DevOps" icon={Cloud} skills={technicalSkills.cloud} />
                <SkillCategory title="Herramientas" icon={Terminal} skills={technicalSkills.tools} />
                <SkillCategory title="IA & Machine Learning" icon={Brain} skills={technicalSkills.ai} />
              </div>

              <motion.div variants={fadeInUp}>
                <SkillCategory title="Scripting" icon={Terminal} skills={technicalSkills.scripting} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <Brain size={28} weight="duotone" className="text-accent" />
                <h2 className="text-2xl sm:text-3xl font-bold">Competencias</h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {competencyLevels.map((skill) => (
                  <motion.div key={skill.name} variants={fadeInUp}>
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <Briefcase size={28} weight="duotone" className="text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold">Experiencia Laboral</h2>
              </motion.div>

              <div>
                {workHistory.map((job, idx) => (
                  <TimelineItem key={idx} {...job} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <GraduationCap size={28} weight="duotone" className="text-accent" />
                <h2 className="text-2xl sm:text-3xl font-bold">Educación</h2>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">
                          Ingeniero en Informática
                        </h4>
                        <p className="text-accent font-medium">
                          Desarrollo y Gestión de Proyectos Informáticos
                        </p>
                        <p className="text-muted-foreground">
                          Instituto Profesional Duoc UC - Santiago, Chile
                        </p>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs w-fit shrink-0 border-accent/30 text-accent">
                        Mar 2019 - Nov 2022
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <Certificate size={28} weight="duotone" className="text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold">Certificaciones</h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div key={idx} variants={fadeInUp}>
                    <Card className="bg-card/30 border-border/50 hover:border-primary/30 transition-all group h-full">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-mono font-bold text-sm group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                          {cert.year}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-medium text-foreground leading-tight line-clamp-2">
                            {cert.name}
                          </h4>
                          {cert.issuer && (
                            <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-12 border-t border-border/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p className="font-mono">© 2025 Álvaro Becker Ruiz</p>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:alvarobeckerruiz@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Contacto
                </a>
                <a 
                  href="https://github.com/AlvaroBecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/alvaro-becker-1335391b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
