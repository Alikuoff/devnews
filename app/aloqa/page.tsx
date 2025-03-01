import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react"
import { sendMessage } from "@/app/actions"

const contactInfo = {
  email: "info@devnews.uz",
  phone: "+998 90 123 45 67",
  address: "Toshkent shahri, Yunusobod tumani, IT Park",
  socialMedia: [
    {
      name: "Twitter",
      url: "https://twitter.com/devnews",
      icon: Twitter,
    },
    {
      name: "GitHub",
      url: "https://github.com/devnews",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/devnews",
      icon: Linkedin,
    },
  ],
}

const faqItems = [
  {
    question: "DevNews ga maqola yozib berish mumkinmi?",
    answer:
      "Ha, albatta! Siz dasturlash, texnologiyalar va IT sohasiga oid maqolalar yozib yuborishingiz mumkin. Buning uchun ro'yxatdan o'tib, maqola yuborish bo'limiga o'ting.",
  },
  {
    question: "Reklama joylashtirish shartlari qanday?",
    answer:
      "Reklama joylashtirish uchun bizning reklama bo'limimiz bilan bog'laning. Biz turli xil reklama paketlarini taklif qilamiz.",
  },
  {
    question: "Qanday qilib hamkorlik qilish mumkin?",
    answer:
      "Biz bilan hamkorlik qilish uchun hamkorlik taklifingizni yuborishingiz mumkin. Biz barcha takliflarni ko'rib chiqamiz va sizga javob beramiz.",
  },
  {
    question: "Texnik muammolar haqida qanday xabar berish mumkin?",
    answer:
      "Saytda uchragan texnik muammolar haqida ushbu forma orqali yoki support@devnews.uz elektron pochtasiga xabar yuborishingiz mumkin.",
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact form */}
        <Card>
          <CardHeader>
            <CardTitle>Biz bilan bog'laning</CardTitle>
            <CardDescription>Savolingiz yoki taklifingiz bo'lsa, quyidagi forma orqali yuboring</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={sendMessage} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ismingiz</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Familiyangiz</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Mavzu</Label>
                <Input id="subject" name="subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Xabar</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Xabaringizni yozing..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Yuborish
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact info */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Kontakt ma'lumotlar</CardTitle>
              <CardDescription>Biz bilan quyidagi manzil va raqamlar orqali bog'lanishingiz mumkin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-4 pt-4">
                {contactInfo.socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3468847106255!2d69.33351531537373!3d41.34002997926898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQoNCw0LTQuNC-0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGC!5e0!3m2!1sru!2s!4v1629890732095!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Ko'p so'raladigan savollar</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Newsletter subscription */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Yangiliklardan xabardor bo'ling</CardTitle>
            <CardDescription>
              Eng so'nggi yangiliklar va maqolalardan xabardor bo'lish uchun obuna bo'ling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex gap-4">
              <Input type="email" placeholder="Email manzilingizni kiriting" className="max-w-sm" />
              <Button type="submit">Obuna bo'lish</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

