"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Instagram, MessageCircle, Users, Music, Flame, Heart } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

// ============================================
// SITE CONFIGURATION - Modifica questi valori
// ============================================
const siteConfig = {
  // Informazioni gruppo
  groupName: "Grupo Geração Capoeira Lecco",
  shortName:  "Capoeira Geração",
  maestro: "Mestrando Penteado",
  
  // Sede
  address: "Via Ragazzi del '99, 1",
  city: "Cesana Brianza",
  province: "LC",
  postalCode: "23861",
  fullAddress: "Via Ragazzi del '99, 1, 23861 Cesana Brianza (LC)",
  
  // Orari
  schedule: {
    day: "Giovedì",
    startTime: "20:00",
    endTime: "21:30",
  },
  
  // Target
  target: "Adulti e Ragazzi",
  
  // Contatti (sostituisci con i tuoi link reali)
  whatsappNumber: "393464765651", // Numero WhatsApp senza + e senza spazi
  whatsappMessage: "Ciao! Vorrei informazioni sul corso di Capoeira a Lecco.",
  instagramHandle: "capoeira_geracao_lecco", // Solo l'handle senza @
  
  // Google Maps
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.8!2d9.3!3d45.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCesana%20Brianza!5e0!3m2!1sit!2sit!4v1234567890",
  mapsLink: "https://maps.google.com/?q=Via+Ragazzi+del+%2799,+1,+23861+Cesana+Brianza+LC",
}

