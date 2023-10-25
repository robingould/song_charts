import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  TrophyIcon,
  Bars3Icon,
  PresentationChartLineIcon,
  GlobeAmericasIcon,
  StarIcon,
  FireIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const chart_categories = [
  { name: 'Most Popular Albums', description: 'Top 50 albums sorted by average user rating', href: '#', icon: TrophyIcon },
  { name: 'Most Popular Artists', description: 'Top 50 albums sorted by average user rating', href: '#', icon: StarIcon },
  { name: 'Top Picks By Country', description: 'Find most popular music around the world', href: '#', icon: GlobeAmericasIcon },
]

const genre_categories = [
  { name: 'Most Popular Genres', description: 'Top 50 genres sorted by user rating', href: '#', icon: FireIcon },
  { name: 'Genre Graph', description: 'Find music by looking at genre similarities', href: '#', icon: PresentationChartLineIcon },
]

import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
<header className="h-fit relative bg-gradient-to-r from-gradA/10 to-gradB/10 outline" aria-label="header">
      <nav className="mx-auto flex max-w-full  items-center  p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <a href="#" className="">
        <span className="sr-only">songcharts</span>
        <img className="h-12 w-auto" src="logo.svg" alt="" aria-label="logo"></img>
        </a>
        <p className="text-2xl flex font-semibold leading-6 p-3 ml-3 text-black">
            songcharts
          </p>
        </div>
        <div className="absolute right-0 p-2.5 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-black p-2 rounded-lg hover:bg-red/50">
              Charts
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
                <div className="p-4">
                  {chart_categories.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-black border-2 border-white/0 hover:border-solid  hover:border-red/50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black group-hover:bg-white ">
                        <item.icon className="h-6 w-6 text-black group-hover:text-red" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-black">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-black p-2 rounded-lg hover:bg-blue/50">
              Genres
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black">
                <div className="p-4">
                  {genre_categories.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md  leading-6 border-2 border-white/0 hover:border-solid  hover:border-red/50 "
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-black group-hover:text-red" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-black">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className="text-md font-semibold leading-6 text-black p-2 rounded-lg hover:bg-yellow/50">
            What's New
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 gap-x-5 lg:justify-end">
          <a href="#" className="border-solid border-2 rounded-xl	border-black px-4 py-2 text-md font-semibold leading-6 text-black p-2 rounded-lg hover:bg-green">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <a href="#" className="border-solid border-2 border-red rounded-xl	bg-red px-4 py-2 text-md font-semibold leading-6 text-black p-2 rounded-lg hover:bg-white">
            Sign up <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">songcharts</span>
              <img
                className="h-12 w-auto"
                src="logo.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-black/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-black hover:bg-red"
                >
                  Charts
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-black hover:bg-green"
                >
                  Genres
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-black hover:bg-blue"
                >
                  What's New
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-yellow"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
        </header>
        
  )
}