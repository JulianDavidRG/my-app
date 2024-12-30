<script>
    import './app.css';
  </script>

  <nav class="flex items-center justify-between bg-gray-800 p-4">
    <a href="http://localhost:5173/" class="text-white font-bold">Inicio</a>
    <ul class="flex space-x-4">
      <li><a href="/en" class="text-gray-300 hover:text-white">Diccionario</a></li>
      <li><a href="/razas" class="text-gray-300 hover:text-white">Razas de perros</a></li>
      <li><a href="/title" class="text-gray-300 hover:text-white">Libro</a></li>
      <li><a href="/exchange" class="text-gray-300 hover:text-white">Exchange</a></li>
      <li><a href="/chucknorris" class="text-gray-300 hover:text-white">Chucknorris</a></li>

    </ul>
  </nav>
  <slot/>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
  
      <a href="/en" class="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
        <div class="text-blue-500 text-6xl mb-4">
          📖
        </div>
        <h2 class="text-xl font-bold mb-2">Diccionario</h2>
        <p class="text-gray-600 text-center">Explora un diccionario interactivo.</p>
      </a>
  

      <a href="/razas" class="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
        <div class="text-yellow-500 text-6xl mb-4">
          🐕
        </div>
        <h2 class="text-xl font-bold mb-2">Razas de Perros</h2>
        <p class="text-gray-600 text-center">Descubre diferentes razas de perros.</p>
      </a>
  

      <a href="/title" class="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
        <div class="text-green-500 text-6xl mb-4">
          📚
        </div>
        <h2 class="text-xl font-bold mb-2">Libro</h2>
        <p class="text-gray-600 text-center">Encuentra tus libros.</p>
      </a>
    </div>
    
  </section>  

 