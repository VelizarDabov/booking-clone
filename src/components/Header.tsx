"use client";
import {
  Bars3Icon,
  ChevronDownIcon,
  HomeIcon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Popover, Disclosure, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Test",
    description: "Make the test",
    href: "https://www.google.com/",
    icon: HomeIcon,
  },
  {
    name: "Test2",
    description: "Make the test2",
    href: "https://www.google.com/",
    icon: HomeIcon,
  },
  {
    name: "Test3",
    description: "Make the test3",
    href: "https://www.google.com/",
    icon: HomeIcon,
  },
  {
    name: "Test4",
    description: "Make the test4",
    href: "https://www.google.com/",
    icon: HomeIcon,
  },
];
const callsToAction = [
  { name: "Flights", href: "https://www.google.com/" },
  { name: "Car Rental", href: "https://www.google.com/" },
  { name: "Attractions", href: "https://www.google.com/" },
  { name: "Flights + Hotel", href: "https://www.google.com/" },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#183a995e]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 mr-5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              src="https://oneticketjustgo.com/wp-content/uploads/2019/10/logo-booking-com-png-booking-com-1020.png"
              alt="booking logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-label="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
              aria-hidden="true"
            >
              Stays
              <ChevronDownIcon className="h-5 w-5 text-white flex-none" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition easy-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex:none items-ceter justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <product.icon className="h-6 w-6 text-[#013B94] group:hover:text-blue-600" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={product.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {product.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {callsToAction.map((call) => (
           
              <a key = {call.name}
                href={call.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {call.name}
              </a>
           
          ))}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className=" text-sm font-semibold leading-6 text-white"
          >
            Log in{" "}
            <span aria-hidden="true">
              <ArrowRightIcon className="h-6 w-6 text-[#013B94] group:hover:text-blue-600" />
            </span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className='lg:hidden' open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
<div className="fixed inset-0 z-10"/>
<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
<div className="flex items-center justify-between">
<a href="#" className="-m-1.5 p-1.5">
<span className="sr-only"> Booking.com</span>
<img    src="https://oneticketjustgo.com/wp-content/uploads/2019/10/logo-booking-com-png-booking-com-1020.png" className="h-8 w-auto" alt=""/>
</a>
<button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(false)}>
  <span className="sr-only"> Close menu</span>
<XMarkIcon className="h-6 w-6" aria-hidden='true'/>
</button>
</div>


<div className="mt-6 flow-root">
<div className="-my-6 divide-y divide-gray-500/10">
  <div className="space-y-2 py-6">
    <Disclosure as='div' className='-mx-3'>
{({open}) => (
  <>
  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800'>
Stays
<ChevronDownIcon className={cn(
  open ? 'rotate-180': '', 'h-5 w-5 flex-none'
)} aria-hidden='true'/>
  </Disclosure.Button>
  <Disclosure.Panel className='mt-2 space-y-2'>
{products.map((item) => (
  <Disclosure.Button key={item.name} as="a" href={item.href} className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800'>
    {item.name}
  </Disclosure.Button>
))}
  </Disclosure.Panel>
  {callsToAction.map((item) => (
    <div className="space-y-2 ml-2">
  <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800 ">
<a href={item.href}>{item.name}</a>
    </div>
   
    </div>
  

  ))}
   <div className="py-6 ml-2">
    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800 ">
    Log In
    </a>
      
    </div>
  </>
) }
      </Disclosure>
  </div>
</div>
</div>
</Dialog.Panel>

      </Dialog>

    </header>
  );
};

export default Header;
