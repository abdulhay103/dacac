import Link from "next/link";
export default function CtaBtn(props) {
    return (
        <Link
            href={props.href}
            className="px-6 py-3 lg:px-8 bg-gradient-to-br from-cyan-400 to-deep-orange-500 text-white hover:scale-105 rounded-full transition-all"
        >
            {props.text}
        </Link>
    );
}
