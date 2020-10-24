import React from "react";

function Footer() { 
    return (
            <footer className="w-full p-1 my-auto bg-blue-800 h-10 text-center text-white">
                © Copyright { (new Date()).getFullYear() } <a className="text-gray-400 font-semibold hover:text-blue-400" href="https://github.com/MarkKelly00">Mark Kelly</a>
                
            </footer>
    );
}


export default Footer;