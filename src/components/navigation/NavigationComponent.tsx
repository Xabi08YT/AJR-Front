import DesktopLayout from "./DesktopLayout.tsx";

export default function NavigationComponent() {
    return (
        <>
            <div className={"hidden md:block"}>
                <DesktopLayout />
            </div>
            <div className={"block md:hidden"}>

            </div>
        </>
    );
}