import Link from "next/link";
import { ProjectCard, ProjectModal } from "@/app/_global_components";


async function fetchProjects() {
  const options ={
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolio?populate=*`, 
    {
      next: {
        revalidate: 5,
      }
    }
    );
    const response = await res.json();
    return response;
  }catch (err) {
    console.error(err);
  }
}

async function RecentProjects() {

  const Projects = await fetchProjects(); 

  return (
    <div>
      <div className="flex justify-center">
        <div className="container grid z-10 py-16 md:py-24">
          <h2 className="text-center text-5xl	dark:text-gray-50 text-custom-dark-2 tracking-wide">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-5">
            <p className="">
              My Latest Projects
            </p>
            <div className="hidden sm:block">
              <Link
                href="/projects"
                className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold mb-5 mt-5 sm:mt-0 inline-block"
              >
                View All Projects
              </Link>
            </div>
          </div>
          <div className="grid grid-col md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Projects && Projects.data.map((project: any) => ( <ProjectCard key={project.id} project={project}/>))}
          </div>
          <div className="sm:hidden">
            <Link
              href="/projects"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold mt-5 inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
