import Link from "next/link";
import Image from "next/image";
// logo from public folder
import logo from "@/public/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={logo} alt="Logo" width={40} height={40} />
    </Link>
  );
}
