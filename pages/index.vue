<template>
  <motion.div :animate="{opacity: [1, 0], display: ['flex', 'none']}"
              :transition="{repeat: 0, delay: 8}"
              @animation-complete="loading = false"
              class="absolute z-[99] left-0 top-0 w-full h-full flex justify-center items-center">
    <hero-animation />
  </motion.div>
  <div v-if="!loading">
    <header class="bg-white shadow-md fixed w-full z-10">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink :to="{path: ''}" class="text-blue-600 hover:text-blue-800 font-medium">
          <h1 class="text-2xl font-bold text-blue-800">CG</h1>
        </NuxtLink>
        <nav>
          <ul class="flex space-x-6">
            <li><NuxtLink :to="{path: '', hash: '#profil'}" class="text-blue-600 hover:text-blue-800 font-medium">Profil</NuxtLink></li>
            <li><NuxtLink :to="{path: '', hash: '#competences'}" class="text-blue-600 hover:text-blue-800 font-medium">Compétences</NuxtLink></li>
            <li><NuxtLink :to="{path: '', hash: '#experiences'}" class="text-blue-600 hover:text-blue-800 font-medium">Expériences</NuxtLink></li>
            <li><NuxtLink :to="{path: '', hash: '#formation'}" class="text-blue-600 hover:text-blue-800 font-medium">Formation</NuxtLink></li>
            <li><NuxtLink :to="{path: '', hash: '#contact'}" class="text-blue-600 hover:text-blue-800 font-medium">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8 pt-24">
      <!-- Section Hero -->
      <section class="card mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div class="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <img src="/img.png" class="rounded-full opacity-80" alt="" />
            </div>
          </div>
          <div class="md:w-2/3">
            <h2 class="text-3xl font-bold mb-4 text-blue-800">Camille GUIGNON</h2>
            <p class="text-xl mb-4 text-blue-700 font-light">
              En reconversion professionnelle vers l'insémination bovine
            </p>
            <p class="text-lg mb-6 text-gray-600">
              Sérieuse, motivée et dynamique, je souhaite effectuer une reconversion professionnelle en tant qu'inséminatrice bovine.
            </p>
            <div class="flex space-x-4">
              <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-md">
                Me contacter
              </a>
              <a href="#experiences" class="border-2 border-blue-400 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors font-medium">
                Mon parcours
              </a>
              <cv-pdf-button />
            </div>
          </div>
        </div>
      </section>

      <!-- Section Profil -->
      <section id="profil" class="mb-12">
        <h2 class="section-title">Profil</h2>
        <div class="card">
          <p class="text-lg text-gray-700 leading-relaxed">
            Après plusieurs années d'expérience dans différents domaines administratifs, j'ai décidé de me reconvertir professionnellement vers le secteur agricole, avec un intérêt particulier pour l'élevage bovin. Ma récente expérience en tant qu'Agent de pesée et de ramassage chez Touraine Conseil Elevage Laitier ainsi que mon stage en chèvrerie démontrent mon engagement dans cette nouvelle voie.
          </p>
        </div>
      </section>

      <!-- Section Compétences -->
      <section id="competences" class="mb-12">
        <h2 class="section-title">Compétences</h2>
        <div class="card">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-blue-700">Compétences professionnelles</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Initiation à la gestion d'un troupeau</span>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Observation et apprentissage rapide</span>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Polyvalence</span>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Motivation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-blue-700">Qualités personnelles</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Autonomie</span>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Organisation</span>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Ponctualité</span>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                  <span class="text-gray-700">Adaptabilité</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8">
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Langues</h3>
            <div class="flex space-x-8">
              <div>
                <span class="font-medium text-gray-700">Français</span>
                <div class="w-32 h-3 bg-gray-200 rounded-full mt-2">
                  <div class="h-full bg-blue-600 rounded-full" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <span class="font-medium text-gray-700">Anglais</span>
                <div class="w-32 h-3 bg-gray-200 rounded-full mt-2">
                  <div class="h-full bg-blue-600 rounded-full" style="width: 60%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Expériences -->
      <section id="experiences" class="mb-12">
        <h2 class="section-title">Expériences professionnelles</h2>

        <div class="card">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0">
              <h3 class="text-lg font-semibold text-blue-700">Agent de pesée / Agent de ramassage</h3>
              <p class="text-gray-500">Touraine Conseil Elevage Laitier</p>
              <p class="text-gray-500">Chambray</p>
              <div class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mt-2">
                01/2025 – Aujourd'hui
              </div>
            </div>
            <div class="md:w-2/3">
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Collecte d'échantillons en élevage et suivi des protocoles de contrôle laitier</li>
                <li>Pesée des échantillons et enregistrement des données</li>
                <li>Tournée de ramassage selon un circuit défini, transport et livraison au dépôt</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0">
              <h3 class="text-lg font-semibold text-blue-700">Stage – Ouvrière agricole - Chèvrerie</h3>
              <p class="text-gray-500">Les cabris de Manu et Elo</p>
              <p class="text-gray-500">Neuillé</p>
              <div class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mt-2">
                11/2024
              </div>
            </div>
            <div class="md:w-2/3">
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Participation à la gestion du troupeau (soins aux chèvres et chevreaux)</li>
                <li>Traite et entretien des équipements</li>
                <li>Préparation et distribution des rations alimentaires adaptées</li>
                <li>Entretien de l'exploitation et suivi des mesures d'hygiène</li>
                <li>Fromagerie : Préparation et emballage des fromages</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0">
              <h3 class="text-lg font-semibold text-blue-700">Agent de recouvrement</h3>
              <p class="text-gray-500">IQERA</p>
              <p class="text-gray-500">Tours</p>
              <div class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mt-2">
                01/2022 – 10/2022
              </div>
            </div>
            <div class="md:w-2/3">
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Gestion des appels entrants et sortants des débiteurs, prise de paiements</li>
                <li>Suivi administratif des dossiers de réclamations et litiges</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0">
              <h3 class="text-lg font-semibold text-blue-700">Secrétariat vie scolaire - Accueil</h3>
              <p class="text-gray-500">LEGTA TOURS</p>
              <p class="text-gray-500">Fondettes</p>
              <div class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mt-2">
                09/2021 – 11/2021
              </div>
            </div>
            <div class="md:w-2/3">
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Accueil téléphonique et physique du public</li>
                <li>Prise en charge des dossiers de demandes de bourses</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0">
              <h3 class="text-lg font-semibold text-blue-700">Chargé de recrutement – Assistante administrative</h3>
              <p class="text-gray-500">WellJob</p>
              <p class="text-gray-500">Tours</p>
              <div class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mt-2">
                05/2021 – 08/2021
              </div>
            </div>
            <div class="md:w-2/3">
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Sourcing des candidats et saisie des informations pour les contrats</li>
                <li>Appels téléphoniques avec les candidats et les entreprises</li>
                <li>Entretiens pour les recrutements</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0">
              <h3 class="text-lg font-semibold text-blue-700">Agent de maîtrise - Planification</h3>
              <p class="text-gray-500">Econom</p>
              <p class="text-gray-500">Tours</p>
              <div class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mt-2">
                07/2020 – 05/2021
              </div>
            </div>
            <div class="md:w-2/3">
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Prise en compte des demandes d'interventions des clients</li>
                <li>Suivi des demandes jusqu'à la clôture des dossiers et gestion des incidents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Formation -->
      <section id="formation" class="mb-12">
        <h2 class="section-title">Formation</h2>

        <div class="card bg-gradient-to-r from-blue-50 to-indigo-50">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/4 mb-4 md:mb-0 flex justify-center">
              <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                <span class="text-2xl text-white font-bold">2020</span>
              </div>
            </div>
            <div class="md:w-3/4">
              <h3 class="text-xl font-semibold text-blue-700">BTS Support à l'Action Managériale</h3>
              <p class="text-gray-700">Lycée CHOISEUL, Tours</p>
            </div>
          </div>
        </div>

        <div class="card bg-gradient-to-r from-blue-50 to-indigo-50">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/4 mb-4 md:mb-0 flex justify-center">
              <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                <span class="text-2xl text-white font-bold">2018</span>
              </div>
            </div>
            <div class="md:w-3/4">
              <h3 class="text-xl font-semibold text-blue-700">BAC STMG Ressources Humaines</h3>
              <p class="text-gray-700">Lycée CHOISEUL, Tours</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Centres d'intérêt -->
      <section id="interets" class="mb-12">
        <h2 class="section-title">Centres d'intérêt</h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="card flex flex-col items-center text-center p-6 bg-white">
            <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span class="text-2xl">🐄</span>
            </div>
            <h3 class="font-semibold text-blue-700">Animaux</h3>
          </div>

          <div class="card flex flex-col items-center text-center p-6 bg-white">
            <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span class="text-2xl">🐎</span>
            </div>
            <h3 class="font-semibold text-blue-700">Équitation</h3>
          </div>

          <div class="card flex flex-col items-center text-center p-6 bg-white">
            <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span class="text-2xl">🌳</span>
            </div>
            <h3 class="font-semibold text-blue-700">Nature</h3>
          </div>

          <div class="card flex flex-col items-center text-center p-6 bg-white">
            <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span class="text-2xl">📚</span>
            </div>
            <h3 class="font-semibold text-blue-700">Lecture</h3>
          </div>
        </div>
      </section>

      <!-- Section Contact -->
      <section id="contact" class="mb-12">
        <h2 class="section-title">Contact</h2>

        <div class="card">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-6 text-blue-700">Mes coordonnées</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">📱</span>
                  </div>
                  <p class="text-gray-700">06 13 52 00 52</p>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">✉️</span>
                  </div>
                  <p class="text-gray-700">camille.guignon37@gmail.com</p>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">🏠</span>
                  </div>
                  <p class="text-gray-700">Rue du Merlot 37320 PERNAY</p>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <span class="text-blue-600">💼</span>
                  </div>
                  <a href="https://www.linkedin.com/in/camille-guignon-160b571a7" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6 text-blue-700">Me contacter</h3>
              <form class="space-y-4">
                <div>
                  <label for="name" class="block mb-1 text-gray-700">Nom</label>
                  <input type="text" id="name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label for="email" class="block mb-1 text-gray-700">Email</label>
                  <input type="email" id="email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label for="message" class="block mb-1 text-gray-700">Message</label>
                  <textarea id="message" rows="4" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h2 class="text-xl font-bold mb-2">Camille GUIGNON</h2>
            <p>En reconversion professionnelle</p>
          </div>
          <div>
            <p>© 2025 Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {motion} from 'motion-v';
import HeroAnimation from '~/components/animation/hero-animation.vue';

const loading = ref(true);
</script>