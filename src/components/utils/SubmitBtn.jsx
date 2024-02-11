import { Spinner } from "@material-tailwind/react";

export default function SubmitBtn(props) {
    if (props.submit === false) {
        return (
            <button
                onClick={props.onClick}
                type="submit"
                className={props.className}
            >
                {props.text}
            </button>
        );
    } else {
        return (
            <button
                disabled={true}
                className={`${props.className} cursor-not-allowed`}
            >
                <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                ></div>
                <div className=" flex gap-2 items-center">
                    <Spinner className="h-5 w-5 text-white" /> Processing...
                </div>
            </button>
        );
    }
}
