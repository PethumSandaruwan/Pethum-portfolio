import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/PethumSandaruwan" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/pethum-sandaruwan-a94952272/" },
 // { icon: <FaTwitter />, path: "" },
 // { icon: <FaYoutube />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;