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
      faqEyebrow: "Before you ask",
      faqTitle: "General Q&A",
      faqIntro: "Quick answers to some of the questions we hear most often.",
      faqs: [
        {
          question: "How do I book a class?",
          answer: "Visit the Schedule page, choose the class you would like to attend, and complete your booking through Punchpass.",
        },
        {
          question: "What should I bring to class?",
          answer: "Please bring your own yoga mat. Grip socks or regular socks are also required for Mat Pilates and Reformer Pilates.",
        },
        {
          question: "What is the cancellation policy?",
          answer: "Mat classes require 12 hours’ notice. Reformer classes require 24 hours’ notice. Late cancellations or missed classes may use a class pass or incur the applicable fee.",
        },
        {
          question: "Which class is right for me?",
          answer: "Yoga Flow and Vinyasa focus on movement and breath, Sound Healing & Meditation supports relaxation, and Pilates builds strength, control, and alignment. Send us a message if you would like help choosing.",
        },
        {
          question: "How can I buy a class package?",
          answer: "Open the Pricing page to compare available Mat and Reformer options, then select Buy Packages to purchase securely through Punchpass.",
        },
        {
          question: "Where is Azu Studio located?",
          answer: "We are located at 5173 Côte-des-Neiges, suite 4, Montréal, Québec H3T 1Y1.",
        },
      ],
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
      faqEyebrow: "Avant de nous écrire",
      faqTitle: "Questions générales",
      faqIntro: "Des réponses rapides aux questions que nous recevons le plus souvent.",
      faqs: [
        {
          question: "Comment réserver un cours?",
          answer: "Consultez la page Horaire, choisissez le cours auquel vous souhaitez participer, puis terminez votre réservation sur Punchpass.",
        },
        {
          question: "Que dois-je apporter au cours?",
          answer: "Veuillez apporter votre propre tapis de yoga. Des chaussettes antidérapantes ou ordinaires sont également requises pour le Pilates au sol et sur Reformer.",
        },
        {
          question: "Quelle est la politique d’annulation?",
          answer: "Un préavis de 12 heures est requis pour les cours sur tapis et de 24 heures pour les cours sur Reformer. Une annulation tardive ou une absence peut utiliser un cours de votre forfait ou entraîner les frais applicables.",
        },
        {
          question: "Quel cours me convient le mieux?",
          answer: "Le Yoga Flow et le Vinyasa misent sur le mouvement et la respiration, la guérison sonore et la méditation favorisent la détente, et le Pilates développe la force, le contrôle et l’alignement. Écrivez-nous si vous souhaitez être conseillé.",
        },
        {
          question: "Comment acheter un forfait de cours?",
          answer: "Consultez la page Tarifs pour comparer les options de cours sur tapis et sur Reformer, puis sélectionnez Buy Packages pour effectuer votre achat sur Punchpass.",
        },
        {
          question: "Où se trouve Azu Studio?",
          answer: "Nous sommes situés au 5173, chemin de la Côte-des-Neiges, bureau 4, Montréal (Québec) H3T 1Y1.",
        },
      ],
    },
    footer: { rights: "Tous droits réservés." }
  }
} as const;
