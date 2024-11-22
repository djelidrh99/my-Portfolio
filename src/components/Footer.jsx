
export default function Footer() {
      return (
    <footer className="flex justify-between py-14 gap-10">
        <ul className="links flex flex-wrap justify-center items-center gap-5">
        <li className="text-gray-500 transition hover:text-gray-600 hover:scale-105 cursor-pointer">About</li>
        <li className="text-gray-500 transition hover:text-gray-600 hover:scale-105 cursor-pointer">Skills</li>
        <li className="text-gray-500 transition hover:text-gray-600 hover:scale-105 cursor-pointer">Projects</li>
        <li className="text-gray-500 transition hover:text-gray-600 hover:scale-105 cursor-pointer">Contact</li>
        </ul>
        <div className="text-gray-500">
        © 2024 Spencer Sharp. All rights reserved.
        </div>
    </footer>
    )
}
