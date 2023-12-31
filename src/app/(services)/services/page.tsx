import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Stephen Leachman - Services',
  description: 'Looking for an enterprise-grade website/app developed with the latest technologies, tailored around your specific needs, and optimized for search engines? Come check out my freelance services and see what is passable.',
}

export default function page() {
  return (
    <div className="bg-custom-gray dark:bg-custom-dark-4 h-screen  grid place-content-center px-4 md:px-10 mb-[-100px]">
      <div className="flex justify-center ">
        <div className="container pb-[300px]">
          <h1 className="text-5xl md:text-7xl tracking-wide bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent pb-2 text-center">My Services</h1>
          <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mt-5 md:mt-10 lg:max-w-[700px] text-center">
            This page is currently in development. Stay tuned, estimated lunch date, February 2024
          </p>
        </div>
      </div>
    </div>
  )
}
