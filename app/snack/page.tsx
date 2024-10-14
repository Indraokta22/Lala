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
              <div key={menus.menu_id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src={menus.image_url}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {menus.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${menus.price}
                  </p>
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
