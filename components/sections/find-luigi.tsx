import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

export function FindLuigiSection() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden" id="find-luigi">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.luigiofficialbrand.com/wp-content/uploads/2025/11/Luigi-BG_Pattern-Home-Banner.jpg"
          alt="Luigi Oil Pattern Background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-8">
            <MapPin className="h-8 w-8 text-gold" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Find & Shop Luigi
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Find Luigi products in 100+ California dispensaries.
          </p>
          <p className="text-base text-muted-foreground mb-10 leading-relaxed">
            Use Weedmaps to locate the nearest retailer or ask your favorite dispensary to carry Luigi Oil.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-gold text-background hover:bg-gold-light font-semibold px-8 py-6 text-base"
          >
            <Link href="/locations">
              Find a Retailer
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Dispensaries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">CA</div>
              <div className="text-sm text-muted-foreground">California</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">3</div>
              <div className="text-sm text-muted-foreground">Product Lines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
