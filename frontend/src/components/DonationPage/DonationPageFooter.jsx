import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";


const DonationPageFooter = () => {
  return (
    <div className="pt-8">
        {/* Socials */}
            <ul className="flex justify-center">
                <li className="md:hover:animate-bounce px-2 py-4">
                    <a href="">
                        <FaFacebook className="text-gray-900 size-14 rounded-full shadow-sm hover:shadow-lg hover:shadow-gray-800 hover:text-blue-900 transition-colors duration-300" />
                    </a>
                </li>
                <li className="md:hover:animate-bounce px-2 py-4">
                    <a href="">
                        <FaInstagram className="size-14 p-2 rounded-full text-white  bg-gray-900 hover:shadow-lg hover:shadow-gray-800 hover:bg-rose-600 transition-colors duration-300" />
                    </a>
                </li>
                <li className="md:hover:animate-bounce px-2 py-4">
                    <a href="">
                        <FaXTwitter className="size-14 p-2 rounded-full text-white  bg-gray-900 hover:shadow-lg hover:shadow-gray-800 hover:bg-black transition-colors duration-300" />
                    </a>
                </li>
                <li className="md:hover:animate-bounce px-2 py-4">
                    <a href="https://www.linkedin.com/company/rural-exodus-programme">
                        <RiLinkedinFill className="size-14 p-2 rounded-full text-white  bg-gray-900 hover:shadow-lg hover:shadow-gray-800 hover:bg-blue-700  transition-colors duration-300" />
                    </a>
                </li>
                <li className="md:hover:animate-bounce px-2 py-4">
                    <a href="https://youtube.com/@ruralexodusprogram?si=4L9mr9GKYw8vCrvH">
                        <AiOutlineYoutube className="size-14 p-2 rounded-full text-white  bg-gray-900 hover:shadow-lg hover:shadow-gray-800 hover:bg-red-600 transition-colors duration-300" />
                    </a>
                </li>
            </ul>
        <div className="container mx-auto text-xs text-center text-gray-900 p-2 border-t-2 border-gray-900 ">
            &copy; {new Date().getFullYear()} Rural Exodus. All Rights Reserved.
        </div>
    </div>
  )
}

export default DonationPageFooter