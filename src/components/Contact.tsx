import { Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-fade-in">
          <Mail className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-bold text-slate-100">Get In Touch</h2>
        </div>
        <div className="glassmorphism p-10 rounded-xl animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Email</p>
                  <a
                    href="mailto:cvickey484@gmail.com"
                    className="text-lg text-slate-100 hover:text-cyan-400 transition-colors"
                  >
                    cvickey484@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Phone</p>
                  <a
                    href="tel:+917845864838"
                    className="text-lg text-slate-100 hover:text-cyan-400 transition-colors"
                  >
                    +91 7845864838
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Location</p>
                  <p className="text-lg text-slate-100">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Connect With Me</h3>
              <a
                href="https://github.com/vigneshwaran484"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-purple-600/20 rounded-lg hover:bg-purple-600/40 transition-all hover:-translate-y-1 border border-purple-500/30 hover:border-cyan-400/50"
              >
                <Github className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-100 font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vigneshwaran-c-03b28239a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-purple-600/20 rounded-lg hover:bg-purple-600/40 transition-all hover:-translate-y-1 border border-purple-500/30 hover:border-cyan-400/50"
              >
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-100 font-medium">LinkedIn</span>
              </a>

              <a
                href="/vigneshwaran_resume.pdf"
                download
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:-translate-y-1 glow-effect"
              >
                <FileText className="w-6 h-6" />
                <span className="font-medium">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
