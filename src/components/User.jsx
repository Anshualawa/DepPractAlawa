import { useParams } from "react-router-dom"

export default function User() {
    const { userid } = useParams()
    return (
        < div className="w-4/5 mx-auto text-center" >
            <button
                type="button"
                class="rounded bg-gray-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                {userid}
            </button>

        </div >
    )
}