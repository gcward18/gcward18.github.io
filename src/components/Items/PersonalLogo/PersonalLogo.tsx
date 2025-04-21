import "./PersonalLogo.css"; // We'll define this next

export default function PersonalLogo() {
    return (
        <div className="mx-auto w-[24vw] h-auto md:mx-0">
            <img
                className="fixed top-4 left-1/2 -translate-x-1/2 w-[35vw] h-auto z-50 md:static md:translate-x-0"
                src="/georgeward_logo.png"
            />
        </div>
    );
}
