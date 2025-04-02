<template>
    <motion.div :animate="{opacity: [1, 0], display: ['flex', 'none']}"
                :transition="{repeat: 0, delay: 8}"
                @animation-complete="loading = false"
                class="absolute z-[99] left-0 top-0 w-full h-full flex justify-center items-center">
      <hero-animation />
    </motion.div>
  <div v-if="!loading">
    <main class="container mx-auto px-4 py-8 pt-24">
      <!-- Section Hero -->
      <UCard variant="subtle" class="mb-12">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
                class="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <img src="/img.png" class="rounded-full opacity-80" alt=""/>
            </div>
          </div>
          <div class="md:w-2/3">
            <h2 class="text-3xl font-bold mb-4 light:text-blue-800">Camille GUIGNON</h2>
            <p class="text-lg mb-6 light:text-gray-600">
              Sérieuse, motivée et dynamique, je souhaite effectuer une reconversion professionnelle en tant
              qu'inséminatrice bovine.
            </p>
            <div class="flex flex-col sm:flex-row space-x-4">
              <UButton icon="i-lucide-rocket" variant="outline" color="secondary" size="lg"
                       class="text-neutral rounded-full hover:pointer" @click="navigateTo({path: '', hash: '#contact'})"
              >
                Me contacter
              </UButton>
              <UButton icon="i-lucide-rocket" variant="outline" color="secondary" size="lg"
                       class="text-neutral rounded-full" @click="navigateTo({path: '', hash: '#experiences'})"
              >
                Mon Parcours
              </UButton>
              <UButton icon="i-tabler-file-cv" color="secondary" size="lg" class="text-neutral rounded-full"
                       @click="generatePDF"
              >
                Mon CV
              </UButton>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Section Profil -->
      <UCard variant="subtle" class="mb-12">
        <h2 class="section-title">Profil</h2>
        <div class="card">
          <p class="text-lg dark:text-neutral-300 text-neutral-700 leading-relaxed">
            Après plusieurs années d'expérience dans différents domaines administratifs, j'ai décidé de me reconvertir
            professionnellement vers le secteur agricole, avec un intérêt particulier pour l'élevage bovin. Ma récente
            expérience en tant qu'Agent de pesée et de ramassage chez Touraine Conseil Elevage Laitier ainsi que mon
            stage en chèvrerie démontrent mon engagement dans cette nouvelle voie.
          </p>
        </div>
      </UCard>

      <!-- Section Compétences -->
      <UCard variant="subtle" class="mb-12">
        <h2 class="section-title">Compétences</h2>
        <div class="card">
          <h3 class="text-xl font-semibold mb-4 light:text-blue-700">Compétences professionnelles</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="competence in competences">
              <UBadge icon="i-material-symbols-check" color="secondary" class="rounded-full p-1 text-neutral-50"/>
              <span class="pl-2 dark:text-neutral-300 text-neutral-700">{{ competence }}</span>
            </div>
          </div>
          <div class="mt-8">
            <h3 class="text-xl font-semibold mb-4 light:text-blue-700">Langues</h3>
            <div class="flex space-x-8">
              <div>
                <span class="font-medium dark:text-neutral-300 text-neutral-700">Français</span>
                <div class="w-32 h-3 bg-gray-200 rounded-full mt-2">
                  <div class="h-full bg-blue-600 rounded-full" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <span class="font-medium dark:text-neutral-300 text-neutral-700">Anglais</span>
                <div class="w-32 h-3 bg-gray-200 rounded-full mt-2">
                  <div class="h-full bg-blue-600 rounded-full" style="width: 60%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Section Expériences -->
      <UCard variant="subtle" class="mb-12">
        <h2 class="section-title">Expériences professionnelles</h2>

        <timeline :items="experiences" />
      </UCard>

      <!-- Section Formation -->
      <UCard variant="subtle" class="mb-12">
        <h2 class="section-title">Formation</h2>

        <timeline :items="formations" />
      </UCard>

      <!-- Section Centres d'intérêt -->
      <UCard variant="subtle" class="mb-12">
        <h2 class="section-title">Centres d'intérêt</h2>

        <expandable-gallery :images="interets" />
      </UCard>

      <!-- Section Contact -->
      <UCard variant="subtle" class="mb-12">
        <h2 class="section-title">Contact</h2>

        <div class="card">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-6">Mes coordonnées</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">📱</span>
                  </div>
                  <p class="text-neutral-500">06 13 52 00 52</p>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">✉️</span>
                  </div>
                  <p class="text-neutral-500">camille.guignon37@gmail.com</p>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">🏠</span>
                  </div>
                  <p class="text-neutral-500">Rue du Merlot 37320 PERNAY</p>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">💼</span>
                  </div>
                  <a href="https://www.linkedin.com/in/camille-guignon-160b571a7" target="_blank"
                     class="text-neutral-500 hover:text-neutral-200 font-medium">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6">Me contacter</h3>
              <form class="space-y-4">
                <div>
                  <label for="name" class="block mb-1 text-gray-600">Nom</label>
                  <input type="text" id="name"
                         class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label for="email" class="block mb-1 text-gray-600">Email</label>
                  <input type="email" id="email"
                         class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label for="message" class="block mb-1 text-gray-600">Message</label>
                  <textarea id="message" rows="4"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit"
                        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </UCard>
    </main>

    <footer class="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h2 class="text-xl font-bold mb-2">Camille GUIGNON</h2>
          </div>
          <div>
            <p>© 2025 Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';
