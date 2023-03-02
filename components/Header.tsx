export default function Header() {
  return (
    <header class="p-4 flex items-center justify-center flex-col">
      <h1 class="text-9xl text-gray-300 font-bold">BLOG APP</h1>

      <nav class="flex justify-end gap-4 bg-gray-100 w-full p-4 rounded-md border">
        <a
          class="text-blue-600 block uppercase hover:text-blue-400"
          href="/"
        >
          HOME
        </a>
      </nav>
    </header>
  );
}
