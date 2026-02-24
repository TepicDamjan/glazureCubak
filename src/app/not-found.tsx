import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center animate-in fade-in zoom-in duration-700">
            <h1 className="text-8xl md:text-9xl font-bold text-spaceIndigo mb-4 bg-clip-text">
                404
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-granite mb-6">
                Stranica nije pronađena
            </h2>
            <p className="text-lg md:text-xl text-granite max-w-lg mx-auto mb-10 leading-relaxed opacity-80">
                Izgleda da ste zalutali. Stranica koju tražite ne postoji, premeštena je ili je privremeno nedostupna.
            </p>

            <Link
                href="/"
                className="px-8 py-4 bg-bronze text-mintGrand font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-4 ring-transparent hover:ring-bronze/30"
            >
                Vrati se na početnu
            </Link>
        </div>
    );
}
