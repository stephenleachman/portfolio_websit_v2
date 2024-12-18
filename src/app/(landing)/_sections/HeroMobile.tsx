'use client'
import Image from "next/image"
import HeroImageMobile2 from '@/../public/images/mobal-hero-image.png';
import Logo from '@/../public/images/nav-logo.svg'
import { ButtonThemed } from "@/app/_global_components";
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link';
import { ThemeToggler } from "@/app/_global_components";
import { socialLinks } from "@/constants";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function HeroMobile() {
  return (
    <div className="min-h-[91vh] flex flex-col" >
      <div className="flex justify-center bg-background-4 w-full border-b-[3px] border-border">
        <div className=" container relative flex justify-center">
          <div className="self-end">
          <Image
              src={HeroImageMobile2}
              alt="hero image of Stephen Leachman"
              height={400}
              width={400}
              priority
              className="object-cover w-[280px] mt-10 b"
            >
            </Image>
            </div>
            <div className="absolute top-0 left-0 sm:hidden">
              <Image
              src={Logo}
              alt="hero Logo"
              height={80}
              width={80}
              priority
              className="bg-image-bg"
              >
              </Image>
            </div>
            <div className="absolute top-4 right-5 lg:hidden">
              <ThemeToggler />
            </div>
            <div className="flex flex-col justify-center sm:justify-end gap-8 absolute left-5 bottom-5 sm:hidden">
            {socialLinks.map((item) => (
              <Link 
                key={item.title}
                href={item.url}
                target="_blank"
              >
              <div className="py-2 text-xs grid justify-items-center text-link-text hover:text-primary-1 transition ease delay-100 self-center"> 
                {item.icon === 'FaLinkedin' && <FaLinkedin className="text-2xl mb-2"/>}
                {item.icon === 'BsTwitterX' && <BsTwitterX className="text-2xl mb-2"/>}
                {item.icon === 'FaYoutube' && <FaYoutube className="text-2xl mb-2"/>}
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
     <div className="flex-grow bg-background-3 w-full border-b-[3px] border-border relative pb-10">
        <div className="container px-4 md:px-10 z-10 relative">
          <div className="flex items-center mt-10">
            <h2 className="text-p-text text-3xl mb-3 tracking-wide font-semibold	">👋 Hey, I’m</h2>
            <div className="w-12 h-1 bg-gradient-to-b from-primary-1 to-primary-2 rounded ml-5 self-center mb-3"></div>
          </div>
          <h1 className="text-heading-text text-5xl tracking-wide font-medium leading-snug">Stephen Leachman</h1>
          <div className="flex flex-row">
            <h2 className="text-p-text text-3xl	my-5 font-semibold tracking-wider"> A </h2>
            <span className="bg-gradient-to-b from-primary-1 to-primary-2 bg-clip-text text-transparent my-5 text-3xl font-semibold tracking-wider ml-3">
              <TypeAnimation
                preRenderFirstString={true}
                cursor={true}
                sequence={[
                  'UI/UX Designer',
                  1000, 
                  'Web Developer',
                  1000,
                  'Freelancer',
                  1000,
                  'Business Owner',
                  1000,
                  'Trader',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* ------------------ Services Button ------------------ */}

          <div className="mb-5 mt-5">
            <ButtonThemed 
              color="gradiant" 
              size="lg"
              as={Link}
              radius="sm"
              href="/services"
              >
                My Services
            </ButtonThemed>
          </div>

        </div>
      </div>
    </div>
  )
}
