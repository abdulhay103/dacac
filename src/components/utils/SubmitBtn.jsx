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
                <div className=" flex gap-2 items-center">Processing...</div>
            </button>
        );
    }
}
