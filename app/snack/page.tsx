import Header from '../header';
import Footer from '../footer';
import { category, menu } from '../lib/placeholder-data';

export default function MenuPage() {
  const filteredMenu = menu.filter(
    (item) => item.category_id === category[0].id,
  );

  return (
    <main>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            OUR MENU
          </h2>
          <div className="mt-4 flex items-center justify-center">
            <div className="mx-2 w-32 border-2 border-black p-2 text-center">
              <a href="/snack">SNACK</a>
            </div>
            <div className="mx-2 w-32 border-2 border-black p-2 text-center">
              <a href="/beverages">BEVERAGES</a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
            {filteredMenu.map((menus) => (
              <div
                key={menus.menu_id}
                className="group relative border border-2 border-black p-2"
              >
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src={menus.image_url}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex flex-col items-center justify-center">
                  <div>
                    <h3 className="text-center text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {menus.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Rp {menus.price}
                  </p>
                  <div className="mt-2 flex items-center space-x-3">
                    <div className="mt-2 flex items-center space-x-5">
                      <button className="rounded border border-black px-3 py-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </button>
                      <button className="rounded border border-black px-3 py-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="px-3 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-cart3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
