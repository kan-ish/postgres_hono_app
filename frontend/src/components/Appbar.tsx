import { Avatar } from "./Avatar";

export const Appbar = () => {
    return(
        <div className="border-b flex justify-between px-10 py-4">
            <div className="flex flex-col justify-center">
                Medium Rare
            </div>

            <div>
                <Avatar name="Kanishk Singh" size="big" />
            </div>
        </div>
    )
}