import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { dropMenuPages, navLinks } from "@/lib/staticData";

const Navbar = () => {
  return (
    <div className="w-full h-[4.5rem] sticky top-0 bg-background z-50">
      <div className="max-w-7xl mx-auto h-full w-full flex items-center justify-between px-5 xl:p-0">
        <div className="flex items-center gap-3">
          <Menu
            strokeWidth={1.8}
            className="size-5y cursor-pointer md:hidden"
          />
          <Link to="/">
            <h1 className="font-integral text-xl md:text-3xl font-bold mb-1">
              SHOP.ER
            </h1>
          </Link>
        </div>
        <div className="items-center hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid p-4 grid-cols-2 w-[30rem] lg:w-[35rem] gap-2">
                    {dropMenuPages.map((item) => (
                      <Link to="/">
                        <div className="text-sm hover:bg-card rounded-md p-3 flex flex-col">
                          <p className="font-medium">{item.title}</p>
                          <p className=" text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {navLinks.map((item) => (
            <Link to={item.link}>
              <Button variant={"ghost"}>{item.title}</Button>
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          <div title="Search">
            <Search
              strokeWidth={1.8}
              className="size-5 md:size-[1.4rem] cursor-pointer"
            />
          </div>
          <div title="Go to card">
            <ShoppingCart
              strokeWidth={1.8}
              className="size-5 md:size-[1.4rem]  cursor-pointer"
            />
          </div>
          <User
            strokeWidth={1.8}
            className="size-5 md:size-[1.4rem]  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
