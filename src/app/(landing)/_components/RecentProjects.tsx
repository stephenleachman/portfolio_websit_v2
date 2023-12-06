import Link from "next/link";
import Image from 'next/image';
import ProjectImage from '@/../public/images/global_markets_respansive_illastration.png';
import { ButtonThemed } from '@/app/_global_components/ButtonThemed';
import Avatar from '@/../public/images/avatar.jpg';
import { FaRegCalendarAlt } from "react-icons/fa";

function RecentProjects() {
  return (
    <div id="card" className="rounded-xl max-w-full bg-white font-semibold dark:bg-custom-dark-3 overflow-hidden relative flex flex-col drop-shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2">
      <div id="cardHeader" className="max-h-[300px] flex items-center p-5 bg-gradient-to-br from-green-600 to-green-200 relative overflow-hidden border-b border-gray-100 dark:border-custom-dark-2">
        <Image 
        src={ProjectImage} 
        alt={""}
        height={300}
        width={500}
        className=""
        >
        </Image>
      </div>
    <div id="cardBody" className="p-5">
      <h3 className="text-2xl dark:text-custom-gray-1 text-custom-dark-2 font-semibold dark:font-normal text-center mb-5">Global Markets</h3>
      <p className="leading-relaxed dark:text-custom-dark-text text-center font-normal	">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac enim mi
      </p>
      <div className="flex justify-center mt-5">
        <ButtonThemed 
          color="gray" 
          size="lg"
          radius="sm"
          href="/services"
          >
          Project Details
        </ButtonThemed>
      </div>
    </div>
    <div id="cardFooter" className="p-5 border-t border-gray-200 dark:border-custom-dark-2 flex items-center">
      <div>
        <Image 
          src={Avatar} 
          alt={""}        
          height={50}
          width={50}    
          className="rounded-full"        
        >
        </Image>
      </div>
      <div className="ml-8 leading-relaxed dark:text-custom-dark-text text-custom-dark-2">
        <h5 className="text-lg">Stephen Leachman</h5>
        <div className="flex mt-1 text-xs items-center font-normal">
          <FaRegCalendarAlt />
          <h6 className="text-sm ml-2 mt-[2px]">March 23 2021</h6>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