import HeroAnimation from '~/components/animation/hero-animation.vue';
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue';
import ExpandableGallery from '~/components/gallery/ExpandableGallery.vue';

const loading = ref(true);

const competences = ref([
  `Initiation à la gestion d'un troupeau`,
  `Observation et apprentissage rapide`,
  `Polyvalence`,
  `Motivation`,
  `Autonomie`,
  `Organisation`,
  `Ponctualité`,
]);

const experiences = ref([
  {
    date: `01/2025 - Aujourd'hui`,
    post: `Agent de pesée / Agent de ramassage`,
    entreprise: `Touraine Conseil Elevage Laitier, Chambray`,
    tasks: [
      `Collecte d’échantillons en élevage et suivi des protocoles de contrôle laitier.`,
      `Pesée des échantillons et enregistrement des données.`,
      `Tournée de ramassage selon un circuit défini, transport et livraison au dépôt`,
    ]
  },
  {
    date: `11/2024`,
    post: `Stage - Ouvrière agricole - Chèvrerie`,
    entreprise: `Les cabris de Manu et Elo, Neuillé`,
    tasks: [
      `Participation à la gestion du troupeau (soins aux chèvres et chevreaux)`,
      `Traite et entretien des équipements.`,
      `Préparation et distribution des rations alimentaires adaptées.`,
      `Entretien de l’exploitation et suivi des mesures d’hygiène`,
      `Fromagerie : Préparation et emballage des fromages.`,
    ]
  },
  {
    date: `01/2022 - 10/2022`,
    post: `Agent de recouvrement`,
    entreprise: `IQERA, Tours`,
    tasks: [
      `Gestion des appels entrants et sortants des débiteurs, prise de paiements.`,
      `Suivi administratif des dossiers de réclamations et litiges`,
    ]
  },
  {
    date: `09/2021 - 11/2021`,
    post: `Secrétariat vie scolaire - Accueil`,
    entreprise: `LEGTA TOURS, Fondettes`,
    tasks: [
      `Accueil téléphonique et physique du public.`,
      `Prise en charge des dossiers de demandes de bourses`,
    ]
  },
  {
    date: `05/2021 - 08/2021`,
    post: `Chargé de recrutement – Assistante administrative`,
    entreprise: `WellJob, Tours`,
    tasks: [
      `Sourcing des candidats et saisie des informations pour les contrats.`,
      `Appels téléphoniques avec les candidats et les entreprises.`,
      `Entretiens pour les recrutements.`,
    ]
  },
  {
    date: `07/2020 - 05/2021`,
    post: `Agent de maîtrise - Planification`,
    entreprise: `Econom, Tours`,
    tasks: [
      `Prise en compte des demandes d’interventions des clients.`,
      `Suivi des demandes jusqu’à la clôture des dossiers et gestion des incidents.`,
    ]
  }
]);

const formations = ref([
  {
    date: `2020`,
    post: `BTS Support à l'Action Managériale`,
    entreprise: `Lycée CHOISEUL, Tours`,
  },
  {
    date: `2018`,
    post: `BAC STMG Ressources Humaines`,
    entreprise: `Lycée CHOISEUL, Tours`,
  }
]);

const interets = ref([
  {image: `https://images.unsplash.com/photo-1454179083322-198bb4daae41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, title: 'Animaux'},
  {image: `https://images.unsplash.com/photo-1678737259986-36e88eaa587b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, title: 'Equitation'},
  {image: `https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, title: 'Nature'},
  {image: `https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, title: 'Lecture'}
])

const generatePDF = async () => {
  window.open('/CV_Camille_2025.pdf')
}
</script>