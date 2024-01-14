import { CircularProgress } from "@nextui-org/react";

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
            <button disabled={true} className={props.className}>
                <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                ></div>
                <div className=" flex gap-2 items-center">
                    <CircularProgress
                        classNames={{ svg: "text-white w-7 h-7" }}
                    />
                    Processing...
                </div>
            </button>
        );
    }
}
