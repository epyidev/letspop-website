<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ScrollIndicator from "../components/ScrollIndicator.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Let's PoP! - Digital Project Development Company | Game Development & Innovation",
  meta: [
    {
      name: "description",
      key: "description",
      content:
        "Let's PoP! - Digital project development company. Creator of Game Workers Area (5000+ members), Lyre Scripts, Metropia, VASTE & C.A.L.E.I. Innovation in gaming & technology.",
    },
    {
      key: "og:title",
      property: "og:title",
      content: "Let's PoP! - Digital Project Development Company",
    },
    {
      key: "og:description",
      property: "og:description",
      content:
        "Digital project development company. Creator of Game Workers Area, Lyre Scripts, Metropia, VASTE & C.A.L.E.I. Specializing in gaming and technology innovation.",
    },
    { key: "og:url", property: "og:url", content: "https://lets-pop.fr/" },
    { key: "og:image", property: "og:image", content: "/og-letspop.jpg" },
  ],
  link: [{ rel: "canonical", href: "https://lets-pop.fr/" }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Let's PoP!",
        alternateName: "Lets Pop",
        description: "Digital project development company specializing in innovative gaming and technology solutions",
        url: "https://lets-pop.fr",
        logo: "https://lets-pop.fr/logo_white.png",
        foundingDate: "2019",
        foundingLocation: {
          "@type": "Place",
          name: "Lyon, France"
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
          addressLocality: "Lyon"
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "epyi.contact@gmail.com",
          contactType: "customer service"
        },
        sameAs: [
          "https://discord.gg/VyRPheG6Es"
        ],
        identifier: {
          "@type": "PropertyValue",
          name: "SIRET",
          value: "92538636900019"
        },
        knowsAbout: [
          "Game Development",
          "Discord Bot Development",
          "Community Building", 
          "Digital Project Management",
          "Web Development",
          "Software Engineering",
          "Innovation Consulting",
          "Technology Solutions",
          "Automation Scripts",
          "Urban Tech Solutions",
          "AI Integration"
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Projects",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "SoftwareApplication",
                name: "Game Workers Area",
                description: "French-speaking community for FiveM development support"
              }
            },
            {
              "@type": "Offer", 
              itemOffered: {
                "@type": "SoftwareApplication",
                name: "Lyre Scripts",
                description: "High-quality FiveM scripts and solutions"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Game",
                name: "Metropia", 
                description: "Minecraft roleplay server with unique gameplay"
              }
            }
          ]
        }
      }),
    },
  ],
});
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-[calc(100vh)] px-4"
  >
    <HeroSection />
    <ScrollIndicator />
  </div>
  <ProjectsSection />
</template>
