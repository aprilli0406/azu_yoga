export type Locale = "en" | "fr";

export const dict = {
  en: {
    nav: { home: "Home", classes: "Classes", schedule: "Schedule", pricing: "Pricing", account: "My Account", contact: "Contact" },
    hero: { title: "Azu Yoga & Pilates", subtitle: "Move. Breathe. Restore." },
    classes: {
      heading: "our classes",
      sub: "Explore our range of yoga & Pilates classes designed to move, balance, and strengthen your body and mind.",
      flowTitle: "Yoga Flow",
      flowDesc:
        "A smooth, breath-centered practice combining strength, balance, and flexibility.",
      vinyasaTitle: "Vinyasa",
      vinyasaDesc:
        "Dynamic, breath-linked sequences that build heat and focus.",
      meditationTitle: "Meditation",
      meditationDesc:
        "Guided mindfulness and breath practices to reduce stress and cultivate calm.",
      matTitle: "Mat Pilates",
      matDesc:
        "Classical Pilates on the mat for core, posture, and control.",
      reformerTitle: "Reformer Pilates",
      reformerDesc:
        "Full-body, resistance-based training on the reformer machine.",
      coming: "Coming in December"
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Comments & Questions",
      intro: "Have a question about a class, your membership, or your experience at Azu Studio? Send us a note—we would love to hear from you.",
      emailUs: "Email us directly",
      formTitle: "Send us a message",
      formIntro: "Complete the form below and we’ll prepare an email for you to review and send.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      topicLabel: "What can we help with?",
      topicPlaceholder: "Choose a topic",
      topicGeneral: "General question",
      topicClasses: "Classes & schedule",
      topicMembership: "Membership & pricing",
      topicFeedback: "Comment or feedback",
      messageLabel: "Message",
      messagePlaceholder: "Tell us how we can help...",
      submit: "Prepare email",
      emailSubject: "Website message",
      mailNote: "Submitting opens your email app with this message ready to send.",
      mailReady: "Your email app should now be open. Review the message, then press Send.",
    },
    footer: { rights: "All rights reserved." }
  },
  fr: {
    nav: { home: "Accueil", classes: "Cours", schedule: "Horaire", pricing: "Tarifs", account: "Mon Compte", contact: "Contact" },
    hero: { title: "Azu Yoga & Pilates", subtitle: "Bouger. Respirer. Se restaurer." },
    classes: {
      heading: "nos cours",
      sub: "Découvrez notre gamme de cours de yoga et de Pilates conçus pour équilibrer et renforcer le corps et l’esprit.",
      flowTitle: "Yoga Flow",
      flowDesc:
        "Une pratique fluide centrée sur la respiration, alliant force, équilibre et souplesse.",
      vinyasaTitle: "Vinyasa",
      vinyasaDesc:
        "Des séquences dynamiques liées à la respiration qui font monter la chaleur et la concentration.",
      meditationTitle: "Méditation",
      meditationDesc:
        "Des pratiques guidées pour réduire le stress et cultiver le calme.",
      matTitle: "Pilates au sol",
      matDesc:
        "Pilates classique sur tapis pour le centre, la posture et le contrôle.",
      reformerTitle: "Pilates sur Reformer",
      reformerDesc:
        "Entraînement complet avec résistance sur reformer.",
      coming: "En décembre"
    },
    contact: {
      eyebrow: "Nous joindre",
      title: "Commentaires et questions",
      intro: "Vous avez une question sur un cours, votre abonnement ou votre expérience chez Azu Studio? Écrivez-nous, nous serons ravis de vous lire.",
      emailUs: "Écrivez-nous directement",
      formTitle: "Envoyez-nous un message",
      formIntro: "Remplissez le formulaire ci-dessous et nous préparerons un courriel que vous pourrez vérifier et envoyer.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Courriel",
      emailPlaceholder: "vous@exemple.com",
      topicLabel: "Comment pouvons-nous vous aider?",
      topicPlaceholder: "Choisissez un sujet",
      topicGeneral: "Question générale",
      topicClasses: "Cours et horaire",
      topicMembership: "Abonnement et tarifs",
      topicFeedback: "Commentaire ou suggestion",
      messageLabel: "Message",
      messagePlaceholder: "Dites-nous comment nous pouvons vous aider...",
      submit: "Préparer le courriel",
      emailSubject: "Message du site Web",
      mailNote: "Le formulaire ouvrira votre application de courriel avec le message prêt à envoyer.",
      mailReady: "Votre application de courriel devrait être ouverte. Vérifiez le message, puis appuyez sur Envoyer.",
    },
    footer: { rights: "Tous droits réservés." }
  }
} as const;

