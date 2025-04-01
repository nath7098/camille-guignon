<template>
  <div>
    <header class="bg-white shadow-md fixed w-full z-10">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-800">CG</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">Accueil</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8 pt-24">
      <section class="card">
        <h1 class="section-title">Mentions Légales</h1>
        <div class="space-y-4 text-gray-700">
          <div>
            <h2 class="text-xl font-semibold text-blue-700 mb-2">Identité</h2>
            <p>Camille GUIGNON</p>
            <p>Adresse : Rue du Merlot 37320 PERNAY</p>
            <p>Téléphone : 06 13 52 00 52</p>
            <p>Email : camille.guignon37@gmail.com</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-blue-700 mb-2">Hébergement</h2>
            <p>Ce site est hébergé par [Nom de l'hébergeur]</p>
            <p>Adresse : [Adresse de l'hébergeur]</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-blue-700 mb-2">Protection des données personnelles</h2>
            <p>Les informations recueillies sur le formulaire de contact sont enregistrées dans un fichier informatisé par Camille GUIGNON pour permettre de répondre à vos demandes.</p>
            <p>Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : camille.guignon37@gmail.com</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-blue-700 mb-2">Propriété intellectuelle</h2>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
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