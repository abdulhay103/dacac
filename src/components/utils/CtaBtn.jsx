import Link from "next/link";
export default function CtaBtn(props) {
    return (
        <Link
            href={props.href}
            className={`${props.className} px-10 py-3 lg:py-4 bg-deep-orange-400 rounded-full font-semibold text-white uppercase border-2 border-deep-orange-400 hover:bg-white hover:text-deep-orange-500 transition-all duration-300`}
        >
            {props.text}
        </Link>
    );
}