// Genera il link WhatsApp
const getWhatsAppLink = () => {
  const message = encodeURIComponent(siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}

// Genera il link Instagram
const getInstagramLink = () => {
  return `https://instagram.com/${siteConfig.instagramHandle}`
}

export default function CapoeiraLandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
        {/* Brazilian Flag Inspired Abstract Background - Offset to Right */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base green layer - large organic shapes */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/6 rounded-full" />
          <div className="absolute -bottom-20 -right-60 w-[600px] h-[400px] bg-primary/10 rounded-full" />
          
          {/* Yellow diamond - offset to the right, partially cut by edge */}
          <div className="absolute top-1/2 right-[-15%] md:right-[-10%] -translate-y-1/2 w-[700px] h-[500px] md:w-[900px] md:h-[600px] bg-secondary/30 rotate-45 rounded-[3rem]" />
          <div className="absolute top-1/2 right-[-12%] md:right-[-8%] -translate-y-1/2 w-[500px] h-[350px] md:w-[650px] md:h-[420px] bg-secondary/20 rotate-45 rounded-[2rem]" />
          <div className="absolute top-1/2 right-[-8%] md:right-[-5%] -translate-y-1/2 w-[300px] h-[200px] md:w-[400px] md:h-[260px] bg-secondary/10 rotate-45 rounded-[1.5rem]" />
          
          {/* Blue circle - offset with diamond */}
          <div className="absolute top-[45%] right-[8%] md:right-[12%] w-[160px] h-[160px] md:w-[220px] md:h-[220px] bg-[oklch(0.55_0.15_250)]/12 rounded-full" />
          <div className="absolute top-[45%] right-[10%] md:right-[14%] w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-[oklch(0.55_0.15_250)]/8 rounded-full" />
          
          {/* Floating circles - scattered, more on the right side */}
          <div className="absolute top-[20%] right-[5%] w-10 h-10 bg-secondary/45 rounded-full" />
          <div className="absolute top-[35%] right-[25%] w-7 h-7 bg-secondary/35 rounded-full" />
          <div className="absolute bottom-[25%] right-[15%] w-8 h-8 bg-secondary/40 rounded-full" />
          <div className="absolute bottom-[40%] right-[30%] w-5 h-5 bg-secondary/30 rounded-full" />
          <div className="absolute top-[60%] right-[5%] w-6 h-6 bg-secondary/50 rounded-full" />
          
          {/* Left side - subtle green accents */}
          <div className="absolute top-[25%] left-[5%] w-6 h-6 bg-primary/15 rounded-full" />
          <div className="absolute top-[50%] left-[3%] w-4 h-4 bg-primary/20 rounded-full" />
          <div className="absolute bottom-[30%] left-[8%] w-5 h-5 bg-primary/12 rounded-full" />
          
          {/* Accent circles */}
          <div className="absolute top-16 right-1/4 w-3 h-3 bg-accent/45 rounded-full" />
          <div className="absolute top-40 right-[40%] w-4 h-4 bg-accent/35 rounded-full" />
          <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-accent/40 rounded-full" />
          
          {/* Decorative rings - offset */}
          <div className="absolute top-[45%] right-[5%] md:right-[10%] w-[280px] h-[280px] md:w-[380px] md:h-[380px] border-2 border-secondary/15 rounded-full" />
          <div className="absolute top-[45%] right-[2%] md:right-[7%] w-[350px] h-[350px] md:w-[480px] md:h-[480px] border border-primary/10 rounded-full" />
          
          {/* Small diamonds on the right */}
          <div className="absolute top-[30%] right-[20%] w-8 h-8 bg-secondary/25 rotate-45 rounded-sm" />
          <div className="absolute bottom-[35%] right-[25%] w-6 h-6 bg-secondary/20 rotate-45 rounded-sm" />
        </div>
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Capoeira Geração<br />
            <span className="text-primary">provincia di Lecco</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Scopri l&apos;arte marziale brasiliana che unisce lotta, danza, musica e cultura.
            <span className="block mt-2 font-semibold text-foreground">Prima lezione di prova gratuita!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-amber-400 hover:bg-amber-400/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Prenota la Tua Prova Gratuita
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#cosè-la-capoeira">
                Scopri di più
              </a>
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>{siteConfig.schedule.day} {siteConfig.schedule.startTime}-{siteConfig.schedule.endTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{siteConfig.city} ({siteConfig.province})</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>{siteConfig.target}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cos'è la Capoeira Section */}
      <section id="cosè-la-capoeira" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Scopri</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance">
              Cos&apos;è la Capoeira?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 text-center text-pretty">
              La Capoeira è un&apos;arte marziale afro-brasiliana che nasce come forma di resistenza e libertà. 
              Unisce in modo unico <strong className="text-foreground">lotta</strong>, <strong className="text-foreground">danza</strong>, 
              <strong className="text-foreground">acrobazie</strong> e <strong className="text-foreground">musica</strong>, 
              creando un&apos;esperienza coinvolgente e completa per corpo e mente.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Flame className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Lotta</h3>
                  <p className="text-muted-foreground text-sm">
                    Tecniche di attacco e difesa in un gioco strategico tra due capoeiristi.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-7 w-7 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Danza</h3>
                  <p className="text-muted-foreground text-sm">
                    Movimenti fluidi e aggraziati che esprimono creatività e libertà.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Music className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Musica</h3>
                  <p className="text-muted-foreground text-sm">
                    Strumenti tradizionali come il berimbau guidano il ritmo della roda.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Cultura</h3>
                  <p className="text-muted-foreground text-sm">
                    Storia, tradizioni e valori della cultura afro-brasiliana.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Orari e Luogo Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Dove trovarci</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Orari e Luogo
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Info Card */}
            <Card className="bg-card border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    {siteConfig.groupName}
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Orario Lezioni</h4>
                      <p className="text-2xl font-bold text-primary">
                        {siteConfig.schedule.day}
                      </p>
                      <p className="text-lg text-muted-foreground">
                        {siteConfig.schedule.startTime} - {siteConfig.schedule.endTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/50 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Indirizzo</h4>
                      <p className="text-muted-foreground">
                        {siteConfig.address}
                      </p>
                      <p className="text-muted-foreground">
                        {siteConfig.postalCode} {siteConfig.city} ({siteConfig.province})
                      </p>
                      <a
                        href={siteConfig.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline mt-2 font-medium"
                      >
                        Apri in Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">A chi è rivolto</h4>
                      <p className="text-muted-foreground">
                        Corso aperto ad <strong className="text-foreground">{siteConfig.target.toLowerCase()}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Nessuna esperienza richiesta
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map */}
            <div className="bg-muted rounded-2xl overflow-hidden shadow-xl min-h-[400px]">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa sede Grupo Geração Capoeira Lecco"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Istruttori Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Il nostro team</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Il Maestro
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Maestro Photo */}
                  <div className="md:col-span-2 relative min-h-[400px] md:min-h-[500px]">
                    <img 
                      src="/foto/maestro.jpg"
                      alt="Mestrando Penteado con il berimbau"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <div className="inline-block mb-4">
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                        Istruttore
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                      {siteConfig.maestro}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      {siteConfig.shortName}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Il Mestrando Penteado guida il gruppo {siteConfig.shortName} con passione e dedizione, 
                      trasmettendo non solo le tecniche della Capoeira ma anche i suoi valori più profondi: 
                      rispetto, disciplina, comunità e libertà di espressione.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Il gruppo fa parte della tradizione Geração Capoeira, una delle scuole più rispettate 
                      nel mondo della Capoeira, portando in provincia di Lecco l&apos;autentica esperienza 
                      di questa arte marziale brasiliana.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">La nostra comunità</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Il Gruppo
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Allenamenti, roda, musica e tanto divertimento. Unisciti anche tu!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Main large image - Formal group photo */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/foto/gruppo-completo.jpg"
                alt="Il gruppo Geração Capoeira a Lecco"
                className="w-full h-full object-cover min-h-[300px] md:min-h-[500px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Il nostro gruppo</p>
              </div>
            </div>
            
            {/* Training photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/foto/allenamento.jpg"
                alt="Allenamento di Capoeira"
                className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">Allenamento</p>
              </div>
            </div>
            
            {/* Roda photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/foto/roda.jpg"
                alt="Roda di Capoeira"
                className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">La Roda</p>
              </div>
            </div>
            
            {/* Large bateria with window light */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/foto/musica.jpg"
                alt="Bateria con strumenti tradizionali"
                className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">Musica</p>
              </div>
            </div>
            
            {/* Stretching photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/foto/flessibilita.jpg"
                alt="Stretching e flessibilità"
                className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">Flessibilita</p>
              </div>
            </div>
            
            {/* Fun group photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/foto/dopo-allenamento.jpg"
                alt="Il gruppo dopo l'allenamento"
                className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">Dopo l&apos;allenamento</p>
              </div>
            </div>
          </div>
 
        </div>
      </section>

      {/* Contatti e Social Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Inizia il Tuo Viaggio
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Contattaci per prenotare la tua prima lezione di prova gratuita o per qualsiasi informazione
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-xl mx-auto">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-400/90 text-secondary-foreground text-lg px-10 py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-3 h-6 w-6" />
                Scrivici su WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground text-lg px-10 py-8 rounded-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-3 h-6 w-6" />
                Seguici su Instagram
              </a>
            </Button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-2">
              {siteConfig.groupName}
            </h3>
            <p className="text-background/60 mb-6">
              {siteConfig.fullAddress}
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href={getInstagramLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-background/40 text-sm">
              © {new Date().getFullYear()} {siteConfig.groupName}. Tutti i diritti riservati.
            </p>
            <p className="text-background/20 text-xs mt-3">
              Sito realizzato da{" "}
              <a
                href="https://github.com/teresa-tanzi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background/60 transition-colors"
              >
                Teresa Tanzi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
